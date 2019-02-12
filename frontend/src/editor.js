import React from 'react';

var Delta = Quill.import('delta');
var quill = new Quill('#editor', {theme: 'bubble'});

const Editor = (props) =>{
  return (
    <div id="editor">
        <p>Add the text to search through here</p>
    </div>
  )
}
export default Editor;
