import Script from "next/script";

const painPoints = [
  "不知道節目要怎麼規劃",
  "沒時間寫講稿",
  "不想自己錄音",
  "不會剪輯音檔",
  "不知道怎麼上架平台",
  "想經營品牌，但沒有內容製作團隊",
];

const audience = [
  "個人品牌經營者",
  "專業顧問",
  "講師與課程創作者",
  "建築師、設計師、房仲、代書、保險、法律、會計等專業人士",
  "公司品牌或小型企業",
  "想把文章、課程、案例、FAQ 轉成聲音節目的人",
  "想先用 5 集或 10 集測試 Podcast 的人",
];

const basicIncludes = [
  "單集 Podcast 音檔製作",
  "可選擇使用專業音色代錄",
  "客戶提供逐字稿或錄音檔",
  "基礎音檔整理",
  "每集 5 分鐘內",
  "SoundOn 平台上架",
  "可選擇指定日期或上架頻率",
  "下單後加入官方 LINE 溝通",
  "客戶依表單上傳資料",
  "音檔完成並上架至 SoundOn 後，即視為交付完成",
];

const voiceOptions = [
  "男聲・沉穩專業",
  "男聲・親切自然",
  "女聲・清晰專業",
  "女聲・溫柔親切",
  "女聲・活潑自然",
  "雙人對話，需加購",
  "多人對話，另行報價",
];

const exclusions = [
  "講稿代寫",
  "文案重寫",
  "片頭片尾製作",
  "背景音樂",
  "音檔修改",
  "多平台上架",
  "Podcast 封面設計",
  "社群貼文撰寫",
  "逐字稿整理",
  "雙人對話或多人對話製作",
  "真人錄音到場服務",
  "指定真人配音員",
  "平台審核保證",
  "客戶帳號建立、平台認證或帳號權限問題處理",
  "上架後之平台維護、異常排除或後續管理",
  "客戶提供資料錯誤所造成之重新製作或重新上架",
];

const plans = [
  {
    name: "Podcast 試水溫包",
    episodes: "5 集",
    price: "NT$9,800 起",
    note: "適合第一次嘗試 Podcast 的客戶",
    featured: false,
  },
  {
    name: "Podcast 一季基礎包",
    episodes: "10 集",
    price: "NT$18,800 起",
    note: "適合想建立一季 Podcast 內容的客戶",
    featured: true,
  },
  {
    name: "Podcast 內容庫存包",
    episodes: "20 集",
    price: "NT$35,800 起",
    note: "適合想長期排程或建立內容庫存的客戶",
    featured: false,
  },
];

const addOns = [
  ["講稿代寫 5 分鐘內", "+NT$1,500／集"],
  ["講稿代寫 10 分鐘內", "+NT$2,800／集"],
  ["講稿代寫 15 分鐘內", "+NT$4,000／集"],
  ["講稿代寫 20 分鐘內", "+NT$5,000／集"],
  ["雙人對話製作", "+NT$800／集"],
  ["多人對話製作", "+NT$1,500／集起"],
  ["片頭製作", "NT$1,500 起"],
  ["片尾製作", "NT$1,500 起"],
  ["片頭＋片尾套版", "NT$2,500 起"],
  ["增加上架平台", "+NT$800／平台／集"],
  ["Podcast 封面設計", "NT$3,000 起"],
  ["單集社群貼文", "NT$800／篇"],
  ["急件處理", "總價加收 30%"],
];

const processSteps = [
  "到 EasyShop 選擇方案與加購項目",
  "加入購物車並完成付款",
  "加入官方 LINE",
  "填寫製作表單",
  "上傳逐字稿、錄音檔、公司介紹或品牌資料",
  "選擇聲音形式與上架日期",
  "我們製作音檔並排程上架",
  "SoundOn 上架完成後，即視為交付完成",
];

const requiredMaterials = [
  "節目名稱",
  "節目簡介",
  "作者名稱或品牌名稱",
  "Podcast 專輯封面圖檔",
  "每集標題",
  "每集逐字稿",
  "公司介紹",
  "品牌介紹",
  "服務內容",
  "想傳達的重點",
  "自行錄製的聲音檔，若選擇使用自己的聲音",
  "希望選擇的專業音色方向",
  "希望上架日期或上架頻率",
  "SoundOn 帳號相關權限或必要上架資訊",
  "其他平台要求之必要資料",
];

