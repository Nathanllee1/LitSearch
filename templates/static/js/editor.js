import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Insert text to search through here' }; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <ReactQuill value={this.state.text}  />
    )
    }
}

export default Editor;