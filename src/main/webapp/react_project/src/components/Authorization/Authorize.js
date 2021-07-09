import React, {Component} from 'react';
import s from './Authorize.module.css';
import axios from 'axios';

export default class Authorize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }

        this.changeLogin = this.changeLogin.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.sendData = this.sendData.bind(this)
    }

    changeLogin(event) {
        this.setState({login: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    sendData(event) {
        const user = {
            login: this.state.login,
            password: this.state.password
        }

        axios.get("http://localhost:7777/checkUser", {params: user})
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })

    }

    render() {
        return (
            <div className={s.formWithInput}>
                <label>Login</label>
                <input className={s.inputForText} type="text" onChange={this.changeLogin}/>
                <label>Password</label>
                <input className={s.inputForText} type="text" onChange={this.changePassword}/>
                <input type="submit" value="Авторизация" onClick={this.sendData}/>
            </div>
        )
    }

}
