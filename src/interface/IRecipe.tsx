interface images{
    full:string;
    medium:string;
    small:string;
}

interface ingredientObj {
    uuid:string;
    specialId:string;
    amount:number;
    measurement:string;
    name:string;
}

interface directionsObj {
    instructions:string,
    optional: boolean
}

export default interface IRecipe{
    uuid:string;
    title:string;
    description:string;
    images:images;
    servings:number;
    prepTime:number;
    cookTime:number;
    postDate:string;
    editDate:Date;
    ingredients: ingredientObj[];
    directions:directionsObj[];
}