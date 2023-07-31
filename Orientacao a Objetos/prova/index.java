import java.util.Scanner;

public class index {

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int opcao;

        Listas l = new Listas();
        System.out.println("\n--- BEM VINDO AO SISTEMA DE LISTAGEM DE ALUNOS E PROFESSORES ---");
        do{ 

            System.out.println("\n\t------Lista de Alunos e Professores-----\n");
            System.out.println("\t\t1 - Cadastrar Professores");
            System.out.println("\t\t2 - Cadastrar Alunos");
            System.out.println("\t\t3 - Listar Professores");
            System.out.println("\t\t4 - Listar Alunos");
            System.out.println("\t\t0 - Sair");
            System.out.print("\nDigite a opção desejada: ");
            opcao = ler.nextInt();

            switch (opcao) {
                case 1:
                    l.cadastrarProfessor();
                    break;
            
                case 2:
                    l.cadastrarAluno();
                    break;

                case 3:
                    l.listarProfessor();
                    break;
                case 4:
                    l.listarAluno();
                    break;
            }


        }while(opcao != 0);
    }
    
}
