using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Funcoes
{
    internal class Leitura
    {

        public static string inicio() => Console.ReadLine();
        public static string Repetir() => Console.ReadLine();
        public static string opcoes() => Console.ReadLine();
        public static string lerTela() => Console.ReadLine();
        public static int lerTelaNum() =>  int.Parse(Console.ReadLine());
        public static double lerTelaDec() =>  double.Parse(Console.ReadLine());


    }
}
