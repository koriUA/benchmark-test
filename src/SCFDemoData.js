export const title = 'Session Conversion Funnel';

export const date = new Date();

export const data = [
  {
    title: 'Your site',
    funnelData: {
      sessions: 100,
      browseSessions: 94.45,
      shoppingSessions: 92.1,
      buyingSessions: 23.6
    }
  },
  {
    title: 'Demo Vertical',
    funnelData: {
      sessions: 100,
      browseSessions: 93.22,
      shoppingSessions: 83.57,
      buyingSessions: 19.88
    }
  },
  {
    title: 'Demo Sub-Vertical',
    funnelData: {
      sessions: 100,
      browseSessions: 92.15,
      shoppingSessions: 80.34,
      buyingSessions: 10.38
    }
  }
];

export const response = { data, title, date };

export const asyncResponse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data, title, date });
    }, 1000);
  });
