import React from 'react'
import Image from 'next/image';

interface Properties {
    src: string,
    alt: string,
}

const Card = (props: Properties) => {
    return (
        <div className="border border-gray-200 rounded shadow flex justify-center">
            <Image src={props.src} alt={props.alt} />
        </div>
    );
};

export default Card