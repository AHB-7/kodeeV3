import styled from "styled-components";

export const NavBox = styled.nav`
    display: flex;
    justify-content: start;
    align-items: end;
    margin: 1rem 0.1rem;
    color: ${(p) => p.theme.colors.background};
    position: relative;
`;

export const NavBoxOne = styled.div`
    min-width: 7rem;
    height: 7rem;
    background: ${(p) => p.theme.colors.text};
    background: linear-gradient(
        45deg,
        transparent 40px,
        ${(p) => p.theme.colors.text} 7px
    );
`;

export const NavBoxTwo = styled.div`
    width: 18rem;
    max-width: 18rem;
    height: 6rem;
    background: ${(p) => p.theme.colors.text};
    border-left: 0.1rem dashed ${(p) => p.theme.colors.background};
    border-right: 0.1rem dashed ${(p) => p.theme.colors.background};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    > :nth-child(1) {
        text-align: start;
        align-self: start;
    }
    > :nth-child(2) {
        text-align: end;
        align-self: end;
    }
`;

export const NavBoxThree = styled.div`
    min-width: 7rem;
    height: 7rem;
    background: ${(p) => p.theme.colors.text};
    display: flex;
    align-items: end;
    > p {
        padding-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 900;
    }
    justify-content: center;
    background: linear-gradient(
        -130deg,
        transparent 20px,
        ${(p) => p.theme.colors.text} 7px
    );
    > p {
        font-size: 1.2rem;
    }
    &:hover {
        cursor: pointer;
    }
`;
export const Menu = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    height: 30rem;
    position: absolute;
    width: 100%;
    max-width: 32rem;
    left: 0;
    bottom: 0;
    padding-top: 4rem;
    margin-top: 7.5rem;
    background: ${(p) => p.theme.colors.text};
    background: linear-gradient(
        130deg,
        transparent 40px,
        ${(p) => p.theme.colors.text} 7px
    );
    top: 0;
    z-index: 100;
    > a {
        color: ${(p) => p.theme.colors.background};
        font-size: 3rem;
        font-weight: 900;
        &:hover {
            cursor: pointer;
            color: ${(p) => p.theme.colors.primary};
        }
    }
`;
