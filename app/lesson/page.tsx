'use client';

import React, { useState }  from 'react';
import ProgressBar from '../_components/progress-bar';
import { Learn } from './exercise';
import Button from '../_components/buttons';

interface ExerciseConfig {
    description: string,
    image: string,
    audio: string,
}

const exercises: ExerciseConfig[] = [
    { description: "het meisje", image: '/image/7933f431-e65f-4429-8551-4534ecbfee71.png', audio: '/audio/7933f431-e65f-4429-8551-4534ecbfee71.mp3' },
    { description: "de jongen", image: '/image/3c4c3bef-55a1-480e-b3ab-6b768aa2be9c.png', audio: '/audio/3c4c3bef-55a1-480e-b3ab-6b768aa2be9c.mp3' },
    { description: "het water", image: '/image/b3a4a512-a1c2-4fcb-9210-ef5b6b2c7404.png', audio: '/audio/b3a4a512-a1c2-4fcb-9210-ef5b6b2c7404.mp3' },
    { description: "de appel", image: '/image/040890b5-d93f-4dcf-945b-b678e1ba06c9.png', audio: '/audio/040890b5-d93f-4dcf-945b-b678e1ba06c9.mp3' },
    { description: "eten", image: '/image/5685cb90-4fa2-44a1-8387-3fe24c98402b.png', audio: '/audio/5685cb90-4fa2-44a1-8387-3fe24c98402b.mp3' },
    { description: "drinken", image: '/image/9da2ddbd-40a3-4ae7-8e76-e7a90d825599.png', audio: '/audio/9da2ddbd-40a3-4ae7-8e76-e7a90d825599.mp3' },
    { description: "Het meisje drinkt water.", image: '/image/e8cdda32-ae06-4d94-8171-b9f0787a18a4.png', audio: '/audio/e8cdda32-ae06-4d94-8171-b9f0787a18a4.mp3' },
    { description: "De jongen drinkt water.", image: '/image/342dd470-970b-43a0-809f-72cf17584c5d.png', audio: '/audio/342dd470-970b-43a0-809f-72cf17584c5d.mp3' },
    { description: "Het meisje eet een appel.", image: '/image/16480893-70c3-4839-b848-0cce22f72f83.png', audio: '/audio/16480893-70c3-4839-b848-0cce22f72f83.mp3' },
    { description: "De jongen eet een appel.", image: '/image/4a533292-e228-4d18-ae1c-dc379bfa83b7.png', audio: '/audio/4a533292-e228-4d18-ae1c-dc379bfa83b7.mp3' },
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
        <div className="container p-4" >
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
