import React from 'react'

const List = () => {

const mevalar = [
   {  name: 'Olma', id: 1 },
   {  name: 'Anor', id: 2 },
   {  name: 'Banan', id: 3 },
   {  name: 'Apelsin', id: 4 }
]

const meva = mevalar.map(meva => <li key={meva.id}>{meva.name}</li>)

  return (
    <ol>
      {meva}
    </ol>
  )
}

export default List