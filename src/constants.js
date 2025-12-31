// Hard-coded data for wrapped and the Pumpkin Handbook
export const WRAPPED = {
  dateRange: { start: "2025-09-06", end: "2025-12-23", days: 109 },
  messageCounts: {
    total: 69901,
    me: 37627,
    them: 32274
  },
  dailyStreakDays: 109,
  avgPerDay: 641.29,
  busiestDaysTop5: [
    { date: "2025-11-08", messages: 3438 },
    { date: "2025-10-27", messages: 3370 },
    { date: "2025-11-04", messages: 2129 },
    { date: "2025-12-09", messages: 2110 },
    { date: "2025-11-05", messages: 2100 }
  ],
  busiestHour: { hourLocal: 20, messages: 5385 }, // 8 PM
  weekendVsWeekdayAvg: {
    weekendAvgPerDay: 567.53,
    weekdayAvgPerDay: 671.95
  },
  longestGap: { hours: 24.66, label: "1 day 00:39:51" },
  replyTimeOnSenderSwitchSeconds: {
    median: 17,
    p95: 442, // ~7m 22s
    p99: 7152 // ~1h 59m
  },
  topEmojis: [
    { emoji: "😭", count: 174 },
    { emoji: "🥀", count: 164 },
    { emoji: "🗣", count: 124 },
    { emoji: "💅", count: 94 },
    { emoji: "💔", count: 81 },
    { emoji: "😹", count: 69 },
    { emoji: "🎀", count: 50 },
    { emoji: "🗿", count: 38 },
    { emoji: "😪", count: 32 },
    { emoji: "🐆", count: 32 }
  ],
  keywordFunCounts: {
    pumpkinMessages: 424,
    pumpkinMentions: 443,
    loveYouMessages: 314,
    missYouMessages: 106,
    goodnightMessages: 43,
    goodMorningMessages: 21,
    cutieMentions: 674,
    puffMentions: 357,
    babyMentions: 786,
    angelMentions: 25
  },
  firsts: {
    firstMessage: { dt: "2025-09-06 19:23:12", sender: "Me", text: "Hi this is LinkedIn man" },
    firstPumpkin: { dt: "2025-10-27 01:07:58", sender: "Me", text: "We carved a pumpkin today" },
    firstILoveYouMe: { dt: "2025-10-27 00:27:05", sender: "Me", text: "I love you katie" },
    firstILoveYouThem: { dt: "2025-10-27 00:27:22", sender: "Them", text: "I love you faraaz" }
  },
  pumpkinPeak: {
    topPumpkinDay: { date: "2025-12-08", pumpkinMessages: 39 }
  },
  loveYouPeak: {
    topLoveYouDay: { date: "2025-11-08", loveYouMessages: 17 },
    tiedSecond: { date: "2025-11-07", loveYouMessages: 17 }
  }
};

export const MEANINGFUL_MOMENTS = [
  {
    dt: "2025-11-04 23:51:05",
    sender: "Katedih <3",
    text: "You are the only man who has ever given me butterflies in my stomach"
  },
  {
    dt: "2025-09-22 01:15:57",
    sender: "Katedih <3",
    text: "I also really enjoyed spending time w you this weekend. Thank you for the thoughtful date and flowers hehe"
  },
  {
    dt: "2025-10-27 02:46:51",
    sender: "Katedih <3",
    text: "You feel like home"
  },
  {
    dt: "2025-09-06 20:14:48",
    sender: "Katedih <3",
    text: "Idk if I could live in any other city  besides nyc"
  },
  {
    dt: "2025-09-06 20:14:48",
    sender: "Faraaz",
    text: "That’s when we get to tattooing property of Katherine on my forehead territory"
  },

  {
    dt: "2025-12-05 10:59:25",
    sender: "Katedih <3",
    text: "Wherever you are it'll feel like home"
  },
  {
    dt: "2025-11-09 22:47:35",
    sender: "Katedih <3",
    text: "I love getting to love you"
  },
  {
    dt: "2025-12-08 11:04:59",
    sender: "Katedih <3",
    text: "But ig one thing that stays the same is getting to love you"
  },
  {
    dt: "2025-10-27 02:46:31",
    sender: "Faraaz",
    text: "You feel like home"
  }
];

export const CLOSING_MOMENT = { dt: "2025-12-23 15:38:42", sender: "Me", text: "Puff I love youuu" };

export const PUMPKIN_CANON_ANCHORS = [
  {
    dt: "2025-12-20 19:53:24",
    sender: "Me",
    text: "I wrote you a pumpkin handbook for Christmas"
  },
  {
    dt: "2025-12-21 10:33:15",
    sender: "Them",
    text: "Page 12 of pumpkin handbook"
  },
  {
    dt: "2025-11-08 14:37:59",
    sender: "Them",
    text: "My one rule for a relationship was my life would have to be better with it"
  },
  {
    dt: "2025-09-23 22:31:02",
    sender: "Me",
    text: "Sry if we date the one rule I have is you have to wear that shirt out"
  },
  {
    dt: "2025-11-21 10:01:27",
    sender: "Them",
    text: "We are just two very loving pumpkins"
  },
  {
    dt: "2025-12-04 07:53:44",
    sender: "Them",
    text: "PUMPKIN GOOD MORNING"
  },
  {
    dt: "2025-12-10 22:39:04",
    sender: "Them",
    text: "Pumpkin im gonna go to bed soon"
  }
];

