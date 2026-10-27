'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { BRAND_INFO } from '@/data/products';
import { ShieldCheck, Heart, MessageCircle, Instagram, Mail, Lock, CreditCard } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide: () => void;
}

export default function Footer({ onOpenSizeGuide }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#070205',
      borderTop: '1px solid rgba(255, 43, 112, 0.25)',
      paddingTop: '60px',
      paddingBottom: '30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(225, 6, 62, 0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                position: 'relative',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #ff2b70',
                boxShadow: '0 0 15px rgba(255, 43, 112, 0.5)'
              }}>
                <Image
                  src={getAssetPath('/images/logo.jpg')}
                  alt="Ai Que Delícia Lingeries"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="60px"
                />
              </div>

              <div>
                <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
                  ai que delícia
                </div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--brand-gold-light)', textTransform: 'uppercase', marginTop: '3px' }}>
                  Lingeries • Boutique Luxo
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '18px'
            }}>
              {BRAND_INFO.slogan} <br />
              <strong style={{ color: 'var(--brand-magenta)' }}>{BRAND_INFO.taglineSecondary}</strong>
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 43, 112, 0.1)',
              border: '1px solid rgba(255, 43, 112, 0.25)',
              fontSize: '0.78rem',
              color: '#fff'
            }}>
              <ShieldCheck size={15} color="#ff2b70" />
              <span>Embalagem 100% Discreta & Sigilosa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: '#fff',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#catalogo" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.86rem' }}>
                  Coleção Completa
                </a>
              </li>
              <li>
                <a href="#diferenciais" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.86rem' }}>
                  Diferenciais & Tecidos
                </a>
              </li>
              <li>
                <a href="#monte-seu-pedido" style={{ color: 'var(--brand-gold-light)', textDecoration: 'none', fontSize: '0.86rem', fontWeight: 600 }}>
                  Monte seu Pedido
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left'
                  }}
                >
                  Tabela de Medidas
                </button>
              </li>
              <li>
                <a href="#depoimentos" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.86rem' }}>
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.86rem' }}>
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: '#fff',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              Atendimento VIP
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                <MessageCircle size={16} color="#25D366" />
                <span>WhatsApp: {BRAND_INFO.phoneFormatted}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                <Instagram size={16} color="#ff2b70" />
                <span>Instagram: {BRAND_INFO.instagram}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                <Mail size={16} color="#e5c07b" />
                <span>{BRAND_INFO.email}</span>
              </li>
              <li style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                Horário: Seg a Sáb das 09h às 21h
              </li>
            </ul>
          </div>

          {/* Security & Payment */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              color: '#fff',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              Segurança & Pagamentos
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Lock size={16} color="#25D366" />
                <span style={{ fontSize: '0.78rem', color: '#fff', fontWeight: 600 }}>
                  Certificado SSL 256-Bit Criptografado
                </span>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Formas aceitas:
                <div style={{ color: '#fff', fontWeight: 600, marginTop: '4px' }}>
                  Pix (5% OFF) • Cartões até 12x • Boleto
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.78rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            &copy; {currentYear} Ai Que Delícia Lingeries. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Feito com</span>
            <Heart size={12} color="#ff2b70" fill="#ff2b70" />
            <span>para exaltar sua melhor versão.</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
