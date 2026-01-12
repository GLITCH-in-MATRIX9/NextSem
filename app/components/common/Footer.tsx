export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white px-6 py-4 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      © {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  );
}
