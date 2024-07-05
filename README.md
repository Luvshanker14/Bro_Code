# Library Management System (LMS)

## Team: Bro_Code
**Summer of Innovation 2024**

## Features
- **User Authentication**: Login, logout, and authorization.
- **User and Admin Portals**: Separate portals for users and administrators.
- **Book Management**:
  - Filter books by department.
  - Search for books.
  - Borrow books.
  - Mark books as favorite.
  - Read books online.
  - Get personalized book recommendations.
- **Admin Features**:
  - Add a new book to the system.
  - Manage book borrowing requests (approve/reject).
- **Responsive Design**: Accessible on various devices.
- **Dark Mode**: Switch between light and dark themes for better readability.

## How to Use

### Prerequisites
- Node.js and npm installed on your machine.

### Setup

1. **Clone the Repository**
    ```sh
    git clone https://github.com/Luvshanker14/Bro_Code.git
    ```

    Make sure you are in the `Bro_Code` directory:
    ```sh
    cd Bro_Code
    ```

2. **Backend and Frontend Setup**
    ```sh
    npm run lms
    ```
    This command starts the backend server and frontend development servers for both user and admin portals concurrently.

3. **Accessing the Application**
    - After running `npm run lms`, follow the link provided in the terminal (e.g., `http://localhost:5175`).
    - If you are a new user, register as a user.
    - Log in as an existing user or administrator to start using the application.
