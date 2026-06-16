import { useState } from "react";
import CustomerCard from "./CustomerCard";

// ── Data ──────────────────────────────────────────────────────────────────────
const CUSTOMERS = [
  {
    id: 1,
    code: "OKTAM",
    name: "O'ktam F",
    contact: "O'ktam F",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 2,
    code: "SHOXRUH",
    name: "Shoxruh Y",
    contact: "Shoxruh Y",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 3,
    code: "FOZLJON",
    name: "Fozljon F",
    contact: "Fozljon F",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 4,
    code: "IBROHIM",
    name: "Ibrohim Boyboboyev",
    contact: "Ibrohim Boyboboyev",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 5,
    code: "KOMRORON",
    name: "Komron Mirqosimov",
    contact: "Komron Mirqosimov",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 6,
    code: "MUSLIMA",
    name: "Muslima Sunnatova",
    contact: "Muslima Sunnatova",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 7,
    code: "ADIBAXON",
    name: "Adibaxon Mirzaxo'jayeva",
    contact: "Adibaxon Mirzaxo'jayeva",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 8,
    code: "SALOHIDDIN",
    name: "Salohiddin Musulmonov",
    contact: "Salohiddin Musulmonov",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 9,
    code: "OBIDJON",
    name: "Obidjon Tohirjonov",
    contact: "Obidjon Tohirjonov",
    role: "Top Player",
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    id: 10,
    code: "DAVRON",
    name: "Davron K",
    contact: "Davron K",
    role: "Top Player",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    id: 11,
    code: "MALIKA",
    name: "Malika N",
    contact: "Malika N",
    role: "Top Player",
    city: "Paris",
    country: "France",
  },
  {
    id: 12,
    code: "JAVLON",
    name: "Javlon S",
    contact: "Javlon S",
    role: "Top Player",
    city: "London",
    country: "UK",
  },
  {
    id: 13,
    code: "OVOZBEK",
    name: "Ovozbek T",
    contact: "Ovozbek T",
    role: "Top Player",
    city: "Berlin",
    country: "Germany",
  },
  {
    id: 14,
    code: "SHOKHRAH",
    name: "Shokhrah U",
    contact: "Shokhrah U",
    role: "Top Player",
    city: "Madrid",
    country: "Spain",
  },
  {
    id: 15,
    code: "FARHOD",
    name: "Farhod Q",
    contact: "Farhod Q",
    role: "Top Player",
    city: "Toronto",
    country: "Canada",
  },
  {
    id: 16,
    code: "NODIRA",
    name: "Nodira Z",
    contact: "Nodira Z",
    role: "Top Player",
    city: "Rome",
    country: "Italy",
  },
  {
    id: 17,
    code: "YODGOR",
    name: "Yodgor B",
    contact: "Yodgor B",
    role: "Top Player",
    city: "São Paulo",
    country: "Brazil",
  },
  {
    id: 18,
    code: "LALABA",
    name: "Lalaba H",
    contact: "Lalaba H",
    role: "Top Player",
    city: "Buenos Aires",
    country: "Argentina",
  },
];

const SIDEBAR_ICONS = ["⚙", "⚓", "⌕", "✦", "★", "◈", "✉", "⊞", "▣"];

