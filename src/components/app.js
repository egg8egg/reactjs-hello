'use strict'

import React from 'react';
import TodosList from './todos-list'
import CreateTodo from './create-todo'

const todos = [
{
	task: 'coding',
	isCompleted: false
},
{
	task: 'breakfast',
	isCompleted: true
}
];
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos:todos
		};
	}

	render(){
		return (
			<div>
				<h1>Hello world app</h1>
				<CreateTodo createTodo = {this.addToList.bind(this)} todos={this.state.todos}/>
				<TodosList 
					todos = {this.state.todos}
					taggleTask = {this.taggleTask.bind(this)}
					saveTodo = {this.saveTodo.bind(this)}
					deleteTodo = {this.deleteTodo.bind(this)}
				/>
			</div>
		);
	}
	addToList(task){
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({
			todos:this.state.todos
		});
	}
	taggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos: this.state.todos});
	}
	saveTodo(newTask, oldTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({todos: this.state.todos});
	}
	deleteTodo(deleteTask){
		_.remove(this.state.todos, todo => todo.task === deleteTask);
		this.setState({todos: this.state.todos});
	}
}

















