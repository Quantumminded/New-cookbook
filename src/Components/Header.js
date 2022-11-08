import React from 'react';
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
  query GetCategories {
    categories{
      data{
        id
        attributes{
          title
        }
      }
    }
  }`

export default function Header() {

  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading ...........</p> 
  if (error) return <p>Error 404 !!!!!!!!!!!</p>

  console.log(data.categories.data[0].id)
  return (
    <div className="header">
      <Link className='Home-button' to='/'>The secret book of Ada&Vale recipes</Link>
        <nav className="categories">
          {data.categories.data.map(category => (
              <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.title}</Link>
          ))}
        </nav>
    </div>
  )
}
