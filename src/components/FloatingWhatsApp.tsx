'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { BRAND_INFO } from '@/data/products';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle prompt after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(
    'Olá! Estou navegando no site da Ai Que Delícia Lingeries e gostaria de tirar uma dúvida com uma consultora! ✨'
  )}`;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px'
    }}>
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div style={{
          background: 'rgba(18, 5, 12, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 43, 112, 0.4)',
          borderRadius: '16px',
          padding: '12px 16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 43, 112, 0.25)',
          maxWidth: '260px',
          position: 'relative',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar dica"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer',
              padding: '2px'
            }}
          >
            <X size={14} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              boxShadow: '0 0 6px #25D366'
            }} />
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--brand-gold-light)' }}>
              Consultora Online
            </span>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#fff', lineHeight: 1.4, margin: 0 }}>
            Olá! Precisa de ajuda com tamanhos ou quer ver fotos das peças no corpo? Fale comigo! 💬
          </p>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="animate-pulse-glow"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5), 0 0 15px rgba(255, 43, 112, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          textDecoration: 'none',
          position: 'relative',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={30} />

        {/* Notification badge */}
        <span style={{
          position: 'absolute',
          top: '-2px',
          right: '-2px',
          background: '#ff1a53',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 800,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #0d0408'
        }}>
          1
        </span>
      </a>
    </div>
  );
}
