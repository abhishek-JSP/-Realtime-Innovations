import React from "react";
import './Title.css'

const Title = ({title}) => {
    return(
        <div className="title_container">
            <h2 className="title_text">{title}</h2>
        </div>
    )
}
export default Title;