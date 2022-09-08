using aulaGamaDBProduto.Dao;
using GamaProdutoBD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using static System.Net.Mime.MediaTypeNames;

namespace aulaGamaDBProduto.Funcoes
{
    static class Acao
    {

        public static void limpra() => Console.Clear();
        public static void sair() => Environment.Exit(0);
        public static string sizeString(string s){if (s.Length < 12) do { s += " "; } while (s.Length < 12);  return s; }
        public static void repitir() => Console.Clear();
        public static void cadastraProduto(produto p) => ProdutoDao.Adicionar(p);
        public static void alterarProduto(produto p) => ProdutoDao.Alterar(p);
        public static void apagarProduto(produto p) => ProdutoDao.Apagar(p);
        public static void consultarIDProduto(int p) => ProdutoDao.Consultar(p);
        public static void consultarAllProduto() => ProdutoDao.ConsultarAll();
        public static decimal valorLucro(decimal vVenda, string lucro)
        {
            if("%" == lucro.Substring(lucro.Length - 1, 1))
            {
                lucro = lucro.Remove(lucro.Length - 1);
                return vVenda +( vVenda * int.Parse(lucro));

            }
            else
                return vVenda+int.Parse(lucro);
        }
        public static bool? apagaOpcao(string op)
        {

            switch (op)
            {
                case ("1"):

                    return true;
                    break;
                case ("2"):
                    return false;
                    break;
                default:

                    return null;
            }
        }
        public static void Opcao(string op)
        {
            limpra();
            switch (op)
            {
                case ("1"):
                    AcoesCRUD.PresitirProduto(0);
                    break;
                case ("2"):
                    AcoesCRUD.mostra();
                    break;
                case ("3"):
                    AcoesCRUD.mostra();
                    Mensagems.apagarOpcao();
                    var id = Leitura.lerTelaNum();
                        AcoesCRUD.PresitirProduto(id);
                    
                    break;
                case ("4"):
                    {
                        AcoesCRUD.mostra();
                        Mensagems.apagarOpcao();
                        int idp = Leitura.lerTelaNum();
                        Mensagems.apagar();
                        if ((bool)apagaOpcao(Leitura.lerTelaNum().ToString())) {
                            AcoesCRUD.ApagarProduto(idp);//apagar
                        }
                    }
                    break;
                case ("5"):
                    Acao.sair(); 
                    break;
                default:
                    Mensagems.invalida();
                    break;

            }
        }


    }
}
