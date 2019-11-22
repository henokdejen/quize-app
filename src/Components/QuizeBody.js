import React from 'react'

import QuestionTitle from './QuestionTitle'
import Choices from './Choices'
import { PresentationMode, ChoiceType } from './Constants'
import ActionZone from './ActionZone'
import AnswerDescription from './AnswerDescriptio'
import { Row, Col } from 'antd'

export default class QuizeBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIndexes: [],
            mode: PresentationMode.ask
        }

        this.onChoiceSelected = this.onChoiceSelected.bind(this)
        this.flipPresentatonMode = this.flipPresentatonMode.bind(this)
    }


    onChoiceSelected(index) {

        // default choice - single choice
        let newIndexes = [index]

        const { choiceType } = this.props.question

        if (this.state.selectedIndexes.includes(index)) {
            newIndexes = this.state.selectedIndexes.filter(ind => ind !== index)
        }
        else if (choiceType === ChoiceType.ml) {
            newIndexes = this.state.selectedIndexes.slice()
            newIndexes.push(index)
            console.log("here")
        }

        this.setState({
            selectedIndexes: newIndexes
        })
    }

    flipPresentatonMode() {
        // on Flip
        this.setState(
            (state) => {
                if (state.mode === PresentationMode.ask) return { mode: PresentationMode.check }
                return { mode: PresentationMode.ask, selectedIndexes: [] }
            },
            () => {
                if (this.state.mode === PresentationMode.ask) {
                    this.props.onAQuestionFinished(true)
                }
            }
        )
    }


    render() {
        const { questionTitle, choicesList, choiceType, answersList, answerDesc } = this.props.question
        const { index } = this.props

        return (
            <div>
                <div>
                    <Row className = "quize-body">
                        <Col md = {1} xs = {1} lg = {4} sm = {1}/>
                        <Col md = {22} lg = {16} xs = {22} sm = {22}>
                            <QuestionTitle questionTitle={questionTitle} index={index + 1} />
                            <Choices
                                choices_list={choicesList}
                                mode={this.state.mode}
                                answersList={answersList}
                                choiceType={choiceType}
                                selectedIndexes={this.state.selectedIndexes}
                                onChoiceSelected={this.onChoiceSelected}
                            />

                            {
                                (this.state.mode === PresentationMode.check) && <AnswerDescription desc={answerDesc} />
                            }
                        </Col>
                        <Col md = {1} xs = {1} lg = {4} sm = {1}/>
                    </Row>


                    <ActionZone mode={this.state.mode} flipPresentatonMode={this.flipPresentatonMode} />
                </div>
            </div>
        )
    }
}