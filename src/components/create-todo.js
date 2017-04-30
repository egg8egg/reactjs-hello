'use strict'

import React from 'react';
export default class CreateTodo extends React.Component {
	render(){
		return (
			<form onSubmit={this.handelCreate.bind(this)}>
				<input type='text' placeholder='input todos' ref='creatInput'/>
				<button>Create</button>
			</form>
		);
	}
	handelCreate(event){
		event.preventDefault();

		const input = this.refs.creatInput.value;
		const validationFail = this.validateInput(input);
		if(validationFail)
			alert(validationFail);
		else{
			this.props.createTodo(this.refs.creatInput.value);
			this.refs.creatInput.value = '';
		}
		
	}
	validateInput(input){
		if(!input)
			return "no input!!!!";
		else if(_.find(this.props.todos, todo => todo.task === input))
			return "duplicated input!!!!";
		return null;
	}
}