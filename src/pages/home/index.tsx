import { useState } from 'react';

import reactLogo from '$assets/react.svg';
import { Icon } from '$components';

import classes from './styles.module.scss';

const Home = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);

    return (
        <>
            <div>
                <Icon
                    alt="Vite logo"
                    href="https://vitejs.dev"
                    rel="noreferrer"
                    src="/vite.svg"
                    target="_blank"
                />
                <Icon
                    alt="React logo"
                    classNameIcon={classes.react}
                    href="https://reactjs.org"
                    rel="noreferrer"
                    src={reactLogo}
                    target="_blank"
                />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className={classes.button} onClick={handleClick} type="button">
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
};

export default Home;
