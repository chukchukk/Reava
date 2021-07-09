import React, {Component} from 'react';
import Header from "./components/header/Header";
import FieldWithGroups from "./components/fieldWithGroups/FieldWithGroups";

export default class TeachersPage extends Component{

    render() {
        return(
            <div>
                <Header/>
                <FieldWithGroups/>
            </div>

        )
    }

}