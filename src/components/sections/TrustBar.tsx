import { homeContent } from "@/content/home";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface py-5">
      <div className="page-shell grid gap-3 text-sm font-medium text-walnut sm:grid-cols-2 lg:grid-cols-4">
        {homeContent.trustBar.map((item) => (
          <div key={item} className="rounded-full border border-line px-4 py-3 text-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
