import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

// create home page 
export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/recipes?populate=image')

    if (loading) return <p>Loading ...........</p> 
    if (error) return <p>Error 404 !!!!!!!!!!!</p>

    console.log(data.data[0].attributes.image.data.attributes)
  return (
    <div>
        {data.data.map(recipe => (
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
