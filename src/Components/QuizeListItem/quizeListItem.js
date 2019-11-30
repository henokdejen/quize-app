import React from 'react'
import PropTypes from "prop-types";

import "./quizeListItem.css"

function QuizeListItem(props) {
    return (

        <div className="quize-list-item-wrapper">
            <div class="quize-list-item-title">
    <a href="#">{props.title}</a>
            </div>
            <div class="quize-list-item-details">
    <span class="content-summary">{props.numberOfQuestions} questions</span>
            </div>
        </div>


    )
}

QuizeListItem.propTypes = {
    title: PropTypes.string,
    numberOfQuestions: PropTypes.string
}

export default QuizeListItem;