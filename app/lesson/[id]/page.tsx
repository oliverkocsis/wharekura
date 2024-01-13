'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import ProgressBar from '../../_components/progress-bar';
import Exersice from './exercise';
import Button from '../../_components/buttons';
import { getExersices } from '../../_data/lessons';

interface Properties {
    params: { id: string },
}

const Lesson = (props: Properties) => {
    const exercises = getExersices(props.params.id);

    const [exerciseCounter, setExerciseCounter] = useState(0);

    const router = useRouter();

    const handleNextStep = () => {
        if (exerciseCounter < exercises.length - 1) {
            setExerciseCounter(exerciseCounter + 1);
        } else {
            router.push('/lesson')
        }
    };

    return (
        <div className="grid grid-cols-1 gap-8">
            <ProgressBar progress={100 / exercises.length * exerciseCounter + 1} />
            <Exersice
                description={exercises[exerciseCounter].nl}
                image={`/image/${exercises[exerciseCounter].id}.png`}
                audio={`/audio/${exercises[exerciseCounter].id}.mp3`}
            />
            <Button onClick={handleNextStep}>Next</Button>
        </div>
    );
}


export default Lesson;
