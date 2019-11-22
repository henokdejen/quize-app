import React from 'react'

export default function ScoreBoard(props) {
    const {correctAnswersCount, wrongAnswersCount} = props

    return (
        <div>
            <div>
                Correct: {correctAnswersCount}
            </div>

            <div>
                Wrong: {wrongAnswersCount}
            </div>
        </div>
    )
}