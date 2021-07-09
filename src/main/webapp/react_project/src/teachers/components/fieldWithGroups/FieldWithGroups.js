import React, {Component} from 'react';
import axios from "axios";
import GroupItems from "../groupItems/GroupItems";
import {Route} from "react-router-dom";
import GroupStudents from "../groupStudents/GroupStudents";

export default class FieldWithGroups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            groupName: ""
        }

        this.addGroup = this.addGroup.bind(this)
        this.writeGroup = this.writeGroup.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:7777/group/takeGroups")

            .then(response => response.data)
            .then((data) => {
                this.setState({groups: data})
                // console.log(this.state.groups[0].groupName)
            })
    }

    writeGroup(event) {
        this.setState({
            groupName: event.target.value
        })
    }

    addGroup() {

        axios.post("http://localhost:7777/group/addGroup", {groupName: this.state.groupName})

            .then(response => response.data)
            .then((data) => {
                this.setState({groups: data})
                // console.log(this.state.groups[0].groupName)
            })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.writeGroup}/>
                <input type="button" value="Добавить" onClick={this.addGroup}/>
                <GroupItems groups={this.state.groups}/>
                {
                    this.state.groups.map((group) => {
                        // console.log(group)
                        return <Route path={"/wasClick/" + this.state.groups.indexOf(group)}><GroupStudents
                            group={group}/></Route>

                    })
                }

            </div>
        )
    }
}