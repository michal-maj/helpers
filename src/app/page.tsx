import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center sm:text-left">
          Welcome to{" "}
          <span className="text-foreground/80 dark:text-foreground/60">
            helpers
          </span>
        </h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            <Link href={`/intersection-observer-virtual-list`}>
              Intersection Observer - Virtual List
            </Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={`/debounce`}>Debounce hook</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={`/context-list`}>Context List Component</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={`/pagination`}>Pagination hook</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={`/hoc`}>
              Higher order component (HOC) - random number
            </Link>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
