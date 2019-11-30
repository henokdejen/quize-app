import React from 'react'
import PropTypes from "prop-types";

import QuizeListItem from '../QuizeListItem/quizeListItem';
import './quizesList.css'

function QuizesList(props) {
    return (
        <div>
            <div class="quize-list-header-title">14 Quizes</div>
            {
                [1, 3, 4, 5,6,7,8,9,10].map(el => <QuizeListItem key={el} title={"The quize title is " + el} numberOfQuestions={12 * el} />)
            }
        </div>
    )
}


QuizesList.propTypes = {
    quizes: PropTypes.array,
}

export default QuizesList;