import React from 'react';
import '../CSS/registerForm.css'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    firstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName}, ${this.state.lastName}, ${this.state.email}, ${this.state.password}, Registered Successfully.`);
        console.log(this.state);
        this.setState ({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <h1>Employee Registration</h1>
                        <label>FirstName &nbsp;</label>
                        <input type="text" value={this.state.firstName} onChange={this.firstNameHandler} placeholder="First Name" /><br />
                        <label>LastName &nbsp;</label>
                        <input type="text" value={this.state.lastName} onChange={this.lastNameHandler} placeholder="Last Name" /><br />
                        <label>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="text" value={this.state.email} onChange={this.emailHandler} placeholder="email" /><br />
                        <label>Password &nbsp;&nbsp;</label>
                        <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password" /><br />

                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Register;
