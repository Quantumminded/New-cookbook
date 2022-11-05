import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
// import Hook
// import useFetch from '../Hooks/useFetch'


//create query with variables
const RECIPE = gql`
  query getRecipe($id: ID!) {
    recipe(id: $id) {
      data {
        id
        attributes{
          title,
          description,
          ingredients,
          procedure,
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

export default function Recipe() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(RECIPE,{
    variables: { id: id },
  })

  if (loading) return <p>Loading ...........</p>
  if (error) return <p>Error 404 !!!!!!!!!!!</p>

  console.log(data)
// create display Recipe page
  return (
    <div>
      <div className="recipe-card">
        <h2 className="recipe-title">{data.recipe.data.attributes.title}</h2>
        <img src={`http://localhost:1337${data.recipe.data.attributes.image.data.attributes.url}`} alt='img'/>
        <h3>DESCRIPTION</h3>
        <p className="description">{data.recipe.data.attributes.description}</p>
        <h3>INGRIDIENTS</h3>
        <li className="ingredients">{data.recipe.data.attributes.ingredients}</li>
        <h3>POCEDURE</h3>
        <p className="procedure">{data.recipe.data.attributes.procedure}</p>
      </div>
    </div>
  );
}

