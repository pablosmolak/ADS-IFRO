package ListaTelefonica;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Lista {

    private List<Contato> contatos = new ArrayList<Contato>();
    Scanner ler = new Scanner(System.in);

    public void cadastrarContato(){
        System.out.println("---Cadastro---");
        System.out.print("Nome: ");
        String nome = ler.next();
        System.out.print("Número: ");
        String numero = ler.next();

        Contato c = new Contato(nome, numero);
        contatos.add(c);
        
    }

    public void listarContatos(){
        for(Contato c : contatos){
            System.out.println("cod:" + c.getNumero() + "-> Nome:" + c.getNome());
        }
    }
    
}
