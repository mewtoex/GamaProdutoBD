using aulaGamaDBProduto.Dao;
using GamaProdutoBD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Dao
{
    public class EletrodomesticoDao
    {
        private static DBClass DBClass;
        public static eletrodomestico Adicionar(eletrodomestico lProduto)
        {
            DBClass = new DBClass();
            DBClass.db.eletrodomesticoes.Add(lProduto);
            DBClass.db.SaveChanges();
            return lProduto;
        }
        public static List<eletrodomestico> ConsultarAll()
        {
            DBClass = new DBClass();
            return  DBClass.db.eletrodomesticoes.ToList();          
        }
        public static eletrodomestico Consultar(int id)
        {
            DBClass = new DBClass();
            return DBClass.db.eletrodomesticoes.SingleOrDefault(lAux => lAux.IdEletrodomestico == id);
            
        }
        public static eletrodomestico Alterar(eletrodomestico lEletrodomestico)
        {
            DBClass = new DBClass();
            var lAuxEletrodomestico = DBClass.db.eletrodomesticoes.SingleOrDefault(lAux => lAux.IdEletrodomestico == lEletrodomestico.IdEletrodomestico);
            if (lAuxEletrodomestico != null)
            {
                lAuxEletrodomestico = lEletrodomestico;
                DBClass.db.SaveChanges();
            }
            return lAuxEletrodomestico;
        }
        public static eletrodomestico Apagar(eletrodomestico lProduto)
        {
            DBClass = new DBClass();
            var lAuxProduto = DBClass.db.produtoes.SingleOrDefault(lAux => lAux.IdProduto == lProduto.IdEletrodomestico);
            if (lAuxProduto != null)
            {
                DBClass.db.produtoes.Remove(lAuxProduto);
                DBClass.db.SaveChanges();
            }
            return lProduto;
        }


    }
}
