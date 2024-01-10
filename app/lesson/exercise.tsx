import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Card from './card';
import sound_icon from './../../public/image/icons8-sound-100.png';

interface Properties {
    description: string,
    image: string,
    audio: string,
}

export const Learn = (props: Properties) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = props.audio;
            audioRef.current.playbackRate = 1.0;
            audioRef.current.play();
        }
    }, [props.audio]);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4" onClick={playAudio}>
            <h2 className="w-full text-center flex items-center justify-center">
                {props.description}
                <Image className="w-5 h-5 ml-2" src={sound_icon} alt="play sound" />
            </h2>
            <Card src={props.image} alt={props.description} />
            <audio ref={audioRef} className="hidden" />
        </div>
    )
}

export const Select = (props: Properties[]) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <h2 className="w-full text-center">{props[0].description}</h2>
            <h2 className="w-full text-center">{props[1].description}</h2>
            <Card src={props[0].image} alt={props[0].description} />
            <Card src={props[1].image} alt={props[1].description} />
        </div>
    )
}
