'use client';

import React, { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import OrderBuilder from '@/components/OrderBuilder';
import Differentiators from '@/components/Differentiators';
import Testimonials from '@/components/Testimonials';
import VipCouponBanner from '@/components/VipCouponBanner';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';
import SizeGuideModal from '@/components/SizeGuideModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Banner Ribbon */}
      <AnnouncementBar />

      {/* Sticky Header */}
      <Header onOpenSizeGuide={() => setSizeGuideOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Product Catalog Showcase */}
      <ProductCatalog />

      {/* Differentiators & Brand Guarantees */}
      <Differentiators />

      {/* Interactive Order Builder */}
      <OrderBuilder />

      {/* VIP Coupon Banner */}
      <VipCouponBanner />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Footer */}
      <Footer onOpenSizeGuide={() => setSizeGuideOpen(true)} />

      {/* Interactive Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
