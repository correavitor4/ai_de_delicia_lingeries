'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { PRODUCTS, BRAND_INFO, Product } from '@/data/products';
import { formatBRL } from './ProductCard';
import { Sparkles, MessageCircle, Gift, Check, ShieldCheck, Plus, Trash2 } from 'lucide-react';

interface SelectedItem {
  product: Product;
  size: string;
  quantity: number;
}

export default function OrderBuilder() {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([
    { product: PRODUCTS[0], size: PRODUCTS[0].sizes[0], quantity: 1 }
  ]);
  const [includeGiftBox, setIncludeGiftBox] = useState<boolean>(true);
  const [customNote, setCustomNote] = useState<string>('');

  const handleAddItem = (product: Product) => {
    const existingIndex = selectedItems.findIndex((item) => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...selectedItems];
      updated[existingIndex].quantity += 1;
      setSelectedItems(updated);
    } else {
      setSelectedItems([...selectedItems, { product, size: product.sizes[0], quantity: 1 }]);
    }
  };

  const handleRemoveItem = (index: number) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const handleUpdateSize = (index: number, newSize: string) => {
    const updated = [...selectedItems];
    updated[index].size = newSize;
    setSelectedItems(updated);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    const updated = [...selectedItems];
    const newQty = updated[index].quantity + delta;
    if (newQty <= 0) {
      handleRemoveItem(index);
    } else {
      updated[index].quantity = newQty;
      setSelectedItems(updated);
    }
  };

  // Calculations
  const subtotal = selectedItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const giftBoxPrice = includeGiftBox ? 15.00 : 0.00;
  const isFreeShipping = subtotal >= BRAND_INFO.freeShippingThreshold;
  const total = subtotal + giftBoxPrice;

  // Format WhatsApp Message
  const generateWhatsAppMessage = () => {
    let msg = `✨ *NOVO PEDIDO PERSONALIZADO - AI QUE DELÍCIA LINGERIES* ✨\n\n`;
    msg += `Gostaria de fechar o seguinte pedido:\n`;

    selectedItems.forEach((item, idx) => {
      msg += `\n${idx + 1}. *${item.product.name}*\n   - Tamanho: ${item.size}\n   - Quantidade: ${item.quantity}x (${formatBRL(item.product.price * item.quantity)})\n`;
    });

    msg += `\n🎁 Embalagem Presente Luxo Perfumada: ${includeGiftBox ? 'SIM (R$ 15,00)' : 'Não (Embalagem padrão discreta)'}`;
    if (customNote.trim()) {
      msg += `\n💌 Mensagem para o Cartão Secreto: "${customNote}"`;
    }

    msg += `\n\n💰 *Total Estimado:* ${formatBRL(total)}`;
    if (isFreeShipping) {
      msg += ` (Frete Grátis Qualificado! 🎉)`;
    }
    msg += `\n\nPor favor, confirmem a disponibilidade das peças e os dados para pagamento no Pix com desconto. Aguardo! ✨`;

    return msg;
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="monte-seu-pedido" style={{
      paddingTop: '70px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="site-container">
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
            color: 'var(--brand-gold-light)',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} />
            <span>Monte Seu Pedido Personalizado</span>
          </div>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            color: '#fff',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            Crie sua combinação perfeita de lingerie
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '650px',
            margin: '0 auto'
          }}>
            Monte sua caixa com suas peças preferidas, escolha tamanhos, adicione detalhes especiais e envie o pedido estruturado diretamente no WhatsApp para nossa consultora.
          </p>
        </div>

        {/* Builder Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.95fr',
          gap: '32px',
          alignItems: 'start'
        }} className="builder-grid">
          
          {/* Left: Quick Add Products */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '16px', fontWeight: 700 }}>
              1. Escolha ou adicione mais peças à sua sacola:
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {PRODUCTS.map((prod) => {
                const isSelected = selectedItems.some((it) => it.product.id === prod.id);
                return (
                  <div
                    key={prod.id}
                    className="glass-panel"
                    style={{
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      borderColor: isSelected ? 'rgba(255, 43, 112, 0.4)' : 'rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        position: 'relative',
                        width: '54px',
                        height: '54px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: '#1c0814',
                        flexShrink: 0
                      }}>
                        <Image
                          src={getAssetPath(prod.image)}
                          alt={prod.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="60px"
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#fff' }}>
                          {prod.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--brand-gold-light)', fontWeight: 600 }}>
                          {formatBRL(prod.price)}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddItem(prod)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: isSelected ? 'rgba(255, 43, 112, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid',
                        borderColor: isSelected ? '#ff2b70' : 'rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {isSelected ? <Check size={14} color="#ff2b70" /> : <Plus size={14} />}
                      <span>{isSelected ? 'Adicionar +' : 'Incluir'}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom Notes / Secret Card */}
            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Gift size={18} color="#e5c07b" />
                <h4 style={{ fontSize: '0.98rem', color: '#fff', fontWeight: 700 }}>
                  Observações Especiais ou Mensagem para Cartão Secreto
                </h4>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Se for um presente ou surpresa, escreva aqui a dedicatória para colocarmos dentro da caixa perfumada.
              </p>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Ex: 'Para o amor da minha vida, com todo meu desejo...' ou 'Favor não colocar preço na embalagem pois é surpresa'."
                rows={3}
                style={{
                  width: '100%',
                  background: 'rgba(10, 4, 7, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '12px',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontFamily: 'inherit',
                  resize: 'none',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Right: Order Summary Box */}
          <div className="glass-panel" style={{
            padding: '28px',
            position: 'sticky',
            top: '90px',
            borderColor: 'rgba(255, 43, 112, 0.35)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7), var(--ruby-glow)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#fff',
              fontWeight: 800,
              marginBottom: '18px',
              fontFamily: 'var(--font-serif)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>Resumo do Pedido</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--brand-magenta)', fontWeight: 600 }}>
                {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'itens'}
              </span>
            </h3>

            {/* List of items */}
            {selectedItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-dim)' }}>
                Nenhuma peça adicionada ainda. Selecione ao lado para montar sua sacola!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '22px' }}>
                {selectedItems.map((item, idx) => (
                  <div key={idx} style={{
                    paddingBottom: '14px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>
                        {item.product.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                        <select
                          value={item.size}
                          onChange={(e) => handleUpdateSize(idx, e.target.value)}
                          style={{
                            background: '#1a0714',
                            border: '1px solid rgba(255, 43, 112, 0.3)',
                            color: '#fff',
                            borderRadius: '6px',
                            padding: '3px 8px',
                            fontSize: '0.75rem',
                            outline: 'none'
                          }}
                        >
                          {item.product.sizes.map((sz) => (
                            <option key={sz} value={sz}>{sz}</option>
                          ))}
                        </select>
                        <span style={{ fontSize: '0.78rem', color: 'var(--brand-gold-light)', fontWeight: 600 }}>
                          {formatBRL(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <button
                          onClick={() => handleUpdateQuantity(idx, -1)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            padding: '2px 8px',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, padding: '0 4px' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(idx, 1)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            padding: '2px 8px',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(idx)}
                        aria-label="Remover item"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-dim)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Gift Box Checkbox */}
            <div style={{
              background: 'rgba(229, 192, 123, 0.06)',
              border: '1px solid rgba(229, 192, 123, 0.25)',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              cursor: 'pointer'
            }} onClick={() => setIncludeGiftBox(!includeGiftBox)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  checked={includeGiftBox}
                  onChange={() => {}}
                  style={{ accentColor: '#e5c07b', width: '16px', height: '16px' }}
                />
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--brand-gold-light)' }}>
                    Embalagem Presente Luxo Perfumada
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    Caixa rígida com laço de cetim e aroma exclusivo
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                + R$ 15,00
              </span>
            </div>

            {/* Price Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <span>Subtotal dos produtos:</span>
                <span>{formatBRL(subtotal)}</span>
              </div>
              {includeGiftBox && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <span>Caixa Presente Luxo:</span>
                  <span>{formatBRL(giftBoxPrice)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <span>Frete:</span>
                <span style={{ color: isFreeShipping ? '#25D366' : 'var(--brand-gold-light)', fontWeight: 600 }}>
                  {isFreeShipping ? 'Grátis (Pedido > R$ 199)' : 'A calcular com consultora'}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                marginTop: '6px'
              }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                  Total Estimado:
                </span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-serif)' }}>
                  {formatBRL(total)}
                </span>
              </div>
            </div>

            {/* WhatsApp Direct Submit */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                fontSize: '0.95rem'
              }}
            >
              <MessageCircle size={20} />
              <span>Enviar Pedido Pronto para o WhatsApp</span>
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '14px',
              fontSize: '0.74rem',
              color: 'var(--text-dim)'
            }}>
              <ShieldCheck size={14} color="#ff2b70" />
              <span>Sem pagamento antecipado aqui • Pagamento seguro com consultora</span>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.builder-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
