import "./More.css"

import React from 'react'

const More = ({languages, habilities}) => {
  return (
    <div className="More">
    <h4>IDIOMAS</h4>
<div className="languages">
    <p>{languages.language}</p>
    <p>{languages.wrlevel}</p>
    <p>{languages.splevel}</p>
    </div> 
    <h4>💻 HABILIDADES 💻</h4>
    <div className="habilities">
      {habilities.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p> {item}</p>
          </div>
        )
      })}
    </div>
    </div>        
      )
}

export default More