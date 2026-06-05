import { AuthProvider } from '../contexts/AuthContext';
import Login from './Login';

const LoginRoute = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);

export default LoginRoute;
