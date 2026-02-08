const portfolioData = {
  totalValue: 2485000,
  todayChange: 32450,
  todayChangePct: 1.32,
  costBasis: 2134000,
  unrealizedGains: 351000,
  cashAvailable: 185000,
  buyingPower: 370000,
  annualYield: 3.8,
  holdings: 14,
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
  risk: {
    score: 4.2,
    beta: 0.94,
    drawdown: -9.6,
    sharpe: 1.32
  },
  events: [
    { title: "Asterion Tech Q2 Earnings", date: "Aug 04", detail: "Expected EPS +12% YoY" },
    { title: "GreenLeaf REIT Dividend", date: "Aug 12", detail: "$0.42 per share" },
    { title: "Global rates decision", date: "Aug 18", detail: "Consensus hold at 5.25%" },
    { title: "Helios Pharma FDA update", date: "Aug 24", detail: "Phase III milestone" }
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
const trendLine = document.getElementById("trendLine");
const trendArea = document.getElementById("trendArea");
const portfolioHealth = document.getElementById("portfolioHealth");
const performanceTooltip = document.getElementById("performanceTooltip");
const performanceChart = document.querySelector(".performance-chart");

let currentPerformanceData = null;

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(value);

const formatPercent = (value) =>
  new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value);

const buildMetrics = () => {
  const liquidityRatio = (portfolioData.cashAvailable / portfolioData.totalValue) * 100;
  const metrics = [
    { label: "Total Portfolio Value", value: formatCurrency(portfolioData.totalValue) },
    {
      label: "Today’s Change",
      value: `${formatCurrency(portfolioData.todayChange)} (${formatPercent(
        portfolioData.todayChangePct
      )}%)`
    },
    { label: "Cost Basis", value: formatCurrency(portfolioData.costBasis) },
    { label: "Unrealized Gains", value: formatCurrency(portfolioData.unrealizedGains) },
    { label: "Cash Available", value: formatCurrency(portfolioData.cashAvailable) },
    { label: "Buying Power", value: formatCurrency(portfolioData.buyingPower) },
    {
      label: "Holdings · Yield",
      value: `${portfolioData.holdings} · ${formatPercent(portfolioData.annualYield)}%`
    },
    {
      label: "Liquidity Ratio",
      value: `${formatPercent(liquidityRatio)}%`
    }
  ];

  metricsContainer.innerHTML = metrics
    .map(
      (metric) =>
        `<div class="metric"><h4>${metric.label}</h4><span>${metric.value}</span></div>`
    )
    .join("");
};

const performanceRanges = {
  "7D": { points: 7, label: "Last 7 days" },
  "1M": { points: 30, label: "Last 30 days" },
  "3M": { points: 90, label: "Last 90 days" },
  "1Y": { points: 180, label: "Last 12 months" },
  ALL: { points: 220, label: "All time" }
};

const buildPerformanceSeries = (range) => {
  const base = portfolioData.trend;
  const { points } = performanceRanges[range];
  const series = [];
  for (let i = 0; i < points; i += 1) {
    const ratio = i / (points - 1);
    const baseIndex = ratio * (base.length - 1);
    const lower = Math.floor(baseIndex);
    const upper = Math.ceil(baseIndex);
    const interp =
      base[lower] + (base[upper] - base[lower]) * (baseIndex - lower);
    const seasonal = Math.sin((ratio * Math.PI * 2) / 1.8) * 0.07;
    const trendShift = ratio * 0.22;
    series.push(interp + seasonal + trendShift);
  }
  return series;
};

const mapSeriesToPoints = (values) => {
  const max = Math.max(...values);
  const min = Math.min(...values);
  return values.map((value, index) => {
    const x = (index / (values.length - 1)) * 600;
    const y = 160 - ((value - min) / (max - min)) * 120 - 20;
    return `${x},${y}`;
  });
};

const buildPerformanceData = (range) => {
  const series = buildPerformanceSeries(range);
  const baseValue = portfolioData.totalValue;
  const values = series.map((value, index) => {
    const normalized = (value - series[0]) / series[0];
    return baseValue * (1 + normalized / 5);
  });
  const changes = values.map((value, index) =>
    index === 0 ? 0 : value - values[index - 1]
  );
  const dates = Array.from({ length: series.length }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (series.length - 1 - index));
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short"
    }).format(date);
  });
  return { series, values, changes, dates };
};

