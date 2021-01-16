import React, { useState } from "react";
import Header from "./Header";
import { useMarked } from 'use-marked-hook'

const defaultPreview = `# Type your text on the left

## and live preview on the right

### markdown styling reference above :)`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultPreview);

  const html = useMarked(markdown)

  return (
    <>
        <Header />
        {/* input */}
        <div className="editor">
        <textarea
          value={markdown}
          onChange={event => setMarkdown(event.target.value)}
          cols="30" 
          rows="5"
        />
        </div>

        {/* output */}       
       <div className="output">
         <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    </>
  );
};

export default MarkdownPreviewer