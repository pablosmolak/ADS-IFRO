package ListaTelefonica;

import java.util.Scanner;

public class Index {
    
    public static void main(String[] args) {
        Lista l = new Lista();
        Scanner ler = new Scanner(System.in);

        int opcao = 0;

        do{

            System.out.println("\n----Agenda----");
            System.out.println("\nOperações:");
            System.out.println("1 - Novo Contato");
            System.out.println("2 - Listar Contatos");
            System.out.println("3 - Listar Contatos de Emergência");
            System.out.println("4 - Nova Ligação");
            System.out.println("5 - Excluir Contato");
            System.out.println("0 - Sair");
            System.out.print("\nInforme a operação desejada: ");
            opcao = ler.nextInt();

            switch (opcao) {
                case 1:
                    l.cadastrarContato();
                    break;
                case 2:
                    l.listarContatos();
                    break;
                case 3:
                    l.listarContatos(true);
                    break;
                case 4:
                    l.escolherContato();
                    break;
                case 5:
                    l.excluirContato();
                    break;
            }

        }while(opcao != 0);
    }
}
