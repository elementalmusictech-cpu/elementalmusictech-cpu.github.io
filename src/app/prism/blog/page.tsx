export default function BlogPage() {
  return (
    <main className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Development Journal.</h1>
          <p className="text-lg text-[var(--text-secondary)] mb-8">Updates, workflow recipes, and deep dives into how Prism is built. <span className="text-[var(--cta)]">Coming soon.</span></p>
          {/* <div className="flex gap-2 max-w-sm mx-auto border border-[var(--border)] rounded-lg p-1.5">
            <input type="email" placeholder="you@studio.com" className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-[var(--text-primary)] placeholder-[var(--text-tertiary)]" />
            <button className="px-4 py-2 rounded-md bg-[var(--cta)] text-[var(--bg-primary)] text-sm font-semibold">Subscribe</button>
          </div> */}
          <p className="mt-6 text-sm text-[var(--text-tertiary)]">In the meantime, join the conversation → <a href="https://discord.gg/v46ywMDNgw" className="text-[var(--cta)] hover:underline">Discord</a></p>
        </div>
      </section>
    </main>
  );
}
