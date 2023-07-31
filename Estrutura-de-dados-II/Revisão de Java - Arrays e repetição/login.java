import java.util.Scanner;

public class login {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);

        String usuario[] = new String[]{
            "Sofia","Gabriel", "Isabella", "Lucas", "Laura", "Matheus", "Maria", "Pedro", "Ana", "Leonardo"
        };
        String senha[] = new String[]{
            "cachorro", "computador", "banana", "livro", "cadeira", "chocolate", "caneta", "arvore", "bola", "janela"
        };

        System.out.print("Informe o Usuario: ");
        String usuarioinformado = ler.next();
        System.out.print("Informe a Senha: ");
        String senhainformada = ler.next();
       
        boolean logou = false;
        for (int i = 0; i < usuario.length; i++) {
            if(usuario[i].equalsIgnoreCase(usuarioinformado)){
                if(senha[i].equals(senhainformada)){
                    logou = true;
                    break;
                }
            }    
        }  
        
        if(logou){
            System.out.println("Bem Vindo ao Sistema de login!");
        }
        else{
            System.out.println("Usuário ou Senha incorretos!");
        }
    }
}
