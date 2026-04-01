import React, { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResultSection from '@/components/ResultSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { downloadMedia, formatErrorMessage } from '@/lib/downloader';

/**
 * Home Page - Main landing page for Codeza downloader
 * 
 * Design: Neon Cyberpunk Glassmorphism
 * - Dark background with neon purple and cyan accents
 * - Glassmorphic cards with blur effects
 * - Smooth animations and transitions
 * - Responsive design for all devices
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [sourceUrl, setSourceUrl] = useState('');

  const handleDownload = async (url: string) => {
    // Validate input
    if (!url.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    setIsLoading(true);
    setSourceUrl(url);

    try {
      const data = await downloadMedia(url);
      setResult(data);
      toast.success(`Successfully downloaded from ${data.platform}!`);
    } catch (error) {
      const errorMsg = formatErrorMessage(error);
      toast.error(errorMsg);
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseResult = () => {
    setResult(null);
    setSourceUrl('');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection onDownload={handleDownload} isLoading={isLoading} />

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Result Modal */}
      {result && (
        <ResultSection
          data={result}
          onClose={handleCloseResult}
          url={sourceUrl}
        />
      )}
    </div>
  );
}
