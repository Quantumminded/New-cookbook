import React from 'react';
import { useQuery, gql} from '@apollo/client';
import { useParams, Link } from 'react-router-dom'


const CATEGORY = gql `
  query GetCategory($id: ID!) {
    category(id: $id) {
      data{
        id
        attributes{
          title
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
        }
      }
    }
  }`

// create Category page 

export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY,{
    variables: { id: id },
  })

  if (loading) return <p>Loading ...........</p>
  if (error) return <p>Error 404 !!!!!!!!!!!</p>

  console.log(data.category.data)

  return (
    <div>
      <h2>{data.category.data.attributes.title}</h2>
        {data.category.data.attributes.recipes.data.map(recipe => (
             <div key={recipe.id} className="recipe-card" >
              <img  src={`http://localhost:1337${recipe.attributes.image.data.attributes.url}`} alt='img'/>

              <h2 className='recipe-title'>{recipe.attributes.title}</h2>
              <p className="card-text">{recipe.attributes.description.substring(0, 200)} ...</p>

              <Link to={`/recipe/${recipe.id}`}><h4>Full Recipe</h4></Link>
             </div>
         ))}
    </div>
  )
}
