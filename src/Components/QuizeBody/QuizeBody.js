import React from 'react'

import PropTypes from "prop-types";

import QuestionTitle from '../QuestionTitle'
import Choices from '../Choices'
import { PresentationMode } from '../Constants'
import AnswerDescription from '../AnswersDescription/AnswerDescriptio'
import { Row, Col } from 'antd'

import './quizeBody.css'

function QuizeBody(props) {

    const { questionTitle, choicesList, choiceType, answersList, answerDesc } = props.question
    const { index, mode, selectedIndexes, onChoiceSelected } = props

    const answers = answersList.map(answer => choicesList[answer])
    return (
        <Row className="quize-body">
            <Col md={1} xs={1} lg={5} sm={1} />
            <Col md={22} lg={14} xs={22} sm={22}>
                <QuestionTitle questionTitle={questionTitle} index={index + 1} />
                <Choices
                    choices_list={choicesList}
                    mode={mode}
                    answersList={answersList}
                    choiceType={choiceType}
                    selectedIndexes={selectedIndexes}
                    onChoiceSelected={onChoiceSelected}
                />

                {
                    (mode === PresentationMode.check) && <AnswerDescription desc={answerDesc} answers={answers} />
                }
            </Col>
            <Col md={1} xs={1} lg={5} sm={1} />
        </Row>

    )
}


QuizeBody.propTypes = {
    question: PropTypes.object,
    index: PropTypes.number,
    mode: PropTypes.number,
    selectedIndexes: PropTypes.array,
    onChoiceSelected: PropTypes.func
}

export default QuizeBody