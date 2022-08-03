import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  const itemData = {
    greeting: '¡Hola a todos!'
  };

  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer itemData={itemData} />
    </div>
  );
}

export default App;
