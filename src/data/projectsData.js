const projects = [
  {
    id: 'obele',
    title: 'O~Bele / Payaswini',
    subtitle: 'Agricultural Tool & Equipment Rental Platform',
    category: 'Agritech & Platform Engineering',
    status: 'In Active Development',
    themeKey: 'agriculture',
    logo: '/assets/themes/obele/logos/obele-logo.svg',
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
      badge: '🌾 Payaswini AgriTech Theme'
    },
    equipmentGallery: [
      { name: 'Power Tiller', icon: '/assets/themes/obele/images/power-tiller.svg', rate: '₹450/hr' },
      { name: 'Paddy Transplanter', icon: '/assets/themes/obele/images/transplanter.svg', rate: '₹600/hr' },
      { name: 'Irrigation Water Pump', icon: '/assets/themes/obele/images/water-pump.svg', rate: '₹200/hr' },
      { name: 'Battery Sprayer', icon: '/assets/themes/obele/images/battery-sprayer.svg', rate: '₹120/hr' },
      { name: 'Rotary Weed Cutter', icon: '/assets/themes/obele/images/weed-cutter.svg', rate: '₹250/hr' },
      { name: 'Arecanut Harvest Tool', icon: '/assets/themes/obele/images/harvesting-tool.svg', rate: '₹350/hr' }
    ],
    overview: 'A peer-to-peer equipment sharing marketplace connecting agricultural machinery owners with smallholder farmers and verified equipment operators across India.',
    problem: 'Farm machinery in rural districts sits idle 70% of the season, while smallholder farmers face severe labor bottlenecks during harvest. Rental agreements lacked operator verification, resulting in equipment damage and disputes.',
    solution: 'Engineered a specialized booking lifecycle supporting hourly/daily billing models, equipment security deposits, and a certified-operator enforcement layer with an automated 4-hour confirmation SLA.',
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
    status: 'Internship Production Work (Jan 2026 – Jul 2026)',
    theme: {
      name: 'Cyber Violet & Sapphire',
      accent: '#6366f1',
      accent2: '#8b5cf6',
      bg: '#0b0d1e',
      surface: '#141732',
      border: 'rgba(99, 102, 241, 0.25)',
      lightBg: '#eef2ff',
      lightSurface: '#ffffff',
      badge: '⚡ Production Backend'
    },
    overview: 'Core backend development for Akanksha Charitable Trust’s Codex platform, handling high-concurrency learning metrics, security hardening, and engagement push notifications.',
    problem: 'Authentication tokens were vulnerable to malformed payloads, and students missed learning streaks without scheduled push reminders.',
    solution: 'Hardened JWT token verification against tampering, implemented Firebase Cloud Messaging (FCM) streak reminders with an in-process scheduler, and extended user preference models with comprehensive unit test coverage.',
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
    status: 'Completed',
    theme: {
      name: 'Ocean Cyan & Cobalt',
      accent: '#06b6d4',
      accent2: '#3b82f6',
      bg: '#06131c',
      surface: '#0b202e',
      border: 'rgba(6, 182, 212, 0.25)',
      lightBg: '#ecfeff',
      lightSurface: '#ffffff',
      badge: '📚 MERN Stack'
    },
    overview: 'A full-stack library management system featuring catalog search, real-time book availability, member account loan tracking, and automated fine calculation.',
    problem: 'Manual book logging caused inventory discrepancies, delayed book returns, and inaccurate catalog indexing.',
    solution: 'Built a responsive React UI connected to Express RESTful endpoints with MongoDB schema validation, compound indexing, and clean controller segregation.',
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
    subtitle: 'Attendance Management & Record Auditing System',
    category: 'Systems & Attendance Workflow',
    status: 'In Active Development',
    theme: {
      name: 'Crimson Slate',
      accent: '#f43f5e',
      accent2: '#fb7185',
      bg: '#18070d',
      surface: '#290e18',
      border: 'rgba(244, 63, 94, 0.25)',
      lightBg: '#fff1f2',
      lightSurface: '#ffffff',
      badge: '📋 State Engine'
    },
    overview: 'An attendance management system designed for colleges, student organizations, and member cells to automate attendance logs, roll-call analytics, and eligibility reports.',
    problem: 'Paper-based and ad-hoc spreadsheet logs lead to attendance tampering, missing audit trails, and slow eligibility reviews for exams.',
    solution: 'Architecting an Express-backed state tracking system with rapid batch check-in, percentage thresholds, and exportable audit summaries.',
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
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'Relational Schemas', 'Audit Logging'],
    sampleEndpoint: `// POST /api/attendance/session
router.post('/session', async (req, res) => {
  const { cellId, date, records } = req.body;
  res.json({ success: true, recordedCount: records.length });
});`,
    cheers: 15
  },
  {
    id: 'mgu',
    title: 'MGU.One & Minecraft AIBridge',
    subtitle: 'Paper Minecraft Server Infrastructure & AIBridge Java Plugin',
    category: 'Gaming Infrastructure & Autonomous AI Systems',
    status: 'Live & Active Administration',
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
    overview: 'Full-stack game server infrastructure, community moderation, and custom Java 17+ Paper plugins — including AIBridge, a direct Paper-to-OpenCode headless server bridge for in-game automated server administration.',
    problem: 'Minecraft servers require extensive ongoing sysadmin tasks: manual world backups, player permission auditing, economy balancing, and config hot-patching. Traditional remote consoles lack safe in-game contextual intelligence.',
    solution: 'Engineered AIBridge, a Paper Minecraft plugin communicating with a local OpenCode headless server (port 4096). Implements FileGuard sandboxing, automated world snapshotting via BackupManager, and async AI command tasks without halting the main server tick loop.',
    architecture: [
      {
        title: 'OpenCode Headless Client (Port 4096)',
        description: 'Communicates via asynchronous HTTP POST to a locally running OpenCode daemon for safe in-game prompt evaluations and zero-cloud dependency.'
      },
      {
        title: 'FileGuard & BackupManager Security Layer',
        description: 'Enforces strict whitelist write boundaries on server configs (server.properties, spigot.yml) and triggers automatic compressed rollbacks prior to file modifications.'
      },
      {
        title: 'Bukkit Async Task Scheduler',
        description: 'Offloads LLM session token handling and JSON deserialization from the Bukkit main thread, guaranteeing 20.0 TPS stability under high player loads.'
      }
    ],
    techStack: ['Java 17', 'Paper API 1.21.4', 'OpenCode AI', 'FileGuard Security', 'Bukkit Async', 'Linux Hosting'],
    sampleEndpoint: `// AIBridge Java Plugin: OpenCode Client Execution
public CompletableFuture<String> sendPrompt(String sessionId, String prompt) {
    PromptRequest payload = new PromptRequest(sessionId, prompt);
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create(baseUrl + "/session/" + sessionId + "/prompt"))
        .header("Content-Type", "application/json")
        .POST(HttpRequest.BodyPublishers.ofString(gson.toJson(payload)))
        .timeout(Duration.ofSeconds(pluginConfig.getTimeoutSeconds()))
        .build();

    return httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(response -> gson.fromJson(response.body(), PromptResponse.class).getContent());
}`,
    cheers: 42
  }
];

module.exports = projects;
