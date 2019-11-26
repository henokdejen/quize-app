import React from 'react'

import QuestionTitle from '../QuestionTitle'
import Choices from '../Choices'
import { PresentationMode, ChoiceType } from '../Constants'
import ActionZone from '../ActionZone'
import AnswerDescription from '../AnswersDescription/AnswerDescriptio'
import { Row, Col,notification } from 'antd'

import './quizeBody.css'

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

        if (this.state.mode === PresentationMode.ask && this.state.selectedIndexes.length === 0) {
            notification.error({
                message: 'Erorr',
                description:
                    'please select ',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });

            return
        }

        if (this.state.mode === PresentationMode.check){
            var isCorrect = this.props.question.answersList[0] == this.state.selectedIndexes[0]
        }
        
        // on Flip
        this.setState(
            (state) => {
                if (state.mode === PresentationMode.ask) return { mode: PresentationMode.check }
                return { mode: PresentationMode.ask, selectedIndexes: [] }
            },
            () => {
                if (this.state.mode === PresentationMode.ask) {
                    this.props.onAQuestionFinished(isCorrect)
                }
            }
        )
    }

    areSimilar(arr1, arr2){
        if (arr1.length === arr2.length) {
            for (let element in arr1) {
                if (!(arr2.includes(element))) return false
            }
            return true
        }
        return false
    }


    render() {
        const { questionTitle, choicesList, choiceType, answersList, answerDesc } = this.props.question
        const { index } = this.props

        const answers = answersList.map(answer => choicesList[answer])
        return (
            <div>
                <div>
                    <Row className="quize-body">
                        <Col md={1} xs={1} lg={5} sm={1} />
                        <Col md={22} lg={14} xs={22} sm={22}>
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
                                (this.state.mode === PresentationMode.check) && <AnswerDescription desc={answerDesc} answers = {answers}/>
                            }
                        </Col>
                        <Col md={1} xs={1} lg={5} sm={1} />
                    </Row>


                    <ActionZone mode={this.state.mode} flipPresentatonMode={this.flipPresentatonMode} />
                </div>
            </div>
        )
    }
}