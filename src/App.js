import './App.css';
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordBis: "",
    okayToEmail: false
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const successfulSignup = "Successfully signed up"
    const passwordsDontMatch = "Passwords do not match"
    const thanks = "Thanks for signing up for our newsletter!"
    if (formData.password !== formData.passwordBis) {
      console.log(passwordsDontMatch)
    } else {
      console.log(successfulSignup)
    }
    if (formData.okayToEmail) {
      console.log(thanks)
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordBis"
          value={formData.passwordBis}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="okayToEmail"
            checked={formData.okayToEmail}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
            className="form--submit"
        >
            Sign up
        </button>
      </form>
    </div>
  );
}

export default App;
