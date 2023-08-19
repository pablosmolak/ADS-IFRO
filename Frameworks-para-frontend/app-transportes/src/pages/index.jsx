import Cabecalho from "@/components/Cabecalho";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
     <Cabecalho titulo="Transporte"/>
     <Menu/>
     <h1>Página Inicial</h1>
     <Card titulo="Título 1" texto="Texto do Título 1"/>
     <Card titulo="Título 2" texto="Texto do Título 2"/>
     <Card titulo="Título 3" texto="Texto do Título 3"/>
     <Card titulo="Título 4" texto="Texto do Título 4"/>
     <Rodape />
    </>
  )
}
