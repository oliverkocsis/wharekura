import { getExercises } from "@/app/_data/lessons";
import Container from "./container";

interface Properties {
    params: { id: string },
}

export default async function Page(props: Properties) {
    const id = props.params.id;
    const exercises = await getExercises(id);

    return <Container id={id} exercises={exercises} />;
}
