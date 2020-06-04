import React, { Component } from "react";
import "./index.css"


const latestBreaking = props => {
        return(
            <div className="latestBreaking" id="latestBreakingID">
                <p className="latestText" id="latestTextID" onClick={props.breakingUpdate}>
                    {props.latestHeadline}
                </p>
            </div>
            );


}

export default latestBreaking;