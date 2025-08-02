import logger from './logger';

export const logPageLoadTime = () => {
  window.addEventListener('load', () => {
    // Use modern Performance API
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    logger.info('Page load time', { loadTime, url: window.location.href });
  });
};

export const logApiCall = (endpoint: string, duration: number, status: number) => {
  logger.info('API call', { endpoint, duration, status });
};