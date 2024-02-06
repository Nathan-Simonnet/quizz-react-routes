import React, { useEffect, useState } from 'react';
import { useScore } from '../ScoreContext';

const End = () => {

    const { score } = useScore();

    return (
        <div>
            <h1>Score: {score}</h1>
        </div>
    );
};

export default End;