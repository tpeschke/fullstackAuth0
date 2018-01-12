import React, { Component } from 'react'


export default class Recommended extends Component {
    constructor() {
        super()

        this.state = {
            recom: []
        }
    }

    componentDidMount() {
        
    }

    render() {        
        return (
            <div className=''>
                <div>
                    Recommended Friends
                    <div>
                        sorted by <input />
                    </div>
                </div>

                <div>
                </div>
            </div>
        )
    }
}