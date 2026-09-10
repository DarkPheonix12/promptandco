import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

function ExternalLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http://") || href.startsWith("https://"));
  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}

function Heading2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      id={typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : undefined}
      className="text-2xl sm:text-[1.65rem] font-bold text-brand-dark tracking-tight mt-12 mb-4 scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  );
}

function Heading3({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      id={typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : undefined}
      className="text-lg sm:text-xl font-bold text-brand-dark my-4 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  );
}

const components: MDXComponents = {
  a: ExternalLink,
  h2: Heading2,
  h3: Heading3,
  p: (props) => (
    <p className="text-[15px] leading-7 text-brand-dark-700 my-4" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 pl-6 space-y-2 list-disc marker:text-brand-primary" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 pl-6 space-y-2 list-decimal marker:font-semibold marker:text-brand-primary" {...props} />
  ),
  li: (props) => (
    <li className="text-[15px] leading-7 text-brand-dark-700 pl-1" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-brand-dark" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-brand-primary/30 bg-brand-surface/60 rounded-r-xl px-5 py-4 text-[15px] leading-7 text-brand-dark-700 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[0.85em] text-brand-primary-dark bg-brand-surface-alt rounded px-1.5 py-0.5"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 p-4 rounded-xl bg-brand-dark text-brand-surface overflow-x-auto font-mono text-[13px] leading-6"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-brand-border/60" {...props} />,
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-brand-border/50">
      <table className="w-full text-[13.5px] border-collapse" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-brand-surface" {...props} />,
  th: ({ children, ...props }: ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left px-4 py-3 font-semibold text-brand-dark text-[12.5px] uppercase tracking-wide border-b border-brand-border/70 align-top"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-4 py-3 text-brand-dark-700 border-b border-brand-border/40 align-top"
      {...props}
    >
      {children}
    </td>
  ),
  em: (props) => <em className="italic" {...props} />,
  DefinitionCard: ({ children }: { children?: React.ReactNode }) => (
    <div className="my-6 rounded-xl border border-brand-primary/25 bg-brand-surface p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-md bg-gradient-brand px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          Definition
        </span>
        <div className="text-[15px] leading-7 text-brand-dark-700">{children}</div>
      </div>
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}