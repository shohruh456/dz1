import { useState } from "react";

// Avatar colors — gives each card visual variety like the screenshot
const COLORS = [
  { bg: "bg-amber-100", text: "text-amber-600" },
  { bg: "bg-pink-100", text: "text-pink-600" },
  { bg: "bg-sky-100", text: "text-sky-600" },
  { bg: "bg-emerald-100", text: "text-emerald-600" },
  { bg: "bg-violet-100", text: "text-violet-600" },
  { bg: "bg-orange-100", text: "text-orange-600" },
];

// PROPS: code, name, contact, role, city, country, index, favorite, onToggleFavorite
// STATE: selected — toggles a blue highlight when the card is clicked
function CustomerCard({
  code,
  name,
  contact,
  role,
  city,
  country,
  index = 0,
  favorite = false,
  onToggleFavorite,
}) {
  const [selected, setSelected] = useState(false);
  const { bg, text } = COLORS[index % COLORS.length];

  return (
    <div
      className={`relative flex items-start gap-3 p-3 border-r border-b border-gray-200 cursor-pointer transition-colors
        ${selected ? "bg-blue-50 border-l-2 border-l-blue-400" : "bg-white hover:bg-gray-50"}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          if (onToggleFavorite) {
            onToggleFavorite();
          }
        }}
        className="absolute right-3 top-3 text-lg leading-none text-yellow-500"
      >
        {favorite ? "★" : "☆"}
      </button>

      {/* Avatar — first letter of contact name */}
      <div
        className={`w-17 h-17 shrink-0 flex items-center justify-center text-2xl font-bold ${bg} ${text}`}
      >
        {contact.charAt(0)}
      </div>

      {/* Card text */}
      <div className="min-w-0">
        <p className="text-sm font-semibold text-blue-500 truncate">
          {code} - {name}
        </p>
        <p className="text-sm text-gray-600 mt-0.5 truncate">
          {contact}, {role}
        </p>
        <p className="text-sm text-gray-400">
          {city}, {country}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
