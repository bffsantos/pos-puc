import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///BD/ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

RankDP = pd.DataFrame(
            sessao.query(
                oc.dp.nome.label("DP"),
                sa.func.sum(oc.ocorrencias.qtde).label("Total")
            ).join(
                oc.ocorrencias,
                oc.ocorrencias.codDP == oc.dp.codDP
            ).join(
                oc.municipio,
                oc.ocorrencias.codIBGE == oc.municipio.codIBGE
            ).where(
                oc.municipio.regiao == "Interior",
                sa.or_(oc.ocorrencias.ocorrencia == "roubo_veiculo", oc.ocorrencias.ocorrencia == "furto_veiculos")
            ).group_by(
                oc.dp.nome
            ).order_by(
                sa.func.sum(oc.ocorrencias.qtde).label("Total").desc()
            ).all()
        )

print(RankDP)