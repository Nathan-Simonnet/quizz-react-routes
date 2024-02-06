// The score is a global state, and will be imported to Quiz and End

import React, { createContext, useState, useContext } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScore = () => useContext(ScoreContext);
