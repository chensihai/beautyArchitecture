import React, { useState } from 'react';
import './App.css';

// display the user's profile

function Page() {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register view
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
            } else {
                alert(data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred, please try again.');
        }
    }
    // fields to display the user's profile
    // handleLogout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        window.location.reload();
    }
    return (
        // Add logout button
        
        

        <div className="App">
            <button onClick={handleLogout}>Logout</button>
            <header className="App-header">
                <h1>Profile</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </label>
                    <label>
                        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
                    </label>
                    <label>
                        <input type="text" value={apiToken} onChange={(e) => setApiToken(e.target.value)} placeholder="Api Token" />
                    </label>
                    <label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" /> 
                    </label>
                    <label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />    
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    )
}

export default Page;