import React from 'react'

export default class Choice extends React.Component {

    constructor(props) {
        super(props)
        this.onSelected = this.onSelected.bind(this)
    }

    onSelected(){
        if (this.props.mode !== "check") {
            this.props.onChoiceSelected(this.props.index)
        }
    }

    render() {
        const {isSelected, choiceText, correct, mode} = this.props
        let className = "choice-item "

        if (mode === 'check') className += correct ? 'choice-item-correct' : isSelected ? 'choice-item-wrong':'choice-item-unselected'
        else className += isSelected ? 'choice-item-selected' : 'choice-item-unselected'

        return (
            <div onClick = {this.onSelected} className = {className} >
                {choiceText}
            </div>
        )
    }

}