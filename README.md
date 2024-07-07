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

Certainly! Here's an updated section on how to use the Library Management System (LMS) with clear instructions on accessing the application and ensuring port availability:

---

## How to Use

### Prerequisites
- Node.js and npm installed on your machine.

### Setup

1. **Clone the Repository**
    ```sh
    git clone https://github.com/Luvshanker14/Bro_Code.git
    ```

    Navigate to the project directory:
    ```sh
    cd Bro_Code
    ```

2. **Backend and Frontend Setup**
    Start the backend server and frontend development servers for both user and admin portals concurrently:
    ```sh
    npm run lms
    ```

3. **Accessing the Application**
    - After running `npm run lms`, ensure the following ports are free on your machine: **5173**, **5174**, **5175**, and **3000**.
    - Click on the link provided in the terminal to access the application: [http://localhost:5175](http://localhost:5175).
    - If you are a new user, register using the registration form.
    - Log in as a user  to start using the features of the LMS.

