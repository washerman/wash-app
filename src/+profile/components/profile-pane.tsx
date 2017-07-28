import { EditableText } from '@blueprintjs/core'
import * as React from 'react'

interface IProps {
    name: string
    vpa: string
}

export const ProfilePane = ({ name, vpa }: IProps) => {
    return (
        <div className={'profile-pane'}>
            <div className={'row'}>
                <label>Name:</label>
                <EditableText onConfirm={} placeholder={'polru singh sutiya'} value={name} />
            </div>
            <div className={'row'}>
                <label>VPA:</label>
                <EditableText onConfirm={} placeholder={'polru@upi'} value={vpa} />
            </div>
        </div>)
}