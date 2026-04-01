import React, { useState, useRef } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface HeroSectionProps {
  onDownload: (url: string) => Promise<void>;
  isLoading: boolean;
}

export default function HeroSection({ onDownload, isLoading }: HeroSectionProps) {
  const [url, setUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      await onDownload(url);
      setUrl('');
      inputRef.current?.focus();
    }
  };

  const platforms = [
    'TikTok', 'YouTube', 'Instagram', 'Pinterest', 'Twitter', 'Reddit',
    'Snapchat', 'SoundCloud', 'Spotify', 'Terabox', 'Threads', 'LinkedIn',
    'Dailymotion', 'CapCut', 'Bluesky', 'Kuaishou', 'Douyin', 'Tumblr'
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 border-t-4 border-dashed border-red-600">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            تنزيل الوسائط من أي منصة
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            ادعم 18 منصة مختلفة
          </p>
          <p className="text-gray-600">
            أداة مجانية وسهلة الاستخدام لتنزيل الفيديوهات والصور والصوت من أي منصة، بدون الحاجة لتثبيت أي برنامج.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Input Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* URL Input */}
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  الصق الرابط
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="الصق أي رابط من المنصات المدعومة..."
                  className="w-full px-4 py-3 border-2 border-black rounded text-black placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
                <p className="text-xs text-gray-600 mt-1">
                  مثال: https://www.youtube.com/watch?v=... أو https://www.tiktok.com/@user/video/...
                </p>
              </div>

              {/* Download Button */}
              <button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="w-full py-4 bg-red-600 text-white font-bold text-lg rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري المعالجة...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    ابدأ التحميل الآن
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Supported Platforms */}
          <div className="flex items-center justify-center">
            <div className="border-4 border-black w-full p-6 rounded">
              <p className="text-black font-bold text-center mb-4">المنصات المدعومة (18)</p>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                {platforms.map((platform) => (
                  <div key={platform} className="py-2 px-1 bg-gray-100 rounded border border-gray-300 text-black">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
