import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Login from "./components/login/Login"

function App() {
  
  return (
    <>
      <NavBar />
      <Login />
      <ItemListContainer greeting={"Bienvenidos a la mejor tienda de vinos!!!"} />
    </>
  )
}

export default App
