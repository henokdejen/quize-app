import React from 'react'
import Button from 'antd/es/button';

import {PresentationMode} from './Constants'

export default function ActionZone(props) {
    const {mode, flipPresentatonMode} = props;
    return (
        <div className = "action-zone">
            <Button type="primary" onClick = {flipPresentatonMode}> {mode === PresentationMode.ask ? 'Check' : 'Continue'} </Button>
        </div>
    )
}