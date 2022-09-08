using aulaGamaDBProduto.Dao;
using GamaProdutoBD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Funcoes
{
    static class AcoesCRUD
    {
        public static void CRUD(string type, string cat)
        {


        }
        public static void PresitirProduto(int id)
        {
            if (id == 0)
            {

                produto p = new produto();
                Mensagems.cadastroCampo("o Nome ", "");
                p.nome = Leitura.lerTela();
                Mensagems.cadastroCampo("a Armazenagem ", p.nome);
                p.Armazenagem = Leitura.lerTela();
                Mensagems.cadastroCampoStatus(p.nome);
                p.statusProduto = Leitura.lerTela().ToLower() == "d" ? "Disponivel" : "Indisponivel";
                Mensagems.cadastroCampo("a Unidade ", p.nome);
                p.unid = Leitura.lerTela();
                Mensagems.cadastroCampo("a Quantidade ", p.nome);
                p.Quantidade = Leitura.lerTelaNum();
                Mensagems.cadastroCampo("o Preço Compra ", p.nome);
                p.PrecoCompra = ((decimal)Leitura.lerTelaDec());
                Mensagems.cadastroCampoLucro(p.nome);
                p.PrecoLucro = Acao.valorLucro((decimal)p.PrecoCompra, Leitura.lerTela());
                p.PrecoVenda = ((decimal)p.PrecoCompra) + p.PrecoLucro;
                ProdutoDao.Adicionar(p);
            }
            else
            {
                var p = ProdutoDao.Consultar(id);
                Mensagems.cadastroCampo("o Nome ", p.nome);
                p.nome = Leitura.lerTela();
                Mensagems.cadastroCampo("a Armazenagem ", p.nome);
                p.Armazenagem = Leitura.lerTela();
                Mensagems.cadastroCampoStatus(p.nome);
                p.statusProduto = Leitura.lerTela().ToLower() == "d" ? "Disponivel" : "Indisponivel";
                Mensagems.cadastroCampo("a Unidade ", p.nome);
                p.unid = Leitura.lerTela();
                Mensagems.cadastroCampo("a Quantidade ", p.nome);
                p.Quantidade = Leitura.lerTelaNum();
                Mensagems.cadastroCampo("o Preço Compra ", p.nome);
                p.PrecoCompra = ((decimal)Leitura.lerTelaDec());
                Mensagems.cadastroCampoLucro(p.nome);
                p.PrecoLucro = Acao.valorLucro((decimal)p.PrecoCompra, Leitura.lerTela());
                p.PrecoVenda = ((decimal)p.PrecoCompra) + p.PrecoLucro;
                ProdutoDao.Alterar(p);

            }

        }
        public static void ApagarProduto(int id)
        {
            var p = ProdutoDao.Consultar(id);
            ProdutoDao.Apagar(p);
        }
        public static void mostra() {

            listarProduto(listar());
        }
        public static List<produto> listar() => ProdutoDao.ConsultarAll();

        private static void listarProduto(List<produto> produtos)
        {
            Console.WriteLine("ID          |Nome        |Unidade     |Status      |Quantidade  |Armazenagem |Preço Compra|Preço Venda |Valor Lucro |");
            produtos.ForEach(objFor =>
            {
                Console.WriteLine(Acao.sizeString(objFor.IdProduto.ToString()) + "|"+Acao.sizeString(objFor.nome)+"|"+ Acao.sizeString(objFor.unid)
                                 +"|"+ Acao.sizeString(objFor.statusProduto)+"|"+Acao.sizeString(objFor.Quantidade.ToString())+"|"+ Acao.sizeString(objFor.Armazenagem)
                                 +"|"+ Acao.sizeString(objFor.PrecoCompra.ToString())+"|"+ Acao.sizeString(objFor.PrecoVenda.ToString())+"" +
                                  "|"+ Acao.sizeString(objFor.PrecoLucro.ToString())+"|\n");


    });
        }
    }
}
