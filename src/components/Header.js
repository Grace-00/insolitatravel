import React, {useContext} from 'react'
import { ContextAPI } from '../context/ContextAPI'

function Header() {

const resultsAPI = useContext(ContextAPI)

    return (
        <div>
            <h1>{resultsAPI.customerName}</h1>
            <h2>{resultsAPI.title}</h2>
        </div>
    )
}

export default Header
