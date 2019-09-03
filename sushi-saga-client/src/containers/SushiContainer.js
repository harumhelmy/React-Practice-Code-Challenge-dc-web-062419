import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
      <div className="belt">
        {
          props.sushi.map( sushi => {
            return <Sushi key={sushi.id} 
                          sushi={sushi} 
                          eatSushi={props.eatSushi} 
                          eatenSushi={props.eatenSushi}/>
          })          
        }

        <MoreButton getFourMoreSushi={props.getFourMoreSushi}/>
      
      </div>
  )
}

export default SushiContainer