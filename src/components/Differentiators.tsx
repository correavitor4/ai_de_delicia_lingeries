'use client';

import React from 'react';
import { ShieldCheck, Feather, Sparkles, Truck, Headphones, RefreshCw } from 'lucide-react';

export default function Differentiators() {
  const items = [
    {
      icon: <ShieldCheck size={28} color="#ff2b70" />,
      title: 'Embalagem 100% Discreta',
      description: 'Sua privacidade é prioridade absoluta. Pacotes opacos sem nenhum logo externo ou menção a lingeries. Ninguém saberá o que há dentro.'
    },
    {
      icon: <Feather size={28} color="#e5c07b" />,
      title: 'Rendas & Cetim Ultra Macios',
      description: 'Tecidos nobres de alta elasticidade e forro 100% algodão. Peças que vestem sem apertar, sem marcar e que não pinicam na pele.'
    },
    {
      icon: <Sparkles size={28} color="#ff2b70" />,
      title: 'Metais Antialérgicos Finos',
      description: 'Aros e reguladores com acabamento dourado antioxidante de alta joalheria que não enferrujam e preservam o brilho luxuoso.'
    },
    {
      icon: <Truck size={28} color="#e5c07b" />,
      title: 'Envio Rápido para Todo Brasil',
      description: 'Despacho em até 24h úteis com código de rastreio em tempo real via Correios e transportadoras expressas. Frete Grátis acima de R$ 199.'
    },
    {
      icon: <Headphones size={28} color="#ff2b70" />,
      title: 'Consultoria Íntima Humanizada',
      description: 'Dúvidas sobre qual modelo valoriza mais o seu corpo? Nossa equipe atende com carinho, discrição e recomendações sob medida.'
    },
    {
      icon: <RefreshCw size={28} color="#e5c07b" />,
      title: 'Primeira Troca Sem Complicação',
      description: 'Comprou e o tamanho não ficou 100% perfeito? Garantimos suporte ágil para sua primeira troca conforme as diretrizes do CDC.'
    }
  ];

  return (
    <section id="diferenciais" style={{
      paddingTop: '60px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <span>Por que escolher a Ai Que Delícia</span>
          </div>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            O padrão de excelência que você merece
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Cada detalhe foi pensado para proporcionar uma experiência marcante do unboxing ao momento do uso.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'rgba(255, 43, 112, 0.1)',
                border: '1px solid rgba(255, 43, 112, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontSize: '1.18rem',
                color: '#fff',
                fontWeight: 700,
                fontFamily: 'var(--font-serif)'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
