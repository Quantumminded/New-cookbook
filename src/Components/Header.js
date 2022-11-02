import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
        <h1>Welcome to Vale&Ada's secret recipe book !!!</h1>
        <Link to="/"><h3>I'm a Link to ...</h3></Link>
        <img src="" alt="Logo"></img>
    </div>
  )
}
