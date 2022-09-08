using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aulaGamaDBProduto.Dao;

namespace aulaGamaDBProduto.Test
{
    internal class EletrodomesticoTeste
    {
        public static eletrodomestico addEletrodomestico(eletrodomestico lProduto) => EletrodomesticoDao.Adicionar(lProduto);
        public static eletrodomestico ConsultaEletrodomesticoId(int id) => EletrodomesticoDao.Consultar(id);
        public static List<eletrodomestico> ConsultarAllEletrodomestico() => EletrodomesticoDao.ConsultarAll();
        public static eletrodomestico AlterarEletrodomestico(eletrodomestico lProduto) => EletrodomesticoDao.Alterar(lProduto);
        public static eletrodomestico ApagarEletrodomesticoId(eletrodomestico lProduto) => EletrodomesticoDao.Apagar(lProduto);
    }
}
