import React from 'react'
import { getLessons } from '../_data/lessons'
import Link from 'next/link';

const Page = () => {
    const lessons = getLessons();

    return (
        <ol className="relative border-s border-gray-200">
            {lessons.map((lesson, index) => (
                <Link href={`lesson/${lesson.id}`} key={lesson.id}>
                    <li key={index} className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                        </span>
                        <h3>{lesson.nl}</h3>
                    </li>
                </Link>
            ))}
        </ol>
    )
}

export default Page