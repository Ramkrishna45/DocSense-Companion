import { useState } from 'react';
import iconLogo from '../assets/icon.svg';

interface Props {
  onLogin: (email: string, pass: string) => Promise<boolean>;
  error: string | null;
}

export default function LoginForm({ onLogin, error }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(email, password);
    setLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 h-screen animate-fade-in relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="mb-8 text-center animate-slide-up">
        <div className="w-auto h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <img src={iconLogo} alt="DocSense Logo" className="w-auto h-20 object-contain max-w-[200px]" />
        </div>
        <h1 className="text-2xl font-bold mb-1 tracking-tight">Welcome Back</h1>
        <p className="text-slate-400 text-sm">Login to your DocSense account</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full glass-card p-5 animate-scale-in" style={{ animationDelay: '0.1s' }}>
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm text-center">
            {error}
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full mt-2 h-[42px]"
          >
            {loading ? (
              <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
