'use client';

import React, { useState } from 'react';
import { BRAND_INFO } from '@/data/products';
import { Copy, Check, Sparkles, MessageCircle, Heart } from 'lucide-react';

export default function VipCouponBanner() {
  const [copied, setCopied] = useState(false);

  const couponCode = 'DELICIA10';

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(
    `Olá! Quero usar meu cupom *${couponCode}* de 10% OFF no meu primeiro pedido na Ai Que Delícia Lingeries! ✨`
  )}`;

  return (
    <section style={{
      padding: '40px 0',
      position: 'relative'
    }}>
      <div className="site-container">
        <div className="glass-panel glow-border" style={{
          background: 'linear-gradient(135deg, rgba(46, 8, 25, 0.9) 0%, rgba(20, 5, 12, 0.95) 100%)',
          borderRadius: '24px',
          padding: '42px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 43, 112, 0.25)'
        }}>
          {/* Left Text */}
          <div style={{ maxWidth: '580px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--brand-gold-light)',
              marginBottom: '10px'
            }}>
              <Sparkles size={14} />
              <span>Clube Exclusivo Ai Que Delícia</span>
            </div>

            <h3 className="font-serif" style={{
              fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
              color: '#fff',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '10px'
            }}>
              Ganhe <span className="text-gradient-ruby">10% OFF</span> na sua primeira compra
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Aproveite o cupom de boas-vindas para renovar sua gaveta de lingeries com peças de puro luxo e toque aveludado. Válido em todo o catálogo!
            </p>
          </div>

          {/* Right Action Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap'
          }}>
            {/* Coupon Chip */}
            <div style={{
              background: 'rgba(10, 4, 7, 0.8)',
              border: '2px dashed rgba(255, 43, 112, 0.5)',
              borderRadius: '14px',
              padding: '10px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700 }}>
                  Código do Cupom
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.08em', color: '#fff' }}>
                  {couponCode}
                </div>
              </div>

              <button
                onClick={handleCopy}
                style={{
                  background: copied ? 'rgba(37, 211, 102, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid',
                  borderColor: copied ? '#25D366' : 'rgba(255, 255, 255, 0.2)',
                  color: copied ? '#25D366' : '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '0.9rem' }}
            >
              <span>Aplicar no WhatsApp</span>
              <MessageCircle size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
