import { createContext, useEffect, useState } from "react";

export const UserApiContext = createContext();
export const userApiProvider = ({children})=>{
    const [users,setUsers] = useState(true);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            }catch(error){
                console.error("errror fetching datas:",error);
                
            }finally{
                setLoading(false);
            }
        }
        fetchUser();
    },[]);
    return(
        <UserApiContext.Provider value={{users,loading}}>
            {children}
        </UserApiContext.Provider>
    )
}