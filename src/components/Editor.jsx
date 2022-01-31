import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'

function Editer({displayName,value,onChange,language}) {
    
  return (
      <div className='editor-container'>
          <div className='editor-title'>
            {displayName}
          </div>
          <CodeMirror 
            onBeforeChange={(editor ,data,value)=>onChange(value)}
            value ={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping:true,
                lint:true,
                mode:language,
                theme:'material',
                lineNumbers:true
            }}
                
          />
      </div>
  )
}

export default Editer;
