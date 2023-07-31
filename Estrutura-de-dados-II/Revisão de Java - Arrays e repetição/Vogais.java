import java.util.Scanner;

public class Vogais {

    public static void main(String[] args) {
        
        Scanner ler = new Scanner(System.in);

        System.out.print("Escreva uma palavra: ");
        String palavra = ler.nextLine();
        
        int vogais = 0;
        for(int i=0; i < palavra.length(); i++){
            char c = palavra.charAt(i);
            if(c =='a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
                vogais ++;
            }
        }

        System.out.println("A palavra tem " + vogais+ " Vogais!");
    }
    
}
