import React, {useState} from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'

export default function MoleContainer(props) {
   // Display state
   let [mole, setMole] = useState(false)

   // Handle Mole Bopping
   const handleClick = (e) => {
       //adding +1 to current score
       props.setScore(props.score + 1)
       //setMole back to false
       setMole(false)
       }

   // Determine which display to render
   let displayMole =  mole 
   ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} />
    : <EmptySlot toggle={setMole} />
      
   return (
       <div>
           {displayMole}
       </div>
   )
}
