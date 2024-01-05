import React, { Children } from 'react'

interface Properties {
    onClick: () => void,
    children: string,
}

const Button = (props: Properties) => {
    return (
        <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button