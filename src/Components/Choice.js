import React from 'react'
import { PresentationMode } from './Constants'

const Choice = props => {
    // const onSelected = this.onSelected.bind(this)

    const onSelected = () => {
        if (props.mode !== PresentationMode.check) {
            props.onChoiceSelected(props.index)
        }
    }
    const { isSelected, choiceText, correct, mode } = props
    let className = "choice-item "

    if (mode === PresentationMode.check) className += correct ? 'choice-item-correct' : isSelected ? 'choice-item-wrong' : 'choice-item-unselected'
    else className += isSelected ? 'choice-item-selected' : 'choice-item-unselected'

    const content = (
        <div onClick={onSelected} className={className} >
            {choiceText}
        </div>
    )

    return content
}

export default Choice
