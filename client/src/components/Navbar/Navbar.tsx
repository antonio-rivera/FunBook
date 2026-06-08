import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 justify-self-start">
          <span className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white shadow-sm">
            F
          </span>
          <span className="text-xl font-bold tracking-normal text-slate-950">
            FunBook
          </span>
        </Link>

        <label className="relative w-[42vw] min-w-48 max-w-xl justify-self-center">
          <span className="sr-only">Search</span>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search books, authors, topics..."
            className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <button
          type="button"
          aria-label="Open user settings"
          className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 justify-self-end"
        >
          <svg
            aria-hidden="true"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
