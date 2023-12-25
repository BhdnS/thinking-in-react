import FilterableProductTable from "./components/FilterableProductTable.jsx";
import data from "./data/data.js";

function App() {
  return (
    <>
      <FilterableProductTable products={data}/>
    </>
  )
}

export default App
