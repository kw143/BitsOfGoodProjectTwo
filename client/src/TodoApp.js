import React from 'react';
import TodoList from "./TodoList";
import InputLine from "./InputLine";
import axios from "axios";

const apiUrl = "/todos";

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.checkTask = this.checkTask.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    checkTask(id, complete) {
        axios.post(apiUrl + "/toggle", {id: id, complete: complete})
            .then((response) => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    removeTodo(id) {
        axios.post(apiUrl + "/remove", {id: id})
            .then((response) => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addTodo(task) {
        axios.post(apiUrl + '/add', {taskText: task, completed: false})
            .then((response) => {
                this.setState({ todos: this.state.todos.concat(response.data)});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        axios.get(apiUrl + '/all')
            .then((response) => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <InputLine onSubmit={this.addTodo}/>
                <TodoList todos={this.state.todos} todoXClick={this.removeTodo} toggleComplete={this.checkTask}/>
            </div>
        );
    }
}

export default TodoApp;