import logo from './logo.svg';
import './App.css';

const element = <h1>Hello, JSX</h1>;
const classe = 'myAncestor';
const classeApp = 'App-header'
const textJSX= <h1 className={classe}> Hello, JSX My Ancestor</h1>

function App() {
  return (
    <div className={classeApp}>
    <div>{element}</div>
    <div>{textJSX}</div>
    </div>
  );
}

export default App;
