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

const auth = document.getElementById("auth");
const app = document.getElementById("app");
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("emailInput");

loginBtn.addEventListener("click", () => {
  if (!emailInput.value) {
    emailInput.focus();
    return;
  }
  auth.classList.add("hidden");
  app.classList.remove("hidden");
});

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

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);

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
    { label: "Buying Power", value: formatCurrency(portfolioData.buyingPower) },
    { label: "Annual Yield", value: `${portfolioData.annualYield}%` }
  ];

  metricsContainer.innerHTML = metrics
    .map(
      (metric) =>
        `<div class="metric"><h4>${metric.label}</h4><span>${metric.value}</span></div>`
    )
    .join("");
};

const buildTrend = () => {
  const values = portfolioData.trend;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 600;
    const y = 160 - ((value - min) / (max - min)) * 120 - 20;
    return `${x},${y}`;
  });
  const linePath = `M ${points.join(" L ")}`;
  const areaPath = `${linePath} L 600 160 L 0 160 Z`;
  trendLine.setAttribute("d", linePath);
  trendArea.setAttribute("d", areaPath);
};

const buildSummary = () => {
  const concentration = portfolioData.allocation[0].value;
  const health = concentration > 35 ? "Needs Attention" : "Excellent";
  portfolioHealth.textContent = health;

  summaryContent.innerHTML = `
    <ul>
      <li><strong>Portfolio Health:</strong> ${health} — diversified with ${portfolioData.allocation.length} core sectors.</li>
      <li><strong>Rebalancing:</strong> ${
        concentration > 30
          ? "Technology exposure exceeds target by 4%, suggesting a trim to reduce single-theme risk."
          : "Sector weights remain within target bands; no immediate rebalance required."
      }</li>
      <li><strong>Risk Level:</strong> Moderate — beta ${portfolioData.risk.beta} with a controlled drawdown of ${
    portfolioData.risk.drawdown
  }%.</li>
      <li><strong>Performance:</strong> +${
        portfolioData.performance["1Y"].gain
      }% YTD, beating benchmark by ${
    portfolioData.performance["1Y"].gain - portfolioData.performance["1Y"].benchmark
  }%.</li>
    </ul>
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
            <p class="muted">${item.price} · ${item.movement} · ${item.horizon}</p>
          </div>
          <span class="muted">${item.risk} risk</span>
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

  const colors = ["#29c37c", "#5fb4ff", "#f1c15b", "#e48cc7", "#7b6dff", "#6ad1c9"];
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
          <span class="muted">${event.date}</span>
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

const addWatchBtn = document.getElementById("addWatch");
addWatchBtn.addEventListener("click", () => {
  appendChat("Add Orion Cloud to watchlist", "user");
  appendChat("Orion Cloud added. It currently trades at $112.40 with +1.4% momentum.", "ai");
});

buildMetrics();
buildTrend();
buildSummary();
buildInsights();
buildSuggestions();
buildAllocation();
buildPerformance();
buildRisk();
buildEvents();
buildWatchlist();
