# Rick and Morty Character Search SPA

## About The Project

This project is a Single Page Application (SPA) that allows users to search for characters from the popular TV show "Rick and Morty." It fetches data from the official [Rick and Morty API](https://rickandmortyapi.com/) and displays the characters in a table format. Users can also navigate between pages of characters and search for specific characters by name.

### Key Features:
- **Search Functionality**: Search for characters by name.
- **Pagination**: Navigate between different pages of characters.
- **Error Handling**: Display a friendly error message when no data is found.
- **Responsive Design**: The app is responsive and works on both desktop and mobile devices.

## Screenshots

All the screenshots can be found in "screenshots" folder inside src. 

## Tools & Technologies Used

- **React.js**: The frontend framework used to build the app.
- **React Router**: For handling navigation and routing.
- **Axios**: For making API requests to fetch character data.
- **Toastify**: For displaying error notifications when data fetch fails.
- **CSS**: For styling the app with custom styles.
- **React Hooks**: For managing component state and side effects (e.g., `useState`, `useEffect`).


## How to Install and Run the Project

### Prerequisites

Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (which includes npm)
- A code editor such as [VS Code](https://code.visualstudio.com/)

### Steps to Install:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/rick-and-morty-character-search.git

2. Navigate into the project directory
 cd rick-morty

3. Install the project dependencies:
 npm install


### Running The Project
To run the project locally, follow these steps:

1. Start the development server:
 npm start

2. Open your browser and go to http://localhost:3000 to see the app in action.


## How to Use

1. Search for a Character: Enter the name of a character in the search bar and the table will update with matching results.

2. Navigate Through Pages: Use the "Next" and "Previous" buttons to navigate between pages of characters.

3. Error Handling: If no characters are found, a message will appear prompting you to try another name.


