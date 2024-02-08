import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../services/authService';
import './Login.scss';

function Login() {
    const navigate = useNavigate();
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = await login(username, password);
            localStorage.setItem('access_token', data.access_token);
            navigate('/produtos');
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
            setShowError(true);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {showError && (
                    <span style={{ color: 'white', display: 'block', margin: '10px' }}>
                        {errorMessage}
                    </span>
                )}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;