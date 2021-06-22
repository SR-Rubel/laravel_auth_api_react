import React,{useContext} from 'react'
import {AllData} from '../State_container'

function Header() {

    const [user,setUser]=useContext(AllData);

    return (
        <div>
            {user}
        </div>
    )
}

export default Header
