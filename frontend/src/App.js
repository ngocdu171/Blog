import React from "react";
import ReactQuill from "react-quill";
import Add from "./components/Add";
import Home from "./components/Home";
import News from "./components/News/News";
import "./Styles.css";

const App = () => {
  return (
    <div>
      <Home />
      <News />
      <ReactQuill
      placeholder="write something..."
      modules={App.modules}
      formats={App.formats}
      />
      <p>hasgdhgasd</p>
    </div>
  );
};

App.modules = {
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

App.formats = [
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

export default App;
