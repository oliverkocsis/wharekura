import React from 'react'
import { getLessons } from '../_data/lessons'
import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
    const lessons = await getLessons();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lessons.map((lesson, index) => (
                <Link href={`lesson/${lesson.id}`} key={lesson.id}>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg border border-gray-400 shadow-md" src={`/${lesson.id}/_.png`} alt={lesson.nl} height={500} width={500}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}