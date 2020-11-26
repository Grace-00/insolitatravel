import React, {useContext} from 'react'
import { ContextAPI } from '../context/ContextAPI'

function Header() {

const resultsAPI = useContext(ContextAPI)

    return (
        <div>
            <h1>{resultsAPI.customerName}</h1>
        </div>
    )
}

export default Header
