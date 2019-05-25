import React from 'react';
import Todo from "./Todo";



class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
        <ul>
            {
                this.props.todos.map((curr, index) => <Todo key={curr.id}task={curr.taskText} complete={curr.completed} xClick={() => this.props.todoXClick(index)} cClick={() => this.props.toggleComplete(index)}/>)
            }
        </ul>
        );
    }
}

export default TodoList;