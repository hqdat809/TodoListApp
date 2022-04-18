import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import LoginForm from './component/LoginForm.js'
import Todo from './Todo/index'

function App() {
  const dataUser = JSON.parse(localStorage.getItem('data-user'))

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: dataUser.name, email: dataUser.email })
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("logged in")
      setUser({
        name: details.name,
        email: details.email
      })
      localStorage.setItem('data-user', JSON.stringify(details))
    } else {
      setError("Details do not match")
    }

  }

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <Todo />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
