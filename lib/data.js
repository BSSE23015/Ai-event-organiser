// Event Categories (Pakistan Focused)
export const CATEGORIES = [
  {
    id: "tech",
    label: "Technology",
    icon: "💻",
    description:
      "Tech meetups, hackathons, software houses events, and IT seminars",
  },
  {
    id: "music",
    label: "Music",
    icon: "🎵",
    description: "Qawwali nights, concerts, mehfil-e-music, and live shows",
  },
  {
    id: "sports",
    label: "Sports",
    icon: "🏏",
    description:
      "Cricket matches, football tournaments, and local sports events",
  },
  {
    id: "art",
    label: "Art & Culture",
    icon: "🎨",
    description:
      "Art exhibitions, cultural festivals, truck art shows, and craft fairs",
  },
  {
    id: "food",
    label: "Food",
    icon: "🍛",
    description:
      "Food festivals, desi food bazaars, cooking classes, and tasting events",
  },
  {
    id: "business",
    label: "Business",
    icon: "💼",
    description:
      "Startup events, business expos, freelancing seminars, and trade fairs",
  },
  {
    id: "religious",
    label: "Religious",
    icon: "🕌",
    description:
      "Islamic lectures, conferences, gatherings, and charity events",
  },
  {
    id: "education",
    label: "Education",
    icon: "📚",
    description:
      "Workshops, university seminars, career counseling, and training sessions",
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: "🎮",
    description: "Gaming tournaments, esports competitions, and gaming meetups",
  },
  {
    id: "weddings",
    label: "Weddings & Functions",
    icon: "💍",
    description: "Wedding events, mehndi, baraat, walima, and family functions",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    icon: "🏔️",
    description:
      "Hiking trips, camping tours, northern tours, and adventure activities",
  },
  {
    id: "community",
    label: "Community",
    icon: "👥",
    description:
      "Local gatherings, welfare events, social meetups, and community drives",
  },
];

// Get category by ID
export const getCategoryById = (id) => {
  return CATEGORIES.find((cat) => cat.id === id);
};

// Get category label by ID
export const getCategoryLabel = (id) => {
  const category = getCategoryById(id);
  return category ? category.label : id;
};

// Get category icon by ID
export const getCategoryIcon = (id) => {
  const category = getCategoryById(id);
  return category ? category.icon : "📅";
};
