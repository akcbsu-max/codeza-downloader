import React from 'react';
import { Download, Copy, X, FileVideo, ImageIcon, Music } from 'lucide-react';
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

  // Helper to check if we have any media to show
  const hasVideo = !!data.video;
  const hasDownloads = data.downloads && Array.isArray(data.downloads) && data.downloads.length > 0;
  const hasAudio = !!data.audio;
  const hasMedia = hasVideo || hasDownloads || hasAudio;

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
        <div className="space-y-6 pr-4">
          {!hasMedia && (
            <div className="text-center py-12">
              <p className="text-xl font-bold text-black">عذراً، لم يتم العثور على وسائط قابلة للتحميل</p>
              <p className="text-gray-600 mt-2">يرجى التأكد من الرابط والمحاولة مرة أخرى</p>
            </div>
          )}

          {/* Video Player */}
          {hasVideo && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-black font-bold">
                <FileVideo className="w-5 h-5" />
                <span>معاينة الفيديو</span>
              </div>
              <div className="rounded border-2 border-black overflow-hidden bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <video
                  src={data.video}
                  controls
                  className="w-full h-auto max-h-96"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => downloadFile(data.video, 'video')}
                  className="flex-1 py-3 px-4 bg-red-600 text-white font-bold rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  تحميل الفيديو
                </button>
                <button
                  onClick={() => copyToClipboard(data.video)}
                  className="px-4 py-3 border-2 border-black text-black font-bold rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Images Gallery */}
          {hasDownloads && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-black font-bold">
                <ImageIcon className="w-5 h-5" />
                <span>الصور المتاحة</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.downloads.map((item: any, idx: number) => (
                  <div key={idx} className="space-y-2">
                    <div className="rounded border-2 border-black overflow-hidden bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <img
                        src={item.url}
                        alt={`Media ${idx + 1}`}
                        className="w-full h-auto max-h-64 object-contain bg-white"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => downloadFile(item.url, `image-${idx + 1}`)}
                        className="flex-1 py-2 px-4 bg-black text-white font-bold rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Download className="w-4 h-4" />
                        تحميل {item.format || 'صورة'}
                      </button>
                      <button
                        onClick={() => copyToClipboard(item.url)}
                        className="px-3 py-2 border-2 border-black text-black font-bold rounded hover:bg-gray-100 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio Player */}
          {hasAudio && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-black font-bold">
                <Music className="w-5 h-5" />
                <span>ملف صوتي</span>
              </div>
              <div className="rounded border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <audio
                  src={data.audio}
                  controls
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => downloadFile(data.audio, 'audio')}
                  className="flex-1 py-3 px-4 bg-black text-white font-bold rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  تحميل الصوت
                </button>
                <button
                  onClick={() => copyToClipboard(data.audio)}
                  className="px-4 py-3 border-2 border-black text-black font-bold rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Title */}
          {data.title && (
            <div className="border-t-2 border-black pt-4">
              <h3 className="text-lg font-bold text-black mb-2">العنوان</h3>
              <p className="text-gray-700 break-words">{data.title}</p>
            </div>
          )}

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
