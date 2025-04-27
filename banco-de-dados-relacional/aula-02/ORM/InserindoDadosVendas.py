import pandas as pd

endereco = "C:\\Users\\bruno\\OneDrive\\Documentos\\GitHub\\pos-puc\\banco-de-dados-relacional\\aula-02\\Recursos\\"

vendedor = pd.read_csv(endereco + "vendedor.csv", sep=";")

tbVendedor = pd.DataFrame(vendedor)

import sqlalchemy as sa

engine = sa.create_engine("sqlite:///BD/vendas.db")

import sqlalchemy.orm as orm
sessao = orm.sessionmaker(bind=engine)
sessao = sessao()

import vendas as vd

#tbVendedor
for i in range(len(tbVendedor)):
    dados_vendedor = vd.vendedor(
                                registro_vendedor = int(tbVendedor['registro_vendedor'][i]),
                                cpf = tbVendedor["cpf"][i],
                                nome = tbVendedor["nome"][i],
                                genero = tbVendedor["genero"][i],
                                email = tbVendedor["email"][i]
                                )
    
    vendedor_existente = sessao.query(vd.vendedor).filter_by(registro_vendedor=dados_vendedor.registro_vendedor).first()

    if vendedor_existente:
        print(f"Vendedor com registro {dados_vendedor.registro_vendedor} já existe!")
    else:
        try:
            # Se não existir, insere o novo vendedor
            sessao.add(dados_vendedor)
            sessao.commit()
            print(f"Vendedor {dados_vendedor.nome} inserido com sucesso!")
        except ValueError as e:
            # Em caso de erro de integridade (duplicação), faz rollback da transação
            sessao.rollback()
            print(f"Erro ao inserir vendedor {dados_vendedor.nome}: {str(e)}")

print("Dados inseridos na tbVendedor")

# tbProduto
produto = pd.read_excel(endereco + "produto.xlsx")
tbProduto = pd.DataFrame(produto)

conn = engine.connect()

# Criar uma instância de MetaData sem o 'bind'
metadata = sa.MetaData()

# Converter os dados do DataFrame para um formato de lista de dicionários
DadosProduto = tbProduto.to_dict(orient="records")

# Carregar a tabela com o 'autoload_with' no SQLAlchemy 1.4 ou superior
tabela_produto = sa.Table(vd.produto.__tablename__, metadata, autoload_with=engine)

try:
    with sessao.begin():
        for dado in DadosProduto:
            insert_stmt = tabela_produto.insert().values(dado)
            conn.execute(insert_stmt)
    print("Dados inseridos na tbProduto")
except Exception as e:
    print(f"Ocorreu um erro: {e}")
finally:
    sessao.close_all()