using aulaGamaDBProduto.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using GamaProdutoBD;
using aulaGamaDBProduto.Funcoes;

namespace aulaGamaDBProduto.Dao
{
    public class ProdutoDao
    {
        private static DBClass DBClass;
        public static produto Adicionar(produto lProduto)
        {
            DBClass = new DBClass();
            DBClass.db.produtoes.Add(lProduto);
            DBClass.db.SaveChanges();
            return lProduto;
        }
        public static object ConsultarAllApi()
        {

            DBClass = new DBClass();
            return DBClass.db.produtoes;
        }
        public static List<produto> ConsultarAll()
        {

            DBClass = new DBClass();
            return  DBClass.db.produtoes.ToList();          
        }
        public static produto Consultar(int id)
        {
            DBClass = new DBClass();
            return DBClass.db.produtoes.SingleOrDefault(lAux => lAux.IdProduto == id);
            
        }
        public static produto Alterar(produto lProduto)
        {
            DBClass = new DBClass();
            var lAuxProduto = DBClass.db.produtoes.SingleOrDefault(lAux => lAux.IdProduto == lProduto.IdProduto);
            if (lAuxProduto != null)
            {
                lAuxProduto.nome = lProduto.nome;
                lAuxProduto.Armazenagem = lProduto.Armazenagem;
                lAuxProduto.statusProduto = lProduto.statusProduto;
                lAuxProduto.unid = lProduto.unid;
                lAuxProduto.Quantidade = lProduto.Quantidade;
                lAuxProduto.PrecoCompra = lProduto.PrecoCompra;
                lAuxProduto.PrecoLucro = lProduto.PrecoLucro;
                lAuxProduto.PrecoVenda = lProduto.PrecoVenda;
                DBClass.db.SaveChanges();
            }
            return lAuxProduto;
        }
        public static produto Apagar(produto lProduto)
        {
            DBClass = new DBClass();
            var lAuxProduto = DBClass.db.produtoes.SingleOrDefault(lAux => lAux.IdProduto == lProduto.IdProduto);
            if (lAuxProduto != null)
            {
                DBClass.db.produtoes.Remove(lAuxProduto);
                DBClass.db.SaveChanges();
            }
            return lProduto;
        }


    }
}
