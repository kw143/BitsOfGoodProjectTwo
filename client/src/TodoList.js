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
                this.props.todos.map((curr, index) => <Todo key={curr.id}task={curr.task} complete={curr.completed} xClick={() => this.props.todoXClick(curr._id)} cClick={() => this.props.toggleComplete(curr._id, curr.completed)}/>)
            }
        </ul>
        );
    }
}

export default TodoList;