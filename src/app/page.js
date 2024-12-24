"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/MattStela/next_50_exercicios/main/README.md"
        );
        const text = await response.text();

        const formattedContent = text
          .replace(/(\d+)\.\s([^\n]+)/g, (match, number, title) => {
            return `${number}. ${title}`;
          })
          .replace(/\n\s*-\s/g, " / ")
          .replace(/#/g, "") // Remove all #
          .replace(/\*/g, "") // Remove all *
          .replace(/\[def\]/g, "") // Remove all [def]
          .replace(/: https:\/\/next-50-exercicios\.vercel\.app\/?/g, "") // Remove the URL
          .replace(/\n\n(?=\d{1,2}\.\s)/g, (match, offset, string) => {
            const number = parseInt(string.substring(offset + 2, offset + 4), 10);
            return number >= 2 && number <= 50 ? "" : match;
          }) // Remove two line breaks before every number from 2 to 50

        setContent(formattedContent);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div className="break-words grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="break-words gap-4 row-start-2 items-center sm:items-start w-full">
        <div className="w-full break-all whitespace-pre-wrap">
          {content}
        </div>
      </main>
    </div>
  );
}