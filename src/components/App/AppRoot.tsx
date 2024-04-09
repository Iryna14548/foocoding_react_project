import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function AppRoot() {
    return (
        <>
            <nav>
                <Navigation />
            </nav>
            <main className="app__content">
                <Outlet />
            </main>
        </>
    );
}
