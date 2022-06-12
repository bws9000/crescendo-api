import { Link, useParams } from "react-router-dom";

import RecipeData from "../data/RecipeData";
import SpecialData from "../data/SpecialData";

const Recipe:React.FC = () =>{

    const { uuid } = useParams();
    
    const uri = "http://localhost:3001/recipes/" + uuid;
    const sUri = "http://localhost:3001/specials";
    
    const { recipeResult, recipeErrorMessage } = RecipeData({uri:uri});
    const { specialResult, specialErrorMessage } = SpecialData({uri:sUri});


    const SortSpecials = (
        props:any) => {
        
        let specialUUID:any;
        
        if(!specialErrorMessage){
            specialResult.map((item)=>{
                if(props.uuid === item?.ingredientId){
                    specialUUID = <Link to={'/special/'+item?.uuid}>[&#128512;{item?.type}]</Link>;
                }
            });
        }

        return ( <div> {props.amount} - {props.measurement} {props.name} {specialUUID}</div> );
    }
    
    return(
        <>
        {!recipeErrorMessage ? 
            <>
            <h1>{recipeResult[0]?.title}</h1>
            <div className="recipeBox">
            <h2>{recipeResult[0]?.description}</h2>
                    <img src={recipeResult[0]?.images.medium} />
                    <ul>
                        <li>prep time: {recipeResult[0]?.prepTime}</li>
                        <li>servings: {recipeResult[0]?.servings}</li>
                        <li>cook time: {recipeResult[0]?.cookTime}</li>
                    </ul>

                    <h2>Ingredients:</h2>
                    <ul>
                        {recipeResult[0]?.ingredients.map((item, i) => 
                        <li key={i}>
                            <SortSpecials
                                amount={item.amount}
                                name={item.name} 
                                measurement={item.measurement}
                                uuid={item.uuid}
                                />
                        </li>

                        )}
                    </ul>

                    <h2>Directions:</h2>
                    <ul>
                        {recipeResult[0]?.directions.map((item, i) => {
                            let optional = '';
                            if (item.optional)
                                optional = '* optional';
                            return <li key={i}> ({i + 1}) {item.instructions}
                                <strong>{optional}</strong></li>;
                        }
                        )}
                    </ul>

                </div><span>posted on: {recipeResult[0]?.postDate}</span></>
            : <h1>{recipeErrorMessage}</h1>
            }
        </>
    )
}

export default Recipe;