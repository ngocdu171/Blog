import React, { useState } from "react";
import EditorToolbar, { formats, modules } from "./EditorToolbar"
import { Button, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import ReactQuill from "react-quill";

export default function Add() {

    const [isError, setError] = useState(null)
  return (
    <Container>
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
              <EditorToolbar toolbarId={'t1'}/>
              <ReactQuill 
              theme="snow"
              placeholder="Write something here..."
              modules={modules('t1')}
              formats={formats}
              />
            </FormGroup>
            <FormGroup>
              <label>Additional Information</label>
              <EditorToolbar toolbarId={'t2'}/>
              <ReactQuill 
              theme="snow"
              placeholder="Write something here..."
              modules={modules('t2')}
              formats={formats}
              />
            </FormGroup>
            {isError !== null && <div className="errors"> {isError} </div>}
            <FormGroup>
            <Button color="info"> Submit </Button>
            </FormGroup>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};
