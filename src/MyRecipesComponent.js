import icon from './chek.png'
function MyRecipesComponent({label,image,calories, ingredients, dishtype}){
return (
<div >

<div className="container">
   <h2> {label}</h2>
</div>

<div className="container">
   <img src={image} alt="image dish"/>
</div>

<div className="container">
   <p className='dishtype-par'> {dishtype}</p>
</div>

<div className="container">
   <p> {calories.toFixed()} calories</p>
</div>

<div className='center'>
<ul className="container list">
{ingredients.map((ingredient, index) => (
<li key={index}>
  <img src={icon} className="icon"/> {ingredient}
</li>
))}
</ul>
</div>


</div>

)

}




export default MyRecipesComponent;