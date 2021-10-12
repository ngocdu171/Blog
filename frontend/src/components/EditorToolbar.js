import React from "react";

export const modules = {
  toolbar: [
    [{header: "1"},{header: "2"},{header: [3,4,5,6]}, {font: []}],
    [{size: []}],
    ["bold", "italic", "underline","strike","blockquote"],
    [{list:"ordered"},{list:"bullet"}],
    ["link","image","video"],
    ["clean"],
    ["code-block"]
  ]};

export const formats = [
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

// export const QuillToolbar = (props) => {
//   return (
//     <div>
//       {props.toolbarId !== undefined && (
//         <div id={props.toolbarId}>
//           <span className="ql-formats">
//             <button className="ql-bold" />
//             <button className="ql-italic" />
//             <button className="ql-underline" />
//             <button className="ql-strike" />
//           </span>
//           <span className="ql-formats">
//             <select className="ql-font">
//               <option value="arial"> Arial </option>
//               <option value="comic-sans">Comic Sans</option>
//               <option value="courier-new">Courier New</option>
//               <option value="georgia">Georgia</option>
//               <option value="helvetica">Helvetica</option>
//               <option value="Inter" selected>
//                 Inter
//               </option>
//               <option value="lucida">Lucida</option>
//             </select>
//             <select className="ql-size">
//               <option value="extra-small">Extra Small</option>
//               <option value="small">Small</option>
//               <option value="medium" selected>
//                 Medium
//               </option>
//               <option value="large">Large</option>
//             </select>
//             <select className="ql-header">
//               <option value="1">Heading 1</option>
//               <option value="2">Heading 2</option>
//               <option value="3">Heading 3</option>
//               <option value="4">Heading 4</option>
//               <option value="5">Heading 5</option>
//               <option value="6">Heading 6</option>
//               <option value="" selected>
//                 Normal
//               </option>
//             </select>
//           </span>
//           <span className="ql-formats">
//             <button className="ql-list" value="ordered" />
//             <button className="ql-list" value="bullet" />
//             <button className="ql-indent" value="-1" />
//             <button className="ql-indent" value="+1" />
//           </span>
//           <span className="ql-formats">
//             <button className="ql-script" value="super" />
//             <button className="ql-script" value="sub" />
//             <button className="ql-blockquote" />
//             <button className="ql-direction" />
//           </span>
//           <span className="ql-formats">
//             <select className="ql-align" />
//             <select className="ql-color" />
//             <select className="ql-background" />
//           </span>
//           <span className="ql-formats">
//             <button className="ql-link" />
//             <button className="ql-image" />
//             <button className="ql-video" />
//           </span>
//           <span className="ql-formats">
//             <button className="ql-formula" />
//             <button className="ql-code-block" />
//             <button className="ql-clean" />
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuillToolbar;
