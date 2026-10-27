'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { Product, BRAND_INFO } from '@/data/products';
import { formatBRL } from './ProductCard';
import { X, MessageCircle, ShieldCheck, Check, Sparkles, Star } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const installmentValue = product.price / 3;

  const whatsappMessage = `Olá! Gostaria de pedir o *${product.name}*:\n- Tamanho: ${selectedSize}\n- Cor: ${selectedColor}\n- Valor: ${formatBRL(product.price)}\n\nPoderia me informar as opções de frete e pagamento no Pix com 5% de desconto?`;
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      backgroundColor: 'rgba(5, 2, 4, 0.88)',
      backdropFilter: 'blur(12px)',
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      
      {/* Modal Dialog */}
      <div style={{
        backgroundColor: '#14060f',
        border: '1px solid rgba(255, 43, 112, 0.35)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '860px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(225, 6, 62, 0.3)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 43, 112, 0.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '30px'
        }} className="modal-grid">
          
          {/* Left: Product Image */}
          <div style={{
            position: 'relative',
            minHeight: '380px',
            backgroundColor: '#1b0713',
            overflow: 'hidden',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px'
          }}>
            <Image
              src={getAssetPath(product.image)}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(20, 6, 15, 0.6) 0%, transparent 40%)'
            }} />
          </div>

          {/* Right: Info and Order Configurator */}
          <div style={{ padding: '32px 32px 32px 0', display: 'flex', flexDirection: 'column' }} className="modal-info">
            
            {/* Badge & Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              {product.badge && (
                <span style={{
                  background: 'rgba(255, 43, 112, 0.2)',
                  border: '1px solid #ff2b70',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '9999px'
                }}>
                  {product.badge}
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#fff' }}>
                  {product.rating.toFixed(1)}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  ({product.reviewsCount} opiniões)
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-serif" style={{
              fontSize: '1.7rem',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '8px'
            }}>
              {product.name}
            </h2>

            {/* Tagline */}
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--brand-gold-light)',
              marginBottom: '16px',
              fontStyle: 'italic'
            }}>
              {product.tagline}
            </p>

            {/* Pricing */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              marginBottom: '18px'
            }}>
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#fff',
                fontFamily: 'var(--font-serif)'
              }}>
                {formatBRL(product.price)}
              </span>
              {product.originalPrice && (
                <span style={{
                  fontSize: '1rem',
                  textDecoration: 'line-through',
                  color: 'var(--text-dim)'
                }}>
                  {formatBRL(product.originalPrice)}
                </span>
              )}
              <span style={{
                fontSize: '0.82rem',
                color: '#25D366',
                fontWeight: 600,
                background: 'rgba(37, 211, 102, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>
                5% OFF no Pix
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              marginBottom: '20px'
            }}>
              {product.description}
            </p>

            {/* Product Key Details */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-dim)',
                marginBottom: '8px',
                fontWeight: 700
              }}>
                Destaques da Peça:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.details.map((detail, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.84rem',
                    color: '#f8e1e7'
                  }}>
                    <Check size={14} color="#ff2b70" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div style={{ marginBottom: '18px' }}>
                <div style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-dim)',
                  marginBottom: '8px',
                  fontWeight: 700
                }}>
                  Cor: <span style={{ color: '#fff' }}>{selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: selectedColor === c.name ? 'rgba(255, 43, 112, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid',
                        borderColor: selectedColor === c.name ? '#ff2b70' : 'rgba(255, 255, 255, 0.2)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontSize: '0.78rem'
                      }}
                    >
                      <span style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: c.hex,
                        border: '1px solid rgba(255,255,255,0.4)',
                        display: 'inline-block'
                      }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div style={{ marginBottom: '26px' }}>
              <div style={{
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-dim)',
                marginBottom: '8px',
                fontWeight: 700
              }}>
                Tamanho Selecionado:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      background: selectedSize === s ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.05)',
                      color: selectedSize === s ? '#fff' : 'var(--text-muted)',
                      border: '1px solid',
                      borderColor: selectedSize === s ? '#ff2b70' : 'rgba(255, 255, 255, 0.15)',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div style={{ marginTop: 'auto' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px' }}
              >
                <MessageCircle size={20} />
                <span>Pedir no WhatsApp com Consultora</span>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '12px',
                fontSize: '0.75rem',
                color: 'var(--text-dim)'
              }}>
                <ShieldCheck size={14} color="#ff2b70" />
                <span>Embalagem 100% discreta • Envio com rastreio imediato</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          :global(.modal-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.modal-info) {
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
