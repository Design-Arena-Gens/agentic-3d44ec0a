"use client";

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { STORY_PAGES } from './data/story';

const PDFDownload = dynamic(() => import('./components/PDFDownload'), { ssr: false });

export default function HomePage() {
  const [title] = useState('Cat & Kid Goat: Little Adventures');

  const firstThree = useMemo(() => STORY_PAGES.slice(0, 3), []);

  return (
    <div className="container">
      <section className="hero">
        <div className="card">
          <div className="header">
            <span className="badge">
              <span>??</span>
              <span>Storybook</span>
            </span>
            <h1 className="h1">{title}</h1>
            <p className="sub">A 75-page story with 15pt text and 0.125in safe zone, themed around a curious cat and a playful baby goat.</p>
          </div>
          <div className="content">
            <div className="actions">
              <PDFDownload title={title} />
              <a className="button secondary" href="#preview">Preview pages</a>
            </div>
          </div>
        </div>
        <div className="card preview" id="preview">
          {firstThree.map((text, i) => (
            <div key={i} className="pagePreview" aria-label={`Preview page ${i+1}`}>
              <div className="pageChrome">
                <span>Page {i+1}</span>
                <span>0.125in safe</span>
              </div>
              <div className="pageBody">
                <div className="safeZone" />
                <p className="pageText">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
