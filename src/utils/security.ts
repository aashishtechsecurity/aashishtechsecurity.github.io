/**
 * Security utilities for input sanitization and defense-in-depth URL handling.
 */

/**
 * Validates and sanitizes URLs before binding to href attributes.
 * Prevents DOM-based XSS via `javascript:` or `data:` pseudoprotocols.
 * 
 * @param url The raw URL string to validate.
 * @returns A safe URL string (http/https/relative) or '#' if invalid/unsafe.
 */
export const sanitizeUrl = (url?: string): string => {
  if (!url || typeof url !== 'string') {
    return '#';
  }

  const trimmed = url.trim();

  // Allow safe root-relative and hash links
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return trimmed;
    }
    // Block javascript:, data:, vbscript:, file:, etc.
    return '#';
  } catch {
    // If not a valid absolute URL and not starting with / or #, reject
    return '#';
  }
};
