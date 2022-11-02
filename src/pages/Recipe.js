import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

// create Recipe page

export default function Recipe() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/recipes/' + id)

  if (loading) return <p>Loading ...........</p>
  if (error) return <p>Error 404 !!!!!!!!!!!</p>

  console.log(data.data)

  return (
    <div>
      <div className="recipe-card">
        <img
          src="http://localhost:1337/uploads/apple_galette_25_600x900_af34d53f83.jpg"
          alt="img"
        />

        <h2 className="recipe-title">{data.data.attributes.title}</h2>
        <h3>DESCRIPTION</h3>
        <p className="description">{data.data.attributes.description}</p>
        <h3>INGRIDIENTS</h3>
        <li className="ingredients">{data.data.attributes.ingredients}</li>
        <h3>POCEDURE</h3>
        <p className="procedure">{data.data.attributes.procedure}</p>
      </div>
    </div>
  );
}
