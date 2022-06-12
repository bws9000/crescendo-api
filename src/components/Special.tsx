import { useParams } from "react-router-dom";

import SpecialData from "../data/SpecialData";

const Special:React.FC = () =>{

    const { uuid } = useParams();
    const uri = "http://localhost:3001/specials/" + uuid;

    const { specialResult, specialErrorMessage } = SpecialData({uri:uri});

    return(

        <>
        {!specialErrorMessage ? 
            <>
            <h1>{specialResult[0]?.title} ({specialResult[0]?.type})</h1>
            <div className="recipeBox">
            <p>{specialResult[0]?.text}</p>
            <div>
                <a target="_blank" href={ "https://www.google.com/maps/search/?api=1&query=" + 
            specialResult[0]?.geo }>Where</a>
            </div>
            </div>
            </>
            : <h1>{specialErrorMessage}</h1>
            }
        </>

    );
}

export default Special;

// {
//     "uuid": "233d8582-141a-460d-b7e1-d623afd69e7d",
//     "ingredientId": "62798278-2fbc-4c31-98de-b7959c191688",
//     "type": "event",
//     "title": "Bratmas Party",
//     "geo": "43.032446,-87.908098",
//     "text": "Join us at Sweet Diner for this Special Holiday Event!"
// }