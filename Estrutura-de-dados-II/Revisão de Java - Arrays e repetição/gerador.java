import java.util.Random;

public class gerador {

    public static void main(String[] args) {
        
        Random gerador = new Random();
        int[] numeros = new int[10];

        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = gerador.nextInt(100);
            System.out.println(numeros[i]);
        }

    }
}
