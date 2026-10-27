'use client';

import React from 'react';
import { ShieldCheck, Truck, Sparkles, CreditCard } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #1c050f 0%, #47061d 50%, #1c050f 100%)',
      borderBottom: '1px solid rgba(255, 43, 112, 0.25)',
      padding: '8px 16px',
      fontSize: '0.82rem',
      fontWeight: 500,
      color: '#fce4ec',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 50
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={15} color="#ff2b70" />
          <span><strong>Embalagem 100% Discreta</strong> & Sigilosa</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Truck size={15} color="#e5c07b" />
          <span><strong>Frete Grátis</strong> para todo Brasil acima de R$ 199</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CreditCard size={15} color="#ff2b70" />
          <span>Até <strong>3x sem juros</strong> ou <strong>5% OFF no Pix</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={15} color="#e5c07b" />
          <span>Cupom 10% OFF: <strong>DELICIA10</strong></span>
        </div>
      </div>
    </div>
  );
}
