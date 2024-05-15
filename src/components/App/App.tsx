import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppRoot from './AppRoot';
import Home from '../Pages/HomePage';
import CharacterListPage from '../Pages/CharacterListPage';
import CharacterPage from '../Pages/CharacterPage';
import FavoritesPage from '../Pages/FavoritesPage';
import PotionPage from '../Pages/PotionPage';
import SpellListPage from '../Pages/SpellListPage';
import SpellPage from '../Pages/SpellPage';
import PotionListPage from '../Pages/PotionListPage';
import BookListPage from '../Pages/BookListPage';
import MoviesListPage from '../Pages/MoviesListPage';
import BookPage from '../Pages/BookPage';
import MoviePage from '../Pages/MoviePage';
import CartPage from '../Pages/CartPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppRoot />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="books" element={<BookListPage />} />
            <Route path="books/:title" element={<BookPage />} />
            <Route path="movies" element={<MoviesListPage />} />
            <Route path="movies/:title" element={<MoviePage />} />
            <Route path="characters" element={<CharacterListPage />} />
            <Route path="characters/:name" element={<CharacterPage />} />
            <Route path="potions" element={<PotionListPage />} />
            <Route path="potions/:name" element={<PotionPage />} />
            <Route path="spells" element={<SpellListPage />} />
            <Route path="spells/:name" element={<SpellPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
