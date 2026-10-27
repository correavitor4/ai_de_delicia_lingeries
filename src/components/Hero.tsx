'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { BRAND_INFO } from '@/data/products';
import { Sparkles, MessageCircle, ShieldCheck, Heart, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(
    'Olá! Quero conhecer as lingeries mais exclusivas da Ai Que Delícia e receber o catálogo VIP! 🔥'
  )}`;

  return (
    <section style={{
      position: 'relative',
      paddingTop: '40px',
      paddingBottom: '70px',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(225, 6, 62, 0.22) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 43, 112, 0.18) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Copywriting & CTAs */}
          <div>
            {/* Tagline Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 43, 112, 0.12)',
              border: '1px solid rgba(255, 43, 112, 0.35)',
              marginBottom: '20px',
              boxShadow: '0 0 15px rgba(255, 43, 112, 0.2)'
            }}>
              <Sparkles size={14} color="#ff2b70" />
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--brand-magenta)'
              }}>
                {BRAND_INFO.slogan}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif" style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '22px'
            }}>
              Seu desejo, <br />
              <span className="text-gradient-ruby">nossa paixão.</span>
            </h1>

            {/* Subtext description */}
            <p style={{
              fontSize: '1.08rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '32px',
              maxWidth: '540px'
            }}>
              Descubra lingeries sensuais de alto padrão com rendas macias que desenham suas curvas, tecidos com toque aveludado e caimento primoroso. Feitas para você se sentir deslumbrante em todos os momentos.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <a href="#catalogo" className="btn-primary" style={{ padding: '16px 32px' }}>
                <span>Ver Coleção Exclusiva</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '16px 28px' }}
              >
                <MessageCircle size={19} />
                <span>Atendimento VIP no WhatsApp</span>
              </a>
            </div>

            {/* Trust and Social Proof Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              flexWrap: 'wrap',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {/* Stars & Reviews */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  display: 'flex',
                  color: '#f59e0b',
                  filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
                    4.9 / 5.0
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    +5.000 clientes satisfeitas
                  </div>
                </div>
              </div>

              {/* Discrete Packaging Seal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 43, 112, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 43, 112, 0.3)'
                }}>
                  <ShieldCheck size={18} color="#ff2b70" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
                    100% Sigiloso
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Embalagem lisa sem logos
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative' }}>
            {/* Glow Aura */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, rgba(255, 43, 112, 0.4), rgba(225, 6, 62, 0.2), transparent)',
              filter: 'blur(20px)',
              zIndex: 0
            }} />

            {/* Main Featured Image Card */}
            <div className="glass-panel" style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 43, 112, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(225, 6, 62, 0.3)',
              zIndex: 1
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '62%', // 16:9 ratio
                backgroundColor: '#17060e'
              }}>
                <Image
                  src={getAssetPath('/images/hero.jpg')}
                  alt="Ai Que Delícia Lingeries Coleção Sensual"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />

                {/* Seductive Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 4, 7, 0.9) 0%, rgba(10, 4, 7, 0.1) 50%, transparent 100%)'
                }} />

                {/* Floating Brand Emblem Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(12, 4, 8, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 43, 112, 0.4)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ff2b70',
                    boxShadow: '0 0 8px #ff2b70'
                  }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff', letterSpacing: '0.05em' }}>
                    Coleção Nova No Ar
                  </span>
                </div>

                {/* Bottom Card Ribbon */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(15, 5, 11, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 43, 112, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--brand-gold-light)',
                      fontWeight: 700
                    }}>
                      Alta Costura Íntima
                    </div>
                    <div style={{
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginTop: '2px'
                    }}>
                      Rendas Francesas & Toque de Seda
                    </div>
                  </div>

                  <a
                    href="#catalogo"
                    style={{
                      background: 'rgba(255, 43, 112, 0.2)',
                      border: '1px solid #ff2b70',
                      color: '#fff',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff2b70';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 43, 112, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Floating Sub-Badge */}
            <div className="animate-float" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              background: 'linear-gradient(135deg, #1f0714 0%, #3d081f 100%)',
              border: '1px solid rgba(229, 192, 123, 0.4)',
              borderRadius: '16px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.7), var(--gold-glow)',
              zIndex: 2
            }}>
              <div style={{
                position: 'relative',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid #e5c07b'
              }}>
                <Image
                  src={getAssetPath('/images/logo.jpg')}
                  alt="Selo de Qualidade"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="45px"
                />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--brand-gold-light)', fontWeight: 700 }}>
                  Garantia de Conforto
                </div>
                <div style={{ fontSize: '0.86rem', color: '#fff', fontWeight: 600 }}>
                  Não machuca & Não aperta
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
