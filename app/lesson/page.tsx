import React from 'react';
import ProgressBar from '../_components/progress-bar';
import girl from './../../images/girl.svg';
import girl_eat from './../../images/girl eat.svg';
import boy from './../../images/boy.svg';
import boy_eat from './../../images/boy eat.svg';
import { Learn } from './exercise';
import Button from '../_components/buttons';

interface ExerciseConfig {
    description: string,
    image: string,
    audio: string,
}

const exercises:ExerciseConfig[] = [
    {description: "meisje", image: girl, audio: girl},
    {description: "jongen", image: boy, audio: boy},
]

const Lesson = () => {
    return (
        <div className="container py-4">
            <div className="max-w-screen-sm mx-auto">
                <div className="grid grid-cols-1 gap-8">
                    <ProgressBar progress={50} />
                    <Learn description={exercises[0].description} image={exercises[0].image} audio={exercises[0].audio} />
                    <Button>Next</Button>
                </div>
            </div>
        </div>
    );
}


export default Lesson;
