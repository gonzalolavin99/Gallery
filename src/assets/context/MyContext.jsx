import { createContext, useContext, useEffect, useState } from "react";
export const MyContext = createContext({});
const url = "/photos.json"
const MyContextProvider = ({children})=>{
    const [pics,setPics]=useState([]);

    useEffect(()=>{
        const getPics  = async() => {
            const data = await fetch (url);
            const res  = await data.json();
            setPics(res.photos);
        }
        getPics();
},[])
return <MyContext.Provider value={{pics,setPics}}>
    {children}
</MyContext.Provider>
}

export default MyContextProvider