const deliveryRules = [
  "基本包不提供音檔修改",
  "客戶提供之逐字稿須為最終版本",
  "若逐字稿有錯字、資料錯誤、名稱錯誤或語句不順，將依原稿製作",
  "若需潤稿、重寫、修正語氣、更換內容或重新製作，須另行加購",
  "音檔完成並上架 SoundOn 後，即視為本集交付完成",
  "平台審核、帳號權限、平台政策變更、平台下架、RSS 串接異常或第三方平台問題，非本服務交付保證範圍",
  "客戶資料提供延遲時，交付時間將順延",
  "講稿代寫服務提供 1 次文字修改",
  "講稿修改範圍以原主題與原方向內之調整為限，若更換主題、重寫架構、增加大量內容或變更集數，須另行報價",
];

const cases = [
  {
    role: "室內設計師",
    show: "裝修前你該知道的事",
    topics: ["裝修前為什麼不能只看價格", "統包和設計師差在哪", "老屋翻修最常見的追加費", "裝修合約一定要注意什麼", "怎麼跟設計師溝通需求"],
  },
  {
    role: "房仲",
    show: "第一次買房不踩雷",
    topics: ["第一次看房要注意什麼", "為什麼同社區價差那麼大", "預售屋付款流程怎麼看", "買房前要查哪些資料", "斡旋前要想清楚的事"],
  },
  {
    role: "顧問／講師",
    show: "老闆的內容行銷課",
    topics: ["為什麼專業人士需要內容行銷", "一篇文章怎麼變成 Podcast", "怎麼把常見問題變成節目", "內容不是越長越好", "先做 5 集比想一年更重要"],
  },
];

const faqs = [
  ["我沒有逐字稿，可以下單嗎？", "可以，但需加購講稿代寫服務。你可以提供公司介紹、品牌資料、服務內容或想傳達的重點，我們協助整理成 Podcast 講稿。"],
  ["我可以用自己的聲音嗎？", "可以。你可以提供自行錄製的聲音檔，我們協助進行基礎音檔整理與上架。若需要到場錄音或專業錄音室服務，須另行報價。"],
  ["我不想自己錄音，可以嗎？", "可以。你可以選擇專業音色代錄，例如沉穩男聲、親切女聲、專業女聲等。"],
  ["可以修改音檔嗎？", "基本包不提供音檔修改。若需更換文字、調整音色或重新製作，須另行報價。"],
  ["基本包會幫我上架到哪些平台？", "基本包包含 SoundOn 上架。若需協助串接或發布至其他 Podcast 平台，可另行加購。"],
  ["可以指定上架日期嗎？", "可以，客戶可選擇一次上架、每週上架、每兩週上架，或指定日期上架。"],
  ["平台審核沒有通過怎麼辦？", "平台審核、帳號權限、平台政策或第三方系統問題，非本服務交付保證範圍。"],
  ["Podcast 封面你會設計嗎？", "基本包不包含封面設計。客戶需自行提供專輯封面，若需封面設計可另行加購。"],
  ["可以做雙人對話嗎？", "可以，但雙人對話或多人對話屬於加購服務。"],
  ["講稿代寫可以修改嗎？", "講稿代寫服務提供 1 次文字修改。修改範圍以原主題與原方向內之調整為限。"],
];

