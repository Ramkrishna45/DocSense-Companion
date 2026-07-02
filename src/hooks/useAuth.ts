import { useState, useEffect } from 'react';
import { auth } from '../services/auth';
import type { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        await auth.initialize();
        const currentUser = await auth.getUser();
        setUser(currentUser);
      } catch (err) {
        console.error('Auth initialization error:', err);
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const u = await auth.login(email, password);
      setUser(u);
      return true;
    } catch (err: any) {
      setError(err.message || 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await auth.logout();
    setUser(null);
  };

  return { user, isLoading, error, login, logout, setError };
}
