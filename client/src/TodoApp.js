import React from 'react';
import TodoList from "./TodoList";
import InputLine from "./InputLine";

const dummyData = [{taskText: "Do Laundry", completed: false}, {taskText: "Sleep", completed: true}, {taskText: "Eat", completed: false}, {taskText: "Die", completed: false}];

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.setState((state) => ({
            todos: dummyData
        }));
    }


    render() {
        return (
            <div>
                <InputLine />
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default TodoApp;