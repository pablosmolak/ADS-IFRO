package ListaTelefonica;

import java.util.Scanner;

public class Index {
    
    public static void main(String[] args) {
        Lista l = new Lista();
        Scanner ler = new Scanner(System.in);

        int opcao = 0;

        do{

            System.out.println("----Lista Telefônica----");
            System.out.println("\nOperações:");
            System.out.println("1 - Novo Contato");
            System.out.println("2 - Listar Contatos");
            System.out.println("3 - Listar Contatos de Emergencia");
            System.out.println("4 - Nova Ligação");
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
                    l.listarContatosEmergencia();
                    break;
                case 4:
                    l.escolherContato();
                    break;
            }

        }while(opcao != 0);



    }
}
