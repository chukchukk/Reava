import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

export default class GroupStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: props.group
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        // console.log(this.state.group)
    }

    render() {

        return (
            <ul>
                {this.state.group.students.map((student)=>{
                    return <li>{student.login}</li>
                })}
            </ul>
        )
    }
}