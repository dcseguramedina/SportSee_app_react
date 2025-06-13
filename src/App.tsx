import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router';
import PublicRoutes from './routes/PublicRoutes.tsx';

/* <StrictMode>: Enables additional checks and warnings for the app
   <BrowserRouter>: Sets up routing for the application
   <PublicRoutes />: Contains the main routing logic for the app
*/

const App = () => (
    <StrictMode>
        <BrowserRouter>
            <PublicRoutes/>
        </BrowserRouter>
    </StrictMode>
);

export default App
