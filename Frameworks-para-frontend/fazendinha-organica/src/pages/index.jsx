import styles from "./styles.module.css"
import Cabecalho from "@/components/Cabecalho";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
      
      <Cabecalho/>
      <section className={styles.capa}>
            <img src="/logo.svg"></img>
            <h1 className={styles.capa_texto}>Fazenda Orgânica</h1>
      </section>
      <section className={styles.corpo}>
            <div className={styles.corpo_cards}>
                  <Cards titulo="Produção de Uva"
                        imagem="/uva.png" 
                        alt_imagem="Plantação de uva"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""/>
                  <Cards titulo="Gado de Corte"
                        imagem="/gado.png" 
                        alt_imagem="Imagem de duas Vacas"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""
                  />
                  <Cards titulo="Produção de Laranja"
                        imagem="/producaotomate.png" 
                        alt_imagem="Plantação de uva"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""/>
                  <Cards titulo="Caprinos"
                        imagem="/ovelha.png" 
                        alt_imagem=""
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""
                  />
                  <Cards titulo="Produção de Ovos"
                        imagem="/galinha.png" 
                        alt_imagem="Plantação de uva"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""/>
                  <Cards titulo="Produção de Tomate"
                        imagem="/tomate.png" 
                        alt_imagem=""
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""
                  />
                  <Cards titulo="Hortfrutti"
                        imagem="/alface.png" 
                        alt_imagem=""
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, architecto odit voluptatum atque veniam aperiam neque quae itaque vel repellendus." 
                        link=""
                  />
            </div>
      </section>
</>
  )
}
