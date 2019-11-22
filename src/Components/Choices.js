import React from 'react'

import Choice from './Choice'

export default function Choices(props) {

    const { choices_list, mode, answersList, onChoiceSelected, selectedIndexes } = props

    return (
        <div>
            {choices_list.map((a_choice, index) => {
                return (
                    <Choice
                        isSelected={selectedIndexes.includes(index)}
                        choiceText={a_choice}
                        correct={answersList.includes(index)}
                        mode={mode}
                        index={index}
                        onChoiceSelected={onChoiceSelected}
                        key={index} />
                )
            })}

        </div>
    )
}