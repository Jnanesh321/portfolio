const projects = [
  {
    id: 'obele',
    title: 'O~Bele / Payaswini',
    subtitle: 'Agricultural Tool & Equipment Rental Platform',
    category: 'Agritech & Platform Engineering',
    status: 'In Active Development',
    themeKey: 'agriculture',
    logo: '/assets/themes/obele/logos/obele-logo.svg',
    role: 'Lead Backend & Platform Engineer',
    timeline: '2025 — Present',
    github: 'https://github.com/Jnanesh321/Payaswini-O-Bele',
    liveUrl: null,
    theme: {
      name: 'Emerald Harvest & Payaswini',
      key: 'agriculture',
      accent: '#10b981',
      accent2: '#f59e0b',
      bg: '#051811',
      surface: '#0d281e',
      border: 'rgba(16, 185, 129, 0.3)',
      lightBg: '#f0fdf4',
      lightSurface: '#ffffff',
      badge: '🌾 Payaswini AgriTech'
    },
    equipmentGallery: [
      { name: 'Power Tiller', icon: '/assets/themes/obele/images/power-tiller.svg', rate: '₹450/hr' },
      { name: 'Paddy Transplanter', icon: '/assets/themes/obele/images/transplanter.svg', rate: '₹600/hr' },
      { name: 'Irrigation Water Pump', icon: '/assets/themes/obele/images/water-pump.svg', rate: '₹200/hr' },
      { name: 'Battery Sprayer', icon: '/assets/themes/obele/images/battery-sprayer.svg', rate: '₹120/hr' },
      { name: 'Rotary Weed Cutter', icon: '/assets/themes/obele/images/weed-cutter.svg', rate: '₹250/hr' },
      { name: 'Arecanut Harvest Tool', icon: '/assets/themes/obele/images/harvesting-tool.svg', rate: '₹350/hr' }
    ],
    overview: 'A national-scale farm-tool and equipment rental marketplace (Amazon/Zomato-style UX) connecting machinery owners with smallholder farmers and verified equipment operators across agricultural regions.',
    problem: 'Farm machinery in agricultural districts sits idle outside peak windows, while smallholders face severe labor shortages during harvest. Traditional rentals lacked verified operators and standardized confirmation SLAs.',
    solution: 'Engineered a specialized booking lifecycle supporting hourly/daily billing models, equipment security deposits, and a certified-operator enforcement layer with an automated 4-hour confirmation SLA.',
    highlights: [
      '4-Hour Operator SLA: State-machine driven booking confirmation preventing silent fallback to uncertified operation.',
      'Security Deposit & Escrow: Automated deposit reserve mechanism holding refundable deposits until tool return inspection.',
      'Multi-tier Billing Engine: Hourly and daily rental rate engine factoring equipment wear, fuel/consumables, and operator charges.',
      'Equipment Fleet SVGs: Designed and integrated custom vector SVG assets for power tillers, transplanters, water pumps, and weed cutters.'
    ],
    metrics: [
      { label: 'Confirmation SLA', value: '4 Hours' },
      { label: 'Booking Lifecycle', value: '6 States' },
      { label: 'Fleet Equipment', value: '6 Vector SVGs' }
    ],
    architecture: [
      {
        title: 'Certified Operator SLA Machine',
        description: 'Implements a 4-hour confirmation state machine. If an owner fails to confirm an operator within the SLA window, the system halts payment capture and prevents silent fallback to uncertified self-service.'
      },
      {
        title: 'Modular Express Routing',
        description: 'Structured using dedicated route controllers, business validation middleware, and atomic status transition helpers.'
      },
      {
        title: 'Consumable & Meter Tracking',
        description: 'Enables fuel and engine hour tracking pre- and post-rental for accurate wear-and-tear assessment.'
      }
    ],
    techStack: ['Node.js', 'Express.js', 'REST APIs', 'SVG Engineering', 'State Machine', 'Request Validation'],
    sampleEndpoint: `// POST /api/rentals/book-with-operator
router.post('/book', validateRentalPayload, async (req, res) => {
  const { machineryId, durationHours, requireOperator } = req.body;
  const booking = await rentalService.createBooking({
    machineryId,
    durationHours,
    requireOperator,
    slaExpiresAt: new Date(Date.now() + 4 * 3600 * 1000)
  });
  res.status(201).json({ success: true, booking });
});`,
    cheers: 24
  },
  {
    id: 'codex',
    title: 'Codex Learning Platform Backend',
    subtitle: 'Production Backend Engineering & Security Services',
    category: 'EdTech & Distributed Services',
    role: 'Backend Engineering Intern',
    timeline: 'Jan 2026 — Jul 2026',
    status: 'Production Internship (Akanksha Charitable Trust)',
    github: null,
    isPrivate: true,
    privateNote: 'Private Enterprise Repository (Akanksha Charitable Trust)',
    liveUrl: 'https://codex.akanksha.org',
    theme: {
      name: 'Cyber Violet & Sapphire',
      key: 'cyber',
      accent: '#6366f1',
      accent2: '#8b5cf6',
      bg: '#0b0d1e',
      surface: '#141732',
      border: 'rgba(99, 102, 241, 0.25)',
      lightBg: '#eef2ff',
      lightSurface: '#ffffff',
      badge: '⚡ Production Backend (Private)'
    },
    overview: 'Core backend engineering at Akanksha Charitable Trust for the Codex learning platform, handling high-concurrency learning metrics, tamper-resistant auth tokens, automated Firebase Cloud Messaging (FCM) streak notifications, and Firestore query optimization.',
    problem: 'Authentication tokens were vulnerable to malformed payloads, students dropped learning streaks without automated reminders, and unindexed Firestore collections produced high latency on user notification feeds.',
    solution: 'Hardened JWT token verification interceptor against tampering, engineered an asynchronous Firebase Cloud Messaging (FCM) streak scheduler, and expanded user preference models with comprehensive unit test suites.',
    highlights: [
      'Cryptographic JWT Hardening: Strict signature verification interceptor protecting student learning profiles and token revocation.',
      'Automated Streak Engine: In-process cron scheduler triggering asynchronous Firebase Cloud Messaging (FCM) push notifications.',
      'Compound Query Optimization: Firestore indexing reducing notification query round-trip time and read costs.',
      'High Test Integrity: Developed comprehensive Jest unit test suites for auth verification and user state controllers.'
    ],
    metrics: [
      { label: 'Internship Duration', value: '6 Months' },
      { label: 'Notification Delivery', value: 'FCM Push' },
      { label: 'Auth Standard', value: 'Hardened JWT' }
    ],
    architecture: [
      {
        title: 'JWT Tamper & Expiry Interceptor',
        description: 'Middleware verifying cryptographic signatures, blacklisted revoked tokens, and edge cases with invalid token formatting.'
      },
      {
        title: 'In-Process FCM Notification Scheduler',
        description: 'Engineered a lightweight, non-blocking cron worker that triggers localized push notifications based on user streak milestones.'
      },
      {
        title: 'Firestore Indexing Optimization',
        description: 'Constructed compound queries and optimized collection indexes to reduce read latency on notification logs.'
      }
    ],
    techStack: ['Node.js', 'Express.js', 'JWT Auth', 'Firebase FCM', 'Firestore', 'Jest / Unit Tests', 'Security Hardening'],
    sampleEndpoint: `// FCM Streak Reminder Worker
async function dispatchDailyStreakReminder(userId) {
  const user = await userRepo.findById(userId);
  if (!user.notificationsEnabled || user.streakSavedToday) return;

  await fcmService.sendPush(user.deviceToken, {
    title: '🔥 Keep your streak alive!',
    body: 'Complete today\\'s lesson to maintain your record!'
  });
}`,
    cheers: 42
  },
  {
    id: 'elibrary',
    title: 'E-Library Management System',
    subtitle: 'Full-Stack MERN Catalog & Borrowing System',
    category: 'Full-Stack Web Application',
    role: 'Full-Stack Developer',
    timeline: '2025',
    status: 'Completed & Maintained',
    github: 'https://github.com/Jnanesh321/E-Library-Management',
    liveUrl: null,
    theme: {
      name: 'Ocean Cyan & Cobalt',
      key: 'elibrary',
      accent: '#06b6d4',
      accent2: '#3b82f6',
      bg: '#06131c',
      surface: '#0b202e',
      border: 'rgba(6, 182, 212, 0.25)',
      lightBg: '#ecfeff',
      lightSurface: '#ffffff',
      badge: '📚 MERN Stack'
    },
    overview: 'A full-stack library management system featuring catalog search, real-time book availability, member account loan tracking, and dynamic overdue fine calculation with persistent MongoDB schemas.',
    problem: 'Manual library logging caused inventory discrepancies, delayed book returns, and inaccurate catalog indexing with slow lookup times.',
    solution: 'Built a responsive React UI connected to Express RESTful endpoints with MongoDB schema validation, compound text indexing for rapid catalog searches, and clean controller segregation.',
    highlights: [
      'Real-Time Inventory: Atomic checkout updates decrementing available copies and preventing race-condition over-borrowing.',
      'Dynamic Overdue Matrix: Date-differential middleware calculating late fees based on loan durations.',
      'Compound MongoDB Indices: Text indexing across book titles, ISBNs, and author catalog records for sub-15ms queries.',
      'Role-Based Access: Dedicated administrative dashboards for librarians and reader checkouts.'
    ],
    metrics: [
      { label: 'Stack Architecture', value: 'MERN Stack' },
      { label: 'Index Latency', value: '<15ms' },
      { label: 'API Pattern', value: 'RESTful MVC' }
    ],
    architecture: [
      {
        title: 'Express REST Controllers',
        description: 'Clean REST API endpoints handling full CRUD operations for book catalogs, author indices, and checkout histories.'
      },
      {
        title: 'MongoDB Compound Indexing',
        description: 'Optimized search queries for title, ISBN, and genre with text indices.'
      },
      {
        title: 'Loan & Overdue Calculations',
        description: 'Dynamic date comparison middleware that determines penalty fees for overdue returns.'
      }
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'RESTful APIs'],
    sampleEndpoint: `// POST /api/books/:id/borrow
router.post('/books/:id/borrow', requireAuth, async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book.availableCopies < 1) return res.status(400).json({ error: 'Out of stock' });

  await Loan.create({ userId: req.user.id, bookId: book._id, dueDate: addDays(14) });
  book.availableCopies -= 1;
  await book.save();
  res.json({ success: true, message: 'Borrowed successfully' });
});`,
    cheers: 19
  },
  {
    id: 'cells',
    title: 'Cells AMS',
    subtitle: 'Android Application for Cells VCET for Academic Monitoring',
    category: 'Android Application & Academic Monitoring',
    role: 'Backend & Systems Architect',
    timeline: '2025 — Present',
    status: 'In Active Development',
    github: 'https://github.com/Jnanesh321/Cells-Ams',
    liveUrl: null,
    theme: {
      name: 'Crimson Slate',
      key: 'cells',
      accent: '#f43f5e',
      accent2: '#fb7185',
      bg: '#18070d',
      surface: '#290e18',
      border: 'rgba(244, 63, 94, 0.25)',
      lightBg: '#fff1f2',
      lightSurface: '#ffffff',
      badge: '📱 Android App'
    },
    overview: 'Android application engineered for Cells VCET to streamline academic monitoring, attendance tracking, eligibility gate alerts, and faculty administrative audit trails.',
    problem: 'Paper-based and ad-hoc spreadsheet logs lead to attendance tampering, missing audit trails, and slow eligibility reviews for exam hall tickets.',
    solution: 'Architecting an Express-backed state tracking system and Android client with rapid batch check-in, percentage thresholds, and exportable audit summaries.',
    highlights: [
      'Batch Roll-Call Serialization: Bulk attendance payload ingestion saving hundreds of individual HTTP round-trips per session.',
      'Eligibility Alert Threshold: Real-time calculation flagging students falling under the statutory 75% attendance criteria.',
      'Tamper-Resistant Audit Trail: Immutable historical log records for all retroactive attendance edits with admin accountability.',
      'Android Integration: Mobile app interface built specifically for academic monitoring at VCET.'
    ],
    metrics: [
      { label: 'Eligibility Gate', value: '75% Criteria' },
      { label: 'Platform', value: 'Android / VCET' },
      { label: 'Audit Trail', value: 'Immutable Logs' }
    ],
    architecture: [
      {
        title: 'Batch Attendance Capture',
        description: 'Express endpoints accepting serialized arrays of member statuses with atomic transactional updates.'
      },
      {
        title: 'Threshold & Alert Engine',
        description: 'Calculates active percentages and flags members who fall below required 75% attendance criteria.'
      }
    ],
    techStack: ['Android', 'Java/Kotlin', 'JavaScript', 'Node.js', 'Express.js', 'Audit Logging'],
    sampleEndpoint: `// POST /api/attendance/session
router.post('/session', async (req, res) => {
  const { cellId, date, records } = req.body;
  res.json({ success: true, recordedCount: records.length });
});`,
    cheers: 15
  },
  {
    id: 'mgu',
    title: 'MGU.One & Minecraft Systems',
    subtitle: 'Paper Server Ops, Pterodactyl AI Gateway & Demand-Balancer',
    category: 'Gaming Infrastructure & Autonomous AI Systems',
    role: 'Infrastructure Lead & Systems Developer',
    timeline: '2024 — Present',
    status: 'Live & Active Administration',
    github: 'https://github.com/Jnanesh321/upgraded-octo-chainsaw',
    demandBalancerGithub: 'https://github.com/Jnanesh321/Demand-Balancer',
    liveUrl: 'https://mgu.one',
    themeKey: 'minecraft',
    theme: {
      name: 'BlockCraft & AIBridge (Minecraft)',
      key: 'minecraft',
      accent: '#2cf5d6',
      accent2: '#4ade80',
      bg: '#111411',
      surface: '#1c221c',
      border: '#3f8e3f',
      lightBg: '#ecfdf5',
      lightSurface: '#ffffff',
      badge: '⛏️ Minecraft Theme'
    },
    minecraftAssets: [
      { name: 'Grass Block', icon: '/assets/themes/minecraft/grass-block.svg' },
      { name: 'Diamond Sword', icon: '/assets/themes/minecraft/diamond-sword.svg' },
      { name: 'Creeper Face', icon: '/assets/themes/minecraft/creeper.svg' },
      { name: 'Redstone Dust', icon: '/assets/themes/minecraft/redstone.svg' },
      { name: 'Diamond Pickaxe', icon: '/assets/themes/minecraft/pickaxe.svg' }
    ],
    overview: 'Full-stack Minecraft server operations on MGU.One, featuring custom Java plugins like Demand-Balancer (dynamic in-game economy balancing) and Pterodactyl AI Gateway (upgraded-octo-chainsaw) for headless server management.',
    problem: 'Minecraft servers require extensive ongoing sysadmin tasks: manual world backups, player permission auditing, economy balancing, and config hot-patching. Traditional remote consoles lack safe in-game contextual intelligence.',
    solution: 'Engineered Pterodactyl AI Gateway and Demand-Balancer Java plugins. Communicates with local AI daemons, enforces FileGuard security sandboxing, and balances economy transactions dynamically.',
    highlights: [
      'Pterodactyl AI Gateway: Daemon integration bridging server control panel with headless AI for autonomous operations.',
      'Demand-Balancer Plugin: Custom Minecraft Bukkit/Paper plugin balancing in-game shop pricing based on dynamic player supply and demand.',
      'FileGuard Sandboxing: Strict whitelist write boundary enforcement preventing unauthorized file modifications on server configs.',
      'Bukkit Async Threading: Fully decoupled background tasks from Bukkit main tick thread, preserving continuous 20.0 TPS stability.'
    ],
    metrics: [
      { label: 'Server Stability', value: '20.0 TPS' },
      { label: 'Plugins', value: 'Demand-Balancer' },
      { label: 'Target Platform', value: 'Paper 1.21.4' }
    ],
    architecture: [
      {
        title: 'Pterodactyl AI Gateway (upgraded-octo-chainsaw)',
        description: 'Communicates via asynchronous HTTP to local AI daemons for safe server evaluations and zero-cloud dependency.'
      },
      {
        title: 'Demand-Balancer Paper Plugin',
        description: 'Java 17 plugin that calculates exponential decay curves and transaction surges to balance shop item prices in real time.'
      },
      {
        title: 'FileGuard & BackupManager Security Layer',
        description: 'Enforces strict whitelist write boundaries on server configs (server.properties, spigot.yml) and triggers automatic compressed rollbacks prior to file modifications.'
      }
    ],
    techStack: ['Java 17', 'Paper API 1.21.4', 'Pterodactyl AI Gateway', 'Demand-Balancer', 'FileGuard Security', 'Linux Hosting'],
    sampleEndpoint: `// Demand-Balancer Transaction Handler
public void onPlayerTransaction(Player player, ShopItem item, int quantity) {
    double dynamicPrice = priceCalculator.calculateCurrentPrice(item, quantity);
    economy.withdrawPlayer(player, dynamicPrice);
    priceCalculator.recordPurchase(item, quantity);
}`,
    cheers: 42
  },
  {
    id: 'game1700',
    title: '17-00 — Express & MERN Game',
    subtitle: 'A Game Made with Express to Master the MERN Stack',
    category: 'Full-Stack Game & MERN Architecture',
    role: 'Full-Stack Engineer',
    timeline: '2025',
    status: 'Completed',
    github: 'https://github.com/Jnanesh321/17-00',
    liveUrl: null,
    theme: {
      name: 'Arcade Amber & Slate',
      key: 'game1700',
      accent: '#f59e0b',
      accent2: '#ef4444',
      bg: '#140e06',
      surface: '#241a0d',
      border: 'rgba(245, 158, 11, 0.25)',
      lightBg: '#fffbeb',
      lightSurface: '#ffffff',
      badge: '🎮 MERN Game'
    },
    overview: 'An interactive game engineered with Express.js to learn and master full-stack MERN stack principles, including state management, RESTful player action routes, and real-time game cycle updates.',
    problem: 'Learning full-stack MERN architecture requires real-world experience handling state synchronization, asynchronous backend requests, and game event handling under active user interaction.',
    solution: 'Developed 17-00, implementing modular Express routing, persistent session states, and clean frontend UI controllers for an engaging game loop.',
    highlights: [
      'Express Game Server: Modular API routing separating game rules, player actions, and scoring state.',
      'MERN Architecture: Hands-on mastery of MongoDB document structures, Express endpoints, React views, and Node.js runtimes.',
      'Dynamic Event Cycle: Real-time calculation of player outcomes and high scores.'
    ],
    metrics: [
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'Server Engine', value: 'Express.js' },
      { label: 'Goal', value: 'Full-Stack Mastery' }
    ],
    architecture: [
      {
        title: 'Express REST Game Loop',
        description: 'Modular endpoints managing player inputs, state transitions, and validation against game rules.'
      },
      {
        title: 'State & Score Synchronization',
        description: 'Coordinates active game turns and persists high-score leaderboards.'
      }
    ],
    techStack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'REST APIs', 'Game State Logic'],
    sampleEndpoint: `// POST /api/game/action
router.post('/action', (req, res) => {
  const { playerId, move } = req.body;
  const outcome = gameEngine.processMove(playerId, move);
  res.json({ success: true, outcome });
});`,
    cheers: 28
  }
];

module.exports = projects;
