import React from 'react'
import { getLessons } from '../_data/lessons'
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    const lessons = getLessons();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lessons.map((lesson, index) => (
                <Link href={`lesson/${lesson.id}`} key={lesson.id}>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={`/image/${lesson.id}.png`} alt={lesson.nl} height={500} width={500}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Page