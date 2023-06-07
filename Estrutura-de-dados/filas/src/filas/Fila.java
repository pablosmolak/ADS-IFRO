package filas;

public class Fila {
	
	static public class Filas{
		String[] array;
		int inicio, fim, capacidade;
		
		
		public Filas(int capacity) {
			capacidade = capacity;
			array = new String[capacity];
			inicio = 0;
			fim = 0;
				
		}
		
		public int incrementar(int contador){
			return (contador + 1) % capacidade;
		}
		
		public void enqueue(String elemento) {
			if(size() == (capacidade -1)) {
				throw new Error("A fila está cheia");
			}
			
			array[fim] = elemento;
			fim = incrementar(fim);
		}
		
		public String dequeue() {
			if(isEmpty()) {
				throw new Error("A fila está vazia");
			}
			String temp = array[inicio];
			inicio = incrementar(inicio);
			
			return temp;
			
		}
		
		public int size() {
			return ((capacidade - inicio)+ fim) % capacidade;
		}
		
		public boolean isEmpty() {
			return fim == inicio;
		}
		
			

		
		
	}
	
	public static void main(String[] args) {
		Filas fila = new Filas(10);
		
		System.out.println("IsEmpty: " + fila.isEmpty());
		
		fila.enqueue("1");
		fila.enqueue("2");
		fila.enqueue("3");
		fila.enqueue("4");
		fila.enqueue("5");
		fila.enqueue("6");
		fila.enqueue("7");
		fila.enqueue("8");
		fila.enqueue("9");
		
		System.out.println(fila.dequeue());
		System.out.println(fila.dequeue());
		
		fila.enqueue("a");
		fila.enqueue("b");
		
		
		System.out.println("size:" + fila.size());
		
		System.out.println(fila.dequeue());
		System.out.println(fila.dequeue());
		System.out.println(fila.dequeue());
		
		System.out.println("size:" + fila.size());
		
		
		System.out.println("Valores na fila");
		for (int i = fila.inicio; i < fila.array.length; i++) {
			if(fila.array[i] != null) {
				System.out.println(fila.array[i]);
			}
		}
		
		System.out.println("IsEmpty: " + fila.isEmpty());
		
				

	}
		
}