const initSummaryAccordion = () => {
  const triggers = summaryContent.querySelectorAll(".accordion-trigger");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const isActive = item.classList.contains("active");
      summaryContent
        .querySelectorAll(".accordion-item")
        .forEach((panel) => panel.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
};

const updateTooltip = (index) => {
  if (!currentPerformanceData || !performanceTooltip) {
    return;
  }
  const { values, changes, dates } = currentPerformanceData;
  const safeIndex = Math.max(0, Math.min(values.length - 1, index));
  const value = values[safeIndex];
  const change = changes[safeIndex];
  const previousValue = values[safeIndex === 0 ? 0 : safeIndex - 1];
  const changePct = previousValue ? (change / previousValue) * 100 : 0;
  performanceTooltip.querySelector(".tooltip-date").textContent = dates[safeIndex];
  performanceTooltip.querySelector(".tooltip-value").textContent = formatCurrency(value);
  performanceTooltip.querySelector(".tooltip-change").textContent = `Change: ${
    change >= 0 ? "+" : "-"
  }${formatCurrency(Math.abs(change))} (${formatPercent(changePct || 0)}%)`;
  performanceTooltip.classList.toggle("negative", change < 0);
};

const buildSummary = () => {
  const concentration = portfolioData.allocation[0].value;
  const health = concentration > 35 ? "Needs Attention" : "Excellent";
  portfolioHealth.textContent = health;
  const rebalanceLabel =
    concentration > 30 ? "Trim Tech +4%" : "Weights on target";
  const rebalanceDetail =
    concentration > 30 ? "Tech above band" : "Within guardrails";
  const ytdDelta =
    portfolioData.performance["1Y"].gain - portfolioData.performance["1Y"].benchmark;

  const summaryItems = [
    {
      title: "Portfolio health",
      summary: `${portfolioData.allocation.length} core sectors`,
      detail: "Diversification intact across primary sleeves.",
      status: health
    },
    {
      title: "Rebalancing",
      summary: rebalanceDetail,
      detail: "Adjusting tech weight reduces concentration pressure.",
      status: concentration > 30 ? "Attention Needed" : "Excellent"
    },
    {
      title: "Risk posture",
      summary: `Beta ${portfolioData.risk.beta} · Drawdown ${portfolioData.risk.drawdown}%`,
      detail: "Risk remains within the mandate guardrails.",
      status: "Moderate"
    },
    {
      title: "YTD performance",
      summary: `+${portfolioData.performance["1Y"].gain}% vs benchmark`,
      detail: `Outperformance of +${ytdDelta.toFixed(1)}% alpha vs benchmark.`,
      status: "Excellent"
    }
  ];

  summaryContent.innerHTML = `
    <div class="accordion">
      ${summaryItems
        .map(
          (item, index) => `
        <div class="accordion-item ${index === 0 ? "active" : ""}">
          <button class="accordion-trigger" type="button">
            <span class="summary-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <circle cx="12" cy="12" r="6" />
                <path d="M12 9v6M9 12h6" />
              </svg>
            </span>
            <span class="accordion-headline">
              <strong>${item.title}</strong>
              <span class="muted">${item.summary}</span>
            </span>
            <span class="summary-badge ${
              item.status === "Excellent"
                ? "positive"
                : item.status === "Attention Needed"
                ? "attention"
                : ""
            }">${item.status}</span>
          </button>
          <div class="accordion-panel">
            <span class="muted">${item.detail}</span>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  initSummaryAccordion();
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

  const colors = ["#6f8cc6", "#7a9f8a", "#b08b5c", "#8f7fb6", "#9e6f7e", "#5d7b8a"];
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
  currentPerformanceData = buildPerformanceData(range);
  const points = mapSeriesToPoints(currentPerformanceData.series);
  const linePath = `M ${points.join(" L ")}`;
  const areaPath = `${linePath} L 600 160 L 0 160 Z`;
  trendLine.setAttribute("d", linePath);
  trendArea.setAttribute("d", areaPath);
  trendLine.dataset.range = range;
  trendLine.dataset.series = JSON.stringify(currentPerformanceData.series);
  trendArea.dataset.series = JSON.stringify(currentPerformanceData.series);

  performanceStats.innerHTML = `
    <div class="detail-row"><span>Portfolio vs Benchmark</span><span>+${data.gain}% vs +${data.benchmark}%</span></div>
    <div class="detail-row"><span>Total gain</span><span>+${data.gain}%</span></div>
    <div class="detail-row"><span>Avg daily return</span><span>${data.avgDaily}%</span></div>
    <div class="detail-row"><span>Best day</span><span>${data.bestDay}</span></div>
  `;

  performanceCallout.textContent =
    "Alpha generation remains consistent. Momentum is strongest in quality growth and defensive healthcare positions.";

  updateTooltip(currentPerformanceData.series.length - 1);
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
  const formatEventDate = (date) => {
    const [month, day] = date.split(" ");
    return `${day} ${month} 2026`;
  };

  eventsContainer.innerHTML = portfolioData.events
    .map(
      (event) => `
        <div class="event">
          <strong>${event.title}</strong>
          <span class="muted event-date">
            <span class="event-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <path d="M6 4v3M18 4v3M4 9h16M5 11h14v8H5z" />
              </svg>
            </span>
            ${formatEventDate(event.date)}
          </span>
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
  });
});

if (performanceChart) {
  const performanceSvg = performanceChart.querySelector("svg");
  performanceSvg.addEventListener("mousemove", (event) => {
    const rect = performanceSvg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (!currentPerformanceData) {
      return;
    }
    const index = Math.round(
      (x / rect.width) * (currentPerformanceData.series.length - 1)
    );
    updateTooltip(index);
    performanceTooltip.style.opacity = "1";
    performanceTooltip.style.left = `${Math.min(
      Math.max(x, 12),
      rect.width - 12
    )}px`;
  });

  performanceSvg.addEventListener("mouseleave", () => {
    if (performanceTooltip) {
      performanceTooltip.style.opacity = "0";
    }
  });
}

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
buildRisk();
buildEvents();
buildWatchlist();
