interface ExerciseConfig {
    id: string;
    description: string;
}

interface LessonConfig {
    id: string;
    en: string;
    nl: string;
}

const lessons: LessonConfig[] = [
    { id: "be6f58c8-05cc-406b-90a5-35ab908bce0d", en: "Let's Start", nl: "Laten we beginnen" }
];

const exercises: ExerciseConfig[] = [
    { id: "7933f431-e65f-4429-8551-4534ecbfee71", description: "het meisje" },
    { id: "3c4c3bef-55a1-480e-b3ab-6b768aa2be9c", description: "de jongen" },
    { id: "b3a4a512-a1c2-4fcb-9210-ef5b6b2c7404", description: "het water" },
    { id: "040890b5-d93f-4dcf-945b-b678e1ba06c9", description: "de appel" },
    { id: "5685cb90-4fa2-44a1-8387-3fe24c98402b", description: "eten" },
    { id: "9da2ddbd-40a3-4ae7-8e76-e7a90d825599", description: "drinken" },
    { id: "e8cdda32-ae06-4d94-8171-b9f0787a18a4", description: "Het meisje drinkt water." },
    { id: "342dd470-970b-43a0-809f-72cf17584c5d", description: "De jongen drinkt water." },
    { id: "16480893-70c3-4839-b848-0cce22f72f83", description: "Het meisje eet een appel." },
    { id: "4a533292-e228-4d18-ae1c-dc379bfa83b7", description: "De jongen eet een appel." },
];

export function getLessons(): LessonConfig[] {
    return lessons;
};

export function getExersices(lesson: string): ExerciseConfig[] {
    return exercises;
};
