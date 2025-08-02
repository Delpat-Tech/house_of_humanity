import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

// Configure remote logging
remote.apply(log, {
  url: '/api/logs',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  format: (level, name, timestamp, message) => ({
    level,
    name,
    timestamp,
    message,
    userAgent: navigator.userAgent,
    url: window.location.href
  })
});

// Set log level based on environment
log.setLevel(process.env.NODE_ENV === 'production' ? 'warn' : 'debug');

export default log;