import React from 'react'
import "./boardCard.scss"

function BoardCard({title}) {
  return (
      <>

{/* <div>{title}</div> */}

<div  className="card4" >
<h3>{title}</h3>
<p className="small">
  Card description with lots of great facts and interesting details.
</p>
<div className="dimmer"></div>
<div className="go-corner" href="#">
  <div className="go-arrow">→</div>
</div>
</div>

      </>
   
  )
}
  


export default BoardCard