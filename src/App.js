import React, { Component } from 'react';
import './App.css';

import QuizeBody from './Components/QuizeBody'
import Header from './Components/Header'
import questions from './Models/Questions'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      correct: 0,
      wrong: 0
    }

    this.onAQuestionFinished = this.onAQuestionFinished.bind(this)
  }

  onSelected(index) {
    console.log('I am selected')
  }

  onAQuestionFinished(isCorrect) {
    const updateField = isCorrect ? 'correct' : 'wrong'
    this.setState(
      (state) => ({
        currentIndex: state.currentIndex + 1,
        updateField: state[updateField] + 1
      })
    )
  }

  render() {
    const {currentIndex,correct, wrong} = this.state
    const currentQuestion = questions[currentIndex]

    return (
      <div className="App">
        <Header
          quizeTitle={currentQuestion.questionTitle}
          currentQuestionNumber={currentIndex + 1}
          totalNumberOfQuestions={questions.length} 
          correctAnswersCount = {correct}
          wrongAnswersCount = {wrong}
          />

        <QuizeBody
          index={currentIndex}
          onAQuestionFinished={this.onAQuestionFinished}
          question={currentQuestion} />
      </div>
    );
  }
}

export default App;