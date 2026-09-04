import Link from "next/link";
import { Home, Mail, TriangleAlert } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
          <TriangleAlert className="h-10 w-10 text-amber-600" />
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          404 Error
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-slate-600">
          The page you&apos;re looking for may have been moved, renamed, or no longer
          exists. You can return to the homepage or contact our team if you need
          assistance.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#102A43] px-6 py-3 font-medium text-white transition hover:bg-[#0d2237]"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-[#D8B25C] hover:text-[#102A43]"
          >
            <Mail className="h-5 w-5" />
            Contact Us
          </Link>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.company.name}
          </p>
        </div>
      </div>
    </main>
  );
}