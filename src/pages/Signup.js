import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            email: '',
            password: '',
        };
        
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password);
        } catch(error) {
            this.setState({error: error.message})
        }
    }

    
    render() {
        return(
            <div>
                <form action="" 
                onSubmit= {this.handleSubmit} 
                >
                    <h1>Sign Up to <Link to="/" >ChatterBox</Link> </h1>
                    <p>Fill the form below to create your account. </p>
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={this.handleChange} 
                            value={this.state.email}
                            />
                    </div>

                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={this.handleChange} 
                            value={this.state.password}
                            />
                    </div>
                    <div>
                        {this.state.error ? <p> {this.state.error} </p> : null }
                        <button type="submit" > Sign Up </button>
                    </div>
                    <hr/> <hr/>
                    <p>Already have an account ? <Link to="/login"> Login </Link></p>
                </form>
            </div>
        );
    }
}