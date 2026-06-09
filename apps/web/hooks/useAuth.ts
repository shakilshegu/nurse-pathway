'use client';
import { useState } from 'react';
import { apiRequest } from '@/lib/api';

export function useAuth() {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await apiRequest<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem('token', data.token);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string, country: string) => {
    setLoading(true);
    try {
      const data = await apiRequest<{ token: string }>('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, country }),
      });
      localStorage.setItem('token', data.token);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => localStorage.removeItem('token');

  return { login, signup, logout, loading };
}
