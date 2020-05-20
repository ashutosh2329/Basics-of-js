import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
		return <div className="style" >
		      <h1> Hellow {props.name} </h1>
		      <p> myself ashutosh </p>
		      </div>
}



export default Demo;