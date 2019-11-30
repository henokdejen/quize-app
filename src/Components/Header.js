import React from 'react'

import { Progress, Row, Col, Icon } from 'antd';
import Timer from './Timer'


export default function Header(props) {
    const { quizeTitle, currentQuestionNumber, totalNumberOfQuestions, correctAnswersCount, wrongAnswersCount } = props
    const progressPercent = currentQuestionNumber * 100 / totalNumberOfQuestions
    return (
        <div className="page-header">
            <Row>
                <Col className="gutter-row" lg={13} md={24}>
                    <span className="page-header-back">
                        <Icon type="arrow-left" />
                    </span>
                    <span className="page-header-heading-title">{quizeTitle}</span>
                </Col>
                <Col className="gutter-row" lg={5} md={12}>
                    <div className="gutter-box">
                        <Progress percent={progressPercent} format = { () => currentQuestionNumber + "/" + totalNumberOfQuestions}/>
                    </div>
                </Col>
                <Col className="gutter-row" lg={3} md={12}>
                    <Timer duration={140} />
                </Col>
                <Col className="gutter-row" lg={3} md={24}>
                    Correct: {correctAnswersCount}   Wrong: {wrongAnswersCount}
                </Col>
            </Row>
        </div>
    )
}