using aulaGamaDBProduto.Dao;
using GamaProdutoBD;

namespace aulaGamaDBProduto.Api.Util
{
    public class util
    {
        #region Produto
        public object persitirProduto(produto lProduto)
        {
            if (lProduto.IdProduto == 0)
                ProdutoDao.Adicionar(lProduto);
            else
                ProdutoDao.Alterar(lProduto);

            return lProduto;
        }

        public object ConsultarAllProduto() => ProdutoDao.ConsultarAll();
       
        public object ConsultarProduto(int id) => ProdutoDao.Consultar(id);

        public object ApagarProduto(produto lProduto) => ProdutoDao.Apagar(lProduto);


        #endregion

    


    }
}