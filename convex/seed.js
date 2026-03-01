import { internalMutation } from "./_generated/server";

// ================= SAMPLE EVENTS (PAKISTAN) =================
const SAMPLE_EVENTS = [
  {
    title: "React 19 Workshop Lahore",
    description:
      "Hands-on React workshop covering latest features and real projects.",
    category: "tech",
    tags: ["tech", "react", "javascript"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Arfa+Karim+Tower",
    address: "Arfa Karim IT Tower Lahore",
    capacity: 50,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI Meetup Karachi",
    description: "Discuss LLMs, AI startups, and future of machine learning.",
    category: "tech",
    tags: ["ai", "ml"],
    city: "Karachi",
    state: "Sindh",
    venue: "https://maps.google.com/?q=IBA+Karachi",
    address: "IBA Karachi",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Indie Music Night Islamabad",
    description: "Live performances by local indie artists.",
    category: "music",
    tags: ["music", "live"],
    city: "Islamabad",
    state: "Federal",
    venue: "https://maps.google.com/?q=PNCA",
    address: "Pakistan National Council of Arts",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 1200,
    coverImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Startup Networking Breakfast Lahore",
    description: "Meet founders and investors.",
    category: "business",
    tags: ["startup", "networking"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=NIC+Lahore",
    address: "National Incubation Center Lahore",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 800,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Street Photography Walk Lahore",
    description: "Capture old city architecture and culture.",
    category: "art",
    tags: ["photography", "culture"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Badshahi+Mosque",
    address: "Badshahi Mosque",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Full Stack Bootcamp Karachi",
    description: "Beginner-friendly coding bootcamp.",
    category: "education",
    tags: ["coding", "bootcamp"],
    city: "Karachi",
    state: "Sindh",
    venue: "https://maps.google.com/?q=FAST+Karachi",
    address: "FAST University Karachi",
    capacity: 30,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Sunday Football Tournament",
    description: "Amateur football competition.",
    category: "sports",
    tags: ["football", "sports"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Model+Town+Ground",
    address: "Model Town Football Ground",
    capacity: 56,
    ticketType: "paid",
    ticketPrice: 700,
    coverImage:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Healthy Cooking Workshop Islamabad",
    description: "Learn healthy Pakistani recipes.",
    category: "food",
    tags: ["food", "health"],
    city: "Islamabad",
    state: "Federal",
    venue: "https://maps.google.com/?q=F7+Markaz",
    address: "F7 Community Hall",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 2000,
    coverImage:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Morning Yoga Lahore",
    description: "Relaxing yoga session.",
    category: "health",
    tags: ["yoga", "wellness"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Racecourse+Park",
    address: "Jilani Park",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 900,
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Valorant Tournament Karachi",
    description: "Esports competition.",
    category: "gaming",
    tags: ["gaming", "esports"],
    city: "Karachi",
    state: "Sindh",
    venue: "https://maps.google.com/?q=Lucky+One+Mall",
    address: "Gaming Arena Lucky One Mall",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 600,
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7f1d1d",
  },

  // ---------- extra 11 events ----------

  {
    title: "Women in Tech Panel Islamabad",
    description: "Inspiring tech leaders share experiences.",
    category: "networking",
    tags: ["women", "tech"],
    city: "Islamabad",
    state: "Federal",
    venue: "https://maps.google.com/?q=COMSATS",
    address: "COMSATS University Islamabad",
    capacity: 40,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Hiking Trip Skardu",
    description: "Adventure trip to northern mountains.",
    category: "outdoor",
    tags: ["hiking", "tour"],
    city: "Skardu",
    state: "Gilgit-Baltistan",
    venue: "https://maps.google.com/?q=Skardu",
    address: "Skardu Valley",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 7000,
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Beach Cleanup Karachi",
    description: "Volunteer community activity.",
    category: "community",
    tags: ["community", "volunteer"],
    city: "Karachi",
    state: "Sindh",
    venue: "https://maps.google.com/?q=Clifton+Beach",
    address: "Clifton Beach",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "JavaScript Masterclass Lahore",
    description: "Advanced performance optimization techniques.",
    category: "tech",
    tags: ["javascript"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=PU+Old+Campus",
    address: "Punjab University",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Game Dev Jam Lahore",
    description: "48-hour game development challenge.",
    category: "gaming",
    tags: ["game-dev"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=LUMS",
    address: "LUMS University",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 1200,
    coverImage:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI Product Workshop Islamabad",
    description: "Build AI products from scratch.",
    category: "tech",
    tags: ["ai", "product"],
    city: "Islamabad",
    state: "Federal",
    venue: "https://maps.google.com/?q=NIC+Islamabad",
    address: "NIC Islamabad",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 3000,
    coverImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Founders Breakfast Karachi",
    description: "Startup networking breakfast.",
    category: "business",
    tags: ["startup"],
    city: "Karachi",
    state: "Sindh",
    venue: "https://maps.google.com/?q=NIC+Karachi",
    address: "NIC Karachi",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 900,
    coverImage:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Portrait Photography Workshop Lahore",
    description: "Professional photography training.",
    category: "art",
    tags: ["photography"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Alhamra",
    address: "Alhamra Arts Council",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 3000,
    coverImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Corporate Cricket Cup Lahore",
    description: "Corporate teams tournament.",
    category: "sports",
    tags: ["cricket"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Gaddafi+Stadium",
    address: "Gaddafi Stadium",
    capacity: 180,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Mindfulness Workshop Islamabad",
    description: "Reduce stress with mindfulness.",
    category: "health",
    tags: ["wellness"],
    city: "Islamabad",
    state: "Federal",
    venue: "https://maps.google.com/?q=F9+Park",
    address: "F9 Park",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Pizza Festival Lahore",
    description: "Pizza tasting event.",
    category: "food",
    tags: ["food"],
    city: "Lahore",
    state: "Punjab",
    venue: "https://maps.google.com/?q=Packages+Mall",
    address: "Packages Mall",
    capacity: 50,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    themeColor: "#831843",
  },
];

// helpers (same as yours)
function getRandomFutureDate(minDays = 7, maxDays = 90) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}
function getEventEndTime(startTime) {
  return startTime + (Math.floor(Math.random() * 3) + 2) * 60 * 60 * 1000;
}
function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// ================= RUN =================
export const run = internalMutation({
  handler: async (ctx) => {
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      const id = await ctx.db.insert("users", {
        email: "organizer@eventhub.pk",
        tokenIdentifier: "seed-user",
        name: "EventHub Pakistan",
        hasCompletedOnboarding: true,
        location: { city: "Lahore", state: "Punjab", country: "Pakistan" },
        interests: ["tech", "sports"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(id);
    }

    const created = [];

    for (const e of SAMPLE_EVENTS) {
      const start = getRandomFutureDate();
      const end = getEventEndTime(start);

      await ctx.db.insert("events", {
        ...e,
        slug: generateSlug(e.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        startDate: start,
        endDate: end,
        timezone: "Asia/Karachi",
        locationType: "physical",
        country: "Pakistan",
        registrationCount: Math.floor(Math.random() * e.capacity * 0.7),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      created.push(e.title);
    }

    return { success: true, count: created.length, events: created };
  },
});
