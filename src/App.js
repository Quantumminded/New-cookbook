import './App.css';

// import react router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import all pages and components
import Homepage from "./page/Homepage";
import Category from "./page/Category";
import Recipe from "./page/Recipe";
import Header from "./Components/Header";


// create the router tree

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello!!!!!!!!!!!!!
        </div>
      </header>
    </div>
  );
}

export default App;
