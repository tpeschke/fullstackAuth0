import React, { Component } from 'react'
import './Private.css';
import { connect } from 'react-redux'
import { getUserInfo } from '../../ducks/users'
import {Link, Switch, Route } from 'react-router-dom'


import Bio from './Bio/Bio'
import view from './Bio/view'

class Profile extends Component {

    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        return (
            <div>
                <Bio
                    first={this.props.user.first_name}
                    last={this.props.user.last_name}
                    img={this.props.user.img} />
                {view}
            </div>
        )
    }
}

function mapStateToProps(state) {
    var { user } = state

    return {
        user: user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Profile)