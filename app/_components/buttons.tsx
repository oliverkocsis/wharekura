import React, { Children } from 'react'

interface Properties {
    onClick: () => void,
    children: string,
}

const Button = (props: Properties) => {
    return (
        <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button