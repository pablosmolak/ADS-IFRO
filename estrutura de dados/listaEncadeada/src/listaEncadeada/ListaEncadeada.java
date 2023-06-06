package listaEncadeada;

/**
 * Classe ListaEncadeada
 * Esta classe permite construir uma lista onde que cada
 * elemento aponta para o próximo, até chegar no fim com um
 * elemento que aponta para 'null'
 */
public class ListaEncadeada {
	/**
	 * Classe que define um elemento na lista
	 * Contém o valor e uma referência ao próximo
	 */
	public static class Elemento {
		String valor;
		Elemento prox;

		public Elemento(String valor) {
			this.valor = valor;
			this.prox = null;
		}

		/** Para escrever na tela os elementos
		* Ex: A --> B --> C --> null */
		@Override
		public String toString() {
			return this.valor + " --> " + this.prox;
		}
	}
	
	// ------- Atributos da classe ListaEncadeada -------
	// indica o início da lista.
	Elemento inicio;

	/**
	 * Este método adiciona um elemento no início da lista
	 * Ou seja, este novo valor será o primeiro da lista
	 * @param valor O valor que vai será adicionado
	*/
	public void addFirst(String valor) {
		Elemento novo = new Elemento(valor);
		novo.prox = inicio;
		inicio = novo;
	}

	/**
	 * Remove um elemento do início da lista
	 * @return o valor removido
	 */
	public String removeFirst() {
		String valor = inicio.valor;
		inicio = inicio.prox;
		return valor;
	}
	
	public boolean encontrar(String b) {
		boolean encontrado = false;
		Elemento atual = inicio;
		while(atual != null) {
			if (b == atual.valor) {
				encontrado = true;
				System.out.println(encontrado);
			}
			atual = atual.prox;
		}
		return encontrado;
		
	}
	
	public int encontradoFirst(String b) {
		int encontrado = 0;
		Elemento atual = inicio;
		int i = 0;
		
		while(atual != null ) {
			if(b == atual.valor) {
				encontrado = i;
				break;
			}
			else {
				encontrado = -1;
			}
			
			atual = atual.prox;
			i++;
			
		}
		System.out.println("Primeira ocorrencia na posição: " + encontrado );
		return encontrado;
	}
	
	
	public static void main(String[] args) {
		System.out.println("OK");
		
	
		ListaEncadeada lista = new ListaEncadeada();

	
		lista.addFirst("Batata");
		lista.addFirst("Cenoura");
		lista.addFirst("Melancia");
		
		System.out.println("Encontrado: " + lista.encontrar("Batata"));
	
	
		System.out.println("Lista antes de remover: " + lista.inicio);
		
		
		String removido = lista.removeFirst();
		System.out.println("Removido: "+removido);
		
		
		System.out.println("Lista depois de remover: " + lista.inicio);
	}
}

