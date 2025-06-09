import { Outlet, Navigate } from "react-router-dom";
import { User } from "../types/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProtectedProps {
    requiredRole?: User['role'];    
}

export const Protected = ({ requiredRole }: ProtectedProps) => {
    const { isAuthenticated, user, isLoading } = useSelector((state: RootState) => state.auth);

    // Show loading while checking authentication
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Check role if required
    if (requiredRole && user?.role !== requiredRole) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}