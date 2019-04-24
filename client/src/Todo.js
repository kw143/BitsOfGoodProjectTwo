import React from 'react';



class Todo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>
                <div>
                    <button onClick={this.props.xClick}>x</button>
                    <text>{(this.props.complete)?<strike>{this.props.task}</strike>: this.props.task}</text>
                    <button onClick={this.props.cClick}>ChangeStatus</button>
                </div>
            </li>
        );
    }
}

export default Todo;