import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// ---- Example dataset (replace with your own) ----
const PRODUCTS = [
  {
    id: "fender-player-strat",
    type: "guitar",
    brand: "Bumblebee",
    model: "",
    body: "Les Paul",
    pickups: "SSS",
    price: 550,
    rating: 4.7,
    reviews: 132, 
    image: "https://drive.google.com/thumbnail?id=1Zv7MX2-yTIPoHJP85YZ0GizTitCPZQgz&sz=w1600",
    inStock: true,
    badges: ["New", "Popular", "Guitar"],
  },
  {
    id: "squier-classicvibe",
     type: "guitar",
    brand: "Honeybee",
    model: "",
    body: "Precision",
    pickups: "SSS",
    price: 550,
    rating: 4.5,
    reviews: 88,
    image: "https://drive.google.com/thumbnail?id=1inzmUdQewqtWTfA6MhlHIhjVtO9huznZ&sz=w1600",
    inStock: true,
    badges: ["P/P", "Guitar", "Jazz/Bass"],
  },
  {
    id: "ibanez-rg421",
    brand: "Hornet",
     type: "guitar",
    model: "",
    body: "Explorer",
    pickups: "HH",
    price: 750,
    rating: 4.6,
    reviews: 64,
    image: "https://drive.google.com/thumbnail?id=1r9BtukKAOzpg7OWRX_mr0N9SyE60bFxg&sz=w1600",
    inStock: true,
    badges: ["Metal", "Guitar"],
  },
  {
    id: "epiphone-lespaul",
    brand: "Wasp",
     type: "guitar",
    model: "",
    body: "Flying V",
    pickups: "HH",
    price: 750,
    rating: 4.4,
    reviews: 51,
    image: "https://drive.google.com/thumbnail?id=1AL8d67E_qbZ0_hJ-153kRloNt7H6zQVd&sz=w1600",
    inStock: true,
    badges: ["Guitar"],
  },
  {
    id: "jackson-js32",
    brand: "Honeycomb",
     type: "amplifier",
    model: "",
    body: "Combo",
    pickups: "HH",
    price: 125,
    rating: 4.2,
    reviews: 37,
    image: "https://drive.google.com/thumbnail?id=1aLK8mNqRxyZgdnOUFkpetAtp1P1HI5Zf&sz=w1600",
    inStock: true,
    badges: ["Tremolo", "Amplifier"],
  },
    {
    id: "schecter-c6-plus",
    brand: "Hive",
    type: "amplifier",
    model: "",
    body: "Hexagon",
    pickups: "HH",
    price: 150,
    rating: 4.3,
    reviews: 41,
    image: "https://drive.google.com/thumbnail?id=1UGNw54y2QupHCn4k0dTON17pcvIPFad7&sz=w1600",
    inStock: true,
    badges: ["Rock", "Amplifier"],
  },
  {
    id: "prs-se-custom24",
    brand: "Swarm",
    type: "amplifier",
    model: "",
    body: "Combo",
    pickups: "HH",
    price: 175,
    rating: 4.8,
    reviews: 95,
    image: "https://drive.google.com/thumbnail?id=1MeGzWOKRKNHisgem8aRUJWoF5emMSoBb&sz=w1600",
    inStock: true,
    badges: ["Premium", "Amplifier"],
  },
  {
    id: "yamaha-pacifica-112v",
    brand: "Covan",
    type: "amplifier",
    model: "",
    body: "Hexagon",
    pickups: "HSS",
    price: 250,
    rating: 4.4,
    reviews: 73,
    image: "https://drive.google.com/thumbnail?id=1vGSTS6VUfbql3CAHcc4nj5aZnReXYsA-&sz=w1600",
    inStock: true,
    badges: ["Beginner", "Amplifier"],
  },

];



export default function GuitarCatalog() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("relevance");
  const [page, setPage] = useState(1);
  const pageSize = 8; // always show 8 per page

  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PRODUCTS.filter(p => `${p.brand} ${p.model}`.toLowerCase().includes(q));
  }, [query]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortKey) {
      case "price-asc":
        arr.sort((a, b) => a.price - b.price); break;
      case "price-desc":
        arr.sort((a, b) => b.price - a.price); break;
      case "rating":
        arr.sort((a, b) => b.rating - a.rating); break;
      default:
        break;
    }
    return arr;
  }, [filtered, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h1 className="text-xl font-bold">🎸 Our products</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            className="border rounded-lg px-3 py-2 w-56"
          />
          <select
            value={sortKey}
            onChange={(e) => { setSortKey(e.target.value); setPage(1); }}
            className="border rounded-lg px-3 py-2"
          >
            <option value="relevance">Best Match</option>
            <option value="price-asc">Price: Ascending</option>
            <option value="price-desc">Fiyat: Descending</option>
            <option value="rating">Point</option>
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className="text-gray-500">Not found.</p>
      ) : (
        <>
          {/* 8 small cards per page: 4 columns x 2 rows on large screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 " >
            {pageItems.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-3 flex flex-col cursor-pointer hover:scale-105"
                onClick={() => {p.type==="guitar" ? navigate('/product') : navigate('/product-amplifier')}}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-2">
                  <img src={p.image} alt={p.model} className="object-cover w-full h-full" />
                </div>
                <h2 className="text-sm font-semibold leading-tight">{p.brand} {p.model}</h2>
                <p className="text-xs text-gray-500">{p.body} • {p.pickups}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs">★ {p.rating}</span>
                  <span className="text-[10px] text-gray-400">({p.reviews})</span>
                </div>
                <p className="mt-1 text-base font-bold">{p.price.toLocaleString("tr-TR")} €</p>
                <div className="mt-2 flex gap-1 flex-wrap min-h-[22px]">
                  {p.badges?.map((b) => (
                    <span key={b} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100">{b}</span>
                  ))}
                </div>
                <button
                  disabled={!p.inStock}
                  className={`mt-auto w-full py-2 rounded-lg text-sm font-medium  hover:opacity-95 ${
                    p.inStock ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {p.inStock ? "Add to Cart" : "No Stock"}
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1.5 rounded-lg border ${page===1? 'text-gray-400 border-gray-200 bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}
            >Previous</button>
            <span className="text-sm text-gray-600">Page {page} / {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1.5 rounded-lg border ${page===totalPages? 'text-gray-400 border-gray-200 bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}
            >Next</button>
          </div>
        </>
      )}
    </div>
  );
}
