'use client'
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/MattStela/next_50_exercicios/main/README.md');
        const text = await response.text();
        
        // Numerar os itens do exercício e adicionar duas quebras de linha antes de cada número
        const numberedContent = text.replace(/(\d+)\.\s([^\n]+)/g, (match, number, title) => {
          const num = parseInt(number, 10);
          return `\n\n**${num}.** ${title}`;
        });

        setContent(numberedContent);
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </main>
    </div>
  );
}
