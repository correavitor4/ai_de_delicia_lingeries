'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { Sparkles, Filter } from 'lucide-react';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="catalogo" style={{
      paddingTop: '60px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="site-container">
        {/* Section Header */}
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
            <Sparkles size={14} />
            <span>Coleção Ai Que Delícia</span>
          </div>

          <h2 className="font-serif" style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            color: '#fff',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '14px'
          }}>
            Escolha o modelo do seu próximo momento
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            Peças exclusivas com rendas macias, modelagem anatômica que valoriza a silhueta e acabamentos de alta joalheria íntima.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '42px'
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #ff1a53 0%, #a30830 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: isActive ? '#ff2b70' : 'rgba(255, 255, 255, 0.12)',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(255, 43, 112, 0.4)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {activeModalProduct && (
        <QuickViewModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </section>
  );
}
