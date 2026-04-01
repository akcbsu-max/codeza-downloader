/**
 * Media Downloader Utility
 * Detects platform from URL and calls appropriate API endpoint
 */

const API_BASE = 'http://167.172.111.216:3000';

interface PlatformDetection {
  platform: string;
  endpoint: string;
}

/**
 * Detect platform from URL
 */
export function detectPlatform(url: string): PlatformDetection | null {
  const urlLower = url.toLowerCase();

  // Platform detection mapping
  const platformMap: Record<string, string> = {
    'tiktok.com': 'tiktok',
    'vm.tiktok.com': 'tiktok',
    'vt.tiktok.com': 'tiktok',
    'pinterest.com': 'pinterest',
    'pin.it': 'pinterest',
    'youtube.com': 'youtube',
    'youtu.be': 'youtube',
    'instagram.com': 'meta',
    'facebook.com': 'meta',
    'fb.watch': 'meta',
    'twitter.com': 'twitter',
    'x.com': 'twitter',
    'reddit.com': 'reddit',
    'redd.it': 'reddit',
    'snapchat.com': 'snapchat',
    'snap.com': 'snapchat',
    'soundcloud.com': 'soundcloud',
    'spotify.com': 'spotify',
    'open.spotify.com': 'spotify',
    'terabox.com': 'terabox',
    'threads.net': 'threads',
    'linkedin.com': 'linkedin',
    'dailymotion.com': 'dailymotion',
    'dai.ly': 'dailymotion',
    'capcut.com': 'capcut',
    'bsky.app': 'bluesky',
    'kuaishou.com': 'kuaishou',
    'douyin.com': 'douyin',
    'tumblr.com': 'tumblr',
  };

  // Check each platform
  for (const [domain, platform] of Object.entries(platformMap)) {
    if (urlLower.includes(domain)) {
      return {
        platform: platform.charAt(0).toUpperCase() + platform.slice(1),
        endpoint: platform,
      };
    }
  }

  return null;
}

/**
 * Download media from URL
 */
export async function downloadMedia(url: string): Promise<any> {
  try {
    // Detect platform
    const detection = detectPlatform(url);
    if (!detection) {
      throw new Error('المنصة غير مدعومة. يرجى التحقق من الرابط والمحاولة مرة أخرى.');
    }

    // Validate URL format
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      throw new Error('رابط غير صحيح. يرجى إدخال رابط صحيح يبدأ بـ http:// أو https://');
    }

    // Call API
    const apiUrl = `${API_BASE}/api/${detection.endpoint}?url=${encodeURIComponent(url)}`;
    
    console.log(`Downloading from ${detection.platform}...`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      throw new Error(
        data.message || 
        `فشل التحميل من ${detection.platform}.`
      );
    }

    // Return ONLY the data object as requested
    // This handles cases where API returns { success: true, data: { ... } }
    if (data.success && data.data) {
      return {
        ...data.data,
        platform: detection.platform,
        originalUrl: url,
      };
    }

    // Fallback if data structure is different but success is true
    return {
      ...data,
      platform: detection.platform,
      originalUrl: url,
    };
  } catch (error) {
    console.error('Download error:', error);
    throw error;
  }
}

/**
 * Format error message for display
 */
export function formatErrorMessage(error: any): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.';
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`);
    return true;
  } catch {
    return false;
  }
}
