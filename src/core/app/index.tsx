import { useState } from 'react';
import cn from 'classnames/bind';

import reactLogo from '$assets/react.svg';

import classes from './styles.module.scss';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
                    <img alt="Vite logo" className={classes.logo} src="/vite.svg" />
                </a>
                <a href="https://reactjs.org" rel="noreferrer" target="_blank">
                    <img
                        alt="React logo"
                        className={cn(classes.logo, classes.react)}
                        src={reactLogo}
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((prev) => prev + 1)} type="button">
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
};

export default App;
