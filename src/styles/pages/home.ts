import styled from "styled-components";

export const SectionOne = styled.section`
    margin: 4rem auto;
    > h1 {
        color: ${(p) => p.theme.colors.text};
        font-size: 4rem;
        text-align: center;
        margin: 2rem 0;
    }
`;
