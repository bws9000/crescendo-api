import { Link } from "react-router-dom";

import RecipeData from "../data/RecipeData";

const Main:React.FC = () => {

    const uri = "http://localhost:3001/recipes";
    const {recipeResult, recipeErrorMessage} = RecipeData({uri:uri});
    
    return (
        
        <>
            <h1>Recipe App</h1>
            <div className="recipeBox">
                <h2>Recipes</h2>
                <ul>
                    {!recipeErrorMessage && recipeResult ? (
                        recipeResult.map((elem,i) => 
                        <li key={i}>
                            <div className="recipeBox singleRecipe">
                                <img src={elem?.images.small} />
                                <Link to={"recipe/" + elem?.uuid }>{elem?.title}</Link>
                            </div>
                        </li>
                        )
                    ):(
                        <div>{recipeErrorMessage}</div>
                    )
                    }       
                </ul>
            </div>
        </>
      );
}

export default Main;
