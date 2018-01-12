import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Bio extends Component {

    render() {
        return (
            <div className=''>
                <div>
                {this.props ? <img className='avatar' src={this.props.img} /> : null}
                <p>{this.props ? this.props.first : null}</p>
                <p>{this.props ? this.props.last : null}</p>
                <Link to='/profile/edit'> <button>Edit Profile</button> </Link>
                </div>

            </div>
        )
    }
}