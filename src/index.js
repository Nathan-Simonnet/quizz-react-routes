import React from "react";
import { ScoreProvider } from './ScoreContext';
import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        {/* See, this is how we keep the score global my boy */}
        <ScoreProvider>
            <App />
        </ScoreProvider>
    </React.StrictMode>
);





