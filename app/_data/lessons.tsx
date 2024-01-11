import { ExerciseConfig, LessonConfig } from "./interfaces";
import _351eb511_7f14_4d13_a9b8_65c04ec2680d from "./351eb511-7f14-4d13-a9b8-65c04ec2680d";
import _10d00727_1683_4a0b_a563_aa4b54722ff9 from "./10d00727-1683-4a0b-a563-aa4b54722ff9";

const lessons: LessonConfig[] = [
    { id: "351eb511-7f14-4d13-a9b8-65c04ec2680d", en: "A girl and a boy", nl: "Een meisje en een jongen" },
    { id: "10d00727-1683-4a0b-a563-aa4b54722ff9", en: "A cat and a dog", nl: "Een kat en een hond" }
];

const lessonsExercises: { [key: string]: ExerciseConfig[] } = {
    "351eb511-7f14-4d13-a9b8-65c04ec2680d": _351eb511_7f14_4d13_a9b8_65c04ec2680d,
    "10d00727-1683-4a0b-a563-aa4b54722ff9": _10d00727_1683_4a0b_a563_aa4b54722ff9,
};

export function getLessons(): LessonConfig[] {
    return lessons;
};

export function getExersices(lesson: string): ExerciseConfig[] {
    return lessonsExercises[lesson];
};
