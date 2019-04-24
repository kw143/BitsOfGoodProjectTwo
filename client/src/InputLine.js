import React from 'react';



class InputLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typedText: ""
        }
        this.handleTyping = this.handleTyping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.onSubmit(this.state.typedText);
        this.setState({
            typedText: ""
        })
    }

    handleTyping(event) {
        this.setState({
            typedText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Text field" value={this.state.typedText} className="form-control" type="text" onChange={(event) => this.handleTyping(event)}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        );
    }
}

export default InputLine;