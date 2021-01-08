import React from 'react'
import Header from './Header'
import Footer from './Footer'
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
});

const defaultPreview =
`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Here's some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

class MarkdownPreviewer extends React.Component {
    constructor(props) {	
      super(props);
      this.state = {
              input: defaultPreview
          }
          this.handleChange = this.handleChange.bind(this);		
    };
      
      convertMarkdown() {
          let markdown = marked(this.state.input);
          return{__html: markdown}
      }
      
       handleChange(event) {
      this.setState({
              input: event.target.value
          });
    }
      
  
   render() {	 
       return (
              <div>
               <Header/>	
                  {/* input */}
               <textarea value={this.state.input} id="editor" onChange={event => this.handleChange(event)} />
                  {/* output */}
                  <div className = "output">				
                      <div id="preview" dangerouslySetInnerHTML={this.convertMarkdown()}></div>
                  </div>
              </div>		 
          );
    }
  }

//   const MarkdownPreviewer = () => {
//       return (
//           <>
//             <Header/>
//             <div>
//                 Previewer
//             </div>
//             <Footer/>
//         </>
//       )
//   }


export default MarkdownPreviewer