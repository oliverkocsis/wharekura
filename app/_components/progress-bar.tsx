import React from 'react'

interface Properties {
    progress: number, /* 0-100 */
}

const ProgressBar = (props: Properties) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${props.progress}%` }}></div>
        </div >
    )
}

export default ProgressBar
