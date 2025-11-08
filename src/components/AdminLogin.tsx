import { useState } from 'react';
import { X, Lock } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

interface AdminLoginProps {
  onClose: () => void;
}

export default function AdminLogin({ onClose }: AdminLoginProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdmin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(code);
    if (success) {
      onClose();
    } else {
      setError('Code incorrect');
      setCode('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-[#001f5b] text-white p-4 rounded-full mb-4">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
          <p className="text-gray-600 text-center mt-2">Enter admin code to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter admin code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001f5b] mb-4"
            autoFocus
          />

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#001f5b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003080] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
