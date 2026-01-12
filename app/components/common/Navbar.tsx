import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 bg-white px-2 py-3 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between font-medium text-zinc-900 dark:text-zinc-100">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LOGO.png"
            alt="NextSem Logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-10 md:flex">
          <Link href="/" className="hover:opacity-70">Home</Link>

          <button className="flex items-center gap-1 hover:opacity-70">
            Features <span className="text-sm">▾</span>
          </button>

          <Link href="/contact" className="hover:opacity-70">Contact</Link>
          <Link href="/about" className="hover:opacity-70">About Us</Link>
        </div>

        {/* Sign In Button */}
        <button className="rounded-full border border-zinc-900 px-4 py-1.5 text-sm hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-black">
          Sign In
        </button>

      </div>
    </nav>
  );
}
