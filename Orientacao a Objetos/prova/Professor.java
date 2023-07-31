public class Professor extends Pessoa {
    private int SIAPE;

    public Professor(String nome, String cpf, int siape){
        this.setNome(nome);
        this.setCpf(cpf);
        this.SIAPE = siape;
    }

    public int getSIAPE() {
        return SIAPE;
    }
}
