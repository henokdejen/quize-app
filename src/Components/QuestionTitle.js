import React from 'react'

import { Typography } from 'antd';

const { Title } = Typography;

export default function QuestionTitle(props) {
    const { questionTitle, index } = props

    return (
        <Title level={4}>{index + ", " + questionTitle}
        </Title>
    )
}