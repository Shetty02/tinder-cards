import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'


function TinderCards() {
  // Hooks are functions that can be used in React components.
  const [cars, setCars] = React.useState([
    {
      name: 'Tesla',
      url:'https://images.hgmsites.net/med/tesla-cybertruck_100725713_m.jpg'
    },
    {
      name:'BMW',
      url:'https://hips.hearstapps.com/hmg-prod/images/2019-bmw-i8-roadster-101-1541523536.jpg?crop=0.819xw:1.00xh;0.0929xw,0&resize=640:*'
    },
    {
      name:'Lykan',
      url:'https://www.motorbiscuit.com/wp-content/uploads/2020/06/Lykan-Hypersport-cover.jpg?w=1024&h=512'
    },
    {
      name:'Porche',
      url:'https://imgd.aeplcdn.com/0x0/cw/ec/39232/Porsche-New-911-Exterior-153677.jpg?wm=1'
    }

  ]);


  return (
    <div className='card-container'>
      {
        cars.map( car => (
          <TinderCard
          className='swipe'
          key={car.name}
          preventSwipe={['up','down']}
          >
            <div
            style={ { backgroundImage:`url(${car.url})` } }
             className='card'
             >
              <h2>{car.name}</h2>
            </div>
          </TinderCard>

        ))
      }
    </div>
  )
}

export default TinderCards