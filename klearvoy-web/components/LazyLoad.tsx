import React from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  fallback = <LoadingPlaceholder />,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const LoadingPlaceholder: React.FC<{ height?: string }> = ({ height = '200px' }) => (
  <div 
    className="animate-pulse bg-gray-200 rounded" 
    style={{ height }}
  />
);

export const PageLoading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-secondary text-sm">Loading...</p>
    </div>
  </div>
);
