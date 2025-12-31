import React, { useMemo, useState } from 'react';
import './pumpkinHandbook.css';
import { PUMPKIN_HANDBOOK } from './constants';

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const PumpkinHandbook = () => {
  const [chapterId, setChapterId] = useState(PUMPKIN_HANDBOOK.chapters[0].id);
  const [pageIndex, setPageIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState('next');

  const currentChapter = useMemo(
    () => PUMPKIN_HANDBOOK.chapters.find((chapter) => chapter.id === chapterId),
    [chapterId]
  );

  const page = currentChapter.pages[pageIndex];
  const totalPages = currentChapter.pages.length;

  const handleChapterChange = (event) => {
    setChapterId(event.target.value);
    setPageIndex(0);
    setFlipDirection('next');
  };

  const goNext = () => {
    setFlipDirection('next');
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const goPrev = () => {
    setFlipDirection('prev');
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="handbook-page">
      <div className="handbook-hero">
        <div className="sparkles" />
        <p className="eyebrow">Pumpkin handbook</p>
        <h1>{PUMPKIN_HANDBOOK.title}</h1>
        <p className="lede">{PUMPKIN_HANDBOOK.subtitle}</p>
        <div className="hero-controls">
          <div className="select-wrap">
            <label htmlFor="chapter-select">Chapter</label>
            <select id="chapter-select" value={chapterId} onChange={handleChapterChange}>
              {PUMPKIN_HANDBOOK.chapters.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  {chapter.title}
                </option>
              ))}
            </select>
          </div>
          <div className="page-steps">
            <button onClick={goPrev} aria-label="Previous page">Prev</button>
            <div className="page-indicator">Page {pageIndex + 1} / {totalPages}</div>
            <button onClick={goNext} aria-label="Next page">Next</button>
          </div>
        </div>
      </div>

      <div className="book-stage">
        <div className="book">
          <div className={`page-card flip-${flipDirection}`} key={`${chapterId}-${pageIndex}`}>
            <div className="page-top">
              <span className="chapter-pill">{currentChapter.title}</span>
              <span className="page-number">#{pageIndex + 1}</span>
            </div>
            <h3>{page.heading}</h3>
            <div className="rules">
              {page.body.map((rule, idx) => (
                <div className="rule-card" key={`${page.heading}-${idx}`}>
                  <span className="rule-number">{idx + 1}</span>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
            {page.footerQuote && (
              <div className="canon-footnote">
                <p className="label">Canon footnote</p>
                <p className="quote">"{page.footerQuote.text}"</p>
                <span className="tiny">{page.footerQuote.sender} — {formatDate(page.footerQuote.dt)}</span>
              </div>
            )}
          </div>
          <div className="book-shadow" />
        </div>
        <div className="page-nav">
          <button onClick={goPrev}>Previous</button>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PumpkinHandbook;
