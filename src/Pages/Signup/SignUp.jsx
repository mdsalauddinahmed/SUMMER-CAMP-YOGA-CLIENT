import React, { useState } from 'react';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    if (value !== password) {
      setValidationMessage('Passwords do not match');
    } else {
      setValidationMessage('');
    }
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      {validationMessage && <p>{validationMessage}</p>}
    </div>
  );
};

export default SignUp;
