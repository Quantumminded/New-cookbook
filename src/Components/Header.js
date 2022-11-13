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

    // <div className="header">
    //   <Link className='navbar-brand' to='/'>The secret book of Ada&Vale recipes</Link>
    //     <nav className="navbar navbar-dark bg-primary">
    //       {data.categories.data.map(category => (
    //           <Link className="nav-link" key={category.id} to={`/category/${category.id}`}>{category.attributes.title}</Link>
    //       ))}
    //     </nav>
    // </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img className='logo' src='https://cdn.discordapp.com/attachments/1029066043647328266/1040305195227283456/LOOL_FOOD.png' />
    {/* <a class="navbar-brand" href="#">The secret's Ada&Vale recipes</a> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={`/category/${data.categories.data[0].id}`}>{data.categories.data[0].attributes.title}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={`/category/${data.categories.data[1].id}`}>{data.categories.data[1].attributes.title}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={`/category/${data.categories.data[2].id}`}>{data.categories.data[2].attributes.title}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={`/category/${data.categories.data[3].id}`}>{data.categories.data[3].attributes.title}</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}
