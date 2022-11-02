
// import react router DOM
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

// import all pages and components
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";

// create the router tree 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
