import React from 'react'
// import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const RECIPES = gql`
query getData {
  recipes {
    data {
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
    <div>
        {data.recipes.data.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={`http://localhost:1337${recipe.attributes.image.data.attributes.url}`} alt='img'/>

              <h2 className='recipe-title'>{recipe.attributes.title}</h2>
              <p className='description'>{recipe.attributes.description.substring(0, 200)} ...</p>

              <Link to={`/recipe/${recipe.id}`}><h4>Full Recipe</h4></Link>
        </div>
        ))}
    </div>
  )
}
