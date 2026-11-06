export interface SocialLink {
  id: 'facebook' | 'instagram' | 'tiktok';
  name: string;
  url: string | null; // Set to official agency URL when provided
  ariaLabel: string;
}

/**
 * Social media links configuration for HeartBeat Home Health Care.
 * The agency has not yet provided official profile URLs.
 * When official profiles are established, simply add the URLs here
 * (e.g. url: 'https://facebook.com/heartbeathomehealth') and the footer icons
 * will automatically become active and open in a new tab.
 */
export const socialLinksConfig: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: null,
    ariaLabel: 'HeartBeat Home Health Care on Facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: null,
    ariaLabel: 'HeartBeat Home Health Care on Instagram',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: null,
    ariaLabel: 'HeartBeat Home Health Care on TikTok',
  },
];
