package Pilha;

public class lista {
	
	static public class Pilha {
		int[] array;
		int topo;
		
		public Pilha(int capacidade) {
			array = new int[capacidade];
			topo = -1;
		}
		
		public void push(int numero) {
			topo ++;
			array[topo] = numero;	
		}
		
		public int pop(){
			int temp = array[topo];
			array[topo] = 0;
			topo --;
			return temp;
		}
		
		public int size() {
			return topo + 1;
			
		}
		public int top() {
			return array[topo];
		}
		
		public boolean isEmpty() {
			
			if(topo == -1) {
				return true;
			}
			
			return false;
			
		}
	}
	
	public static void main(String[] args) {
		Pilha pilha = new Pilha(10);
		
		pilha.push(5);
		pilha.push(3);
		System.out.println("Pop --> " + pilha.pop());
		pilha.push(7);
		System.out.println("Pop --> " + pilha.pop());
		System.out.println("Top --> " + pilha.top());
		System.out.println("Pop --> " + pilha.pop());
		//System.out.println("Pop --> " + pilha.pop());
		System.out.println("IsEmpty --> " + pilha.isEmpty());
		pilha.push(9);
		pilha.push(7);
		pilha.push(3);
	
		

		

		System.out.println("-------------------------------");
		System.out.println("Valores da Pilha:");
		
		for (int i = 0; i < pilha.array.length; i++) {
			if(pilha.array[i] != 0) {
			System.out.println(pilha.array[i]);
			}
		}
		
		System.out.println("-------------------------------");
		
		
		
		
		
	}
}
	
	
	
