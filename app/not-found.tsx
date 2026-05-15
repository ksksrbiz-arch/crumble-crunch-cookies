import Link from 'next/link';
import { Cookie } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-tight grid place-items-center py-24 text-center">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-cocoa-700 text-cream-50">
        <Cookie className="h-9 w-9" aria-hidden="true" />
      </div>
      <h1 className="mt-6 font-display text-4xl text-cocoa-700 sm:text-5xl">
        Crumb not found.
      </h1>
      <p className="mt-3 max-w-md text-cocoa-500">
        That page seems to have crumbled. Let&apos;s get you back to something
        delicious.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/shop" className="btn-ghost">
          Shop cookies
        </Link>
      </div>
    </section>
  );
}
