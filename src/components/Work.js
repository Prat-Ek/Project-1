import "./Workedcradstyle.css"
import React from 'react'

import Workedcard from "./Workedcard"
import Workedcarddata from "./Workcarddata"
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {Workedcarddata.map ((val, ind)=> {
                return(
                    <Workedcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}

                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;