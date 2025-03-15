import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userAction";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const registerState = useSelector(state => state.registerNewUserReducer);
  const { loading, error, success } = registerState;

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    const user = {
      name,
      email,
      password
    };
    dispatch(registerNewUser(user));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className="text-center mb-5">Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="text-right">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  Register
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">Registration successful!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

