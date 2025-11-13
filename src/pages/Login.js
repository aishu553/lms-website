import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";  
import { auth, googleProvider, githubProvider, appleProvider, signInWithPopup, signInWithEmailAndPassword } from "../firebase";
import "./Login.css";
import loginVector from "../assets/login.svg";

function Login() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("User logged in:", userCredential.user);
        navigate("/");
      } catch (error) {
        setErrors({ firebase: error.message });
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("GitHub login user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  const handleAppleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      console.log("Apple login user:", result.user);
      navigate("/");
    } catch (error) {
      setErrors({ firebase: error.message });
    }
  };

  return (
    <div className={`login-container ${animate ? "fade-in" : ""}`}>
      <div className="login-left">
        <img src={loginVector} alt="Login illustration" className="login-vector" />
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back 👋</h2>
          <p>Log in to continue to TechKnots</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <button type="submit" className="login-btn">Login</button>
            {errors.firebase && <span className="error">{errors.firebase}</span>}
          </form>

          <div className="social-login">
            <p>Or login with</p>
            <div className="social-buttons">
              <button className="google-btn" onClick={handleGoogleLogin}><FcGoogle size={20} /></button>
              <button className="apple-btn" onClick={handleAppleLogin}><FaApple size={20} /></button>
              <button className="github-btn" onClick={handleGithubLogin}><FaGithub size={20} /></button>
            </div>
          </div>

          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
