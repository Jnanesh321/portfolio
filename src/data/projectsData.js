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
    github: 'https://github.com/Jnanesh321/Payaswini-AgriTech',
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
    overview: 'A peer-to-peer equipment sharing marketplace connecting agricultural machinery owners with smallholder farmers and verified equipment operators across agricultural regions in India.',
    problem: 'Farm machinery in rural districts sits idle 70% of the season, while smallholder farmers face severe labor bottlenecks during harvest. Rental agreements lacked operator verification, resulting in equipment damage and disputes.',
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
    github: 'https://github.com/Jnanesh321/codex-backend',
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
      badge: '⚡ Production Backend'
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
    github: 'https://github.com/Jnanesh321/E-Library-Management-System',
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
    subtitle: 'Attendance Management & Record Auditing System',
    category: 'Systems & Attendance Workflow',
    role: 'Backend & Systems Architect',
    timeline: '2025 — Present',
    status: 'In Active Development',
    github: 'https://github.com/Jnanesh321/Cells-AMS',
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
      badge: '📋 State Engine'
    },
    overview: 'An attendance management system designed for colleges, student organizations, and member cells to automate attendance logs, roll-call analytics, eligibility thresholds, and administrative audit trails.',
    problem: 'Paper-based and ad-hoc spreadsheet logs lead to attendance tampering, missing audit trails, and slow eligibility reviews for exam hall tickets.',
    solution: 'Architecting an Express-backed state tracking system with rapid batch check-in, percentage thresholds, and exportable audit summaries.',
    highlights: [
      'Batch Roll-Call Serialization: Bulk attendance payload ingestion saving hundreds of individual HTTP round-trips per session.',
      'Eligibility Alert Threshold: Real-time calculation flagging students falling under the statutory 75% attendance criteria.',
      'Tamper-Resistant Audit Trail: Immutable historical log records for all retroactive attendance edits with admin accountability.',
      'Export Engine: Automated CSV/PDF attendance roster generation for academic boards and cell heads.'
    ],
    metrics: [
      { label: 'Eligibility Gate', value: '75% Criteria' },
      { label: 'Transaction Type', value: 'Atomic Bulk' },
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
    role: 'Infrastructure Lead & Systems Developer',
    timeline: '2024 — Present',
    status: 'Live & Active Administration',
    github: 'https://github.com/Jnanesh321/MGU-AIBridge-Plugin',
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
    overview: 'Full-stack game server infrastructure, community moderation, and custom Java 17+ Paper plugins — including AIBridge, a direct Paper-to-OpenCode headless server bridge for in-game automated server administration.',
    problem: 'Minecraft servers require extensive ongoing sysadmin tasks: manual world backups, player permission auditing, economy balancing, and config hot-patching. Traditional remote consoles lack safe in-game contextual intelligence.',
    solution: 'Engineered AIBridge, a Paper Minecraft plugin communicating with a local OpenCode headless server (port 4096). Implements FileGuard sandboxing, automated world snapshotting via BackupManager, and async AI command tasks without halting the main server tick loop.',
    highlights: [
      'Headless AI Daemon Bridge: Asynchronous HTTP client communicating with local OpenCode daemon (Port 4096) for zero-cloud latency.',
      'FileGuard Sandboxing: Strict whitelist write boundary enforcement preventing unauthorized file modifications on server configs.',
      'Automated Rollback Engine: Pre-execution snapshot manager capturing world state and config states prior to AI tool runs.',
      'Bukkit Async Threading: Fully decoupled LLM token ingestion from Bukkit main tick thread, preserving continuous 20.0 TPS stability.'
    ],
    metrics: [
      { label: 'Server Stability', value: '20.0 TPS' },
      { label: 'Protocol Port', value: '4096 Headless' },
      { label: 'Target Platform', value: 'Paper 1.21.4' }
    ],
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
