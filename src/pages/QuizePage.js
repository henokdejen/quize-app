import React, { Component } from 'react'

import { notification } from 'antd'


import Header from '../Components/Header'
import QuizeBody from '../Components/QuizeBody/QuizeBody'

import quizes from '../Models/Questions'
import { PresentationMode, ChoiceType, TimerType } from '../Components/Constants'
import ActionZone from '../Components/ActionZone'
import Timer from '../Components/Timer'


class QuizePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0,
            correct: 0,
            wrong: 0,
            selectedIndexes: [],
            mode: PresentationMode.ask,
            isQuestionLoaded: false
        }

        this.onChoiceSelected = this.onChoiceSelected.bind(this)
        this.flipPresentatonMode = this.flipPresentatonMode.bind(this)
        this.onShouldStartQuize = this.onShouldStartQuize.bind(this)

        this.quize = quizes["quize"]
    }


    onChoiceSelected(index) {

        // default choice - single choice
        let newIndexes = [index]

        const { choiceType } = this.quize.questions[this.state.currentIndex]


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
        const currentQuestion = this.quize.questions[this.state.currentIndex]

        if (this.state.mode === PresentationMode.ask) {
            var isCorrect = currentQuestion.answersList[0] === this.state.selectedIndexes[0]
            var updateField = isCorrect ? 'correct' : 'wrong'
        }

        // on Flip
        this.setState(
            (state) => {
                if (state.mode === PresentationMode.ask) return {
                    mode: PresentationMode.check,
                    [updateField]: state[updateField] + 1
                }
                return {
                    mode: PresentationMode.ask,
                    selectedIndexes: [],
                    currentIndex: state.currentIndex + 1
                }
            }
        )
    }

    onShouldStartQuize() {
        this.setState({
            isQuestionLoaded: true
        })
    }
    render() {
        const { currentIndex, correct, wrong, mode, selectedIndexes, isQuestionLoaded } = this.state
        const currentQuestion = this.quize.questions[currentIndex]


        return (
            <div className="quize-page-wrapper">
                <div className="quize-page-top">
                    <Header
                        quizeTitle={this.quize.title}
                        currentQuestionNumber={currentIndex + 1}
                        totalNumberOfQuestions={this.quize.questions.length}
                        correctAnswersCount={correct}
                        wrongAnswersCount={wrong}
                    />

                    {isQuestionLoaded ?
                        <div className="quize-page-main-body">
                            <QuizeBody
                                index={currentIndex}
                                question={currentQuestion}
                                onChoiceSelected={this.onChoiceSelected}
                                selectedIndexes={selectedIndexes}
                                mode={mode}
                            />

                            <div className="quize-page-bottom">
                                <ActionZone mode={this.state.mode} flipPresentatonMode={this.flipPresentatonMode} />
                            </div>
                        </div> :

                        <div className="quize-page-start-count-down">

                            <Timer
                                timerType={TimerType.circular}
                                duration={10}
                                onElapsed={this.onShouldStartQuize} />

                        </div>
                    }
                </div>
            </div>

        );
    }
}

export default QuizePage