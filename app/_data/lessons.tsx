import fs from 'fs';

export interface ExerciseConfig {
    id: string;
    en: string;
    nl: string;
}

export interface LessonConfig {
    id: string;
    en: string;
    nl: string;
}

const lessons: LessonConfig[] = [
    { id: "351eb511-7f14-4d13-a9b8-65c04ec2680d", en: "A girl and a boy", nl: "Een meisje en een jongen" },
    { id: "10d00727-1683-4a0b-a563-aa4b54722ff9", en: "A cat and a dog", nl: "Een kat en een hond" },
    { id: "ee8d432c-359d-4b88-a121-da8551f6da50", en: "sch", nl: "sch" },
];

export function getLessons(): LessonConfig[] {
    return lessons;
};

export async function getExercises(lesson: string): Promise<ExerciseConfig[]> {
    const file = await fs.promises.readFile(`./public/${lesson}/_.json`, 'utf-8');
    const exercises = JSON.parse(file) as ExerciseConfig[];
    return exercises;
};
