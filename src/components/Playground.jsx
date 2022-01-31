import React,{useState} from 'react';
import Editer from './Editor';
import { ImHtmlFive,ImCss3 } from "react-icons/im";
import { DiJavascript1 } from "react-icons/di";

function Playground() {
    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
const srcDoc =
`
<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
</html>
`

  return (
      <>
      <div className='pen-header' >CODE EDITOR</div>
      <div className='pen pen-top'>
        <Editer 
            language= "xml" 
            displayName={<ImHtmlFive style={{color:"red"}} />}
            value={html} 
            onChange={setHtml} 
        />
        <Editer 
            language= "css" 
            displayName={<ImCss3 style={{color:"blue"}} />} 
            value={css} 
            onChange={setCss} 
        />
        <Editer 
            language= "javascript" 
            displayName={<DiJavascript1 style={{color:"yellow"}} />}
            value={js} 
            onChange={setJs} 
        />
      </div>
      <div className='pen-center' >OUTPUT</div>
      <div className='pen'>
          <iframe 
            srcdoc ={srcDoc} 
            title='output'
            sandbox='allow-script' 
            frameborder="0"
            width="100%"
            height="100%"
            / >
      </div>
      </>
  )
}

export default Playground;
