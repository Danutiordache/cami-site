import React from "react";

export default function CamiSite() {
  const pozaURL = "https://i.postimg.cc/qMJZD5p9/Whats-App-Image-2025-06-26-at-09-17-37.jpg";
  const citat = `apa curge siroaie ,aprins ca o vapaie ,
ca doi chinezi cu ochii mici mancam la doua paie`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-yellow-100 flex flex-col items-center justify-center p-6 text-center font-serif">
      <img
        src={pozaURL}
        alt="Cami"
        className="max-w-xs rounded-3xl shadow-lg mb-6 border-4 border-white"
      />
      <blockquote className="text-2xl italic text-rose-700 max-w-md drop-shadow-md whitespace-pre-line">
        “{citat}”
      </blockquote>
    </main>
  );
}
