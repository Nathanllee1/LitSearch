import React from 'react';
import { connect } from "react-redux";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { updateLitText } from "./redux/actions";

class LitTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // This fires an action to update the text value in our store's state
    handleChange(value) {
        this.props.updateLitText(value);
    }

    render() {
        return (
            <div className='lit-text-box'>
                <ReactQuill value="" onChange={this.handleChange} />
            </div>
        );
    }

}

export default connect(
  null,
  { updateLitText }
)(LitTextBox);
