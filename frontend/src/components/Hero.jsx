import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] md:h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          YAŞAM ALANIN, SENİN SAHNEN!!!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 drop-shadow-md">
          Eviniz için tasarlanmış eşsiz koleksiyonlar; kalite, şıklık ve
          konforun birleşim noktası NortHaus’ta. Hayalinizdeki şıklık, şimdi
          daha yakın.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
          Alışverişe Başla
        </button>
      </div>
    </section>
  );
}
