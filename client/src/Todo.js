import React from 'react';



class Todo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <div>
                    <button>x</button>
                    <text>{(this.props.complete)?<strike>{this.props.task}</strike>: this.props.task}</text>
                </div>
            </li>
        );
    }
}

export default Todo;