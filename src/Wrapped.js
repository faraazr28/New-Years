import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './wrapped.css';
import { WRAPPED, MEANINGFUL_MOMENTS, CLOSING_MOMENT } from './constants';

const formatDate = (dateStr) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

const formatHour = (hour) => {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  const period = hour < 12 ? 'AM' : 'PM';
  return `${h}:00 ${period}`;
};

const CountUp = ({ value, duration = 1400, suffix = '', prefix = '', formatter }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, inView]);

  const formattedValue = formatter ? formatter(display) : Math.round(display).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

const shuffleArray = (arr) => {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
};

const Wrapped = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [momentsDeck, setMomentsDeck] = useState(shuffleArray(MEANINGFUL_MOMENTS));
  const [currentMoment, setCurrentMoment] = useState(0);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [revealed, setRevealed] = useState(true);
  const [hoverReveal, setHoverReveal] = useState(true);
  const [copyState, setCopyState] = useState('');

  useEffect(() => {
    setRevealed(true);
    setHoverReveal(true);
  }, [currentMoment, privacyMode]);

  const funFacts = useMemo(() => ([
    { title: 'Days in a row we talked', value: WRAPPED.dailyStreakDays, suffix: ' days' },
    { title: 'Total texts', value: WRAPPED.messageCounts.total },
    { title: 'Avg / day', value: Math.round(WRAPPED.avgPerDay) },
    { title: 'Peak hour', value: WRAPPED.busiestHour.hourLocal, detail: `${formatHour(WRAPPED.busiestHour.hourLocal)} • ${WRAPPED.busiestHour.messages.toLocaleString()} msgs` },
    { title: 'Busiest day', value: WRAPPED.busiestDaysTop5[0].messages, suffix: ' msgs', detail: formatDate(WRAPPED.busiestDaysTop5[0].date) },
    { title: 'Weekend vs weekday', value: WRAPPED.weekendVsWeekdayAvg.weekendAvgPerDay, suffix: ' wknd', detail: `${Math.round(WRAPPED.weekendVsWeekdayAvg.weekdayAvgPerDay)} wkdy` },
    { title: 'Median reply', value: WRAPPED.replyTimeOnSenderSwitchSeconds.median, suffix: ' s' },
    { title: '95% replies under', value: WRAPPED.replyTimeOnSenderSwitchSeconds.p95, suffix: ' s' },
    { title: 'Pumpkin counter', value: WRAPPED.keywordFunCounts.pumpkinMentions },
    { title: 'Pumpkin messages', value: WRAPPED.keywordFunCounts.pumpkinMessages },
    { title: "'Love you' count", value: WRAPPED.keywordFunCounts.loveYouMessages },
    { title: 'Cutie count', value: WRAPPED.keywordFunCounts.cutieMentions },
    { title: 'Puff count', value: WRAPPED.keywordFunCounts.puffMentions },
    { title: 'Miss you count', value: WRAPPED.keywordFunCounts.missYouMessages },
    { title: 'Goodnight count', value: WRAPPED.keywordFunCounts.goodnightMessages }
  ]), []);

  const emojiPodium = useMemo(() => {
    const sorted = [...WRAPPED.topEmojis].sort((a, b) => b.count - a.count);
    return {
      topThree: sorted.slice(0, 3),
      rest: sorted.slice(3)
    };
  }, []);

  const currentQuote = momentsDeck[currentMoment];
  const isBlurred = privacyMode && !(revealed || hoverReveal);

  const handleCopy = async () => {
    if (!currentQuote) return;
    try {
      await navigator.clipboard.writeText(currentQuote.text);
      setCopyState('Copied!');
    } catch (err) {
      setCopyState('Copy failed');
    } finally {
      setTimeout(() => setCopyState(''), 1600);
    }
  };

  const handleShuffle = () => {
    const reshuffled = shuffleArray(MEANINGFUL_MOMENTS);
    setMomentsDeck(reshuffled);
    setCurrentMoment(0);
  };

  const handlePrev = () => {
    setCurrentMoment((prev) => (prev === 0 ? momentsDeck.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMoment((prev) => (prev === momentsDeck.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="wrapped-page">
      <div className="wrapped-hero">
        <div className="grain" />
        <p className="eyebrow">Messages Wrapped</p>
        <h1>2025 Puff on Puff Yap Wrapped</h1>
        <p className="lede">109 days, 69,901 texts, and a wholeeee lotta nothing said with no thoughts behind these eyes</p>
        <div className="hero-stats">
          <div className="hero-card">
            <span className="label">Total texts</span>
            <strong><CountUp value={WRAPPED.messageCounts.total} /></strong>
          </div>
          <div className="hero-card">
            <span className="label">Streak</span>
            <strong><CountUp value={WRAPPED.dailyStreakDays} suffix=" days" /></strong>
          </div>
          <div className="hero-card">
            <span className="label">Pumpkin mentions</span>
            <strong><CountUp value={WRAPPED.keywordFunCounts.pumpkinMentions} /></strong>
          </div>
        </div>
        <div className="tabs">
          <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>Stats</button>
          <button className={activeTab === 'moments' ? 'active' : ''} onClick={() => setActiveTab('moments')}>Moments</button>
        </div>
      </div>

      {activeTab === 'stats' ? (
        <div className="wrapped-sections">
          <section className="card-grid">
            {funFacts.map((fact) => (
              <div key={fact.title} className="fact-card">
                <p className="fact-title">{fact.title}</p>
                <p className="fact-number">
                  <CountUp value={fact.value} suffix={fact.suffix || ''} />
                </p>
                {fact.detail && <p className="fact-detail">{fact.detail}</p>}
              </div>
            ))}
          </section>

          <section className="podium-section">
            <div className="section-header">
              <div>
                <p className="eyebrow">Emoji podium</p>
                <h3>Top reactions</h3>
              </div>
              <p className="tiny">Peak hour: {formatHour(WRAPPED.busiestHour.hourLocal)} • Avg/day {Math.round(WRAPPED.avgPerDay)}</p>
            </div>
            <div className="podium">
              {emojiPodium.topThree.map((emoji, index) => (
                <div key={emoji.emoji} className={`pedestal place-${index + 1}`}>
                  <span className="emoji">{emoji.emoji}</span>
                  <span className="count">{emoji.count}</span>
                </div>
              ))}
            </div>
            <div className="emoji-rest">
              {emojiPodium.rest.map((emoji) => (
                <span key={emoji.emoji} className="emoji-chip">{emoji.emoji} {emoji.count}</span>
              ))}
            </div>
          </section>

          <section className="leaderboard">
            <div className="section-header">
              <p className="eyebrow">Yap leaderboard</p>
              <h3>Busiest five days</h3>
            </div>
            <div className="leaderboard-list">
              {WRAPPED.busiestDaysTop5.map((day, index) => (
                <div key={day.date} className="leaderboard-row">
                  <div className="rank">{index + 1}</div>
                  <div className="day-info">
                    <strong>{formatDate(day.date)}</strong>
                    <span>{day.messages.toLocaleString()} messages</span>
                  </div>
                  <div className="bar">
                    <div className="fill" style={{ width: `${(day.messages / WRAPPED.busiestDaysTop5[0].messages) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="superlatives">
              <div className="super-card">
                <p className="label">Most pumpkin-coded day</p>
                <p className="big">{formatDate(WRAPPED.pumpkinPeak.topPumpkinDay.date)}</p>
                <span className="tiny">{WRAPPED.pumpkinPeak.topPumpkinDay.pumpkinMessages} pumpkin messages</span>
              </div>
              <div className="super-card">
                <p className="label">Most "love you" day</p>
                <p className="big">{formatDate(WRAPPED.loveYouPeak.topLoveYouDay.date)}</p>
                <span className="tiny">{WRAPPED.loveYouPeak.topLoveYouDay.loveYouMessages} love yous</span>
              </div>
              <div className="super-card">
              <p className="label">Peak Yap Time</p>
              <p className="big">{formatHour(WRAPPED.busiestHour.hourLocal)}</p>
              <span className="tiny">{WRAPPED.busiestHour.messages.toLocaleString()} texts at peak hour</span>
            </div>
          </div>
          </section>
        </div>
      ) : (
        <section className="moments-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Some of my Favorite Texts</p>
              <h3>Pumpkin Highlights</h3>
            </div>
            <div className="controls">
              <button onClick={handleShuffle}>Shuffle moments</button>
            </div>
          </div>
          <div
            className={`moment-card ${isBlurred ? 'blurred' : ''}`}
          >
            <div className="moment-meta">
              <span className="pill">{currentQuote?.sender}</span>
              <span className="date">{formatDate(currentQuote?.dt)}</span>
            </div>
            <p className="moment-text">{currentQuote?.text}</p>
            <div className="moment-actions">
              <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}>Prev</button>
              <div className="copy-wrap">
                <button onClick={(e) => { e.stopPropagation(); handleCopy(); }}>Copy quote</button>
                {copyState && <span className="copy-state">{copyState}</span>}
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>Next</button>
            </div>
            <p className="privacy-hint">Visible to us only</p>
          </div>
          <div className="closing-card">
            <p className="eyebrow">Ending note</p>
            <h4>{CLOSING_MOMENT.text}</h4>
            <span className="tiny">{formatDate(CLOSING_MOMENT.dt)} — {CLOSING_MOMENT.sender}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default Wrapped;
