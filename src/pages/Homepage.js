import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

// create home page 
export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/recipes?populate=*')

    if (loading) return <p>Loading ...........</p>
    if (error) return <p>Error 404 !!!!!!!!!!!</p>

    console.log(data.data[0].attributes.image.data.attributes.url)
  return (
    <div>
        {data.data.map(recipe => (
            <div className="recipe-card">
            <h2 className='recipe-title'>{recipe.attributes.title}</h2>
            <p className='description'>{recipe.attributes.description.substring(0, 20)}</p>
            <p className='ingredients'>{recipe.attributes.ingredients.substring(0, 20)}</p>
            <p className='procedure'>{recipe.attributes.procedure.substring(0, 20)}</p>
            <img src='#' alt='img'/>
        </div>
        ))}
    </div>
  )
}