function SectionIntro({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header" data-header>
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="brand-mark">P</span>
          <span>Podcast 聲音內容設計服務</span>
        </a>
        <button className="nav-toggle" type="button" data-nav-toggle aria-label="開啟導覽">
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-links" data-nav>
          <a href="#service">服務內容</a>
          <a href="#pricing">方案價格</a>
          <a href="#addons">加購項目</a>
          <a href="#process">流程</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href="#order">立即下單</a>
        </nav>
      </header>

      <main id="top">
        <section className="cover-section" aria-label="聲音內容製作所封面">
          <img
            src="/home-cover.png"
            alt="聲音內容製作所，Podcast 製作、聲音代錄、講稿撰寫、剪輯後製、上架發布"
          />
        </section>

        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">一站式 Podcast 製作服務</span>
            <h1>一站式 Podcast 製作服務</h1>
            <p className="hero-subtitle">你只要下單，我們協助完成企劃、講稿、錄製、剪輯、上架到發布。</p>
            <p>
              想做 Podcast，但不想自己買設備、錄音、剪輯、研究上架流程？我們可以協助你把公司介紹、品牌故事、專業知識、文章內容或逐字稿，整理成可以發布的 Podcast 節目。
            </p>
            <p>你可以選擇使用自己的聲音錄製，也可以選擇專業音色代錄。</p>
            <div className="button-row">
              <a className="button primary" href="#pricing">查看方案</a>
              <a className="button secondary" href="#line">加入官方 LINE 詢問</a>
            </div>
          </div>
          <div className="hero-card" aria-label="Podcast 製作流程">
            {["下單", "加入官方 LINE", "上傳資料", "選擇聲音", "製作音檔", "上架發布"].map((step, index) => (
              <div className="flow-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section muted">
          <SectionIntro title="你是不是也想做 Podcast，但一直卡在這些地方？" />
          <div className="card-grid three">
            {painPoints.map((item) => <article className="small-card" key={item}>{item}</article>)}
          </div>
          <p className="center-note">你不需要自己學完整套流程，只要選擇需要的服務，我們可以協助你一步一步完成。</p>
        </section>

        <section className="section" id="service">
          <SectionIntro
            eyebrow="服務定位"
            title="這不是單純代錄，而是幫你完成 Podcast 製作流程"
            text="本服務適合想經營 Podcast，但不想自己處理技術流程與內容整理的人。你可以只提供逐字稿，也可以提供公司介紹、品牌資料、課程內容或文章，由我們協助整理成講稿。"
          />
          <div className="card-grid three">
            <article className="feature-card"><span>01</span><h3>你有逐字稿</h3><p>我們協助聲音製作與上架。</p></article>
            <article className="feature-card"><span>02</span><h3>你只有主題或資料</h3><p>我們協助講稿代寫與內容整理。</p></article>
            <article className="feature-card"><span>03</span><h3>你不想自己錄音</h3><p>我們提供專業音色代錄。</p></article>
          </div>
        </section>

        <section className="section split muted">
          <SectionIntro title="誰適合這項服務？" text="適合需要穩定內容產出，但不想把時間花在錄音、剪輯與上架細節的專業人士與品牌。" />
          <div className="pill-list">
            {audience.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section">
          <SectionIntro title="你可以依照需求選擇製作方式" />
          <div className="card-grid two">
            <article className="method-card"><h3>A. 使用自己的聲音</h3><p>適合想建立個人品牌聲音辨識度的客戶。客戶可自行提供錄音檔，或依照我們提供的錄音建議完成錄製，再由我們進行後製整理。</p></article>
            <article className="method-card"><h3>B. 使用專業音色代錄</h3><p>如果你不想自己錄音，可以選擇專業音色，由我們依照講稿製作成 Podcast 音檔。</p></article>
            <article className="method-card"><h3>C. 自備逐字稿</h3><p>客戶提供已完成、可直接錄製的逐字稿，我們依照文字內容製作聲音音檔。</p></article>
            <article className="method-card"><h3>D. 加購講稿代寫</h3><p>如果你只有主題、公司介紹、品牌資料或重點內容，可以加購講稿代寫，由我們協助整理成適合 Podcast 收聽的口語講稿。</p></article>
          </div>
        </section>

        <section className="section muted">
          <SectionIntro title="基本包包含什麼？" text="基本包適合已經有逐字稿、內容方向明確，只需要協助製作音檔與上架的客戶。" />
          <div className="check-grid">
            {basicIncludes.map((item) => <div className="check-item" key={item}>{item}</div>)}
          </div>
        </section>

        <section className="section compact">
          <SectionIntro title="可選專業音色方向" text="實際音色依系統可支援項目為準。基本包以單人旁白為主，若需雙人對話、多人對話或情境式節目，須另行加購。" />
          <div className="voice-grid">
            {voiceOptions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section warning-section">
          <SectionIntro title="基本包不包含" />
          <div className="warning-box">
            {exclusions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section muted" id="pricing">
          <SectionIntro title="選擇適合你的 Podcast 製作方案" />
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured ? <span className="badge">推薦</span> : null}
                <h3>{plan.name}</h3>
                <p className="episodes">{plan.episodes}</p>
                <p className="limit">每集 5 分鐘內</p>
                <p className="price">{plan.price}</p>
                <p>{plan.note}</p>
                <p className="include">包含：專業音色代錄或客戶錄音後製、SoundOn 上架</p>
                <a className="button primary full" href="#order">前往 EasyShop 下單</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionIntro title="單集長度加購" />
          <div className="table-wrap">
            <table>
              <tbody>
                {[
                  ["5 分鐘內", "基本包包含"],
                  ["10 分鐘內", "+NT$800／集"],
                  ["15 分鐘內", "+NT$1,500／集"],
                  ["20 分鐘內", "+NT$2,200／集"],
                  ["超過 20 分鐘", "另行報價"],
                ].map(([label, value]) => (
                  <tr key={label}><th>{label}</th><td>{value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section muted" id="addons">
          <SectionIntro title="你可以依照需要加購服務" />
          <div className="addon-grid">
            {addOns.map(([label, price]) => <div className="addon-item" key={label}><span>{label}</span><strong>{price}</strong></div>)}
          </div>
        </section>

        <section className="section cart-section" id="order">
          <div className="cart-copy">
            <SectionIntro title="像購物一樣，選擇你需要的 Podcast 服務" text="本服務將導向 EasyShop 商品頁，客戶可以依需求選擇集數、單集長度、聲音形式、是否講稿代寫、雙人對話、片頭片尾、多平台上架、封面設計或社群貼文。" />
            <p>完成付款後，請加入官方 LINE，並依照表單上傳製作資料。我們會依照訂單內容與客戶提供資料進行製作。</p>
            <a className="button primary" href="#order">前往 EasyShop 選購服務</a>
          </div>
          <div className="cart-list">
            {["集數", "單集長度", "聲音形式", "講稿代寫", "雙人對話", "片頭片尾", "多平台上架", "封面或社群貼文"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section" id="process">
          <SectionIntro title="下單後怎麼進行？" />
          <ol className="timeline">
            {processSteps.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="section muted">
          <SectionIntro title="你下單後需要提供什麼？" text="依照你購買的方案不同，可能需要提供以下資料。" />
          <div className="materials-grid">
            {requiredMaterials.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className="fine-print">若客戶提供的是逐字稿，須為可直接錄製版本。若內容需重新整理、改寫、潤稿、口語化或補充內容，須加購講稿代寫或文案重寫服務。</p>
        </section>

        <section className="section warning-section">
          <SectionIntro title="交付與修改規則" />
          <div className="rules-box">
            {deliveryRules.map((item) => <p key={item}>{item}</p>)}
          </div>
        </section>

        <section className="section muted">
          <SectionIntro title="不同產業可以怎麼做 Podcast？" />
          <div className="card-grid three">
            {cases.map((item) => (
              <article className="case-card" key={item.role}>
                <span>{item.role}</span>
                <h3>{item.show}</h3>
                <ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <SectionIntro title="常見問題" />
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details className="faq-item" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section final-cta" id="line">
          <h2>準備讓你的品牌開始被聽見了嗎？</h2>
          <p>你不用從零學錄音、剪輯和上架。只要下單並提供資料，我們協助你把想法、文章、公司介紹或專業知識，變成可以發布的 Podcast。</p>
          <div className="button-row centered">
            <a className="button primary" href="#order">前往 EasyShop 下單</a>
            <a className="button secondary" href="#line">加入官方 LINE 詢問</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>Podcast 聲音內容設計服務</strong>
        <p>本服務為 Podcast 聲音內容設計、製作與上架協助服務。平台審核、帳號權限、平台政策變更或第三方平台問題，非本服務交付保證範圍。</p>
      </footer>
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
