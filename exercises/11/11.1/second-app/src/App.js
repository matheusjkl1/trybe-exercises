import logo from './logo.svg';
import './App.css';

const commitments = ['Spanka Spooza','Alimentar Rato','Ver Anime']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('O link foi clicado.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Clique Aqui
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <ol>{task('Manga, Bokuben')}</ol>
      <button>{ActionLink()}</button>
    </div>
    
  );
}

export default App;
