import { getProduct } from "@/lib/products";

export default function ProductChip({ name }: { name: string }) {
  const product = getProduct(name);
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[var(--ink-3)]">
      <i
        aria-hidden
        className="inline-block h-2.5 w-2.5 rounded-[3px]"
        style={{ background: product?.color ?? "var(--ink-3)" }}
      />
      {name}
    </span>
  );
}
