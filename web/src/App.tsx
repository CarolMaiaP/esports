interface ButtonProps{
  title: string,
}

function Button(props:ButtonProps){
  return <button>{props.title}</button>
}

function App() {
  return (
    <div>
      <Button title="botao 1"/>
      <Button title="botao 2"/>
    </div>
  )
}

export default App
