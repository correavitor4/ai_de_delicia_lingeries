'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/products';
import { Star, CheckCircle, Sparkles, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{
      paddingTop: '60px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--brand-magenta)',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} />
            <span>Quem comprou, se apaixonou</span>
          </div>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Depoimentos Reais de Clientes
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '580px',
            margin: '0 auto'
          }}>
            Mais de 5.000 mulheres e casais transformando momentos comuns em memórias inesquecíveis.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Rating stars & verified badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: '#25D366',
                    fontWeight: 600,
                    background: 'rgba(37, 211, 102, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '9999px'
                  }}>
                    <CheckCircle size={12} />
                    <span>Compra Verificada</span>
                  </span>
                </div>

                {/* Review Quote */}
                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  color: '#f8d9e3',
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author & Product */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#fff' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                    {t.city} • {t.date}
                  </div>
                </div>

                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--brand-gold-light)',
                  fontWeight: 600,
                  maxWidth: '130px',
                  textAlign: 'right'
                }}>
                  {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
