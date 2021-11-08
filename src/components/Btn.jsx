import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import '../styles/btn.css'

const Btn = (props) => {
    return (
        <>

                <Link class='Btn1' to={props.path}>
                     <a class='btn-text'>{props.text}</a>
                </Link>
        </>
    )
}

export default Btn
