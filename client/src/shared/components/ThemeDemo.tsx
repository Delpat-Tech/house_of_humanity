import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeDemo: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Dark Mode Demo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Theme Info */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Current Theme
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Current theme: <span className="font-medium text-primary-blue dark:text-blue-400">{theme}</span>
            </p>
            <button
              onClick={toggleTheme}
              className="bg-primary-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Toggle Theme
            </button>
          </div>

          {/* Sample Content */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Sample Content
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This demonstrates how text, backgrounds, and other elements adapt to the current theme.
            </p>
            <div className="space-y-2">
              <div className="bg-white dark:bg-gray-600 p-3 rounded border border-gray-200 dark:border-gray-500">
                <span className="text-gray-900 dark:text-white">Card content</span>
              </div>
              <div className="bg-fresh-green text-white p-3 rounded">
                <span>Success message</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Form Elements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Input Field
              </label>
              <input
                type="text"
                placeholder="Enter text here..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Dropdown
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Color Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Primary Blue</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fresh-green rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Fresh Green</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-light-blue dark:bg-gray-600 rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Light Blue</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Gray</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 