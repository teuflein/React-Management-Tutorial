import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthdate={this.props.birthdate} gender={this.props.gender} profession={this.props.profession}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>                
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }

}


class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthdate}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.profession}</p>
            </div>
        )
    }
}
export default Customer;