import React,{createContext,useState} from 'react';

export const AllData=createContext();

function State_container(props) {
    const [user,setUser]=useState();
    const [logged,setLogged]=useState(false);

    return (
        <AllData.Provider value={[user,setUser,logged,setLogged]}>
            {props.children}
        </AllData.Provider>
    )
}

export default State_container
