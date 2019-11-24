import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import './Home.css'

// export default class Home extends Component {
//   state = {
//     houseBg : [
//       'Gryffindor',
//       'Ravenclaw',
//       'Hufflepuff',
//       'Slytherin',
//       'Unknown'
//     ],
//     gryffindorStyle : true
//   }
//   render() {
//     return (
//          <div className='home-home'>
//          {houses.map(house => {
//            return (
//              <Link to={`/house/${house}`}>
//                {this.state.gryffindorStyle === true?
//   gryffindorStyle= {background:'red'}
//   :gryffindorStyle}

//                <h1 className='home-house'>{house}</h1>
//              </Link>
//            )
//          })}
//       </div>
//     )
//   }
// }


const Home = () => {
  const houses = [
    'GRYFFINDOR',
    'RAVENCLAW',
    'HUFFLEPUFF',
    'SLYTHERIN',
    'UNKNOWN'
  ]
  return (
      <div className='home-home'>
         {houses.map(house => {
           return (
             <Link to={`/house/${house}`}>
            
               <h1 className='home-house'>{house}</h1>
             </Link>
           )
         })}
      </div>
  )
}

export default Home
