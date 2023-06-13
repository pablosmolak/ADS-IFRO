package ListaTelefonica;

import java.lang.invoke.StringConcatFactory;
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
        System.out.print("É um contato de emergência? 1-Sim 2-Não ");
        int emergencia = ler.nextInt();

        if(emergencia == 1){
            Boolean emer = true;
            Contato c = new Contato(nome, numero, emer);
            contatos.add(c);
        }
        else{
            Contato c = new Contato(nome, numero);
            contatos.add(c);
        }

        
    }

    public void listarContatos(){
        for(Contato c : contatos){
            System.out.println("cod:" + c.getNumero() + "-> Nome:" + c.getNome() + "emergencia: " + c.getContatoEmergencia());
        }
    }
    public void listarContatos(Contato contatoUsado){
        for(Contato c : contatos){
            if(c != contatoUsado){
                System.out.println("cod:" + c.getNumero() + "-> Nome:" + c.getNome());
            }
            
        }
    

    }
    public void listarContatosEmergencia(){
        for(Contato c : contatos){
            if(c.getContatoEmergencia() == true){
                System.out.println("cod:" + c.getNumero() + "-> Nome:" + c.getNome());
            }
            
        }
    }

    public void excluirContato(Contato c){
        this.contatos.remove(c);
    }

    public void excluirContato(){
        System.out.println("----Exclusão----");
        System.out.println("Informe o nome do contato a ser excluido");
        String nome = leitot.nextLine();
        Contato c = FindContato(nome);
        if(c != null){
            this.contatos.remove(c);
            System.out.println("Contato excluido com sucesso!");
        }else{
            System.out.println("Não foi possivel excluir o contato na lista");
        }
    }

    public void escolherContato(){
        listarContatos();
        System.out.print("Informe o nome do contato que deseja entrar: ");
        int numero = ler.nextInt();
        Contato c = FindContato(numero);
        if( c != null){
            int opcao;

            do{
                System.out.println("---Número do " + c.getNome() + "---");
                System.out.println("\nOperações:");
                System.out.println("1 - Ligar");
                System.out.println("2 - Ligar para Contato de Emergência");
                System.out.println("3 - Editar contato");
                System.out.println("4- Nova Ligação");
                System.out.println("0 - Sair");
                System.out.print("\nInforme a operação desejada: ");
                opcao = ler.nextInt();

                switch (opcao) {
                    case 1:
                        
                        break;
                    case 2:
                        listarContatosEmergencia();
                        break;
                    case 3:
                        listarContatos(c);
                        break;
                }
                
                
            }while(opcao != 0);
        }

    }

    private Contato FindContato(int numero) {
		for(Contato c : contatos) {
			if(c.getNumero() == numero) {
				return c;
			}
		}
		return null;
	}
    
    private Contato FindContato(String nome){
        for(Contato c : contatos){
            if(c.getNome().equals(nome)){
                return c;
            }
            
        }
        return null;
    }
    
}