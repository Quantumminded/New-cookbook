
// import react router DOM
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
//import apollo 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { Button } from 'react-bootstrap/Button';
// import { Card } from 'react-bootstrap/Card';

// import all pages and components
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache() 
})

// create the router tree 
function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
