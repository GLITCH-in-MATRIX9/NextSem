import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />

      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        To get started, edit the page.tsx file.
      </h1>

      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        This is a minimal Next.js setup with Navbar and Footer.
      </p>
    </main>
  );
}
