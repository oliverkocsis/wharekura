import React from 'react';
import Girl from './girl.svg';
import Boy from './boy.svg';
import Card from './card';
import ProgressBar from '../_components/progress-bar';
import { H2 } from '../_components/headings';

const Lesson = () => {
    return (
        <div className="container py-4">
            <div className="max-w-screen-sm mx-auto">
                <div className="grid grid-cols-1 gap-8">
                    <ProgressBar progress={50} />
                    <div className="grid grid-cols-2 gap-4">
                        <H2 className="w-full text-center">Meisje</H2>
                        <H2 className="w-full text-center">Jongen</H2>
                        <Card src={Girl} alt='girl' />
                        <Card src={Boy} alt='boy' />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Lesson;
