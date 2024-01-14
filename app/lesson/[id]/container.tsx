'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { ExerciseConfig } from '@/app/_data/lessons';
import ProgressBar from '@/app/_components/progress-bar';
import Button from '@/app/_components/buttons';
import Exersice from './exercise';

interface Properties {
    id: string,
    exercises: ExerciseConfig[],
}

const Container = (props: Properties) => {
    const id = props.id;
    const exercises = props.exercises;
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
                image={`/${id}/${exercises[exerciseCounter].id}.png`}
                audio={`/${id}/${exercises[exerciseCounter].id}.mp3`}
            />
            <Button onClick={handleNextStep}>Next</Button>
        </div>
    );
}


export default Container;
