import styled, { css } from 'styled-components';
import { ReactComponent as DividerD } from '../../assets/pattern-divider-desktop.svg';
import { ReactComponent as DividerM } from '../../assets/pattern-divider-mobile.svg';
import { ReactComponent as Dice } from '../../assets/icon-dice.svg';

export const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Page = styled.div`
    ${center};
    height: 100vh;
    width: 100vw;
`;

export const Card = styled.section`
    ${center};
    width: 32vw;
    text-align: center;
    background-color: hsl(217, 19%, 24%);
    padding: 1.4rem;
    border-radius: 12px;
    position: relative;

    @media (max-width: 890px) {
        width: 80vw;
    }
`;

export const NumberP = styled.p`
    color: hsl(150, 100%, 66%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 0.875rem;

    @media (max-width: 890px) {
        font-size: 0.725rem;
    }
`;

export const AdviceP = styled.p`
    color: hsl(193, 38%, 86%);
    font-size: 1.75rem;
    margin: 0.875rem;

    @media (max-width: 890px) {
        font-size: 1.4rem;
    }
`;

export const DividerDesktop = styled(DividerD)`
    margin: 1.2rem 1.2rem 2.5rem 1.2rem;

    @media (max-width: 1135px) {
        display: none;
    }
`;

export const DividerMobile = styled(DividerM)`
    display: none;

    @media (max-width: 1135px) {
        display: block;
        margin: 1.2rem 0 2.5rem 0;
    }
`;

export const DiceButton = styled(Dice)`
    @keyframes glow {
        0% {
            box-shadow: rgb(82, 255, 168) 0 0 0px;
        }
        100% {
            box-shadow: rgb(82, 255, 168) 0 10px 80px;
        }
    }
    padding: 18px;
    border-radius: 50%;
    background-color: hsl(150, 100%, 66%);
    margin-bottom: -3.375rem;

    &:hover {
        animation: glow 3s infinite alternate;
    }
`;