export const PUMPKIN_HANDBOOK = {
  title: "The Pumpkin Handbook",
  subtitle: "A field guide to being pumpkin-coded together",
  chapters: [
    {
      id: "foreword",
      title: "Foreword",
      pages: [
        {
          heading: "Dear Pumpkin,",
          body: [
            "This handbook exists because we turned a nickname into a whole universe.",
            "These are the rules. Some are canon. Some are inevitable."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[0]
        }
      ]
    },
    {
      id: "core-laws",
      title: "Chapter 1 — Core Laws of Pumpkinhood",
      pages: [
        {
          heading: "Better Together",
          body: [
            "Rule 1: Being together must make life better—nonnegotiable.",
            "Pumpkin joy beats perfect plans every time.",
            "Each day gets one tiny delight logged as pumpkin time."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[2]
        },
        {
          heading: "Pumpkin Treaty",
          body: [
            "We are two very loving pumpkins; affection is our default tone.",
            "Soft honesty beats silent worry.",
            "If a day cracks, we patch it with a meme, a walk, or a silly photo."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[4]
        },
        {
          heading: "Stability Clause",
          body: [
            "When in doubt, choose the coziest option.",
            "Pumpkin plans are flexible; the promise is not.",
            "No warm moment goes uncelebrated, even the tiny ones."
          ]
        }
      ]
    },
    {
      id: "daily-rituals",
      title: "Chapter 2 — Daily Rituals",
      pages: [
        {
          heading: "Sunrise Protocol",
          body: [
            "Begin with a 'PUMPKIN GOOD MORNING' in any caps lock mood.",
            "Send one proof-of-life: steam, sunlight, or sleepy hair.",
            "Mornings count as wins just for showing up."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[5]
        },
        {
          heading: "Moonlight Protocol",
          body: [
            "Give a heads-up before disappearing into sleep mode.",
            "Close the day with one last sweet nothing or emoji stack.",
            "Resting is part of loving; naps are sanctioned."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[6]
        },
        {
          heading: "Threadkeeping",
          body: [
            "We text like breathing; tiny updates keep the thread warm.",
            "Fast replies are love in motion; grace is built-in for slower hours."
          ]
        }
      ]
    },
    {
      id: "pet-name-physics",
      title: "Chapter 3 — Pet Name Physics",
      pages: [
        {
          heading: "Name Magnetism",
          body: [
            "'Pumpkin' is the core title; all other names orbit it.",
            "'Cutie' deploys for soft victories; 'puff' for tender moments.",
            "'Baby' is reserved for pep talks that land like a hug."
          ]
        },
        {
          heading: "Stacking Protocol",
          body: [
            "Pet names multiply when excitement spikes.",
            "Overuse is impossible; underuse is suspicious.",
            "When moods dip, upgrade to a double-name: pumpkin puff."
          ]
        }
      ]
    },
    {
      id: "home-and-butterflies",
      title: "Chapter 4 — Home & Butterflies",
      pages: [
        {
          heading: "Home Rule",
          body: [
            "If you feel home, you say it out loud.",
            "Home can be a couch, a call, or a quiet Uber ride.",
            "Wherever we are, we make the room warmer."
          ],
          footerQuote: MEANINGFUL_MOMENTS[2]
        },
        {
          heading: "Butterflies Act",
          body: [
            "Butterflies are proof of magic, not nerves.",
            "If one of us is fluttery, the other holds steady.",
            "Repeat: you give me butterflies, still."
          ],
          footerQuote: MEANINGFUL_MOMENTS[0]
        },
        {
          heading: "Belonging Clause",
          body: [
            "We say 'home' even in borrowed spaces.",
            "Loving you stays the constant, even when everything else moves."
          ],
          footerQuote: MEANINGFUL_MOMENTS[3]
        }
      ]
    },
    {
      id: "special-clauses",
      title: "Chapter 5 — Special Clauses",
      pages: [
        {
          heading: "Wardrobe Clause",
          body: [
            "Yes, the shirt rule stands: some outfits are mandatory for the bit.",
            "Pumpkin outfits are chosen for joy, not practicality."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[3]
        },
        {
          heading: "Page Twelve Mystery",
          body: [
            "Page 12 exists; it holds inside jokes and redacted doodles.",
            "We may add more secret pages whenever we feel like it."
          ],
          footerQuote: PUMPKIN_CANON_ANCHORS[1]
        },
        {
          heading: "Safety Nets",
          body: [
            "Pumpkin veto applies to bad days: call a timeout and restart.",
            "Missing each other is normal; send a 'home' text as antidote.",
            "Pumpkin pep talks are short, sincere, and unstoppable."
          ]
        }
      ]
    },
    {
      id: "closing",
      title: "The End (for now)",
      pages: [
        {
          heading: "Final Rule",
          body: [
            "If you're reading this, you're already part of it.",
            "And I still choose you."
          ],
          footerQuote: CLOSING_MOMENT
        }
      ]
    }
  ]
};
