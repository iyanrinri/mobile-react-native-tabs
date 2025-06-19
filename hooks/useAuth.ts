import { useCallback, useState } from 'react';

interface AuthState {
  user: null | { email: string };
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: false,
    error: null,
  });

  const login = useCallback(async (email: string, password: string) => {
    setState(s => ({ ...s, loading: true, error: null }));
    try {
      // Simulasi login, ganti dengan API call sesuai kebutuhan
      await new Promise(res => setTimeout(res, 1000));
      setState({ user: { email }, loading: false, error: null });
      return true;
    } catch (e) {
      setState(s => ({ ...s, loading: false, error: 'Login failed' }));
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, loading: false, error: null });
  }, []);

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    logout,
  };
}
