import React from 'react';
import { Download, Copy, X } from 'lucide-react';
import { toast } from 'sonner';

interface ResultSectionProps {
  data: any;
  onClose: () => void;
  url: string;
}

export default function ResultSection({ data, onClose, url }: ResultSectionProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('تم النسخ!');
  };

  const downloadFile = (fileUrl: string, filename: string) => {
    try {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = filename || 'download';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success('تم بدء التحميل!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('فشل التحميل. حاول مرة أخرى.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded border-2 border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Content */}
        <div className="space-y-6 pr-8">
          {/* Video Player */}
          {data.video && (
            <div className="rounded border-2 border-black overflow-hidden bg-black">
              <video
                src={data.video}
                controls
                className="w-full h-auto max-h-96"
              />
            </div>
          )}

          {/* Audio Player */}
          {data.audio && (
            <div className="rounded border-2 border-black p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-3">🎵 مشغل الصوت</p>
              <audio
                src={data.audio}
                controls
                className="w-full"
              />
            </div>
          )}

          {/* Thumbnail */}
          {data.thumbnail && !data.video && (
            <div className="rounded border-2 border-black overflow-hidden">
              <img
                src={data.thumbnail}
                alt="Preview"
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          )}

          {/* Images Gallery */}
          {data.downloads && Array.isArray(data.downloads) && (
            <div className="space-y-4">
              {data.downloads.some((d: any) => d.format?.match(/JPG|PNG|GIF|WEBP/i)) && (
                <div>
                  <p className="text-sm text-gray-600 mb-3">📸 معرض الصور</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.downloads
                      .filter((d: any) => d.format?.match(/JPG|PNG|GIF|WEBP/i))
                      .map((img: any, idx: number) => (
                        <div key={idx} className="rounded border-2 border-black overflow-hidden">
                          <img
                            src={img.url}
                            alt={`Image ${idx + 1}`}
                            className="w-full h-auto max-h-64 object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Title */}
          {data.title && (
            <div>
              <h3 className="text-lg font-bold text-black mb-2">العنوان</h3>
              <p className="text-gray-700 break-words">{data.title}</p>
            </div>
          )}

          {/* Download Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">خيارات التحميل</h3>

            {data.download_links && Array.isArray(data.download_links) && (
              <div className="space-y-2">
                {data.download_links.map((link: any, idx: number) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <button
                      onClick={() => downloadFile(link.url, link.quality || `download-${idx}`)}
                      className="flex-1 py-2 px-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {link.quality || `جودة ${idx + 1}`}
                    </button>
                    <button
                      onClick={() => copyToClipboard(link.url)}
                      className="px-4 py-2 border-2 border-black text-black font-bold rounded hover:bg-gray-100 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Direct Download Link */}
            {data.url && !data.download_links && (
              <div className="flex gap-2">
                <button
                  onClick={() => downloadFile(data.url, data.title || 'download')}
                  className="flex-1 py-2 px-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  تحميل
                </button>
                <button
                  onClick={() => copyToClipboard(data.url)}
                  className="px-4 py-2 border-2 border-black text-black font-bold rounded hover:bg-gray-100 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Video Direct Link */}
            {data.video && (
              <div className="flex gap-2">
                <button
                  onClick={() => downloadFile(data.video, data.title || 'video')}
                  className="flex-1 py-2 px-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  تحميل الفيديو
                </button>
                <button
                  onClick={() => copyToClipboard(data.video)}
                  className="px-4 py-2 border-2 border-black text-black font-bold rounded hover:bg-gray-100 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Audio Direct Link */}
            {data.audio && (
              <div className="flex gap-2">
                <button
                  onClick={() => downloadFile(data.audio, data.title || 'audio')}
                  className="flex-1 py-2 px-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  تحميل الصوت
                </button>
                <button
                  onClick={() => copyToClipboard(data.audio)}
                  className="px-4 py-2 border-2 border-black text-black font-bold rounded hover:bg-gray-100 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Original URL */}
          <div className="bg-gray-50 p-4 rounded border-2 border-black">
            <p className="text-xs text-gray-600 mb-2">الرابط الأصلي</p>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-700 break-all flex-1">{url}</p>
              <button
                onClick={() => copyToClipboard(url)}
                className="flex-shrink-0 p-2 hover:bg-gray-200 rounded transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
