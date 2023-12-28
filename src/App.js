
import './App.css';
import { useEffect, useState } from "react";
import video from './food2.mp4';
import iconSearch from './search.png'
import MyRecipesComponent from './MyRecipesComponent';


function App (){

const MY_ID = 'd289dbd7';
const MY_KEY ='eda81482bf620aa5d306cbe4457c9ca4'


const [mySearch,setMySearch] = useState('');
const [myRecipes, setMyRecipes]=useState([]);
const [wordSubmitted, setWordSubmitted]=useState('lemon');

useEffect( ()=>{
  const getRecipe = async ()=>{
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits)
}
  getRecipe();
}, [wordSubmitted])


const myRecipeSearch = (e)=>{
setMySearch(e.target.value)
}
const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch)
}

return (
<div className="App">

<div className="container">
  <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
  </video>
  <h1>Find a Recipe</h1>
</div>

<div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='search' onChange={myRecipeSearch} value={mySearch}/>
     </form>
     <button className='btnSearch' onClick={finalSearch}>
        <img src={iconSearch} className="icon" alt="icon"/>
     </button>
</div>

{myRecipes.map ((element,index) =>(
<MyRecipesComponent key={index}
label = {element.recipe.label}
image = {element.recipe.image}
calories= {element.recipe.calories}
ingredients= {element.recipe.ingredientLines}
dishtype= {element.recipe.dishType[0]}
/>

))}

</div>
  );
}

export default App;
