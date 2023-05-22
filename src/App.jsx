import ItemListContainer from "./components/itemlist/ItemListContainer"
import NavBar from "./components/navbar/NavBar"
//import GridComponent from "./components/gridComponent/GridComponent"
//import Login from "./components/login/Login"

function App() {
  
  return (
    <>
      <NavBar />
      {/* <Login /> */}
      {/* <GridComponent /> */}
      <ItemListContainer greeting={"Bienvenidos a la mejor tienda de vinos!!!"} />
    </>
  )
}

export default App
