# Wizard World Characters

This project provides a web interface to interact with a list of characters from the Wizard World universe. The application allows users to view all characters, mark their favorites, and view detailed information about each character.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies with `npm install`.

## Usage

After installation, you can run the project by executing `npm start`. This will start a development server, and the project will be available at `http://localhost:3000`.

## Features

-   **Character List**: Displays a list of characters from the Wizard World. Users can click on a character to view more details.
-   **Favorites**: Users can mark characters as favorites. These are then accessible through the 'My Favorite Characters' page.
-   **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.

## Additional Components

### Pagination

The `Pagination` component allows users to navigate between pages of characters. It displays buttons for moving between pages and an input field for jumping directly to a specific page number.

### Search

The `Search` component provides a search bar for filtering characters. It accepts user input and communicates with the parent component to handle the search operation.

### Hamburger

The `Hamburger` component renders a hamburger icon for mobile navigation. It toggles the visibility of the navigation menu on smaller screens.

### Navigation

The `Navigation` component provides a responsive navigation bar. It uses `NavLink` components from `react-router-dom` to navigate through the application. It also integrates the `Hamburger` component for mobile screens.

## Styles

The components are styled using separate CSS files for each component to keep the styles modular and maintainable.

### File Naming Convention

-   `.tsx` files are TypeScript files containing JSX.
-   `.css` files are stylesheets associated with the corresponding TypeScript components.

The application entry point is `index.html`, which renders the main React component defined in `App.tsx`. Configuration files like `package.json`, `tsconfig.json`, and others define project settings and TypeScript options.

For more details on specific components and their usage, refer to the source code within each directory.
