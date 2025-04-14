import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgetPassword.css'; // We'll create this CSS file

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock functionality
    setTimeout(() => {
      setMessage(`Password reset instructions sent to ${email}`);
      setIsSubmitting(false);
      setTimeout(() => navigate('/login'), 3000);
    }, 1500);
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        <div className="card-header">
          <h2>Forgot Password</h2>
          <p>Enter your email to receive reset instructions</p>
        </div>

        {message ? (
          <div className="success-message">
            <p>{message}</p>
            <p>Redirecting to login page...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? 'submitting' : ''}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Reset Link'}
            </button>
          </form>
        )}

        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;