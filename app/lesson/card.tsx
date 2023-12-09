import React from 'react'
import Image from 'next/image'; 

interface Properties {
    src: string,
    alt: string,
}

const Card = (props: Properties) => {
    return (
        <div className="flex justify-center">
            <div className="w-32 h-32 mr-4 border border-gray-300 rounded-lg bg-white rounded-lg shadow-md p-4 overflow-hidden">
                <Image src={props.src} alt={props.alt} /> 
            </div>
        </div>
    );
};

export default Card