using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aulaGamaDBProduto.Dao;

namespace aulaGamaDBProduto.Test
{
    internal class AlimentoTeste
    {
        public static alimento addAlimento(alimento lProduto) => AlimentoDao.Adicionar(lProduto);
        public static alimento ConsultaAlimentoId(int id) => AlimentoDao.Consultar(id);
        public static List<alimento> ConsultarAllAlimento() => AlimentoDao.ConsultarAll();
        public static alimento AlterarAlimento(alimento lProduto) => AlimentoDao.Alterar(lProduto);
        public static alimento ApagarAlimentoId(alimento lProduto) => AlimentoDao.Apagar(lProduto);
    }
}
