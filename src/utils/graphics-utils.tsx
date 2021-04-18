import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';
import { Attribution } from '@typeDefs/data';

export function stl(style: string): string {
  return style;
}

export default function importSVGWithClass(path: string, className: string): JSX.Element {
  const SVGICON: ComponentType<{ className: string }> = dynamic(() =>
    import(`../../public/${path}`).then((mod) => mod),
  );
  return <SVGICON className={className} />;
}

export function processAttribution(attribution: Attribution, style: string): JSX.Element {
  if (!attribution) return null;
  const { path, alt } = attribution;
  if (path.includes('.svg')) return importSVGWithClass(path, style);
  return <img src={path} alt={alt} className={style} />;
}
