import React from 'react'

interface Properties {
    children: React.ReactNode,
}

const Layout = (props: Properties) => {
    return (
        <div className="container p-4" >
            <div className="max-w-screen-sm mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Layout