import React, {useEffect, useRef, useState} from "react";

import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import HeadingButtonsUI from "@ckeditor/ckeditor5-heading/src/headingbuttonsui";
import ParagraphButtonUI from "@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui";

const configurations ={
    plugins: [
        Autoformat,
        Essentials,
        Heading,
        List,
        Paragraph,
        PasteFromOffice,
        TextTransformation,
        HeadingButtonsUI,
        ParagraphButtonUI,
    ],
    toolbar: {
        items: [
            "paragraph",
            "|",
            "heading1",
            "heading2",
            "heading3",
            "heading4",
            "heading5",
            "heading6",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "undo",
            "redo",
        ],
    },
    language: "en",
    heading: {
        options: [
            {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
            {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
            },
            {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
            },
            {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
            },
            {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
            },
        ],
    },
}
const TextEditor = (props) => {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};
  
    useEffect(() => {
      editorRef.current = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
        ClassicEditor: require("@ckeditor/ckeditor5-editor-classic/src/classiceditor.js")
      };
    }, []);

    const { data, onChangeData, onEditorReady, ...rest } = props;
    return (
        props.editorLoaded ? (
            <div>
            <CKEditor
                editor={ClassicEditor}
                config= {configurations}
                data={data}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChangeData(data);
                }}
                onReady={(editor) => onEditorReady(editor)}
                {...rest}
            />
            </div>
        ) : (
            <div>Loading...</div>
        )
    );
};

export default TextEditor;


{
    "name": "rich-editor-upwork",
    "version": "0.2.0",
    "private": true,
    "dependencies": {
      "@ckeditor/ckeditor5-react": "^3.0.3",
      "@ckeditor/ckeditor5-autoformat": "^32.0.0",
      "@ckeditor/ckeditor5-dev-utils": "^25.4.5",
      "@ckeditor/ckeditor5-dev-webpack-plugin": "^25.4.5",
      "@ckeditor/ckeditor5-editor-classic": "^32.0.0",
      "@ckeditor/ckeditor5-essentials": "^32.0.0",
      "@ckeditor/ckeditor5-heading": "^32.0.0",
      "@ckeditor/ckeditor5-list": "^32.0.0",
      "@ckeditor/ckeditor5-paragraph": "^32.0.0",
      "@ckeditor/ckeditor5-paste-from-office": "^32.0.0",
      "@ckeditor/ckeditor5-theme-lark": "^32.0.0",
      "@ckeditor/ckeditor5-typing": "^32.0.0",
      "@ckeditor/ckeditor5-core": "^32.0.0",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "5.0.0",
      "web-vitals": "^2.1.4"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }
  