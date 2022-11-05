import React from 'react';
// import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import  Button  from 'react-bootstrap/Button';
import  Card  from 'react-bootstrap/Card';

const RECIPES = gql`
query getRecipes {
  recipes {
    data {
      id
      attributes{
        title,
        description,
        ingredients,
        procedure
        image{
          data {
            attributes {
              url
            }
          }
        }
      }
      }
    }
  }`

// create home page 
export default function Homepage() {

    // const { loading, error, data } = useFetch('http://localhost:1337/api/recipes?populate=image')

    const { loading, error, data } = useQuery(RECIPES)

    if (loading) return <p>Loading ...........</p> 
    if (error) return <p>Error 404 !!!!!!!!!!!</p>

    console.log(data)
  return (
     <div className='card-wrap'>
         {data.recipes.data.map(recipe => (
             <div key={recipe.id} className="recipe-card" >
              <img  src={`http://localhost:1337${recipe.attributes.image.data.attributes.url}`} alt='img'/>

              <h2 className='recipe-title'>{recipe.attributes.title}</h2>
              <p className="card-text">{recipe.attributes.description.substring(0, 200)} ...</p>

              <Link to={`/recipe/${recipe.id}`}><h4>Full Recipe</h4></Link>
             </div>
         ))}
     </div>

  )

  // CARD WITH BOOTYSTRAP
//   return (
//     <div className='card-wrap'>
//         {data.recipes.data.map(recipe => (
//           <Card key={recipe.id} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={`http://localhost:1337${recipe.attributes.image.data.attributes.url}`} />
//             <Card.Body>
//             <Card.Title>{recipe.attributes.title}</Card.Title>
//             <Card.Text>{recipe.attributes.description.substring(0, 200)} ...</Card.Text>
//             <Button variant="info"><Link to={`/recipe/${recipe.id}`}>Full Recipe</Link></Button>
//             </Card.Body>
//           </Card>
//         ))}
//     </div>
//     )
// 
}
