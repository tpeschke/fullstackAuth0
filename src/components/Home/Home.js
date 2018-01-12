import React, { Component } from 'react'

export default function Home() {
    return (
        <div className='App'>
            <a href={process.env.REACT_APP_LOGIN}
            ><button>Login</button></a>
        </div>
    )
}