using aulaGamaDBProduto.Dao;
using GamaProdutoBD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Dao
{
    public class AlimentoDao
    {
        private static DBClass DBClass;
        public static alimento Adicionar(alimento lProduto)
        {
            DBClass = new DBClass();
            DBClass.db.alimentoes.Add(lProduto);
            DBClass.db.SaveChanges();
            return lProduto;
        }
        public static List<alimento> ConsultarAll()
        {
            DBClass = new DBClass();
            return DBClass.db.alimentoes.ToList();
        }
        public static alimento Consultar(int id)
        {
            DBClass = new DBClass();
            return DBClass.db.alimentoes.SingleOrDefault(lAux => lAux.IdAlimento == id);

        }
        public static alimento Alterar(alimento lEletrodomestico)
        {
            DBClass = new DBClass();
            var lAuxEletrodomestico = DBClass.db.alimentoes.SingleOrDefault(lAux => lAux.IdAlimento == lEletrodomestico.IdAlimento);
            if (lAuxEletrodomestico != null)
            {
                lAuxEletrodomestico = lEletrodomestico;
                DBClass.db.SaveChanges();
            }
            return lAuxEletrodomestico;
        }
        public static alimento Apagar(alimento lProduto)
        {
            DBClass = new DBClass();
            var lAuxProduto = DBClass.db.produtoes.SingleOrDefault(lAux => lAux.IdProduto == lProduto.IdAlimento);
            if (lAuxProduto != null)
            {
                DBClass.db.produtoes.Remove(lAuxProduto);
                DBClass.db.SaveChanges();
            }
            return lProduto;
        }

    }
}
