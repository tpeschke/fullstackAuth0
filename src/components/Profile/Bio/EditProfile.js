import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link } from 'react-router-dom'

import {changeUserInfo} from '../../../ducks/users'

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: "",
            last: ''
        }
    }

    handleFirst = (e) => {
        this.setState({ first: e })
    }

    handleLast = (e) => {
        this.setState({ last: e })
    }

    sendChanges = () => {
        var edits = {
            first: this.state.first,
            last: this.state.last,
            id: this.props.user.id
        }

        this.props.changeUserInfo(edits)
    }

    render() {
        var { first_name, last_name } = this.props.user
        return (
            <div className=''>
                <Link to='/profile/'><button onClick={this.sendChanges}>Update</button></Link>

                First Name
                <input placeholder={first_name}
                    onBlur={e => this.handleFirst(e.target.value)} />
                Last Name
                <input placeholder={last_name}
                    onBlur={e => this.handleLast(e.target.value)} />
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

// sim3 83C
export default connect(mapStateToProps, { changeUserInfo })(EditProfile)