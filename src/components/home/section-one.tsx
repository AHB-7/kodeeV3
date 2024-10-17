import { SectionOne, Shape, ShapesContainer } from "../../styles/pages/home";

export function SectionOneComponent() {
    const shapeArray = Array(16).fill(0);

    return (
        <SectionOne>
            <h1>Fra visjon til virkelighet</h1>
            <ShapesContainer>
                {shapeArray.map((_, index) => (
                    <Shape key={index} />
                ))}
            </ShapesContainer>
        </SectionOne>
    );
}
