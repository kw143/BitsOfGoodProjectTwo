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
    }

    checkTask(id) {
        axios.post(apiUrl + "/toggle")
            .then(function (response) {
                this.setState({
                    todos: this.state.todos.filter(item => {
                        if (item.id == id) {
                            item.completed = !item.completed;
                        }
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    removeTodo(id) {
        axios.post(apiUrl + "/remove")
            .then(function (response) {
                let newArray = response.data.filter(item => {
                    if (item.id == id) {
                        item.completed = !item.completed;
                    }
                });
                this.setState({todos: newArray});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addTodo(task) {
        axios.post(apiUrl + '/add', {taskText: task, completed: false})
            .then(function (response) {
                let newArray = response.data.splice(response.data.findIndex((item) => {
                    return item.id == id;
                }), 1);
                this.setState({todos: newArray});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        axios.get(apiUrl + '/all')
            .then(function (response) {
                this.setState({todos: this.state.todos.concat(response.data)});
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