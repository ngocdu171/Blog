import React, { useState } from "react";
import EditorToolbar, { formats, modules } from "./EditorToolbar";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import ReactQuill from "react-quill";

function Add() {
  const [isError, setError] = useState(null);
  return (
    <div>
      <ReactQuill placeholder="write something..." 
      formats={Add.formats}
      modules={Add.modules}
      />
      <Row>
        <Form>
          <h3>Add</h3>
          <Row>
            <FormGroup>
              <Label>Title</Label>
              <Input placeholder="Enter your title..." />
            </FormGroup>
            <FormGroup>
              <label>Description</label>
            </FormGroup>
          </Row>
        </Form>
      </Row>
    </div>
  );
}

Add.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

Add.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

export default Add;