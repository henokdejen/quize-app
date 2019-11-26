import React from 'react'
import PropTypes from "prop-types";

import { Card} from 'antd';

import './quizeCategory.css'

const { Meta } = Card;

function QuizeCategory(props) {
    const { title, imageUrl, numberOfQuizes, onSelected , className} = props

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    src={imageUrl}
                    alt="Quize Image"
                    className = "quize-general-info-image"
                />
            }
            className = {"general-info-wrapper " + className}
            hoverable
            onClick = {onSelected}
        >
            <Meta
                title={title}
                description= {numberOfQuizes +  " Quizzes"}
            />
        </Card>

)
}

QuizeCategory.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    numberOfQuizes: PropTypes.number,
    onSelected: PropTypes.func,
    className: PropTypes.string
}

export default QuizeCategory