'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Properties {
    description: string,
    image: string,
    audio: string,
}

export const Exersice = (props: Properties) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (audioRef.current && imageLoaded) {
            audioRef.current.src = props.audio;
            audioRef.current.playbackRate = 1.0;
            audioRef.current.play();
        }
    }, [props.description, props.image, props.audio, imageLoaded]);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="grid grid-cols-1 gap-4" onClick={playAudio}>
            <h2 className="w-full text-center flex items-center justify-center text-2xl">
                {props.description}
            </h2>
            <div className="border border-gray-200 rounded shadow flex justify-center p-4">
                <Image
                    priority={true}
                    src={props.image}
                    alt={props.description}
                    className={'h-[50vh] w-auto'}
                    height={500}
                    width={500}
                    onLoad={handleImageLoad}
                />
            </div>
            <audio ref={audioRef} className="hidden" />
        </div>
    );
}

export default Exersice;