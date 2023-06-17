package ListaTelefonica;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Lista {

    private List<Contato> contatos = new ArrayList<Contato>();
    Scanner ler = new Scanner(System.in);

    public void cadastrarContato(){
        System.out.println("\n----Cadastro----");
        System.out.print("\nNome: ");
        String nome = ler.next();
        System.out.print("Número: ");
        String numero = ler.next();
        System.out.print("É um contato de emergência? 1-Sim 2-Não ");
        int emergencia = ler.nextInt();

        if(nome != null && numero != null){
            if(emergencia == 1){
                Boolean emer = true;
                Contato c = new Contato(nome, numero, emer);
                contatos.add(c);
            }
            else{
                Contato c = new Contato(nome, numero);
                contatos.add(c);
            }
        }else{
            System.out.println("Não foi possivel Realizar o Cadastro!");
        }     
    }

    public void listarContatos(){
        System.out.println("\n----Lista de Contatos----");
        for(Contato c : contatos){
            System.out.println("Cod:" + c.getNumero() + "-> Nome:" + c.getNome() + ", Número: "+ c.getTelefone());
        }
    }
    public void listarContatos(Contato contatoUsado){
        System.out.println("\n----Lista de Contatos----");
        for(Contato c : contatos){
            if(c != contatoUsado){
                System.out.println("Cod:" + c.getNumero() + "-> Nome:" + c.getNome() + ", Número: "+ c.getTelefone());
            }
            
        }
    }
    public void listarContatos(boolean emergencia){
        System.out.println("\n----Lista de Contatos de Emergência----");
        for(Contato c : contatos){
            if(c.getContatoEmergencia() == emergencia){
               System.out.println("Cod:" + c.getNumero() + "-> Nome:" + c.getNome() + ", Número: "+ c.getTelefone());
            }
            
        }
    }

     public void listarContatos(Contato contatoUsado, boolean emergencia){
        for(Contato c : contatos){
            if(c.getContatoEmergencia() == emergencia){
                if(c != contatoUsado){
                    System.out.println("Cod:" + c.getNumero() + "-> Nome:" + c.getNome() + ", Número: "+ c.getTelefone());
                }
            }
        }
    }

    public void excluirContato(Contato c){
        this.contatos.remove(c);
    }

    public void excluirContato(){
        System.out.println("\n----Exclusão----");
        listarContatos();
        System.out.print("Informe o Codigo do contato a ser excluido: ");
        int cod = ler.nextInt();
        Contato c = FindContato(cod);
        if(c != null){
            this.contatos.remove(c);
            System.out.println("Contato excluido com sucesso!");
        }else{
            System.out.println("Não foi possivel excluir o contato na lista");
        }
    }

    public void escolherContato(){
        listarContatos();
        System.out.print("Informe o Código do contato que deseja entrar: ");
        int numero = ler.nextInt();
        Contato c = FindContato(numero);
        if( c != null){
            int opcao;

            do{
                System.out.println("\n---Número do " + c.getNome() + "---");
                System.out.println("\nOperações:");
                System.out.println("1 - Ligar para um contato da agenda");
                System.out.println("2 - Ligar para Contato de Emergência");
                System.out.println("3 - Ligar para um contato não salvo");
                System.out.println("0 - Sair");
                System.out.print("\nInforme a operação desejada: ");
                opcao = ler.nextInt();
                
                int num = 0;
                Contato d;
                switch (opcao) {
                    case 1:
                        listarContatos(c);
                        System.out.print("Informe o Código do Contato que deseja Ligar: ");
                        num = ler.nextInt();
                        d = FindContato(num);
                        if(d != null){
                            ligacao(d);
                        }else{
                            System.out.println("Impossivel Completar a Ligação!");
                        }
                        break;
                    case 2:
                        listarContatos(c,true);
                        System.out.print("Informe o Código do contato que deseja Ligar: ");
                        num = ler.nextInt();
                        d = FindContato(num);
                        if(d != null && d != c){
                            ligacao(d);
                        }else{
                            System.out.println("Impossivel Completar a Ligação!");
                        }
                        break;
                    case 3:
                        System.out.print("Informe o Numero de telefone que deseja ligar: ");
                        String numTelefone = ler.next();
                        if(numTelefone != ""){
                            ligacao(numTelefone);
                        }else{
                            System.out.println("Impossivel Completar a Ligação!");
                        }
                        break;
                }
                
                
            }while(opcao != 0);
        }

    }

    public void ligacao(String tel){
        System.out.println("\n\nLigando para: " + tel + "\n\n");
    }

    public void ligacao(Contato d){
        System.out.println("\n\nLigando para: " + d.getNome() + "\n\n");
    }

    private Contato FindContato(int numero) {
		for(Contato c : contatos) {
			if(c.getNumero() == numero) {
				return c;
			}
		}
		return null;
	}
}