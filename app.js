const portfolioData = {
  totalValue: 24800000,
  todayChange: 324500,
  todayChangePct: 1.32,
  costBasis: 21340000,
  unrealizedGains: 3460000,
  cashAvailable: 1850000,
  buyingPower: 3700000,
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
    xirr: 16.8,
    irr: 14.2,
    sharpe: 1.21,
    maxDrawdown: -8.4,
    volatility: 12.6,
    alpha: 2.3
  },
  events: [
    {
      title: "Union Budget presentation",
      date: "2026-02-01",
      detail: "Policy signals for capex, taxes, and incentives"
    },
    {
      title: "RBI Monetary Policy Committee",
      date: "2026-02-07",
      detail: "Rate stance and liquidity commentary"
    },
    {
      title: "Q2 earnings season opens",
      date: "2026-10-15",
      detail: "Large-cap IT and banks lead reporting"
    },
    {
      title: "India CPI inflation release",
      date: "2026-09-12",
      detail: "Headline and core CPI in focus"
    },
    {
      title: "India GDP data release",
      date: "2026-11-30",
      detail: "Q2 GDP growth print for FY26"
    }
  ]
};

const insightsData = [
  {
    title: "Growth opportunity detected",
    impact: "High",
    detail:
      "Large-cap tech allocation led by TCS and Infosys is outperforming the NIFTY 50 by 2.1%. Consider incremental exposure to quality IT services.",
    action: "View details"
  },
  {
    title: "Rebalancing needed",
    impact: "Medium",
    detail:
      "Single-stock concentration in Reliance Industries is at 18% of total portfolio value, above the 12% target band.",
    action: "View details"
  },
  {
    title: "Tax-loss harvesting window",
    impact: "Low",
    detail:
      "Persistent Systems and Laxmi Organic are down more than 8% from cost basis. Harvesting could offset ₹9.8L in gains.",
    action: "View details"
  }
];

const suggestionsData = [
  {
    type: "BUY",
    asset: "Trent",
    price: "₹5,420",
    movement: "+2.1%",
    horizon: "6-12M",
    risk: "Moderate"
  },
  {
    type: "TRIM",
    asset: "Infosys",
    price: "₹1,845",
    movement: "+1.6%",
    horizon: "Immediate",
    risk: "Elevated"
  },
  {
    type: "WATCH",
    asset: "KPIT Technologies",
    price: "₹1,790",
    movement: "-0.4%",
    horizon: "3-6M",
    risk: "Moderate"
  }
];

const watchlistData = [
  {
    name: "Reliance Industries",
    price: "₹2,965",
    change: "+1.1%",
    high: "₹2,992",
    low: "₹2,910",
    volume: "5.4M",
    cap: "₹20.1 L Cr"
  },
  {
    name: "HDFC Bank",
    price: "₹1,610",
    change: "+0.5%",
    high: "₹1,628",
    low: "₹1,592",
    volume: "3.1M",
    cap: "₹12.3 L Cr"
  },
  {
    name: "Tata Elxsi",
    price: "₹7,820",
    change: "-0.8%",
    high: "₹7,950",
    low: "₹7,740",
    volume: "1.1M",
    cap: "₹49,200 Cr"
  },
  {
    name: "Dixon Technologies",
    price: "₹9,640",
    change: "+0.9%",
    high: "₹9,720",
    low: "₹9,480",
    volume: "0.6M",
    cap: "₹58,800 Cr"
  }
];

