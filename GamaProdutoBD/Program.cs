using aulaGamaDBProduto.Dao;
using aulaGamaDBProduto.Funcoes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GamaProdutoBD
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Mensagems.inicio();
            if ((bool)Acao.apagaOpcao(Leitura.lerTela()))
            {
                do
                {
                    Mensagems.opcoes();
                    Acao.Opcao(Leitura.opcoes());
                } while (true);
            }
            else
                Acao.sair();
        }
    }
}
