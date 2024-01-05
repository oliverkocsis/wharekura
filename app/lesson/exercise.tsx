import React from 'react'
import Card from './card'
import { titleCase } from '../_lib/lib';

interface Properties {
    description: string,
    image: string,
    audio: string,
}


export const Learn = (props: Properties) => {
    
    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="w-full text-center">{titleCase(props.description)}</h2>
            <Card src={props.image} alt={props.description}/>
        </div>
    )
}

export const Select = (props: Properties[]) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <h2 className="w-full text-center">{titleCase(props[0].description)}</h2>
            <h2 className="w-full text-center">{titleCase(props[1].description)}</h2>
            <Card src={props[0].image} alt={props[0].description}/>
            <Card src={props[1].image} alt={props[1].description} />
        </div>
    )
}
