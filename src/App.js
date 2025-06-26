import React from "react";

export default function CamiSite() {
  const pozaURL = "https://i.postimg.cc/fLRDzkvK/cami.jpg";
  const citat = "Fiecare zi e o șansă nouă să iubești, să ierți, să simți. — Cami";

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-yellow-100 flex flex-col items-center justify-center p-6 text-center font-serif">
      <img 
        src={pozaURL} 
        alt="Cami" 
        className="max-w-xs rounded-3xl shadow-lg mb-6 border-4 border-white"
      />
      <blockquote className="text-2xl italic text-rose-700 max-w-md drop-shadow-md">
        “{citat}”
      </blockquote>
    </main>
  );
}