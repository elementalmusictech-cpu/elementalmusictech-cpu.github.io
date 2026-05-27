import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6 mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3 mt-8">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-[var(--text-secondary)] mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-[var(--text-secondary)] mb-4 space-y-1">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ children }) => (
      <code className="font-mono text-sm bg-[var(--bg-tertiary)] text-[var(--accent)] px-1.5 py-0.5 rounded">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[var(--accent)] pl-4 my-6 text-[var(--text-secondary)] italic">{children}</blockquote>
    ),
    ...components,
  };
}