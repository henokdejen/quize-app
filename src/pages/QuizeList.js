import React from 'react';

import { PageHeader, Col, Row } from 'antd';

import './quizeListPage.css'
import QuizesList from '../Components/QuizeList/QuizeList';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function QuizeListPage(props) {
    return (
        <div className="quize-list-page">
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Henok Quizzes"
                onBack = {()=>{}}
            />

            <div className="quize-list-body">
                <Row>
                    <Col xs={0} lg={5} />
                    <Col xs={24} lg={14}>
                        <QuizesList quizes={[]} />
                    </Col>
                    <Col xs={0} lg={5} />

                </Row>

            </div>
        </div>

    )
}

export default QuizeListPage