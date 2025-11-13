# MERN Mini Site

This is a mini website project built using the MERN stack (MongoDB, Express, React, Node.js). The project serves as a basic template for creating a full-stack web application.

## Project Structure

```
mern-mini-site
├── client                # Client-side application (React)
│   ├── package.json      # Client dependencies and scripts
│   ├── public
│   │   └── index.html    # Main HTML file for the React app
│   └── src
│       ├── index.jsx     # Entry point for the React application
│       ├── App.jsx       # Main App component
│       ├── api
│       │   └── api.js    # API calls to the server
│       ├── components
│       │   └── Header.jsx # Header component for navigation
│       ├── pages
│       │   ├── Home.jsx   # Home page component
│       │   └── About.jsx  # About page component
│       ├── styles
│       │   └── main.css   # CSS styles for the React application
│       └── setupTests.js   # Testing configurations
├── server                # Server-side application (Node.js/Express)
│   ├── package.json      # Server dependencies and scripts
│   ├── .env.example      # Example environment variables
│   └── src
│       ├── index.js      # Entry point for the server application
│       ├── app.js        # Initializes the Express application
│       ├── config
│       │   └── db.js     # Database connection logic
│       ├── controllers
│       │   └── userController.js # User-related request handlers
│       ├── models
│       │   └── userModel.js # User model schema
│       ├── routes
│       │   └── userRoutes.js # User-related routes
│       └── middleware
│           └── auth.js   # Authentication middleware
├── package.json          # Overall project configuration
├── .gitignore            # Files to ignore in version control
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-mini-site
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

### Configuration

1. Create a `.env` file in the `server` directory based on the `.env.example` file and set your environment variables.

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

### Usage

- Navigate to `http://localhost:3000` to view the application.
- The application includes a Home page and an About page.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.