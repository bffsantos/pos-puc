import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = sa.create_engine("sqlite:///BD/ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

RankMuni = pd.DataFrame(
                sessao.query(
                    oc.municipio.municipio.label("Município"),
                    sa.func.sum(oc.ocorrencias.qtde).label("Total")
                ).join(
                    oc.ocorrencias,
                    oc.ocorrencias.codIBGE == oc.municipio.codIBGE
                ).where(
                    oc.ocorrencias.ocorrencia == "roubo_veiculo"
                ).group_by(
                    oc.municipio.municipio
                ).order_by(
                    sa.func.sum(oc.ocorrencias.qtde).desc()
                ).all()
            )

print(RankMuni)