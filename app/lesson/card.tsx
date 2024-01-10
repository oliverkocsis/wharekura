import React from 'react'
import Image from 'next/image';

interface Properties {
    src: string,
    alt: string,
}

const Card = (props: Properties) => {
    return (
        <div className="border border-gray-200 rounded shadow flex justify-center p-4">
            <Image src={props.src} alt={props.alt} className="h-[50vh] w-auto" height={500} width={500}/>
        </div>
    );
};

export default Card