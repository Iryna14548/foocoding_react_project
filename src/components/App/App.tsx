import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppRoot from './AppRoot';
import CharacterListPage from '../Pages/CharactersPage';
import Home from '../Pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        /* Wrap this Root Route to create Router here */
        <Route path="/" element={<AppRoot />}>
            <Route path="/" element={<Home />} />
            <Route path="characters" element={<CharacterListPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
