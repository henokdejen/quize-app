import React from 'react'
import { Typography } from 'antd';

import './answersDescription.css'

const { Title } = Typography;

export default function AnswerDescription(props) {
    const {answers, desc} = props
    return (
        <div className = "answer_wrapper">
            <Title level = {4}> Answer: </Title>
            {answers}

            <Title level = {4}> Description: </Title>
            {desc}
        </div>
    )
}