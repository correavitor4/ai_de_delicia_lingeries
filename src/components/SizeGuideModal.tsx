'use client';

import React, { useState, useEffect } from 'react';
import { X, Ruler, Sparkles, MessageCircle, Check } from 'lucide-react';
import { BRAND_INFO } from '@/data/products';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const [userBust, setUserBust] = useState<string>('');
  const [userWaist, setUserWaist] = useState<string>('');
  const [userHips, setUserHips] = useState<string>('');
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bust = parseFloat(userBust) || 0;
    const waist = parseFloat(userWaist) || 0;
    const hips = parseFloat(userHips) || 0;

    if (!bust && !waist && !hips) {
      setCalculatedSize(null);
      return;
    }

    // Rough determination
    if (bust <= 86 && hips <= 94) {
      setCalculatedSize('P (veste 38-40)');
    } else if (bust <= 92 && hips <= 102) {
      setCalculatedSize('M (veste 42)');
    } else if (bust <= 98 && hips <= 110) {
      setCalculatedSize('G (veste 44)');
    } else {
      setCalculatedSize('GG (veste 46)');
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(
    `Olá! Gostaria de ajuda para escolher o tamanho correto da minha lingerie. Minhas medidas são: Busto ${userBust || '--'}cm, Cintura ${userWaist || '--'}cm, Quadril ${userHips || '--'}cm.`
  )}`;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      backgroundColor: 'rgba(5, 2, 4, 0.88)',
      backdropFilter: 'blur(12px)',
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      
      <div style={{
        backgroundColor: '#14060f',
        border: '1px solid rgba(255, 43, 112, 0.4)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '720px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), var(--ruby-glow)',
        padding: '32px',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar Guia"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Ruler size={24} color="#ff2b70" />
          <h2 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>
            Guia de Medidas & Caimento
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Encontre o tamanho ideal para valorizar seu corpo com conforto absoluto e sustentação perfeita.
        </p>

        {/* Measurement Table */}
        <div style={{
          overflowX: 'auto',
          marginBottom: '28px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '14px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '0.85rem'
          }}>
            <thead>
              <tr style={{ background: 'rgba(255, 43, 112, 0.15)', color: 'var(--brand-gold-light)' }}>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Tamanho</th>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Manequim</th>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Busto</th>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Tórax</th>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Cintura</th>
                <th style={{ padding: '12px 14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Quadril</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--brand-magenta)' }}>P</td>
                <td style={{ padding: '12px 14px' }}>38 - 40</td>
                <td style={{ padding: '12px 14px' }}>80 a 86 cm</td>
                <td style={{ padding: '12px 14px' }}>68 a 72 cm</td>
                <td style={{ padding: '12px 14px' }}>60 a 68 cm</td>
                <td style={{ padding: '12px 14px' }}>86 a 94 cm</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--brand-magenta)' }}>M</td>
                <td style={{ padding: '12px 14px' }}>42</td>
                <td style={{ padding: '12px 14px' }}>87 a 92 cm</td>
                <td style={{ padding: '12px 14px' }}>73 a 77 cm</td>
                <td style={{ padding: '12px 14px' }}>69 a 76 cm</td>
                <td style={{ padding: '12px 14px' }}>95 a 102 cm</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#fff' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--brand-magenta)' }}>G</td>
                <td style={{ padding: '12px 14px' }}>44</td>
                <td style={{ padding: '12px 14px' }}>93 a 98 cm</td>
                <td style={{ padding: '12px 14px' }}>78 a 82 cm</td>
                <td style={{ padding: '12px 14px' }}>77 a 84 cm</td>
                <td style={{ padding: '12px 14px' }}>103 a 110 cm</td>
              </tr>
              <tr style={{ color: '#fff' }}>
                <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--brand-magenta)' }}>GG</td>
                <td style={{ padding: '12px 14px' }}>46</td>
                <td style={{ padding: '12px 14px' }}>99 a 106 cm</td>
                <td style={{ padding: '12px 14px' }}>83 a 90 cm</td>
                <td style={{ padding: '12px 14px' }}>85 a 94 cm</td>
                <td style={{ padding: '12px 14px' }}>111 a 120 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Calculator Box */}
        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Sparkles size={16} color="#e5c07b" />
            <h3 style={{ fontSize: '1rem', color: '#fff', fontWeight: 700 }}>
              Calculadora Rápida de Tamanho
            </h3>
          </div>

          <form onSubmit={handleCalculate} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.74rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px' }}>Busto (cm)</label>
              <input
                type="number"
                placeholder="Ex: 88"
                value={userBust}
                onChange={(e) => setUserBust(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.74rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px' }}>Cintura (cm)</label>
              <input
                type="number"
                placeholder="Ex: 72"
                value={userWaist}
                onChange={(e) => setUserWaist(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.74rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px' }}>Quadril (cm)</label>
              <input
                type="number"
                placeholder="Ex: 98"
                value={userHips}
                onChange={(e) => setUserHips(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '9px 14px', fontSize: '0.82rem' }}
              >
                Calcular
              </button>
            </div>
          </form>

          {calculatedSize && (
            <div style={{
              marginTop: '14px',
              padding: '12px',
              borderRadius: '10px',
              background: 'rgba(255, 43, 112, 0.15)',
              border: '1px solid #ff2b70',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff'
            }}>
              <Check size={18} color="#25D366" />
              <div>
                Tamanho recomendado para suas medidas: <strong>{calculatedSize}</strong>
              </div>
            </div>
          )}
        </div>

        {/* WhatsApp Help CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Prefere que uma consultora ajude você a escolher o modelo ideal para o seu biotipo?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '12px 24px', fontSize: '0.88rem' }}
          >
            <MessageCircle size={18} />
            <span>Tirar Dúvida de Medidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
