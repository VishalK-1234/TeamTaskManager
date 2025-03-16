# Team Task Manager

A modern web application for managing tasks within a team. This system allows administrators to create and assign tasks to employees, while employees can view and update the status of their assigned tasks.

## Features

- **User Authentication**
  - Secure login system
  - Role-based access (Admin and Employee)
  - Persistent login state

- **Admin Dashboard**
  - Create and assign tasks to team members
  - View task statistics for all employees
  - Real-time updates of task status

- **Employee Dashboard**
  - View assigned tasks categorized by status
  - Update task status (New → Active → Successful/Unsuccessful)
  - Track personal task statistics

- **Task Management**
  - Four task states: New, Active, Completed, Failed
  - Task details include title, description, category, and due date
  - Task count statistics

## Technologies Used

- **Frontend**
  - React.js (with Vite for fast development)
  - Tailwind CSS for styling
  - Context API for state management

- **Data Management**
  - LocalStorage for persistence
  - Custom state synchronization

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/VishalK-1234/TeamTaskManager
   cd team-task-manager
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Display Compatibility

#### Note: This application is not fully responsive. For the best experience, please use Google Chrome at 100% zoom on a standard desktop or laptop screen.

## Usage

### Admin Access
- Email: `admin@ttm.com`
- Password: `admin`

### Employee Access

#### Emails:
emp1@ttm.com

emp2@ttm.com

emp3@ttm.com

emp4@ttm.com

emp5@ttm.com

Password: 1234

### Task Flow
1. Admin creates tasks and assigns them to employees.
2. Employees see new tasks in their dashboard.
3. Employees can accept tasks (changing status to Active).
4. Active tasks can be marked as Successful or Unsuccessful.
5. Task counts update in real-time.

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Other/
│   │   ├── Header.jsx
│   │   ├── CreateTask.jsx
│   │   ├── AllTask.jsx
│   │   └── TaskListNumbers.jsx
│   └── TaskList/
│       ├── TaskList.jsx
│       ├── NewTask.jsx
│       ├── AcceptTask.jsx
│       ├── CompleteTask.jsx
│       └── FailedTask.jsx
├── context/
│   └── AuthProvider.jsx
├── utils/
│   └── localstorage.jsx
├── App.jsx
└── main.jsx
```

## State Management

The application uses **React Context API** for state management, with persistent storage in **localStorage**. This enables:

- Real-time updates across components
- Persistent state between sessions
- Efficient data synchronization
- Role-based access control

## Demo

![TeamTaskManager](demo.gif)

## Contributors
- **Vishal K** - Creator & Developer

## Feedback

If you have any feedback, please reach me out at vishalk16801680@gmail.com
