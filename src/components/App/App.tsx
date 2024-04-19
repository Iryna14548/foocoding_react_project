import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppRoot from './AppRoot';
import Home from '../Pages/Home';
import CharacterListPage from '../Pages/CharacterListPage';
import CharacterPage from '../Pages/CharacterPage';
import FavoritesPage from '../Pages/FavoritesPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppRoot />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="characters" element={<CharacterListPage />} />
            <Route path="characters/:name" element={<CharacterPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
