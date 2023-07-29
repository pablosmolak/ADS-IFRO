public class Array{
    public static void main(String[] args) {

        String nomes[] = new String[]{
             "joão", "matheus", "maria", "jose" 
        };

        System.out.println(nomes[0]);
        System.out.println(nomes[2]);

        for(String nome : nomes){
            System.out.println(nome);
        }
    }

}