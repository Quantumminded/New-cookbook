import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

// create home page 
export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/recipes?populate=*')

    if (loading) return <p>Loading ...........</p>
    if (error) return <p>Error 404 !!!!!!!!!!!</p>

    console.log(data.data[0])
  return (
    <div>
        {data.data.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src="http://localhost:1337/uploads/apple_galette_25_600x900_af34d53f83.jpg" alt='img'/>

              <h2 className='recipe-title'>{recipe.attributes.title}</h2>
              <p className='description'>{recipe.attributes.description.substring(0, 200)} ...</p>

              <Link to={`/recipe/${recipe.id}`}><h4>Full Recipe</h4></Link>
              
              
              {/* <img src={recipe.data.attributes.image.data.attributes.url} alt='img'/> */}
        </div>
        ))}
    </div>
  )
}
