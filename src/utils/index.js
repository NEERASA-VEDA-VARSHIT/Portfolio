// Date formatting utility
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Text truncation utility
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Class name utility for conditional styling
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Animation delay utility
export const getAnimationDelay = (index, baseDelay = 0.1) => {
  return `${index * baseDelay}s`;
}; 