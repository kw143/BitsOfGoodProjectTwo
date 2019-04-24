import React from 'react';



class InputLine extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <input placeholder="Text field" className="form-control" type="text" />
                <button>Add Todo</button>
            </div>
        );
    }
}

export default InputLine;