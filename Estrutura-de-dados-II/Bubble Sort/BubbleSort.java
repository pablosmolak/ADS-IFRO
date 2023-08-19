public class BubbleSort {

    public static void bubbleSort(int[] num){   
        Boolean trocou = false;
        int iteracao = 0;
        for (int i = 0; i < num.length; i++) {
            iteracao += 1;
            trocou = false;
            for (int j = 0; j < num.length -i-1; j++) {
                if(num[j]>num[j+1]){
                    int temp = num[j];
                    num[j] = num[j+1];
                    num[j+1] = temp;
                    trocou = true;

                }
            }

            if(!trocou){
                break;
            }
        }
        System.out.println("Iterações: " + iteracao);
    }
    public static void main(String[] args) {
        
        int[]num = {1,2,3,4,6,5};

        bubbleSort(num);


        for (int i = 0; i < num.length; i++) {
            System.out.println(num[i]);   
        }
    }
    
}