// ── Component ─────────────────────────────────────────────────────────────────
function CustomerList() {
  // useState — all the interactive state for this page
  const [customers, setCustomers] = useState(CUSTOMERS);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [representative, setRepresentative] = useState("");
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const countries = [...new Set(customers.map((c) => c.country))].sort();
  const cities = [...new Set(customers.map((c) => c.city))].sort();

  const filtered = customers.filter(
    (c) =>
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.contact.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())) &&
      (country === "" || c.country === country) &&
      (city === "" || c.city === city) &&
      (representative === "" ||
        c.contact.toLowerCase().includes(representative.toLowerCase())) &&
      (!showFavorites || favoriteIds.includes(c.id)),
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden text-sm">
      {/* ── Top Bar ────────────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between bg-[#4C8CBF] px-3 py-1.5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#4C8CBF] text-xs font-black">S</span>
          </div>
          <button className="text-white/80 hover:text-white text-xl">☰</button>
        </div>
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center gap-1.5 text-sm">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
              A
            </div>
            <span>admin</span>
          </div>
          <button className="text-white/70 hover:text-white">⎘</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="w-9 bg-[#2B3855] flex flex-col items-center pt-1 gap-0.5 shrink-0">
          {SIDEBAR_ICONS.map((icon, i) => (
            <button
              key={i}
              className="w-9 h-8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              {icon}
            </button>
          ))}
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* Page title + view toggle */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
            <h1 className="text-xl font-normal text-gray-700">Customers</h1>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowFavorites((prev) => !prev)}
                className={`flex items-center gap-1 text-xs border px-2.5 py-1 rounded transition-colors
                  ${showFavorites ? "border-blue-400 text-blue-500 bg-blue-50" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`}
              >
                {showFavorites ? "★ Favorites" : "☆ Favorite Views"}
              </button>
              <button
                onClick={() => setView("list")}
                className={`border px-2 py-1 rounded text-base transition-colors
                  ${view === "list" ? "border-blue-400 text-blue-500 bg-blue-50" : "border-gray-300 text-gray-400 hover:bg-gray-50"}`}
              >
                ≡
              </button>
              <button
                onClick={() => setView("grid")}
                className={`border px-2 py-1 rounded text-base transition-colors
                  ${view === "grid" ? "border-blue-400 text-blue-500 bg-blue-50" : "border-gray-300 text-gray-400 hover:bg-gray-50"}`}
              >
                ⊞
              </button>
            </div>
          </div>

          {/* Toolbar — search + actions */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-gray-200">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button className="bg-[#4C8CBF] text-white px-2 py-1 text-xs">
                🔍
              </button>
              <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs px-2 py-1 outline-none w-28"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const nextId =
                  customers.reduce(
                    (max, customer) => Math.max(max, customer.id),
                    0,
                  ) + 1;
                const countryOptions = [
                  { city: "Tirana", country: "Albania" },
                  { city: "Lima", country: "Peru" },
                  { city: "Cairo", country: "Egypt" },
                  { city: "Tokyo", country: "Japan" },
                  { city: "Nairobi", country: "Kenya" },
                  { city: "Seoul", country: "South Korea" },
                  { city: "Moscow", country: "Russia" },
                  { city: "Delhi", country: "India" },
                  { city: "Sydney", country: "Australia" },
                ];
                const choice = countryOptions[nextId % countryOptions.length];
                const newCustomer = {
                  id: nextId,
                  code: `NEW${nextId}`,
                  name: `New Player ${nextId}`,
                  contact: `Player ${nextId}`,
                  role: "Top Player",
                  city: choice.city,
                  country: choice.country,
                };
                setCustomers((prev) => [newCustomer, ...prev]);
              }}
              className="flex items-center gap-2 text-sm border border-gray-300 bg-white text-gray-700 px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
            >
              <span className="text-green-500 font-bold">+</span>
              Add Card
            </button>
            {["📋", "✏️", "📄", "🗑️"].map((icon, i) => (
              <button
                key={i}
                className="border border-gray-300 px-1.5 py-1 rounded text-xs hover:bg-gray-50"
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-end gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col gap-0.5">
              <label className="text-xs text-gray-500">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 text-xs px-2 py-1 rounded bg-white min-w-28"
              >
                <option value=""></option>
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-xs text-gray-500">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-300 text-xs px-2 py-1 rounded bg-white min-w-28"
              >
                <option value=""></option>
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-xs text-gray-500">Representatives</label>
              <input
                value={representative}
                onChange={(e) => setRepresentative(e.target.value)}
                placeholder="Filter by name"
                className="border border-gray-300 text-xs px-2 py-1 rounded w-40"
              />
            </div>
          </div>

          {/* Grid / List view */}
          <div className="flex-1 overflow-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-gray-400 py-16">
                No customers found.
              </p>
            ) : view === "grid" ? (
              /* GRID — reusable CustomerCard rendered for each customer via .map() */
              <div className="grid grid-cols-3 border-l border-t border-gray-200">
                {filtered.map((c, i) => (
                  <CustomerCard
                    key={c.id}
                    {...c}
                    index={i}
                    favorite={favoriteIds.includes(c.id)}
                    onToggleFavorite={() => {
                      setFavoriteIds((prev) =>
                        prev.includes(c.id)
                          ? prev.filter((id) => id !== c.id)
                          : [...prev, c.id],
                      );
                    }}
                  />
                ))}
              </div>
            ) : (
              /* LIST — simple table view */
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    {[
                      "",
                      "Code",
                      "Company",
                      "Contact",
                      "Role",
                      "City",
                      "Country",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-2 text-left font-semibold text-gray-600"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-gray-100 hover:bg-blue-50/50"
                    >
                      <td className="px-4 py-2 text-gray-500">
                        <button
                          onClick={() => {
                            setFavoriteIds((prev) =>
                              prev.includes(c.id)
                                ? prev.filter((id) => id !== c.id)
                                : [...prev, c.id],
                            );
                          }}
                          className="text-sm"
                        >
                          {favoriteIds.includes(c.id) ? "★" : "☆"}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-blue-500 font-medium">
                        {c.code}
                      </td>
                      <td className="px-4 py-2 text-blue-500">{c.name}</td>
                      <td className="px-4 py-2 text-gray-600">{c.contact}</td>
                      <td className="px-4 py-2 text-gray-500">{c.role}</td>
                      <td className="px-4 py-2 text-gray-500">{c.city}</td>
                      <td className="px-4 py-2 text-gray-500">{c.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination footer */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-gray-200 bg-white shrink-0">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <select className="border border-gray-300 px-1 py-0.5 rounded bg-white">
                <option>100</option>
                <option>50</option>
                <option>25</option>
              </select>
              {["|◀", "◀", "▶", "▶|", "↻"].map((btn, i) => (
                <button
                  key={i}
                  className="border border-gray-300 px-1.5 py-0.5 rounded hover:bg-gray-50"
                >
                  {btn}
                </button>
              ))}
              <span>Page</span>
              <span className="border border-gray-300 px-2 py-0.5">1</span>
              <span>/ 1</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>
                Showing 1 to {filtered.length} of {filtered.length} total
                records
              </span>
              <button className="text-blue-400 hover:underline">
                ▼ edit filter
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CustomerList;
