import { useState } from 'react';
import './Counter.css';

const state = {
    count: 0,
};

export default function Counter() {

    const [, setState] = useState(0);

    /**
     * Trigger an update.
     * The random number is just a way to make sure React's state changes.
     * The actual state is stored in the closure (module).
     */
    function forceUpdate() {
        setState(Math.random());
    }
    
    return (
        <h1 className="no-select"
            onClick={() => {
                state.count++;
                forceUpdate();
            } }
        >
            Count: {state.count}
        </h1>
    );
}

