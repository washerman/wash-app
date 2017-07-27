import * as React from 'react'

interface IProps {
    heading: string
}

export const PageTitle = ({ heading }: IProps) => {
    return (
        <header>
            <div className="page-title">{heading}</div>
        </header>)
}