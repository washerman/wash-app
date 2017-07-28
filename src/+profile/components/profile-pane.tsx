import { EditableText } from '@blueprintjs/core'
import * as React from 'react'

interface IProps {
    name: string
    onChangeName: (value: string) => void
    onChangeVPA: (value: string) => void
    vpa: string
}

export const ProfilePane = ({ name, onChangeName, onChangeVPA, vpa }: IProps) => {
    return (
        <div className={'profile-pane'}>
            <div className={'row'}>
                <label>Name:</label>
                <EditableText onConfirm={onChangeName} placeholder={'polru singh sutiya'} value={name} />
            </div>
            <div className={'row'}>
                <label>VPA:</label>
                <EditableText onConfirm={onChangeVPA} placeholder={'polru@upi'} value={vpa} />
            </div>
        </div>)
}