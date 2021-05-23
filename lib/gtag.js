export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
    return null;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
