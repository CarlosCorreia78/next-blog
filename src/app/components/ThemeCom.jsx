'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeCom({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show children after first mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a div with no theme class during SSR
  if (!mounted) {
    return (
      <div>
        <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen'>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen'>
        {children}
      </div>
    </div>
  );
}
