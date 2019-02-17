import React, { Component } from 'react';
import UserList from '../container/userLlist.container';
import { Prompt } from 'react-router';
import '../../css/profile.css';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: 'test',
            lname: 'dev',
            email: 'test@dev.com',
            password: '',
            bdate: '',
            isUnsaved: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        window.onbeforeunload = null;
    }
     componentDidUpdate() {
        // Detecting browser close
        window.onbeforeunload = this.state.isUnsaved ? ((e) => this.confirm(e, 'Are you sure want to logout')) : true;
     }
     confirm(e, message) {
        e = e || window.event;

        var message = 'Any text will block the navigation and display a prompt';
    
        // For IE6-8 and Firefox prior to version 4
        if (e) 
        {
            e.returnValue = message;
        }
    
        // For Chrome, Safari, IE8+ and Opera 12+
        return message;
    
     }
    validate(e, name) {
        this.setState({isUnsaved: true});
        if(name !== 'email' && name !== 'password') {
            this.setState({ [name]: e.target.value.replace(/[^a-zA-Z]/g, "") });
        } else {
            this.setState({ [name]: e.target.value.replace(/\s/g, "") });
        }
    }
    updateDate(e) {
        this.setState({bdate: e.target.value});
    }
    isValidate() {
        if(this.state.fname && this.state.lname && this.state.email && this.state.password && this.state.bdate) {
            return true;
        }
        return false;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.isValidate()) {
            this.setState({isUnsaved: false});
            const data = {
                'first_name': this.state.fname,
                'last_name': this.state.lname,
                'email': this.state.email,
                'birthdate': this.state.bdate
            }
            this.props.saveProfileData(data);
        }
    }
    render() {
        return (
            <div>
                <h1 className="title">My Profile</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row p-1">
                                <div className="col-md-6 text-label">
                                    <label className="p-1">First Name: </label>
                                </div>
                                <div className="col-md-6">
                                    <input className="p-1" type ="text" maxLength="50" value={this.state.fname} onChange={(e) => this.validate(e, 'fname')}/>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col-md-6 text-label">
                                    <label className="p-1">Last Name: </label>
                                </div>
                                <div className="col-md-6">
                                    <input className="p-1" type="text" maxLength="50" value={this.state.lname} onChange={(e) => this.validate(e, 'lname')}/>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col-md-6 text-label">
                                    <label className="p-1">Email: </label>
                                </div>
                                <div className="col-md-6">
                                    <input className="p-1" type="email" value={this.state.email} onChange={(e) => this.validate(e, 'email')}/>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col-md-6 text-label">
                                    <label className="p-1">password: </label>
                                </div>
                                <div className="col-md-6">
                                    <input className="p-1" type="password" maxLength="30" value={this.state.password} onChange={(e) => this.validate(e, 'password')}/>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col-md-6 text-label">
                                    <label className="p-1">Birthdate: </label>
                                </div>
                                <div className="col-md-6">
                                    <input className="p-1" type="date" maxLength="50" onChange={(e) => this.updateDate(e)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 submit-button p-2">
                                    <input className="btn p-2" type="button" value="Save" name="Save" onClick={this.handleSubmit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h1> User Lists </h1>
                
                <Prompt
                    when={true}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
            </div>
        );
    }
}
 
export default ProfileComponent;