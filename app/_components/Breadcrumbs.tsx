"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function defaultLabelize(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const LABEL_OVERRIDES: Record<string, string> = {
  '': 'Home',
};

export type BreadcrumbsProps = {
  labelize?: (segment: string, fullPath: string) => string;
  hideRoot?: boolean;
};

export default function Breadcrumbs({ labelize, hideRoot = false }: BreadcrumbsProps) {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);

  const parts = hideRoot ? segments : [''].concat(segments);

  const crumbs = parts.map((seg, idx) => {
    const href = '/' + parts.slice(0, idx + 1).filter(Boolean).join('/');
    const isLast = idx === parts.length - 1;
    const label = (labelize || ((s: string, p: string) => LABEL_OVERRIDES[s] ?? defaultLabelize(s || '')))(seg, href || '/');

    return { href: href || '/', label, isLast };
  });

  return (
    <ul className="breadcrumbs">
      {crumbs.map(({ href, label, isLast }) => (
        <li key={href || 'root'} className={`breadcrumb ${isLast ? 'last' : ''}`}>
          {isLast ? (
            label
          ) : (
            <Link href={href || '/'}>{label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
