import React from 'react'
import {SketchField, Tools} from 'react-sketch';
function Sketch() {
  return (
    <div>
        return (
            <SketchField width='1024px' 
                         height='768px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
        )
    </div>
  )
}

export default Sketch