import React from 'react'
import { useParams } from 'react-router-dom'
import recipesJSON from '../recipes.json';

const RecipesDetail = () => {
  const params = useParams();

  return (
    <div>
      {/* <p>{params.recipeID}</p> */}
      <h1>{recipesJSON[params.recipeID-1].title}</h1>
      <ul>
        {recipesJSON[params.recipeID-1].ingredients.map((ingrediente) => {
          return <li>{ingrediente}</li>
        })}
      </ul>
    </div>
  )
}

export default RecipesDetail
