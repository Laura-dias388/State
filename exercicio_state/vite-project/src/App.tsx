import { useState } from "react"

export default function App() {
  const [num, setNum] = useState(0);

  const dec = () => {
    if (num > 0) setNum((prevState) => prevState - 1)
    else alert('Não pode decrementar número negativo')
  }
  
  return (
    <section>
      <div>
        <button onClick={dec}>Click --</button>
        <button onClick={() => setNum((prevState) => prevState + 1)}>Click +</button>
      </div>
      <span>{num}</span>
    </section>
  )
}
