import logger from './logger';

export const trackUserActivity = (action: string, details?: any) => {
  logger.info('User activity', {
    action,
    details,
    timestamp: new Date().toISOString(),
    sessionId: sessionStorage.getItem('sessionId'),
    userId: localStorage.getItem('userId')
  });
};

// Usage examples:
// trackUserActivity('donation_initiated', { amount: 1000, cause: 'education' });
// trackUserActivity('page_view', { page: 'about-us' });
// trackUserActivity('form_submitted', { form: 'contact' });