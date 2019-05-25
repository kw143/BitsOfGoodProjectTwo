import React from 'react';
import TodoList from "./TodoList";
import InputLine from "./InputLine";
import axios from "axios";

const apiUrl = "/todos";
const dummyData = [{taskText: "Do Laundry", completed: false}, {taskText: "Sleep", completed: true}, {taskText: "Eat", completed: false}, {taskText: "Die", completed: false}];

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

    checkTask(index) {
        dummyData[index].completed = !dummyData[index].completed;
        this.setState((state) => ({
            todos: dummyData
        }));
    }

    removeTodo(index) {
        dummyData.splice(index,1);
        this.setState((state) => ({
            todos: dummyData
        }));
    }

    addTodo(task) {
        axios.post(apiUrl + '/add', {taskText: task, completed: false})
            .then(function (response) {
                this.setState({ todos: this.state.todos.concat(response.data)});
            })
            .catch(function (error) {
                console.log(error);
            });
        /*dummyData.push({taskText: task, completed: false});
        this.setState((state) => ({
            todos: dummyData
        }));*/
    }

    componentDidMount() {
        this.setState((state) => ({
            todos: dummyData
        }));
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