import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const houses = [
    'Gryffindor',
    'Ravenclaw',
    'Hufflepuff',
    'Slytherin',
    'Unknown'
  ]
  return (
      <div>
         {houses.map(house => {
           return (
             <Link to={`/house/${house}`}>
               <h1>{house}</h1>
             </Link>
           )
         })}
      </div>
  )
}

export default Home
