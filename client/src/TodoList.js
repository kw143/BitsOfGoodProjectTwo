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
                this.props.todos.map((curr) => <Todo task={curr.taskText} complete={curr.completed}/>)
            }
        </ul>
        );
    }
}

export default TodoList;