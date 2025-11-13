import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import { 
  auth, 
  googleProvider, 
  githubProvider, 
  appleProvider, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} from "../firebase";
import "./Signup.css";
import signupVector from "../assets/Signup.svg";

function Signup() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  // Proper cleanup to avoid "destroy is not a function"
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("User signed up:", userCredential.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google signup user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  const handleGithubSignup = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub signup user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  const handleAppleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      console.log("Apple signup user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  return (
    <div className={`signup-container ${animate ? "fade-in" : ""}`}>
      <div className="signup-left">
        <img src={signupVector} alt="Signup illustration" className="signup-vector" />
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h2>Create an Account 🌱</h2>
          <p>Join TechKnots and start your learning journey</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Re-enter your password" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <button type="submit" className="signup-btn">Sign Up</button>
            {errors.firebase && <span className="error">{errors.firebase}</span>}
          </form>

          <div className="social-login">
            <p>Or sign up with</p>
            <div className="social-buttons">
              <button className="google-btn" onClick={handleGoogleSignup}><FcGoogle size={20} /></button>
              <button className="apple-btn" onClick={handleAppleSignup}><FaApple size={20} /></button>
              <button className="github-btn" onClick={handleGithubSignup}><FaGithub size={20} /></button>
            </div>
          </div>

          <p className="login-text">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
