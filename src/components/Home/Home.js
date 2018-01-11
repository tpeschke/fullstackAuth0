import React, { Component } from 'react'
import bankSvg from './communityBank.svg'
import './Home.css'

export default function Home() {
    return (
        <div className='App'>
            <img src={bankSvg}/>
            <a href={process.env.REACT_APP_LOGIN}
            ><button>Login</button></a>
        </div>
    )
}