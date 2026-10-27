'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { BRAND_INFO } from '@/data/products';
import { MessageCircle, Menu, X, Sparkles, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenSizeGuide: () => void;
  favoritesCount?: number;
}

export default function Header({ onOpenSizeGuide, favoritesCount = 0 }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(
    'Olá! Estava navegando no site da Ai Que Delícia Lingeries e gostaria de ver o catálogo completo com uma consultora! ✨'
  )}`;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? 'rgba(10, 4, 7, 0.94)' : 'rgba(10, 4, 7, 0.75)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid',
      borderColor: isScrolled ? 'rgba(255, 43, 112, 0.3)' : 'rgba(255, 255, 255, 0.08)',
      boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none'
    }}>
      <div className="site-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: isScrolled ? '10px' : '14px',
        paddingBottom: isScrolled ? '10px' : '14px',
        transition: 'all 0.3s ease'
      }}>
        {/* Brand Logo and Title */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: '#fff'
        }}>
          <div style={{
            position: 'relative',
            width: isScrolled ? '46px' : '54px',
            height: isScrolled ? '46px' : '54px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #ff2b70',
            boxShadow: '0 0 15px rgba(255, 43, 112, 0.6)',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}>
            <Image
              src={getAssetPath('/images/logo.jpg')}
              alt="Ai Que Delícia Lingeries"
              fill
              style={{ objectFit: 'cover' }}
              sizes="60px"
              priority
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isScrolled ? '1.25rem' : '1.45rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span className="text-gradient-ruby">ai que delícia</span>
              <Heart size={14} color="#ff2b70" fill="#ff2b70" />
            </div>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--brand-gold-light)',
              fontWeight: 600,
              marginTop: '2px'
            }}>
              Lingeries • Boutique Luxo
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }} className="desktop-nav">
          <a href="#catalogo" style={{
            color: '#f8d7e0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s',
            letterSpacing: '0.02em'
          }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')} onMouseLeave={(e) => (e.currentTarget.style.color = '#f8d7e0')}>
            Coleções
          </a>

          <a href="#diferenciais" style={{
            color: '#f8d7e0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')} onMouseLeave={(e) => (e.currentTarget.style.color = '#f8d7e0')}>
            Diferenciais
          </a>

          <a href="#monte-seu-pedido" style={{
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--brand-gold-light)',
            transition: 'opacity 0.2s'
          }}>
            <Sparkles size={14} color="#e5c07b" />
            Monte seu Pedido
          </a>

          <button
            onClick={onOpenSizeGuide}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8d7e0',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'inherit',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f8d7e0')}
          >
            Guia de Medidas
          </button>

          <a href="#depoimentos" style={{
            color: '#f8d7e0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')} onMouseLeave={(e) => (e.currentTarget.style.color = '#f8d7e0')}>
            Depoimentos
          </a>

          <a href="#faq" style={{
            color: '#f8d7e0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ff2b70')} onMouseLeave={(e) => (e.currentTarget.style.color = '#f8d7e0')}>
            FAQ
          </a>
        </nav>

        {/* Action Button & Mobile Burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp desktop-nav"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            <MessageCircle size={17} />
            <span>Chamar no WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-burger-btn"
            aria-label="Abrir menu"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 43, 112, 0.3)',
              borderRadius: '8px',
              color: '#fff',
              padding: '8px',
              display: 'none',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#12050b',
          borderTop: '1px solid rgba(255, 43, 112, 0.2)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '6px 0' }}
          >
            Coleções de Lingerie
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '6px 0' }}
          >
            Diferenciais & Embalagem Discreta
          </a>
          <a
            href="#monte-seu-pedido"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--brand-gold-light)', textDecoration: 'none', fontSize: '1rem', padding: '6px 0', fontWeight: 600 }}
          >
            ✨ Monte seu Pedido no WhatsApp
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSizeGuide();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              textAlign: 'left',
              fontSize: '1rem',
              padding: '6px 0',
              cursor: 'pointer'
            }}
          >
            📏 Tabela e Guia de Medidas
          </button>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '6px 0' }}
          >
            Depoimentos de Clientes
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', padding: '6px 0' }}
          >
            Perguntas Frequentes
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ marginTop: '8px', width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Falar com Consultora no WhatsApp</span>
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-burger-btn) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
