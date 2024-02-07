import React, { useState } from 'react';
import './App.css';


function App() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register view
//   'role', 'api_token', 'first_name', 'last_name', 'age', 'bio', 'language',
  const [role, setRole] = useState('user');
  const [apiToken, setApiToken] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [language, setLanguage] = useState('en');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = 'http://localhost:8080/api'; // Adjust this URL to your API's URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${apiUrl}/${isLogin ? 'login' : 'register'}`;
    
    try {
        if(isLogin){
      var response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        
      });
    }else{
        var response = await fetch(url, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, role, apiToken, firstName, lastName, age, bio, language }),
          });
    
    }
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert(`Successfully ${isLogin ? 'logged in' : 'registered'}`);
        // Handle successful login/registration (e.g., store token, redirect, etc.)
        //Store the token in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('email', data.email);
        //reload the page
        window.location.reload();
      } else {
        alert(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div className="App">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className='appForm'>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
            <>
                <div>
                    <label>Role:</label>
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Language:</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="zh">Chinese</option>
                    </select>
                </div>
            </>
        )}
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>

        <br />


                {/* Display as an underlined link for Register and Login */}
                <>
                    <a onClick={() => setIsLogin(!isLogin)} className='App-link'>
                        {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
                    </a>
                </>
      
    </div>
  );
}

export default App;
