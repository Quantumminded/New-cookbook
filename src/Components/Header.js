import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
        <img src="./img/pizza.jpg" alt="Logo"></img>
        <Link to="/"><h1>Welcome to Vale&Ada's secret recipe book !!!</h1></Link>
        
    </div>
  )
}
