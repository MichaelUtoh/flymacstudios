import Link from "next/link";

export const metadata = {
  title: "Collections | Flymac Studios",
  description: "View our photography and videography collections.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
        Collections
      </h1>
      <p className="text-soft-gray mb-8 text-center max-w-md">
        Your collections will be displayed here.
      </p>
      <Link
        href="/"
        className="text-charcoal underline transition-opacity duration-300 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 rounded"
      >
        Back to home
      </Link>
    </main>
  );
}
