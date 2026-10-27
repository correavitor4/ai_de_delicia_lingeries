'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/products';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{
      paddingTop: '60px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="site-container" style={{ maxWidth: '860px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <HelpCircle size={15} />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Perguntas Frequentes
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            margin: '0 auto'
          }}>
            Tudo o que você precisa saber sobre sigilo na entrega, formas de pagamento e garantias.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'rgba(255, 43, 112, 0.45)' : 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '1.02rem',
                    fontWeight: 600
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--brand-magenta)' : '#fff', transition: 'color 0.2s' }}>
                    {item.question}
                  </span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: isOpen ? '#ff2b70' : 'var(--text-dim)',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                    paddingTop: '16px'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
