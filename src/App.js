import React, { useEffect, useState } from "react";
import TextEditor from "./draft.js";
function App() {
    const [textData, setTextData] = useState("Type here...");

    const handleTextChange = (newData) => {
        setTextData(newData);
    };

    const extraProps = {
      disabled : false, // true or false
    }

    useEffect(() => {
      console.log(textData); // do something when data changes :)
    }, [textData]);

    return (
        <div className="app">
            <TextEditor 
              data={textData} 
              onEditorReady={ () => console.log("Editor is ready")} // can write some function here if you need :)
              onChangeData={handleTextChange}
              {...extraProps}
            />
        </div>
    );
}

export default App;
