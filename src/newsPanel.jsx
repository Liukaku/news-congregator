import React, { Component } from "react";
import "./index.css"


const NewsPanel = props => {
    console.log("boop");
        return(
            <div className={props.articleClass} id={props.articleID}>
                <hr className="bigLine"/>
                <img className="" src={props.imgsrc} alt="image"/>
                <div className="smallText">
                    <a href={props.articleURL}>
                    <h3 className="smallText" id="smallText">
                        {props.articleTitle}
                    </h3>
                    </a>
                    <p className="author">
                        {props.articleAuthor}
                    </p>
                </div>
            </div>
            );


}

export default NewsPanel;