using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aulaGamaDBProduto.Dao;

namespace aulaGamaDBProduto.Test
{
    internal class ProdutoTeste
    {
        public static produto addProduto(produto lProduto) => ProdutoDao.Adicionar(lProduto);
        public static produto ConsultaProdutoId(int id) => ProdutoDao.Consultar(id);
        public static List<produto> ConsultarAllProduto() => ProdutoDao.ConsultarAll();
        public static produto AlterarProduto(produto lProduto) => ProdutoDao.Alterar(lProduto);
        public static produto ApagarProdutoId(produto lProduto) => ProdutoDao.Apagar(lProduto);
    }
}
