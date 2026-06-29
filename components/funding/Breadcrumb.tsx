import Link from "next/link";

export function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-6 text-[13px] text-muted-ink"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-ink"
          >
            Home
          </Link>
        </li>

        <li
          aria-hidden="true"
          className="text-[#9CA3AF]"
        >
          ›
        </li>

        <li className="font-medium text-ink">
          Funding
        </li>
      </ol>
    </nav>
  );
}
