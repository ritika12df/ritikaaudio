// src/EscalateForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EscalationForm.css';

const EscalateForm = () => {
    const [question, setQuestion] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/escalate', { question });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError('Failed to escalate the issue. Please try again.');
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Escalate an Issue</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="question">Describe the issue:</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EscalateForm;
