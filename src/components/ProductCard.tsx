'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { Product, BRAND_INFO } from '@/data/products';
import { MessageCircle, Eye, Star, Heart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart?: (product: Product, size: string) => void;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const installmentValue = product.price / 3;

  const whatsappMessage = `Olá! Gostei muito do ${product.name} no tamanho ${selectedSize} (valor: ${formatBRL(product.price)}). Ainda tem disponível para pronta entrega? ✨`;
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Box */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '125%', // 4:5 aspect ratio
        backgroundColor: '#16060f',
        overflow: 'hidden',
        cursor: 'pointer'
      }} onClick={() => onQuickView(product)}>
        <Image
          src={getAssetPath(product.image)}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(12, 4, 8, 0.85) 0%, rgba(12, 4, 8, 0.1) 40%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          {product.badge ? (
            <span style={{
              background: 'linear-gradient(135deg, rgba(225, 6, 62, 0.9) 0%, rgba(128, 0, 31, 0.9) 100%)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              letterSpacing: '0.04em'
            }}>
              {product.badge}
            </span>
          ) : <div />}

          {/* Wishlist Heart button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label="Favoritar"
            style={{
              pointerEvents: 'auto',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: isLiked ? 'rgba(255, 43, 112, 0.9)' : 'rgba(10, 4, 7, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={16} color={isLiked ? '#fff' : '#fce4ec'} fill={isLiked ? '#fff' : 'none'} />
          </button>
        </div>

        {/* Hover Quick View Overlay Button */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'center',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none'
        }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(10, 4, 7, 0.85)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 43, 112, 0.5)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Eye size={15} color="#ff2b70" />
            <span>Ver Detalhes</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Rating & Review Counter */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>
                {product.rating.toFixed(1)}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                ({product.reviewsCount} avaliações)
              </span>
            </div>
            <span style={{
              fontSize: '0.72rem',
              color: 'var(--brand-gold-light)',
              fontWeight: 600
            }}>
              Pronta Entrega
            </span>
          </div>

          {/* Product Title */}
          <h3
            className="font-serif"
            onClick={() => onQuickView(product)}
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '6px',
              lineHeight: 1.25,
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            lineHeight: 1.45,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.tagline}
          </p>

          {/* Size Selector Pills */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-dim)',
              marginBottom: '6px',
              fontWeight: 600
            }}>
              Selecione o Tamanho:
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    background: selectedSize === size ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedSize === size ? '#fff' : 'var(--text-muted)',
                    border: '1px solid',
                    borderColor: selectedSize === size ? '#ff2b70' : 'rgba(255, 255, 255, 0.15)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div>
          {/* Price Box */}
          <div style={{
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#fff',
                fontFamily: 'var(--font-serif)'
              }}>
                {formatBRL(product.price)}
              </span>
              {product.originalPrice && (
                <span style={{
                  fontSize: '0.88rem',
                  textDecoration: 'line-through',
                  color: 'var(--text-dim)'
                }}>
                  {formatBRL(product.originalPrice)}
                </span>
              )}
            </div>

            <div style={{
              fontSize: '0.78rem',
              color: 'var(--brand-gold-light)',
              marginTop: '2px'
            }}>
              ou 3x de <strong>{formatBRL(installmentValue)}</strong> sem juros
            </div>
          </div>

          {/* Action Button: WhatsApp Order */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '0.88rem',
              borderRadius: '12px'
            }}
          >
            <MessageCircle size={17} />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
