import { useState } from "react";

import ISpecial from "../interface/ISpecial";

const SpecialData = ({uri}:{uri:string}) => {

    const [data, setData] = useState<ISpecial[]>();
    const [specialErrorMessage, setSpecialErrorMessage] = useState('');

    const fetchData = () => {

        fetch(uri)
                .then((res) => {
                    if(!res.ok) {
                        let err = 'API Error: ' + res.statusText;
                        setSpecialErrorMessage(err);
                        throw Error(err);
                    }
                    return res.json();
                })
                .then(data => setData(data))
                .catch(error => console.log(error))
    }

    const handleReturnStatus = () => {
        if(data instanceof Array ){
            return { specialResult:data, specialErrorMessage };
        } else {
            let singleRecipe = [data];
            return { specialResult:singleRecipe, specialErrorMessage};
        }
    }

    useState(()=>fetchData());

    return handleReturnStatus();

}

export default SpecialData;