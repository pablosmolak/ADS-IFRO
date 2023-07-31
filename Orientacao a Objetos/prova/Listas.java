import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Listas {
    private List<Professor> professor = new ArrayList<Professor>();
    private List<Aluno> aluno = new ArrayList<Aluno>();
    Scanner ler = new Scanner(System.in);
    



    public void cadastrarProfessor(){
        System.out.println("\n----Cadastro de Professores----");
        System.out.print("\nNome: ");
        String nome = ler.next();
        System.out.print("CPF: ");
        String cpf = ler.next();
        System.out.print("SIAPE: ");
        int siape = ler.nextInt();

        if(nome != null && cpf != null && siape != 0){
            
                Professor prof = new Professor(nome, cpf, siape);
                professor.add(prof);
           
        }else{
            System.out.println("Não foi possivel Realizar o Cadastro!");
        }       
    }

    public void listarProfessor(){
        System.out.println("\n----Lista de Professores----\n");
        for(Professor prof : professor){
             System.out.println("Nome: " + prof.getNome() + "-> CPF:" + prof.getCpf() + ", SIAPE: "+ prof.getSIAPE());
        }
    }

    public void cadastrarAluno(){
        System.out.println("\n----Cadastro de Alunos----");
        System.out.print("\nNome: ");
        String nome = ler.next();
        System.out.print("CPF: ");
        String cpf = ler.next();
        System.out.print("Matricula: ");
        String matricula = ler.next();

        if(nome != null && cpf != null && matricula != null){
            
                Aluno alu = new Aluno(nome, cpf, matricula);
                aluno.add(alu);
           
        }else{
            System.out.println("Não foi possivel Realizar o Cadastro!");
        }       
    }

    public void listarAluno(){
        System.out.println("\n----Lista de Alunos----\n");
        for(Aluno aluno : aluno){
            System.out.println("Nome: " + aluno.getNome() + "-> CPF:" + aluno.getCpf() + ", Matricula: "+ aluno.getMatricula());
        }
    }
}
