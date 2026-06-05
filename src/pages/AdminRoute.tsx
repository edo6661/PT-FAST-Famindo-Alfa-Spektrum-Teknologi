import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
const AdminRoute = () => (
  <AuthProvider>
    <ProtectedRoute />
  </AuthProvider>
);

export default AdminRoute;
