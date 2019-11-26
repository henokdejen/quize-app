import React, { Component } from 'react';
import './App.css';

import QuizeBody from './Components/QuizeBody/QuizeBody'
import Header from './Components/Header'
import quizes from './Models/Questions'
import QuizeCategory from './Components/QuizeGeneralInfo/QuizeCategory';
import QuizzesList from './pages/quizzeses';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      correct: 0,
      wrong: 0
    }

    this.onAQuestionFinished = this.onAQuestionFinished.bind(this)

    this.quize = quizes["quize"]
  }

  onSelected(index) {
    console.log('I am selected')
  }

  onAQuestionFinished(isCorrect) {
    console.log(isCorrect)
    const updateField = isCorrect ? 'correct' : 'wrong'
    if (this.state.currentIndex === this.quize.questions.length){
      console.log("Quize Finished!")
      return
    }
    this.setState(
      (state) => ({
        currentIndex: state.currentIndex + 1,
        [updateField]: state[updateField] + 1
      }),
      () => {
        console.log(this.state)
      }
    )

  }

  render() {
    const {currentIndex,correct, wrong} = this.state
    const currentQuestion =  this.quize.questions[currentIndex]


    return (
      <div className="App">
        <QuizzesList/>
        {/* <Header
          quizeTitle={this.quize.title}
          currentQuestionNumber={currentIndex + 1}
          totalNumberOfQuestions={this.quize.questions.length} 
          correctAnswersCount = {correct}
          wrongAnswersCount = {wrong}
          />

        <QuizeBody
          index={currentIndex}
          onAQuestionFinished={this.onAQuestionFinished}
          question={currentQuestion} /> */}
      </div>
    );
  }
}

export default App;