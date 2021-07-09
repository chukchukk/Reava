import React, {Component} from 'react'
import {NavLink, Route} from "react-router-dom";

export default class GroupItems extends Component{

    constructor(props) {
        super(props);

        this.state = {
            str: ""
        }
    }

    render() {
        return(
            <ul>
                {
                    this.props.groups.map((group)=>{
                        return <NavLink to={"/wasClick/"+this.props.groups.indexOf(group)}><li>{group.groupName}</li></NavLink>
                    })
                }
            </ul>
        )
    }
}