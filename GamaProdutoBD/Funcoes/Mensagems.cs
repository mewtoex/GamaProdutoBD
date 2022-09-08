using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aulaGamaDBProduto.Funcoes
{
    static class Mensagems
    {

        public static void inicio() => Console.WriteLine("Ola seja bem Vindo a o sistema de Cadastro de Produto\nGostaria de começar\nDigite 1 para sim\nDigite 2 para não");
        public static void ler() => Console.WriteLine("Digite os dados Produto\n");
        public static void Repeter() => Console.WriteLine("Gostaria de continuar\n Digite 1 para sim \nDigite 2 para não");
        public static void Mostrar() => Console.WriteLine("Gostaria de ver os produtos cadastrado ");
        public static void apagar() => Console.WriteLine("Deseja Mesmo apagar o Produto\nDigite 1 para sim\nDigite 2 para não");
        public static void apagarOpcao() => Console.WriteLine("Digite o ID do produto que deseja apagar");
        public static void invalida() => Console.WriteLine("Opção invalida");
        public static void opcoes() => Console.WriteLine("Digite a opção que deseja \n1 para cadastra Produto \n2 Para mostras os produtos \n3 Para alterar um produto \n4 Para apagar um produto \n5 Para sair ");
        public static void cadastroCampo(string campo,string produto = null) => Console.WriteLine("Digite " + campo + "do produto " + produto);
        public static void cadastroTipo() => Console.WriteLine("Digite se o Produto e Alimento ou Eletrodomestico \nDigite 1 para Alimento \nDigite 2 para Eletrodomestico \nDigite 3 para outros ");
        public static void cadastroCampoLucro(string produto = null) => Console.WriteLine("Digite o lucro se percentual com % no final caso não digite o valor do produto" + produto);
        public static void cadastroCampoStatus(string produto = null) => Console.WriteLine("Digite D para Disponivel e I para indisponivel o Produto"+ produto);



    }
}
