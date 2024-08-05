import React from 'react'

const ResultsPage = ({searchResults}) => {
  console.log(searchResults);
  const{meta}= searchResults[0]
  console.log(meta.id)
  return (
    <div>{meta.id}</div>
  )
}

export default ResultsPage