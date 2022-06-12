import { useState } from "react";

import IRecipe from "../interface/IRecipe";

const RecipeData = ({uri}:{uri:string}) => {

    const [data, setData] = useState<IRecipe[]>();
    const [recipeErrorMessage, setRecipeErrorMessage] = useState('');

    const fetchData = () => {

        fetch(uri)
                .then((res) => {
                    if(!res.ok) {
                        let err = 'API Error: ' + res.statusText;
                        setRecipeErrorMessage(err);
                        throw Error(err);
                    }
                    return res.json();
                })
                .then(data => setData(data))
                .catch(error => console.log(error))
    }

    const handleReturnStatus = () => {
        if(data instanceof Array ){
            return { recipeResult:data, recipeErrorMessage };
        } else {
            let singleRecipe = [data];
            return { recipeResult:singleRecipe, recipeErrorMessage};
        }
    }

    useState(()=>fetchData());

    return handleReturnStatus();

}

export default RecipeData;