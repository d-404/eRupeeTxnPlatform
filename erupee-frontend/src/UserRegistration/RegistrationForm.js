import React, { useState } from "react";
import './RegistrationForm.css';
import axios from "axios";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        balance: 0
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('/register', formData)
            .then(response => {
                console.log('POST request successful:', response.data);
            })
            .catch(error => {
                console.error('Error making POST request:', error);
            });
    };


    return (
        <div class="container">
            <h2><i>User Registration</i></h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} required onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} required onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="balance">e₹ Balance:</label>
                    <input type="number" id="balance" name="balance" value={formData.balance} required onChange={handleChange} />
                </div>
                <div class="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};


export default RegistrationForm;