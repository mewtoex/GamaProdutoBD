using GamaProdutoBD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Dao
{
    internal class DBClass
    {
        public gamaProdutoEntities db = new gamaProdutoEntities();

        gamaProdutoEntities dbf = new gamaProdutoEntities();
    }
}
