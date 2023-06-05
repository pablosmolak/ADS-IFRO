package ListaTelefonica;

public class Contato {
    
    private int numero;
    private String nome;
    private String telefone;
    private static int numerogeral = 0;

    public Contato(String nome, String telefone){
        this.nome = nome;
        this.telefone = telefone;
        numerogeral++;
        this.numero = numerogeral;
    }

    public void ligar(){

    }


    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public int getNumero() {
        return numero;
    }
}
