package pilha;

public class pilhas {
	
	public static class Elo {
		String nome;
		Elo proximo;
		
		public Elo(String nome) {
			this.nome = nome;
			this.proximo = null;
		}
	}
	

	public static class Corrente {
		Elo primeiro;
		
		public void adicionarElo(Elo novo) {
			novo.proximo = primeiro;
			primeiro = novo;
		}
		
		public String tirarElo() {
			Elo	temp = primeiro;
			primeiro = primeiro.proximo;
			
			return temp.nome;
		}
		
		
		
		public void printar() {
		
			Elo atual = primeiro;
			
			
			while(atual != null) {
				System.out.println(atual.nome);
				
				atual = atual.proximo;
			}
			
		}
	}
	
	public static void main(String[] args) {
		testeCorrente();
	}

	public static void testeCorrente() {
		Corrente corrente = new Corrente();
		
		corrente.adicionarElo(new Elo("Claudio"));
		corrente.adicionarElo(new Elo("Pablo"));
		corrente.adicionarElo(new Elo("Robert"));
		corrente.adicionarElo(new Elo("Randomiro"));
		
		System.out.printf("Pop -> " + corrente.tirarElo());
		System.out.println("");
		corrente.printar();
	}
	
	public static void testeAula() {
		
		Elo primeiro = new Elo("Maria");
		
		primeiro.proximo = new Elo("João");

		Elo novo = new Elo("Hellen");
		novo.proximo = primeiro;
		primeiro = novo;
		
		Elo atual = primeiro;
		while(atual != null) {
			System.out.println(atual.nome);
			
			atual = atual.proximo;
		}
	}

}