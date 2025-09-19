import { useState } from "react";

export default function Location() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleClick = () => {
    setActive(true);

    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: Date.now() + "-" + i,
      left: 50, // kutunun ortasından çıksın
      top: 50,
      size: 28 + Math.random() * 16,
      dx: (Math.random() - 0.5) * 300,
      spin: Math.random() * 360 - 180,
      dur: 2 + Math.random() * 2,
      h: 150 + Math.random() * 200
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 5000);
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-[#806262] to-[#c86363] overflow-hidden">
      <div
        className={`relative w-[86vw] max-w-[540px] aspect-[16/10] rounded-2xl backdrop-blur-lg bg-white/10 shadow-xl cursor-pointer select-none overflow-hidden transition-transform duration-200 ${
          active ? "scale-100" : "active:scale-95"
        }`}
        onClick={handleClick}
      >
        {/* arka plan ışık */}
        <div className="absolute inset-[-40%] bg-[radial-gradient(60%_60%_at_30%_30%,#ff7a59_20%,transparent_60%),radial-gradient(60%_60%_at_70%_70%,#f4b860_18%,transparent_62%)] blur-[60px] opacity-30 animate-[drift_16s_ease-in-out_infinite_alternate]" />

        {/* başlık */}
        <div className="relative z-10 flex flex-col items-center gap-1 text-center px-4">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100 text-[clamp(22px,4.2vw,36px)] drop-shadow">
            Eylülü sevdiğimi öğrenmek için tıkla
          </h1>
        </div>

        {/* “Eylülü seviyorum” yazısı */}
        <div
          className={`absolute left-1/2 bottom-[22%] -translate-x-1/2 px-4 py-2 rounded-xl font-bold text-[clamp(24px,5.8vw,44px)] text-[#3b2a1f] shadow-xl transition-all duration-500 bg-gradient-to-r from-[#ffecd2cc] to-[#fcb69fcc] ${
            active
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-95"
          }`}
        >
          Eylülü seviyorum
        </div>

        {/* ipucu */}
        {!active && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs opacity-60 z-10">
            tıkla ✨
          </div>
        )}

        {/* kalpler */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              transform: "translate(-50%,-50%)",
              fontSize: `${p.size}px`,
              animation: `floatUp ${p.dur}s ease-out forwards`,
              transformOrigin: "center",
              "--dx": `${p.dx}px`,
              "--h": `${p.h}px`,
              "--spin": `${p.spin}deg`,
              "--s": 0.8 + Math.random() * 1.2
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </div>
  );
}
