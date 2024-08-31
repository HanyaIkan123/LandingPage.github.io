// src/components/ArticleList.jsx
import React from 'react';
import ArticleItem from './ArticleItem';

const articles = [
  {
    id: 1,
    title: "Cara Mengatasi Batuk Dan Pilek ",
    description: "Tutorial Cara Mengatasi Batuk dan Pilek yang Berkelanjutan",
    date: "August 28, 2024",
  },
  {
    id: 2,
    title: "Ciri-Ciri kamu terinveksi Covid-19",
    description: "Berikut ciri-ciri kamu sudah terinveksi penyakit covid-19",
    date: "August 27, 2021",
  },
  {
    id: 3,
    title: "Apakah Kamu terkena TBC ?",
    description: "Berikut adalah ciri-ciri kamu terkena TBC",
    date: "Januari 20, 2019",
  },
  {
    id: 4,
    title: "Penyakit HIV",
    description: "Apa itu HIV, penjelasan, ciri-ciri, dan pencegahannya.",
    date: "Febuari 14, 2017",
  },
  {
    id: 5,
    title: "Penyakit ISPA",
    description: "Apa itu ISPA, Penjelasannya, ciri-ciri, penjegahan, dan pengbobatannya",
    date: "September 10, 2015",
  },
  // Tambahkan artikel lain di sini
];

const ArticleList = () => {
  return (
    <section id="articles" className="py-20 bg-gray-100" style={{ backgroundImage: "url('/src/assets/images/Kesehatan.jpeg')" }}>
      <h2 className="text-3xl font-semibold text-center mb-6">Artikel Terbaru</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {articles.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};




export default ArticleList;
