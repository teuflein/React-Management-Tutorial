import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/5',
  'name' : '전준재',
  'birthdate' : '730712',
  'gender' : '남자',
  'profession' : '직장인'
}

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthdate={customer.birthdate}
        gender={customer.gender}
        profession={customer.profession}
      />
    )
  }
}


export default App;
