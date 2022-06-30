import React, { useState, useEffect } from 'react';
import { Page, Card, NumberP, AdviceP, DividerDesktop, DiceButton, DividerMobile } from './styles';

const AdviceSlip = () => {
    const [advice, setAdvice] = useState('');

    const fetchAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const slip = await response.json();
        setAdvice(slip.slip);
    };

    const generateAdviceHandler = () => {
        fetchAdvice();
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <Page>
            <Card>
                <NumberP>{`advice # ${advice.id}`}</NumberP>
                <AdviceP>{`"${advice.advice}"`}</AdviceP>
                <DividerDesktop />
                <DividerMobile />
                <DiceButton onClick={generateAdviceHandler} />
            </Card>
        </Page>
    );
};

export default AdviceSlip;

// advice[slip]
