import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Collections | Flymac Studios",
  description: "View our photography and videography collections.",
};

const collections = [
  {
    id: "aerial",
    title: "Aerial",
    description: "Bird's-eye perspectives from above",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "nature",
    title: "Nature",
    description: "Landscapes and natural wonders",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    id: "cinematic",
    title: "Cinematic",
    description: "Film-inspired storytelling",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  },
  {
    id: "events",
    title: "Events",
    description: "Captured moments in motion",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    id: "urban",
    title: "Urban",
    description: "Cityscapes and architecture",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
  },
  {
    id: "coastal",
    title: "Coastal",
    description: "Seascapes and shoreline",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
  },
];

function CollectionCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal/5 dark:bg-white/5 cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-white/90 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <header className="border-b border-gray-100 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <Link
            href="/"
            className="inline-block text-soft-gray dark:text-white/70 text-sm tracking-widest uppercase mb-6 transition-colors duration-300 hover:text-charcoal dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-bg rounded"
          >
            ← Back to home
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal dark:text-white tracking-tight">
            Collections
          </h1>
          <p className="text-soft-gray dark:text-white/70 mt-3 max-w-xl">
            Photography and videography curated by Flymac Studios.
          </p>
        </div>
      </header>

      <section
        className="max-w-7xl mx-auto px-6 py-12 md:py-16"
        aria-label="Photo and video collections"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              description={collection.description}
              image={collection.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
