import Link from "next/link";

export function Nav() {
  const links = ["Startups", "Founders", "Investors", "Products", "Funding", "Jobs"];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">A</span>
          <span className="font-semibold tracking-tight">GraphOne</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link key={l} href="#" className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-muted">
              {l}
            </Link>
          ))}
          <Link href="#market-maps" className="ml-1 rounded-full bg-foreground px-3 py-1.5 text-background">
            Market Maps
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#" className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground">
            Sign in
          </Link>
          <Link href="#" className="inline-flex items-center rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}