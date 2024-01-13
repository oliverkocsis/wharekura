import { ExerciseConfig, LessonConfig } from "./interfaces";
import _351eb511_7f14_4d13_a9b8_65c04ec2680d from "./351eb511-7f14-4d13-a9b8-65c04ec2680d";
import _10d00727_1683_4a0b_a563_aa4b54722ff9 from "./10d00727-1683-4a0b-a563-aa4b54722ff9";
import _ee8d432c_359d_4b88_a121_da8551f6da50 from "./ee8d432c-359d-4b88-a121-da8551f6da50";

const lessons: LessonConfig[] = [
    { id: "351eb511-7f14-4d13-a9b8-65c04ec2680d", en: "A girl and a boy", nl: "Een meisje en een jongen" },
    { id: "10d00727-1683-4a0b-a563-aa4b54722ff9", en: "A cat and a dog", nl: "Een kat en een hond" },
    { id: "ee8d432c-359d-4b88-a121-da8551f6da50", en: "sch", nl: "sch" },
];

const lessonsExercises: { [key: string]: ExerciseConfig[] } = {
    "351eb511-7f14-4d13-a9b8-65c04ec2680d": _351eb511_7f14_4d13_a9b8_65c04ec2680d,
    "10d00727-1683-4a0b-a563-aa4b54722ff9": _10d00727_1683_4a0b_a563_aa4b54722ff9,
    "ee8d432c-359d-4b88-a121-da8551f6da50": _ee8d432c_359d_4b88_a121_da8551f6da50,
};

export function getLessons(): LessonConfig[] {
    return lessons;
};

export function getExercises(lesson: string): ExerciseConfig[] {
    return lessonsExercises[lesson];
};