const assistantTemplates = {
  portfolio:
    "Your portfolio is anchored by growth equities (54%) with balanced allocations to healthcare and financials. The largest single-stock exposure is Reliance Industries at 18%, which is driving recent outperformance. Consider trimming 2-3% to reduce concentration while keeping core large-cap exposure.",
  market:
    "Markets are rewarding quality growth and cash-flow resilience. IT services and premium consumer names are leading rotation, while private banks are stabilizing as rate expectations settle. Energy remains range-bound with modest upside tied to global crude trends.",
  risk:
    "Overall risk posture is moderate. XIRR of 16.8% reflects healthy SIP compounding, while max drawdown of 8.4% indicates controlled downside. Sharpe at 1.21 suggests efficient risk-adjusted returns, with mild volatility from mid-cap exposure."
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
    { label: "Holdings Count", value: portfolioData.holdings },
    { label: "Cost Basis", value: formatCurrency(portfolioData.costBasis) },
    { label: "Unrealized Gains", value: formatCurrency(portfolioData.unrealizedGains) },
    { label: "Cash Available", value: formatCurrency(portfolioData.cashAvailable) },
    { label: "Buying Power", value: formatCurrency(portfolioData.buyingPower) },
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
  const riskLevel = "Moderate";

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
            <span class="muted">Risk level</span>
            <strong>${riskLevel}</strong>
          </div>
        </div>
        <span class="accordion-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      <div class="summary-detail">
        <div class="summary-section">
          <div class="summary-section-title">
            <span class="summary-icon">◎</span>
            <span>Health explanation</span>
            <span class="summary-badge ${statusClass}">${health}</span>
          </div>
          <ul class="summary-list">
            <li><span class="summary-bullet-icon">◆</span><span>Core anchors: Reliance Industries · HDFC Bank · TCS</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>Liquidity remains above target at ${formatCurrency(portfolioData.cashAvailable)}</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>Top 3 concentration held at ${portfolioData.concentrationTop3}%</span></li>
          </ul>
        </div>
        <div class="summary-section">
          <div class="summary-section-title">
            <span class="summary-icon">↔︎</span>
            <span>Rebalancing insight</span>
            <span class="summary-badge ${rebalanceStatus === "Needs Attention" ? "attention" : "positive"}">${rebalanceStatus}</span>
          </div>
          <ul class="summary-list">
            <li><span class="summary-bullet-icon">◆</span><span>Technology tilt flagged: ${rebalanceDetail}</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>Suggested trim: 2-3% from top tech winners</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>Rebalance window: next 14 trading sessions</span></li>
          </ul>
        </div>
        <div class="summary-section">
          <div class="summary-section-title">
            <span class="summary-icon">◐</span>
            <span>Risk interpretation</span>
            <span class="summary-badge">${riskLevel}</span>
          </div>
          <ul class="summary-list">
            <li><span class="summary-bullet-icon">◆</span><span>XIRR ${portfolioData.risk.xirr}% with max drawdown ${Math.abs(portfolioData.risk.maxDrawdown)}%</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>Volatility contained at ${portfolioData.risk.volatility}%</span></li>
            <li><span class="summary-bullet-icon">◆</span><span>YTD performance +${portfolioData.performance["1Y"].gain}% vs benchmark</span></li>
          </ul>
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
              <span><strong>Recent 7D %:</strong> ${item.movement}</span>
              <span><strong>Holding horizon:</strong> ${item.horizon}</span>
              <span><strong>Risk intent:</strong> ${item.risk}</span>
            </div>
          </div>
          <span class="muted">Intent badge: ${item.type}</span>
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

  const colors = ["#22354f", "#4e6a85", "#c7a35d", "#8a93a3", "#5a6c7a", "#b8b1a6"];
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
    "Interpretation: Diversification score 8.4/10. Large-cap anchors keep balance while selective mid-cap IT adds growth.";
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
    "Alpha remains consistent versus the NIFTY 50. Momentum is strongest in quality IT and premium consumption names.";
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
        `<circle cx="${point.x}" cy="${point.y}" r="3" fill="#c7a35d" data-date="${point.date}" data-value="${point.value}" />`
    )
    .join("");

  const showTooltip = (point, clientX, clientY) => {
    const previousIndex = points.findIndex((item) => item.date === point.date) - 1;
    const prevValue = previousIndex >= 0 ? points[previousIndex].value : point.value;
    const change = point.value - prevValue;
    const changePct = prevValue ? (change / prevValue) * 100 : 0;
    const changeLabel = `${change >= 0 ? "+" : "-"}${formatCurrency(Math.abs(change))}`;
    performanceTooltip.innerHTML = `
      <div>${formatDate(point.date)}</div>
      <div><strong>${formatCurrency(point.value)}</strong></div>
      <div class="muted">Daily change: ${changeLabel} (${changePct >= 0 ? "+" : ""}${changePct.toFixed(2)}%)</div>
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
      label: "XIRR",
      value: `${risk.xirr}%`,
      tooltip: {
        title: "XIRR explains the return on irregular cash flows.",
        example: "Example: A SIP growing to ₹1.2 Cr shows a 16.8% XIRR."
      }
    },
    {
      label: "IRR",
      value: `${risk.irr}%`,
      tooltip: {
        title: "IRR shows the overall return rate for the portfolio.",
        example: "Example: If ₹1 Cr becomes ₹1.14 Cr, IRR is ~14%."
      }
    },
    {
      label: "Max Drawdown",
      value: `${risk.maxDrawdown}%`,
      tooltip: {
        title: "Max drawdown is the biggest fall from peak to trough.",
        example: "Example: A ₹2.5 Cr peak dropping to ₹2.29 Cr is -8.4%."
      }
    },
    {
      label: "Sharpe Ratio",
      value: risk.sharpe,
      tooltip: {
        title: "Sharpe Ratio shows return earned for risk taken.",
        example: "Example: 1.2 means good risk-adjusted performance."
      }
    },
    {
      label: "Volatility (Std Dev)",
      value: `${risk.volatility}%`,
      tooltip: {
        title: "Volatility shows how much returns swing over time.",
        example: "Example: 12.6% means moderate month-to-month movement."
      }
    },
    {
      label: "Alpha vs NIFTY 50",
      value: `+${risk.alpha}%`,
      tooltip: null
    }
  ];

  riskMetrics.innerHTML = riskItems
    .map(
      (item) => `
        <div class="risk-item">
          <strong>${item.label}</strong>
          <p>${item.value}</p>
          ${
            item.tooltip
              ? `<div class="risk-tooltip">
                  <div>${item.tooltip.title}</div>
                  <div class="muted">${item.tooltip.example}</div>
                </div>`
              : `<p class="muted">Excess return delivered above the benchmark.</p>`
          }
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
          <div class="watch-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
              <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z" />
            </svg>
          </div>
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
    "Your weekly dip came from a 2.4% pullback in Reliance Industries and a slight rise in cash holdings. The rest of the portfolio remained stable, so the move was concentrated rather than systemic.",
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
  appendChat("Add Route Mobile to watchlist", "user");
  appendChat("Route Mobile added. It currently trades at ₹1,790 with +1.4% momentum.", "ai");
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
