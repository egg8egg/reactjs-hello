'use strict'

import React from 'react';
export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
	
			isEditing: false
		};
	}
	renderTaskSections(){
		const {task, isCompleted} = this.props;
		const colorStyle = { 
			color: this.props.isCompleted ? 'green' : 'red',
			cursor: 'pointer'
		};
		if(this.state.isEditing)
			return (
				<td>
				<form onSubmit={this.handelEdit.bind(this)}>
					<input type='text' defaultValue={task} ref='editTodo'/>
				</form>
				</td>
			);
		return (
			<td onClick={this.props.taggleTask.bind(this,task)} style={colorStyle}>{task}</td>
		);
	}
	renderActionSections(){
		if(this.state.isEditing){
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}
		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
			</td>
		);
	}
	render(){
		return (
				<tr>
					{this.renderTaskSections()}
					{this.renderActionSections()}
				</tr>
		);
	}
	onEditClick(){
		this.setState({isEditing:true});
	}
	onCancelClick(){
		this.setState({isEditing:false});
	}
	onSaveClick(){
		// console.log(this.props);
		const oldTask = this.props.task;
		const newTask = this.refs.editTodo.value
		this.props.saveTodo(newTask, oldTask);
		this.setState({isEditing:false});
	}
	onDeleteClick(){
		const deleteTask = this.props.task;
		this.props.deleteTodo(deleteTask);
	}
	handelEdit(event){
		event.preventDefault();
		// this.props.task = this.refs.editTodo.value;
		this.setState({
			task:this.refs.editTodo.value
			
		});
		console.log(this.props);
		this.setState({isEditing:false});
	}
}