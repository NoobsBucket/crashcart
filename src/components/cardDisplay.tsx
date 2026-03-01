"use client";

import { useEffect, useState } from "react";
import ProductCard from "./productCard";

type Category = { id: number; name: string; slug: string };
type Product = { id: number; name: string; price: number; image_url: string; category_id: number };

function ProductSection({ category }: { category: Category }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`/api/products?category_id=${category.id}`)
      .then(res => res.json())
      .then(data => setProducts(data.results || []));
  }, [category.id]);

  return (
    <section id={`category-${category.slug}`}>
      <ProductCard
        title={category.name}
        products={products}
      />
    </section>
  );
}

export default function ProductSections() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data.results || []));
  }, []);

  if (categories.length === 0) return null;

  return (
    <div>
      {categories.map(category => (
        <ProductSection key={category.id} category={category} />
      ))}
    </div>
  );
}