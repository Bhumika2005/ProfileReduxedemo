import React, { Component } from 'react';

export default class UserListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[{}]
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({data:nextProps});
    }
    element() {
        
    }
    render() {
       let element = this.state.data.map((row, index) => {
                    <div>
                        <span> FirstName: {row.first_name} </span>
                        <span> LastName: {row.last_name} </span>
                        <span> Email: {row.email} </span>
                        <span> Birthdate: {row.birthdate} </span>
                        <hr/>
                    </div>
                 });
        return (
            <div>
                {element}
            </div>
        );
    }
};