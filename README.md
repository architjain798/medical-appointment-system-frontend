# Frontend and Backend Repositories for Medical Appointment System

## Frontend Repository

### **Project Overview**
This repository contains the frontend code for the Medical Appointment System, built with **React.js** and styled using **Material-UI**. It provides an intuitive user interface for booking, managing, and viewing medical appointments.

### **Features**
- Login and Registration pages.
- Dashboard for users to view and manage appointments.
- Pagination for doctor listings.
- Responsive design for mobile and desktop.
- Form validation and error handling.

### **Tech Stack**
- **React.js** for UI development.
- **Material-UI** for modern design components.
- **Axios** for API calls.
- **React Router** for routing.

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone <frontend-repo-url>
   cd medical-appointment-system-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### **Scripts**
- `npm start`: Start the development server.
- `npm run build`: Build the app for production.
- `npm test`: Run tests.

### **Folder Structure**
```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.js
│   │   ├── Register.js
│   ├── Appointments/
│   │   ├── AppointmentForm.js
│   │   ├── AppointmentList.js
│   ├── Doctors/
│   │   ├── DoctorList.js
│   ├── LandingPage/
│       ├── LandingPage.js
├── utils/
│   ├── api.js
├── App.js
├── index.js
```

---



