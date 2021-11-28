import { useState } from 'react';

const Greeting = (function () {
    const state = {
        on: true,
    };
    return function () {
        const [, setState] = useState(0);
        function forceUpdate() {
            setState(Math.random());
        }
        return (
            <h1
                onClick={() => {
                    state.on = !state.on;
                    forceUpdate();
                }}
            >
                {state.on ? 'Hello!' : 'Goodbye!'}
            </h1>
        );
    };
})();

export default Greeting;
