import { useState } from "react"

export function App(){
  const [numero, setNumero] = useState(100)
  const [esconder, setEsconder] = useState(false)
  function handleAumentar(){
    setNumero (numero+100)

  }

  function handleEsconder(){
    if(esconder === false){
      setEsconder(true)
      
      botao = "mostrar"
      return
    }else{
      setEsconder(false)
      setNumero(numero)
      botao = "mostrar"
      return
    }
  }
  return (
    <main>

      <section>
        <p>{numero}</p>

        <button onClick={handleAumentar}>aumentar</button>
      </section>

      <section>
        <h2>Texto que some</h2>
        {esconder ? <p>embreve sumirei</p>: ""}
        <button onClick={handleEsconder}>{esconder ? "esconde" : "mostra"}r</button>
      </section>
    </main>
  )
}