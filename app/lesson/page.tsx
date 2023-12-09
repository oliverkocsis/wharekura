import React from 'react';
import Image from 'next/image';
import Girl from './girl.svg';
import Boy from './boy.svg';
import Card from './card';

const Lesson = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-4">Lesson</h1>
            <div className="grid grid-cols-2 gap-4">
                <Card src={Girl} alt='girl' />
                <Card src={Boy} alt='boy' />
            </div>
        </div>
    );
}

export default Lesson;
