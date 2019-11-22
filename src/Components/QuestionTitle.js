import React from 'react'

export default function QuestionTitle(props) {
    const { questionTitle, index } = props

    return (
        <div>{index + ", " + questionTitle}</div>
    )
}