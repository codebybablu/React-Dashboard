import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import DashboardOverview from './Dashboard/DashboardOverview'; // Create these if needed
import DashboardProfile from './Dashboard/DashboardProfile';
import ForgotPassword from './ForgetPassword/ForgetPassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Add more nested routes as needed */}
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;