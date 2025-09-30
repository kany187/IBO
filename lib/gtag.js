export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track contact form submissions
export const trackContactForm = () => {
  event({
    action: 'submit_contact_form',
    category: 'engagement',
    label: 'contact_form',
    value: 1
  })
}

// Track project clicks
export const trackProjectClick = (projectName) => {
  event({
    action: 'click_project',
    category: 'engagement',
    label: projectName,
    value: 1
  })
}

// Track section views
export const trackSectionView = (sectionName) => {
  event({
    action: 'view_section',
    category: 'navigation',
    label: sectionName,
    value: 1
  })
}
