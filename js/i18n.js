/* ============================================================
   i18n — bilingual (EN / 中文) language switcher
   Load BEFORE data.js / data.zh.js and the page renderer scripts.
   Usage: window.I18N.getData() returns the active-language data,
   I18N.t("key") returns a UI string, I18N.onLangChange(cb) re-renders.
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "lang";

  /* ---------- UI strings (static text + JS-generated labels) ---------- */

  var UI = {
    en: {
      meta: {
        title: "Minhazul Islam — AI Engineer | Agentic AI, LLM Systems & Full-Stack",
        description:
          "AI Engineer with 2+ years building production agentic AI systems — LangGraph multi-agent platforms, RAG infrastructure, and LLMOps. Shipped a 17-node decision-intelligence platform covering 19 petrochemical products in live forecast use. Open to AI/ML engineering roles in Shanghai or remote.",
        libTitle: "Project Library — Minhazul Islam",
        libDescription:
          "Comprehensive details on all of Minhazul Islam's AI, ML, and embedded systems projects.",
      },

      nav: {
        about: "About",
        experience: "Experience",
        projects: "Selected Work",
        skills: "Skills",
        publications: "Publications",
        education: "Education",
        contact: "Contact",
        cv: "Résumé",
        home: "Home",
      },

      mm: {
        about: "About",
        experience: "Experience",
        projects: "Selected Work",
        skills: "Skills",
        publications: "Publications",
        education: "Education",
        contact: "Contact",
        library: "Project Library",
        home: "Home",
      },

      hero: {
        kicker: "M.Eng. Candidate, Zhejiang University · B.Eng., Yunnan University",
        role: "AI Engineer — Agentic AI, LLM Systems & Applied Machine Learning",
        summary:
          "I build production AI systems end-to-end — from multi-agent LLM architectures and RAG infrastructure to Dockerized deployment and streaming APIs. At Synexia AI I shipped EDIA, a 17-node LangGraph decision-intelligence platform covering 19 petrochemical products, and Zhanlu, a governed multi-agent runtime with 144 registered tools and sandboxed execution. My master's thesis, BEPSBot, applied the same systems thinking to a sensitive domain: a draft-grounded AI writing assistant for mental-health peer support, validated in a 24-participant study.",
        research: "Selected Work",
        publications: "Publications",
        downloadCv: "Download Résumé (PDF)",
        contactMe: "Contact",
        resumeAria: "Download résumé as PDF",
      },

      avail: {
        textStrong: "Open to full-time AI/ML engineering roles",
        textRest: " — Shanghai or remote · 2026–2027",
        seeProjects: "See Selected Work",
        downloadCv: "Download Résumé (PDF)",
        workAuthLabel: "Work authorization",
        languagesLabel: "Languages",
      },

      about: {
        eyebrow: "About",
        title: "Engineer who ships production AI systems",
        p1: "I'm an M.Eng. candidate at Zhejiang University (Industrial Design Engineering) with a B.Eng. in Computer Science from Yunnan University. Over the past two years I've worked as an AI Infrastructure & Systems Engineer at Synexia AI, where I built two production platforms from the ground up.",
        p2: "EDIA pre-computes every business-critical metric in deterministic Python before any LLM narrates it, cutting decision-workflow latency from up to 478 seconds down to 30–45 seconds. Zhanlu is a multi-tenant platform for governed, tool-using AI agents, with permission-filtered tool dispatch, Docker-sandboxed execution, MCP integrations, and full audit trails.",
        p3: "Alongside engineering, I conduct human-centered AI research. My thesis, BEPSBot (HHME 2026 PCC), showed that draft-grounded generation more than doubled suggestion adoption (33.3% → 75.6%) while preserving usability (SUS 86.98) — published alongside two ICEC 2025 papers on bipolar-disorder biomarkers and biofeedback interventions.",
        p4: "I'm looking for engineering roles where I can own LLM and agent systems from architecture to deployment, in domains where correctness and trust matter.",
        howTitle: "How I Work",
        howIWork: "I believe LLMs should narrate, never calculate — so I build deterministic guardrails, verified tool pipelines, and human oversight into every system, from enterprise forecasting to mental-health communication.",
      },

      skills: {
        eyebrow: "Skills",
        title: "Tools I use to ship AI systems",
        sub: "Grouped the way engineering teams and applicant-tracking systems read them.",
      },

      exp: {
        eyebrow: "Work Experience",
        title: "Roles where I built AI systems end-to-end",
        sub: "Production ownership from architecture through deployment, plus earlier software automation work.",
        toggle: "Technical detail",
      },

      proj: {
        eyebrow: "Selected Work",
        title: "Systems I've designed, built, and shipped",
        sub: "From enterprise decision intelligence to AI-mediated mental-health support.",
        researchTitle: "Applied AI & Human-Centered Systems",
        systemsTitle: "Production AI Platforms",
        viewAll: "View all projects in the Project Library",
        viewDetails: "View full details →",
        all: "All",
      },

      earlier: {
        eyebrow: "More Projects",
        title: "Earlier engineering work",
        sub: "CAD automation, assistive hardware, IoT, and recommendation systems.",
        toggle: "Show earlier projects",
      },

      pub: {
        eyebrow: "Publications & Awards",
        title: "Publications",
        sub: "Peer-reviewed papers and conference presentations — four in total.",
        reviewedTitle: "Peer-Reviewed",
        presentedTitle: "Conference Presentations & Non-Archival Work",
        awardsTitle: "Awards",
        published: "Published",
        presented: "Presented",
        pages: "Pages",
        conferencePage: "Conference page",
      },

      edu: {
        eyebrow: "Education & Certifications",
        title: "Education",
        certsTitle: "Certifications",
      },

      ach: {
        eyebrow: "Awards",
        title: "Selected awards",
      },

      contact: {
        eyebrow: "Contact",
        title: "Let's build something",
        getInTouch: "Get in touch",
        text: "I'm currently open to full-time AI/ML engineering roles — Shanghai-based or remote — starting after my expected graduation in December 2026 (earlier for internships or part-time).",
        nameLabel: "Name",
        namePh: "Your name",
        emailLabel: "Email",
        emailPh: "you@example.com",
        subjectLabel: "Subject",
        subjectPh: "What's this about?",
        messageLabel: "Message",
        messagePh: "Your message...",
        send: "Send Message",
        formStatus: "Opening your email client to send this message...",
        themeAria: "Toggle dark mode",
        langAria: "Switch language",
      },

      lib: {
        navHome: "Home",
        navProjects: "Projects",
        navResearch: "Research",
        navContact: "Contact",
        eyebrow: "Project Library",
        title: "All projects, in detail",
        sub: "Select a project from the sidebar to see its full story — problem, role, architecture, algorithm, methodology, features, impact, evaluation, and tech stack.",
        sidebarTitle: "Projects",
        backTo: "Back to",
        home: "home page",
        role: "Role: ",
        prev: "← Previous",
        next: "Next →",
        block: {
          problem: "Problem",
          role: "My Role",
          architecture: "Technical Architecture",
          algorithm: "Algorithm & Approach",
          methodology: "How It Works",
          features: "Key Features",
          impact: "Impact",
          evaluation: "Evaluation & Results",
          stack: "Tech Stack",
        },
      },

      footer: {
        tagline: "Built with a clean, professional design.",
      },
    },

    zh: {
      meta: {
        title: "Minhazul Islam — AI 工程师 | 智能体 AI、大模型系统与全栈",
        description:
          "AI 工程师，2 年以上生产级智能体 AI 系统经验——LangGraph 多智能体平台、RAG 基础设施与 LLMOps。交付覆盖 19 个石化产品的 17 节点决策智能平台并投入实际预测使用。开放上海或远程 AI/ML 工程岗位。",
        libTitle: "项目库 — Minhazul Islam",
        libDescription: "Minhazul Islam 所有 AI、机器学习与嵌入式系统项目的详细介绍。",
      },

      nav: {
        about: "关于我",
        experience: "工作经历",
        projects: "代表作品",
        skills: "技能",
        publications: "论文与奖项",
        education: "教育与认证",
        contact: "联系",
        cv: "简历",
        home: "首页",
      },

      mm: {
        about: "关于我",
        experience: "工作经历",
        projects: "代表作品",
        skills: "技能",
        publications: "论文与奖项",
        education: "教育与认证",
        contact: "联系",
        library: "项目库",
        home: "首页",
      },

      hero: {
        kicker: "浙江大学硕士在读 · 云南大学计算机学士",
        role: "AI 工程师 — 智能体 AI、大模型系统与应用机器学习",
        summary:
          "我端到端交付生产级 AI 系统——从多智能体 LLM 架构、RAG 基础设施，到 Docker 化部署与流式 API。在 Synexia AI，我交付了 EDIA（17 节点 LangGraph 决策智能平台，覆盖 19 个石化产品）与 Zhanlu（受治理的多智能体运行时，144 个注册工具、沙箱化执行）。我的硕士论文 BEPSBot 把同样的系统思维应用到敏感领域：面向心理健康同伴支持的草稿锚定写作助手，并通过 24 人用户研究验证。",
        research: "代表作品",
        publications: "论文",
        downloadCv: "下载简历 (PDF)",
        contactMe: "联系我",
        resumeAria: "下载 PDF 简历",
      },

      avail: {
        textStrong: "开放全职 AI/ML 工程岗位",
        textRest: " —— 上海或远程 · 2026–2027",
        seeProjects: "查看代表作品",
        downloadCv: "下载简历 (PDF)",
        workAuthLabel: "工作许可",
        languagesLabel: "语言",
      },

      about: {
        eyebrow: "关于我",
        title: "交付生产级 AI 系统的工程师",
        p1: "我是浙江大学工业设计工程硕士在读，本科毕业于云南大学计算机科学与技术专业。过去两年我在 Synexia AI 担任 AI 基础设施与系统工程师，从零构建了两个生产级平台。",
        p2: "EDIA 在任何 LLM 叙述之前用确定性 Python 预先计算所有业务关键指标，把决策流程延迟从最高 478 秒缩短至 30–45 秒。Zhanlu 是面向受治理、使用工具的 AI 智能体的多租户平台，具备权限过滤的工具分发、Docker 沙箱执行、MCP 集成与完整审计追踪。",
        p3: "除工程之外，我也从事以人为本的 AI 研究。我的论文 BEPSBot（HHME 2026 PCC）表明草稿锚定生成让建议采纳率提升一倍以上（33.3% → 75.6%），同时保持可用性（SUS 86.98），并与两篇 ICEC 2025 论文（双相障碍生物标志物、生物反馈干预）一同发表。",
        p4: "我正在寻找能够从架构到部署全程负责大模型与智能体系统的工程岗位，尤其是在正确性与可信度至关重要的领域。",
        howTitle: "我的工作方式",
        howIWork: "我坚信 LLM 只应叙述、绝不应计算——因此在每个系统中我都构建确定性护栏、可验证的工具流水线与人工监督机制，无论是企业预测还是心理健康沟通。",
      },

      skills: {
        eyebrow: "技能",
        title: "我用来交付 AI 系统的技术栈",
        sub: "按工程团队与简历筛选系统（ATS）的阅读方式分组。",
      },

      exp: {
        eyebrow: "工作经历",
        title: "端到端构建 AI 系统的岗位",
        sub: "从架构到部署全程负责生产系统，以及更早的软件自动化工作。",
        toggle: "技术细节",
      },

      proj: {
        eyebrow: "代表作品",
        title: "我设计、构建并交付的系统",
        sub: "从企业决策智能到 AI 介导的心理健康支持。",
        researchTitle: "应用 AI 与以人为本的系统",
        systemsTitle: "生产级 AI 平台",
        viewAll: "查看项目库中的全部项目",
        viewDetails: "查看详情 →",
        all: "全部",
      },

      earlier: {
        eyebrow: "更多项目",
        title: "早期工程项目",
        sub: "CAD 自动化、辅助硬件、IoT 与推荐系统。",
        toggle: "展开早期项目",
      },

      pub: {
        eyebrow: "论文与奖项",
        title: "论文",
        sub: "同行评审论文与会议报告，共计四项。",
        reviewedTitle: "同行评审",
        presentedTitle: "会议报告与非存档工作",
        awardsTitle: "奖项",
        published: "发表于",
        presented: "报告于",
        pages: "页码",
        conferencePage: "会议页面",
      },

      edu: {
        eyebrow: "教育与认证",
        title: "教育",
        certsTitle: "认证",
      },

      ach: {
        eyebrow: "奖项",
        title: "精选奖项",
      },

      contact: {
        eyebrow: "联系我",
        title: "一起做点东西",
        getInTouch: "保持联系",
        text: "我目前开放全职 AI/ML 工程岗位 —— 上海或远程 —— 预计 2026 年 12 月毕业后即可到岗（实习或兼职可更早开始）。",
        nameLabel: "姓名",
        namePh: "您的姓名",
        emailLabel: "邮箱",
        emailPh: "you@example.com",
        subjectLabel: "主题",
        subjectPh: "想聊点什么？",
        messageLabel: "消息",
        messagePh: "您的留言……",
        send: "发送消息",
        formStatus: "正在打开您的邮件客户端发送此消息……",
        themeAria: "切换深色模式",
        langAria: "切换语言",
      },

      lib: {
        navHome: "首页",
        navProjects: "项目",
        navResearch: "研究",
        navContact: "联系",
        eyebrow: "项目库",
        title: "全部项目详解",
        sub: "从侧边栏选择项目，查看完整介绍——问题、角色、架构、算法、方法论、功能、影响、评估与技术栈。",
        sidebarTitle: "项目",
        backTo: "返回",
        home: "首页",
        role: "角色：",
        prev: "← 上一个",
        next: "下一个 →",
        block: {
          problem: "问题",
          role: "我的角色",
          architecture: "技术架构",
          algorithm: "算法与方法",
          methodology: "实现原理",
          features: "核心功能",
          impact: "影响",
          evaluation: "评估与结果",
          stack: "技术栈",
        },
      },

      footer: {
        tagline: "以简洁、专业的设计构建。",
      },
    },
  };

  /* ---------- language state ---------- */

  var lang = localStorage.getItem(STORAGE_KEY);
  if (!lang) {
    lang = (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }
  if (lang !== "en" && lang !== "zh") lang = "en";

  function setLangAttr(l) {
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("data-lang", l);
  }
  setLangAttr(lang);

  /* ---------- lookup ---------- */

  function get(path, obj) {
    return path.split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function t(key) {
    var v = get(key, UI[lang]);
    if (v === undefined) v = get(key, UI.en);
    return v !== undefined ? v : key;
  }

  /* ---------- apply translations to static DOM ---------- */

  function applyUI() {
    var dict = UI[lang] || UI.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val === undefined) return;
      if (el.tagName === "META" && el.getAttribute("name") === "description") {
        el.setAttribute("content", val);
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val !== undefined) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val !== undefined) el.setAttribute("aria-label", val);
    });
  }

  /* ---------- language switch ---------- */

  var listeners = [];
  function onLangChange(cb) {
    listeners.push(cb);
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    setLangAttr(lang);
    applyUI();
    updateToggleUI();
    listeners.forEach(function (cb) {
      try {
        cb();
      } catch (err) {
        console.error(err);
      }
    });
  }

  function updateToggleUI() {
    var wrap = document.getElementById("lang-switch");
    if (wrap) wrap.setAttribute("data-lang", lang);
    var track = document.getElementById("lang-track");
    if (track) {
      track.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
      if (track.hasAttribute("data-i18n-aria")) {
        track.setAttribute("aria-label", t("contact.langAria"));
      }
    }
  }

  /* ---------- active data ---------- */

  function getData() {
    if (lang === "zh" && window.PORTFOLIO_ZH) return window.PORTFOLIO_ZH;
    return window.PORTFOLIO;
  }

  /* ---------- init ---------- */

  function init() {
    var track = document.getElementById("lang-track");
    if (track) {
      track.addEventListener("click", function () {
        setLang(lang === "en" ? "zh" : "en");
      });
    }

    updateToggleUI();
    applyUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.I18N = {
    get lang() {
      return lang;
    },
    t: t,
    applyUI: applyUI,
    getData: getData,
    onLangChange: onLangChange,
    setLang: setLang,
  };
})();
