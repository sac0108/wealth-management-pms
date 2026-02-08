const portfolioData = {
  totalValue: 24800000,
  todayChange: 324500,
  todayChangePct: 1.32,
  costBasis: 21340000,
  unrealizedGains: 3460000,
  cashAvailable: 1850000,
  buyingPower: 3700000,
  annualYield: 3.8,
  holdings: 14,
  concentrationTop3: 42,
  trend: [2.22, 2.27, 2.24, 2.31, 2.36, 2.41, 2.48],
  allocation: [
    { sector: "Technology", value: 32 },
    { sector: "Healthcare", value: 18 },
    { sector: "Financials", value: 16 },
    { sector: "Consumer", value: 14 },
    { sector: "Energy", value: 10 },
    { sector: "Real Assets", value: 10 }
  ],
  performance: {
    "7D": { gain: 1.8, benchmark: 1.1, avgDaily: 0.26, bestDay: "Wed +0.9%" },
    "1M": { gain: 4.4, benchmark: 3.1, avgDaily: 0.21, bestDay: "May 14 +1.4%" },
    "3M": { gain: 8.9, benchmark: 6.2, avgDaily: 0.18, bestDay: "Apr 03 +1.9%" },
    "1Y": { gain: 14.2, benchmark: 11.8, avgDaily: 0.12, bestDay: "Nov 18 +2.2%" },
    ALL: { gain: 38.5, benchmark: 31.4, avgDaily: 0.15, bestDay: "Jan 21 +2.8%" }
  },
  performanceSeries: {
    "7D": [
      { date: "2026-07-29", value: 24200000 },
      { date: "2026-07-30", value: 24320000 },
      { date: "2026-07-31", value: 24240000 },
      { date: "2026-08-01", value: 24480000 },
      { date: "2026-08-02", value: 24560000 },
      { date: "2026-08-03", value: 24720000 },
      { date: "2026-08-04", value: 24800000 }
    ],
    "1M": [
      { date: "2026-07-05", value: 23150000 },
      { date: "2026-07-10", value: 23320000 },
      { date: "2026-07-15", value: 23580000 },
      { date: "2026-07-20", value: 23660000 },
      { date: "2026-07-25", value: 24100000 },
      { date: "2026-07-30", value: 24420000 },
      { date: "2026-08-04", value: 24800000 }
    ],
    "3M": [
      { date: "2026-05-10", value: 21450000 },
      { date: "2026-05-30", value: 21880000 },
      { date: "2026-06-18", value: 22350000 },
      { date: "2026-07-02", value: 22840000 },
      { date: "2026-07-18", value: 23590000 },
      { date: "2026-07-30", value: 24380000 },
      { date: "2026-08-04", value: 24800000 }
    ],
    "1Y": [
      { date: "2025-09-15", value: 19800000 },
      { date: "2025-11-18", value: 20550000 },
      { date: "2026-01-08", value: 21120000 },
      { date: "2026-03-22", value: 21900000 },
      { date: "2026-05-30", value: 22800000 },
      { date: "2026-07-30", value: 24380000 },
      { date: "2026-08-04", value: 24800000 }
    ],
    ALL: [
      { date: "2024-02-10", value: 16450000 },
      { date: "2024-08-22", value: 17800000 },
      { date: "2025-02-14", value: 19050000 },
      { date: "2025-09-15", value: 19800000 },
      { date: "2026-03-22", value: 21900000 },
      { date: "2026-07-30", value: 24380000 },
      { date: "2026-08-04", value: 24800000 }
    ]
  },
  risk: {
    score: 4.2,
    beta: 0.94,
    drawdown: -9.6,
    sharpe: 1.32
  },
  events: [
    {
      title: "Asterion Tech Q2 Earnings",
      date: "2026-08-04",
      detail: "Expected EPS +12% YoY"
    },
    { title: "GreenLeaf REIT Dividend", date: "2026-08-12", detail: "₹34 per share" },
    {
      title: "Global rates decision",
      date: "2026-08-18",
      detail: "Consensus hold at 5.25%"
    },
    { title: "Helios Pharma FDA update", date: "2026-08-24", detail: "Phase III milestone" }
  ]
};

const insightsData = [
  {
    title: "Growth opportunity detected",
    impact: "High",
    detail:
      "Large-cap tech allocation is outperforming benchmarks by 2.1%. Consider incremental exposure to AI infrastructure themes.",
    action: "View details"
  },
  {
    title: "Rebalancing needed",
    impact: "Medium",
    detail:
      "Single-stock concentration in Asterion Tech has reached 18% of total portfolio value, above the 12% target band.",
    action: "View details"
  },
  {
    title: "Tax-loss harvesting window",
    impact: "Low",
    detail:
      "Two positions are down more than 8% from cost basis. Harvesting could offset $12.4k in gains.",
    action: "View details"
  }
];

