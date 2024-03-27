import {useState} from "react";

export default function Main (){
      const [nome, setNome] = useState("");
      const [telefone, setTelefone] = useState();
      const [listaContatos, setListaContatos] = useState([]);
      const [idade, setIdade] = useState("")

      const registrar = (event) => {
        event.preventDefault();
        alert("Deu Certo!")
        setListaContatos([...listaContatos,
            {
                nomeSalvo: nome,
                telefoneSalvo: telefone,
                idadeSalvo: idade
            }
            ]);
            }
            console.table(listaContatos)

    return(
        <main>
            <form onSubmit={registrar}>
            <label htmlFor="nome">Nome:<input type="text" name="" id="" onChange={(event)=> setNome(event.target.value)}/></label>
            {nome}
            <label>Telefone:<input type="tel" name="telefone-contato" id="telefone" value={telefone} onChange={ (event) => setTelefone(event.target.value)}/></label>
            {telefone}
            <label>Idade: <input type="number" name="idade-contato" id="idade" value={idade} onChange={ (event) => setIdade(event.target.value)}></input></label>
            <button>Enviar</button>
            </form>
        </main>
    )
}