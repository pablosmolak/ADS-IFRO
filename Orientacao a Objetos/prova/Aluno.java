public class Aluno extends Pessoa{
    private String matricula;

    public Aluno (String nome, String cpf, String matricula){
        this.setCpf(cpf);
        this.setNome(nome);
        this.matricula = matricula;

    }

    public String getMatricula() {
        return matricula;
    }
}