const suggestionsData = [
  {
    type: "BUY",
    asset: "Orion Cloud ETF",
    price: "$112.40",
    movement: "+1.4%",
    horizon: "6-12M",
    risk: "Moderate"
  },
  {
    type: "TRIM",
    asset: "Asterion Tech",
    price: "$328.15",
    movement: "+3.2%",
    horizon: "Immediate",
    risk: "Elevated"
  },
  {
    type: "WATCH",
    asset: "Helios Pharma",
    price: "$71.90",
    movement: "-0.6%",
    horizon: "3-6M",
    risk: "Balanced"
  }
];

const watchlistData = [
  {
    name: "Asterion Tech",
    price: "$328.15",
    change: "+3.2%",
    high: "$333.40",
    low: "$318.90",
    volume: "5.4M",
    cap: "$612B"
  },
  {
    name: "Lumen Bank",
    price: "$84.50",
    change: "+0.8%",
    high: "$86.10",
    low: "$83.20",
    volume: "3.1M",
    cap: "$148B"
  },
  {
    name: "Helios Pharma",
    price: "$71.90",
    change: "-0.6%",
    high: "$72.80",
    low: "$70.20",
    volume: "2.6M",
    cap: "$52B"
  },
  {
    name: "GreenLeaf REIT",
    price: "$44.70",
    change: "+1.1%",
    high: "$45.20",
    low: "$43.50",
    volume: "1.2M",
    cap: "$22B"
  }
];

const assistantTemplates = {
  portfolio:
    "Your portfolio is anchored by growth equities (54%) with balanced allocations to healthcare and financials. The largest single-stock exposure is Asterion Tech at 18%, which is driving recent outperformance. Consider trimming 2-3% to reduce concentration while keeping AI infrastructure exposure.",
  market:
    "Markets are rewarding quality growth and cash-flow resilience. AI infrastructure, cloud security, and selective healthcare innovators are leading sector rotation. Financials are stabilizing as rates plateau, while energy remains range-bound with modest upside tied to geopolitical supply risks.",
  risk:
    "Overall risk posture is moderate. A beta of 0.94 means the portfolio moves slightly less than the market. Max drawdown of 9.6% indicates controlled downside, while a Sharpe ratio of 1.32 suggests healthy risk-adjusted returns. Stress scenarios show resilience unless tech volatility spikes further."
};

const navButtons = document.querySelectorAll(".top-nav button");
const sections = document.querySelectorAll(".section");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const sectionId = button.dataset.section;
    sections.forEach((section) => {
      section.classList.toggle("active", section.id === sectionId);
    });
  });
});

const metricsContainer = document.getElementById("portfolioMetrics");
const summaryContent = document.getElementById("summaryContent");
const insightsContainer = document.getElementById("insights");
const suggestionsContainer = document.getElementById("suggestions");
const allocationDetails = document.getElementById("allocationDetails");
const allocationDonut = document.getElementById("allocationDonut");
const allocationCallout = document.getElementById("allocationCallout");
const performanceStats = document.getElementById("performanceStats");
const performanceCallout = document.getElementById("performanceCallout");
const riskMetrics = document.getElementById("riskMetrics");
const eventsContainer = document.getElementById("events");
const watchlistGrid = document.getElementById("watchlistGrid");
const portfolioHealth = document.getElementById("portfolioHealth");

const formatCurrency = (value) => {
  const absolute = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (absolute >= 10000000) {
    return `${sign}₹${(absolute / 10000000).toFixed(2)} Cr`;
  }
  if (absolute >= 100000) {
    return `${sign}₹${(absolute / 100000).toFixed(1)} L`;
  }
  return `${sign}₹${new Intl.NumberFormat("en-IN").format(absolute)}`;
};

