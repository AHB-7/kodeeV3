import styled from "styled-components";

export const SectionOne = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 4rem auto;
    > h1 {
        color: ${(p) => p.theme.colors.text};
        font-size: 6rem;
        font-weight: 300;
        text-align: center;
        margin: 2rem 0;
    }
    position: relative;
    z-index: 1;
`;
export const ShapesContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    position: absolute;
`;
export const Shape = styled.div`
    width: 100%;
    height: 2rem;
    border-top: 0.01rem solid ${(p) => p.theme.colors.text};
`;
