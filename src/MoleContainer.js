import React, { useState } from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'

export default function MoleContainer(props) {
  // useState
  let [mole, setMole] = useState(false)

  // Handle Mole Bopping
  const handleClick = (e) => {
    //increment score by 1
    props.setScore(props.score + 1)
    //setMole back to false
    setMole(false)
  }

  // Determine which display to render
  let displayMole = mole ?
    <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} />
    : <EmptySlot toggle={setMole} />

  return (
    <div style={{ display: "inline-block", width: "17vw" }}>
      {displayMole}
    </div>
  )
}