const formatDate = (iso) => {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

const buildMetrics = () => {
  const metrics = [
    { label: "Total Portfolio Value", value: formatCurrency(portfolioData.totalValue) },
    {
      label: "Today’s Change",
      value: `${formatCurrency(portfolioData.todayChange)} (${portfolioData.todayChangePct}%)`
    },
    { label: "Holdings", value: portfolioData.holdings },
    { label: "Cost Basis", value: formatCurrency(portfolioData.costBasis) },
    { label: "Unrealized Gains", value: formatCurrency(portfolioData.unrealizedGains) },
    { label: "Cash Available", value: formatCurrency(portfolioData.cashAvailable) },
    { label: "Annual Yield", value: `${portfolioData.annualYield}%` },
    {
      label: "Top 3 Concentration",
      value: `${portfolioData.concentrationTop3}%`
    }
  ];

  metricsContainer.innerHTML = metrics
    .map(
      (metric) =>
        `<div class="metric"><h4>${metric.label}</h4><span>${metric.value}</span></div>`
    )
    .join("");
};

const buildSummary = () => {
  const concentration = portfolioData.allocation[0].value;
  const health = concentration > 35 ? "Needs Attention" : "Excellent";
  portfolioHealth.textContent = health;
  const rebalanceStatus =
    concentration > 30 ? "Needs Attention" : "Excellent";
  const rebalanceDetail =
    concentration > 30 ? "Tech above band" : "Within guardrails";
  const ytdDelta =
    portfolioData.performance["1Y"].gain - portfolioData.performance["1Y"].benchmark;

  const statusClass = health === "Excellent" ? "positive" : "attention";
  summaryContent.innerHTML = `
    <details class="summary-accordion">
      <summary>
        <div class="summary-overview">
          <div class="overview-item">
            <span class="muted">Portfolio health</span>
            <strong>${health}</strong>
          </div>
          <div class="overview-item">
            <span class="muted">YTD alpha</span>
            <strong>+${ytdDelta.toFixed(1)}%</strong>
          </div>
          <div class="overview-item">
            <span class="muted">Top 3 concentration</span>
            <strong>${portfolioData.concentrationTop3}%</strong>
          </div>
        </div>
        <span class="accordion-indicator">Expand</span>
      </summary>
      <div class="summary-detail">
        <div class="summary-row">
          <div class="summary-icon">◎</div>
          <div class="summary-text">
            <span class="summary-label">Portfolio health</span>
            <span class="summary-value">${portfolioData.allocation.length} core sectors aligned</span>
          </div>
          <span class="summary-badge ${statusClass}">${health}</span>
        </div>
        <div class="summary-row">
          <div class="summary-icon">↔︎</div>
          <div class="summary-text">
            <span class="summary-label">Rebalancing</span>
            <span class="summary-value">${rebalanceDetail}</span>
          </div>
          <span class="summary-badge ${rebalanceStatus === "Needs Attention" ? "attention" : "positive"}">${rebalanceStatus}</span>
        </div>
        <div class="summary-row">
          <div class="summary-icon">◐</div>
          <div class="summary-text">
            <span class="summary-label">Risk posture</span>
            <span class="summary-value">Beta ${portfolioData.risk.beta} · Drawdown ${portfolioData.risk.drawdown}%</span>
          </div>
          <span class="summary-badge">Moderate</span>
        </div>
        <div class="summary-row">
          <div class="summary-icon">▲</div>
          <div class="summary-text">
            <span class="summary-label">YTD performance</span>
            <span class="summary-value">+${portfolioData.performance["1Y"].gain}% vs benchmark</span>
          </div>
          <span class="summary-badge positive">Excellent</span>
        </div>
      </div>
    </details>
  `;
};

const buildInsights = () => {
  insightsContainer.innerHTML = insightsData
    .map(
      (insight) => `
        <div class="insight">
          <div class="impact">Impact · ${insight.impact}</div>
          <strong>${insight.title}</strong>
          <p class="muted">${insight.detail}</p>
          <button class="link">${insight.action}</button>
        </div>
      `
    )
    .join("");
};

const buildSuggestions = () => {
  suggestionsContainer.innerHTML = suggestionsData
    .map(
      (item) => `
        <div class="suggestion">
          <span class="tag">${item.type}</span>
          <div>
            <strong>${item.asset}</strong>
            <div class="suggestion-meta">
              <span><strong>Price:</strong> ${item.price}</span>
              <span><strong>Recent 7D:</strong> ${item.movement}</span>
              <span><strong>Horizon:</strong> ${item.horizon}</span>
              <span><strong>Risk intent:</strong> ${item.risk}</span>
            </div>
          </div>
          <span class="muted">Intent: ${item.type}</span>
        </div>
      `
    )
    .join("");
};

const buildAllocation = () => {
  const total = portfolioData.allocation.reduce((sum, item) => sum + item.value, 0);
  const gradientStops = portfolioData.allocation
    .reduce((acc, item) => {
      const last = acc[acc.length - 1] || 0;
      acc.push(last + item.value);
      return acc;
    }, [])
    .map((value) => (value / total) * 360);

  const colors = ["#4f6b7a", "#6e7f8a", "#8a6f52", "#5f7366", "#79627e", "#6b7a6a"];
  const segments = gradientStops
    .map((stop, index) => `${colors[index]} 0 ${stop}deg`)
    .join(", ");
  allocationDonut.style.background = `conic-gradient(${segments})`;

  allocationDetails.innerHTML = portfolioData.allocation
    .map(
      (item, index) => `
        <div class="detail-row" style="border-bottom: none;">
          <span>${item.sector}</span>
          <span style="color: ${colors[index]}; font-weight: 600;">${item.value}%</span>
        </div>
      `
    )
    .join("");

  allocationCallout.textContent =
    "Diversification score: 8.4/10. Technology is the largest sleeve; trimming 3-4% improves balance without hurting growth exposure.";
};

const buildPerformance = (range = "7D") => {
  const data = portfolioData.performance[range];
  performanceStats.innerHTML = `
    <div class="detail-row"><span>Portfolio vs Benchmark</span><span>+${data.gain}% vs +${data.benchmark}%</span></div>
    <div class="detail-row"><span>Total gain</span><span>+${data.gain}%</span></div>
    <div class="detail-row"><span>Avg daily return</span><span>${data.avgDaily}%</span></div>
    <div class="detail-row"><span>Best day</span><span>${data.bestDay}</span></div>
  `;

  performanceCallout.textContent =
    "Alpha generation remains consistent. Momentum is strongest in quality growth and defensive healthcare positions.";
};

const performanceChart = document.getElementById("performanceChart");
const performanceLine = document.getElementById("performanceLine");
const performanceArea = document.getElementById("performanceArea");
const performancePoints = document.getElementById("performancePoints");
const performanceTooltip = document.getElementById("performanceTooltip");

const buildPerformanceChart = (range = "7D") => {
  const series = portfolioData.performanceSeries[range];
  if (!series || series.length === 0) {
    return;
  }
  const values = series.map((item) => item.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const width = 640;
  const height = 200;
  const padding = 24;
  const points = series.map((item, index) => {
    const x = padding + (index / (series.length - 1)) * (width - padding * 2);
    const y = height - padding - ((item.value - min) / (max - min)) * (height - padding * 2);
    return { x, y, ...item };
  });

  const linePath = `M ${points.map((point) => `${point.x},${point.y}`).join(" L ")}`;
  const areaPath = `${linePath} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;
  performanceLine.setAttribute("d", linePath);
  performanceArea.setAttribute("d", areaPath);

  performancePoints.innerHTML = points
    .map(
      (point) =>
        `<circle cx="${point.x}" cy="${point.y}" r="3" fill="#3a9c74" data-date="${point.date}" data-value="${point.value}" />`
    )
    .join("");

  const showTooltip = (point, clientX, clientY) => {
    const previousIndex = points.findIndex((item) => item.date === point.date) - 1;
    const prevValue = previousIndex >= 0 ? points[previousIndex].value : point.value;
    const change = point.value - prevValue;
    const changeLabel = `${change >= 0 ? "+" : "-"}${formatCurrency(Math.abs(change))}`;
    performanceTooltip.innerHTML = `
      <div>${formatDate(point.date)}</div>
      <div><strong>${formatCurrency(point.value)}</strong></div>
      <div class="muted">Δ ${changeLabel}</div>
    `;
    const rect = performanceChart.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    performanceTooltip.style.left = `${x}px`;
    performanceTooltip.style.top = `${y}px`;
    performanceTooltip.style.opacity = 1;
  };

  performanceChart.onmousemove = (event) => {
    const rect = performanceChart.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const index = Math.round(((relativeX - padding) / (width - padding * 2)) * (points.length - 1));
    const clamped = Math.max(0, Math.min(points.length - 1, index));
    showTooltip(points[clamped], event.clientX, event.clientY);
  };

  performanceChart.onmouseleave = () => {
    performanceTooltip.style.opacity = 0;
  };
};

const buildRisk = () => {
  const risk = portfolioData.risk;
  const riskItems = [
    {
      label: "Risk Score",
      value: `${risk.score}/10`,
      explanation: "Balances volatility, drawdown, and diversification."
    },
    {
      label: "Beta",
      value: risk.beta,
      explanation: "Below 1.0 indicates lower sensitivity to market moves."
    },
    {
      label: "Max Drawdown",
      value: `${risk.drawdown}%`,
      explanation: "Largest peak-to-trough decline during stress." 
    },
    {
      label: "Sharpe Ratio",
      value: risk.sharpe,
      explanation: "Risk-adjusted return; higher is more efficient."
    }
  ];

  riskMetrics.innerHTML = riskItems
    .map(
      (item) => `
        <div class="risk-item">
          <strong>${item.label}</strong>
          <p>${item.value}</p>
          <p class="muted">${item.explanation}</p>
        </div>
      `
    )
    .join("");
};

const buildEvents = () => {
  eventsContainer.innerHTML = portfolioData.events
    .map(
      (event) => `
        <div class="event">
          <strong>${event.title}</strong>
          <span class="event-date">
            <svg class="date-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.6" aria-hidden="true">
              <path d="M7 3v4M17 3v4M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
            </svg>
            ${formatDate(event.date)}
          </span>
          <p class="muted">${event.detail}</p>
        </div>
      `
    )
    .join("");

  const calendar = document.getElementById("eventsCalendar");
  calendar.innerHTML = portfolioData.events
    .map(
      (event) => `
        <div class="calendar-card">
          <span>${formatDate(event.date)}</span>
          <strong>${event.title}</strong>
          <p class="muted">${event.detail}</p>
        </div>
      `
    )
    .join("");
};

const buildWatchlist = () => {
  watchlistGrid.innerHTML = watchlistData
    .map(
      (item) => `
        <div class="watch-card">
          <div class="live">Live</div>
          <strong>${item.name}</strong>
          <p>${item.price} <span class="muted">${item.change}</span></p>
          <div class="detail-row" style="border-bottom: none;">
            <span>Day high / low</span>
            <span>${item.high} / ${item.low}</span>
          </div>
          <div class="detail-row" style="border-bottom: none;">
            <span>Volume</span>
            <span>${item.volume}</span>
          </div>
          <div class="detail-row" style="border-bottom: none;">
            <span>Market cap</span>
            <span>${item.cap}</span>
          </div>
          <button class="link">View details</button>
        </div>
      `
    )
    .join("");
};

const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");
const assistantButtons = document.querySelectorAll(".assistant-actions button");

const appendChat = (message, type) => {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = message;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

assistantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    appendChat(button.textContent, "user");
    appendChat(assistantTemplates[action], "ai");
  });
});

sendChat.addEventListener("click", () => {
  if (!chatInput.value) {
    return;
  }
  appendChat(chatInput.value, "user");
  appendChat(
    "Your weekly dip came from a 2.4% pullback in Asterion Tech and a slight rise in cash holdings. The rest of the portfolio remained stable, so the move was concentrated rather than systemic.",
    "ai"
  );
  chatInput.value = "";
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendChat.click();
  }
});

const openModal = (id) => document.getElementById(id).classList.add("active");
const closeModal = (id) => document.getElementById(id).classList.remove("active");

const exportBtn = document.getElementById("exportBtn");
const notifyBtn = document.getElementById("notifyBtn");
const profileBtn = document.getElementById("profileBtn");

exportBtn.addEventListener("click", () => openModal("exportModal"));
notifyBtn.addEventListener("click", () => openModal("notifyModal"));
profileBtn.addEventListener("click", () => openModal("profileModal"));

const closeButtons = document.querySelectorAll("[data-close]");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => closeModal(button.dataset.close));
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    tabContents.forEach((content) => {
      content.classList.toggle("active", content.id === `tab-${tab.dataset.tab}`);
    });
  });
});

const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    buildPerformance(button.dataset.range);
    buildPerformanceChart(button.dataset.range);
  });
});

const viewCalendarBtn = document.getElementById("viewCalendar");
const eventsCalendar = document.getElementById("eventsCalendar");
viewCalendarBtn.addEventListener("click", () => {
  const isActive = eventsCalendar.classList.toggle("active");
  eventsContainer.classList.toggle("is-hidden", isActive);
  viewCalendarBtn.textContent = isActive ? "View List" : "View Calendar";
});

const addWatchBtn = document.getElementById("addWatch");
addWatchBtn.addEventListener("click", () => {
  appendChat("Add Orion Cloud to watchlist", "user");
  appendChat("Orion Cloud added. It currently trades at $112.40 with +1.4% momentum.", "ai");
});

buildMetrics();
buildSummary();
buildInsights();
buildSuggestions();
buildAllocation();
buildPerformance();
buildPerformanceChart();
buildRisk();
buildEvents();
buildWatchlist();
