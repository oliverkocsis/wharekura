import React from 'react'

interface Properties {
    children: string,
    className: string,
}

export const H1 = (props: Properties) => {
    return (
        <h1 className={`text-5xl font-extrabold ${props.className}`}>{props.children}</h1>
    )
}

export const H2 = (props: Properties) => {
    return (
        <h2 className={`text-4xl font-bold ${props.className}`}>{props.children}</h2>
    )
}

export const H3 = (props: Properties) => {
    return (
        <h3 className={`text-3xl font-bold ${props.className}`}>Heading 3</h3>
    )
}

