'use client';

import React, { useState } from 'react';
import ProgressBar from '../_components/progress-bar';
import { Learn } from './exercise';
import Button from '../_components/buttons';
import { getExersices } from '../_data/lessons';


const Lesson = () => {
    const exercises = getExersices("");

    const [exerciseCounter, setExerciseCounter] = useState(0)

    const handleNextStep = () => {
        if (exerciseCounter < exercises.length - 1) {
            setExerciseCounter(exerciseCounter + 1);
        } else {
            setExerciseCounter(0);
        }
    };

    return (
        <div className="container p-4" >
            <div className="max-w-screen-sm mx-auto">
                <div className="grid grid-cols-1 gap-8">
                    <ProgressBar progress={100 / exercises.length * exerciseCounter + 1} />
                    <Learn
                        description={exercises[exerciseCounter].nl}
                        image={`/image/${exercises[exerciseCounter].id}.png`}
                        audio={`/audio/${exercises[exerciseCounter].id}.mp3`}
                    />
                    <Button onClick={handleNextStep}>Next</Button>
                </div>
            </div>
        </div>
    );
}


export default Lesson;
