import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Musa Ali — Unity Game Developer",
  author: "Musa Ali",
  description:
    "Unity Game Developer specializing in mobile games, Fire TV apps, and AI-powered interactive experiences.",
  lang: "en",
  siteLogo: "/images/musa.jpg", // replace with your image
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/musaoffice" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/musa-ali-a9b972140/" },
  ],
  socialImage: "/images/og.png",
  canonicalURL: "https://your-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Musa Ali",
    specialty: "Unity Game Developer",
    summary:
      "I build engaging Unity games, AI-driven systems, and optimized apps for mobile and Fire TV platforms.",
    email: "musaa7124@gmail.com",
  },

  experience: [
    {
      company: "Pugsde Solutions Pvt Ltd",
      position: "Unity Developer",
      startDate: "2021",
      endDate: "Present",
      summary: [
        "Developed multiple Unity-based mobile games including a full-featured Ludo game with AI and multiplayer systems.",
        "Built Fire TV compatible apps with joystick navigation and custom UI interaction systems.",
        "Optimized game performance on Android, solving physics jitter and movement issues in real-time gameplay systems.",
      ],
    },
  ],

  projects: [
  {
    name: "Magic Tiles: Dancing Music Forever",
    summary:
      "Fast-paced rhythm tap game with dynamic music syncing and reactive tile mechanics.",
    linkPreview:
      "https://www.amazon.com/Best-Music-Tiles-Dancing-Forever/dp/B085S567Q9",
	trailerUrl: "https://youtube.com/shorts/l1pi9VmLVkk?feature=share",
    image: "/images/tiles1.png",
  },
  {
    name: "Magic Neon Switch Color Ball",
    summary:
      "Color-switch arcade game featuring timing-based mechanics and smooth physics-based movement.",
    linkPreview:
      "https://www.amazon.com/Magic-Neon-Switch-Color-Ball/dp/B08JVFZLVH",
  trailerUrl: "https://youtube.com/shorts/REns9RtcR6g?feature=share",
 image: "/images/neon-switch.png",
  },
  {
    name: "Rhythm Music Tilez Beats Tap",
    summary:
      "Beat-based rhythm game with synchronized tile generation and increasing difficulty system.",
    linkPreview:
      "https://www.amazon.com/Rhythm-Music-Tilez-Beats-Tap/dp/B0B292BNMP",
    trailerUrl: "https://youtube.com/shorts/hmlmDTcxG-o?feature=share",
 image: "/images/rhythm-tilez.png",
  },
  {
    name: "Aqua Park Water Race Slide",
    summary:
      "3D casual racing game featuring water slide physics, obstacle navigation, and smooth character control.",
    linkPreview:
      "https://www.amazon.com/Aqua-Park-Water-Race-Slide/dp/B0C285G6LW",
    trailerUrl: "https://youtube.com/shorts/5oKkLyWcC-4?feature=share",
image: "/images/aqua-park.png",
  },
  {
    name: "Magic Tiles Dancing Music Forever",
    summary:
      "Classic piano tile rhythm game with responsive input system and high-speed gameplay loops.",
    linkPreview:
      "https://www.amazon.com/Magic-tiles-Dancing-Music-Forever/dp/B084DG9G5F",
   trailerUrl: "https://youtube.com/shorts/yoXRYH0cihM?feature=share",
 image: "/images/magic-tiles.png",
  },
  {
  name: "Rolling Ball 3D (Physics Runner)",
  summary:
    "A high-speed 3D rolling ball runner inspired by Going Balls, featuring smooth physics, obstacle navigation, and dynamic track balancing gameplay.",
  linkPreview:
    "https://www.amazon.com/gp/product/B0FYFZ4D2Y",
trailerUrl: "https://youtube.com/shorts/pPzuH9Rvk5E?feature=share",
  image: "/images/rolling-ball.png",
},
],

  about: {
    description: `
      Hi, I’m Musa Ali, a Unity Game Developer focused on building interactive and optimized gaming experiences.

      I specialize in developing mobile games, AI-based systems, and Fire TV applications. My work includes creating full game mechanics like Ludo systems, AI movement logic, and custom input handling.

      I enjoy solving complex gameplay problems, optimizing performance for real devices, and building systems that feel smooth and responsive.
    `,
    image: "/images/musa-large.jpg",
  },
};