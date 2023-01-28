import { Footer } from '$components';
import { Home } from '$pages';

import classes from './styles.module.scss';

const App = () => (
    <div className={classes.app}>
        <main className={classes.main}>
            <Home />
        </main>
        <Footer />
    </div>
);

export default App;
