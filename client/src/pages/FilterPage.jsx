import React from 'react'
import { useParams } from 'react-router-dom'

const FilterPage = ({worbitesData}) => {
  const {pos}  = useParams()
  const{count,worbiteAdded} = worbitesData
  console.log(worbiteAdded);
  
  return (
    <div>{`${pos[0].toUpperCase() + pos.slice(1)} (${count})`}</div>
  )
}

export default FilterPage