import React,{createContext,useState} from 'react';

export const AllData=createContext();

function State_container(props) {
    const [user,setUser]=useState('hello');

    return (
        <AllData.Provider value={[user,setUser]}>
            {props.children}
        </AllData.Provider>
    )
}

export default State_container
