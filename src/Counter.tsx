import { useState } from 'react';
import './Counter.css';

const Greeting = (function () {
    const state = {
        count: 0,
    };
    return function () {
        const [, setState] = useState(0);
        function forceUpdate() {
            setState(Math.random());
        }
        return (
            <h1 className="no-select"
                onClick={() => {
                    state.count++;
                    forceUpdate();
                }}
            >
                Count: {state.count}
            </h1>
        );
    };
})();

export default Greeting;
