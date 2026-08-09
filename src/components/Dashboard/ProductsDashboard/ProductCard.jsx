import React from "react";
import { Pencil, Trash2, Star, Package } from "lucide-react";
import StatusBadge from "../HomePage/ui/StatusBadge";

const STOCK_VARIANTS_BY_LEVEL = (stock) =>
  stock > 10 ? "bg-green-100 text-green-600" : stock > 0 ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600";

export default function ProductCard({ product, onEdit, onDelete }) {
  const stockLabel = product.stock > 0 ? `${product.stock} عدد` : "ناموجود";

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative">
        {product.img ? (
          <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-violet-50 flex items-center justify-center">
            <Package className="w-10 h-10 text-violet-300" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit?.(product)}
            className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            <Pencil className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => onDelete?.(product.id)}
            className="w-9 h-9 bg-white rounded-xl flex items-center justify-center hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>

        {product.badge && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-medium">
            {product.badge}
          </span>
        )}

        <span className="absolute top-3 left-3">
          <StatusBadge value={stockLabel} className={STOCK_VARIANTS_BY_LEVEL(product.stock)} />
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-slate-400">{product.category}</p>
        <h4 className="font-semibold text-slate-800 mt-1 text-sm">{product.name}</h4>
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-base font-bold text-violet-600">{product.price}</p>
            {product.oldPrice && <p className="text-xs text-slate-400 line-through">{product.oldPrice}</p>}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span className="text-xs text-slate-500">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
