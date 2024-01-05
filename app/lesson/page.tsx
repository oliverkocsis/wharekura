'use client';

import React, { useState }  from 'react';
import ProgressBar from '../_components/progress-bar';
import the_girl from './../../public/images/the girl.svg';
import the_girl_drinks from './../../public/images/the girl drinks.svg';
import the_girl_eats from './../../public/images/the girl eats.svg';
import the_boy from './../../public/images/the boy.svg';
import the_boy_drinks from './../../public/images/the boy drinks.svg';
import the_boy_eats from './../../public/images/the boy eats.svg';
import { Learn } from './exercise';
import Button from '../_components/buttons';

interface ExerciseConfig {
    description: string,
    image: string,
    audio: string,
}

const exercises: ExerciseConfig[] = [
    { description: "het meisje", image: the_girl, audio: './../../audio/the girl.aac' },
    { description: "de jongen", image: the_boy, audio: './../../audio/the boy.aac' },
    { description: "Het meisje drinkt.", image: the_girl_drinks, audio: './../../audio/the girl drinks.aac' },
    { description: "De jongen drinkt.", image: the_boy_drinks, audio: './../../audio/the boy drinks.aac' },
    { description: "Het meisje eet.", image: the_girl_eats, audio: './../../audio/the girl eats.aac' },
    { description: "De jongen eet.", image: the_boy_eats, audio: './../../audio/the boy eats.aac' },
]


const Lesson = () => {
    const [exerciseCounter, setExerciseCounter] = useState(0)

    const handleNextStep = () => {
        if (exerciseCounter < exercises.length - 1) {
            setExerciseCounter(exerciseCounter + 1);
        } else {
            setExerciseCounter(0);
        }
    };

    return (
        <div className="container py-4">
            <div className="max-w-screen-sm mx-auto">
                <div className="grid grid-cols-1 gap-8">
                    <ProgressBar progress={100 / exercises.length * exerciseCounter + 1} />
                    <Learn
                        description={exercises[exerciseCounter].description}
                        image={exercises[exerciseCounter].image}
                        audio={exercises[exerciseCounter].audio}
                    />
                    <Button onClick={handleNextStep}>Next</Button>
                </div>
            </div>
        </div>
    );
}


export default Lesson;
