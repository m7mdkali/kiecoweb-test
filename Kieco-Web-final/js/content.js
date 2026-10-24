/* =====================================================
   Kieco Exchange - content.js
   EDIT ALL TEXTS, LINKS AND LISTS IN THIS FILE.
   Each text has two versions:  en: "English"  and  ar: "Arabic"
   Change only the words between the quotes " ".
   Do not delete the quotes, the commas or the brackets.
   ===================================================== */

const KIECO = {

  /* ---------- 1. Company details (placeholders) ---------- */
  company: {
    name: { en: "Kieco Exchange", ar: "كيكو للصيرفه" },
    logo: "images/logo-brand.png",   // logo shown in the header (transparent background)
    mark: "KIECO",             // used in the slides when a slide has no picture
    markSub: "EXCHANGE",
    appLogo: "images/logo-header.png",   // logo shown in the app section only
    phone: "+965 2242 2699",
    whatsapp: "96560778287",   // digits only, with country code, no + and no spaces
    whatsappNumber: "+965 6077 8287",   // the same number, as it is shown on the page
    email: "info@kiecokw.com",
    founded: "1979",           // shown in the story block as "Our beginning"
    address: {
      en: "Cement house building, 4th Floor, opp: Assima mall, Building no:21, Block 6, Al Shuhada Street, Sharq, Kuwait",
      ar: "مبنى سيمنت هاوس، الطابق الرابع، مقابل مجمع الأسيمة، مبنى رقم 21، القطعة 6، شارع الشهداء، شرق، الكويت"
    },
    hours: { en: "Sunday to Thursday: 8:00 AM - 8:00 PM", ar: "الأحد إلى الخميس: 8:00 ص - 8:00 م" },
    licence: { en: "Licence No. 000", ar: "رقم الترخيص: 000" },
    branchCount: "--"          // put a number here, for example 25. It counts up on the page.
  },

  /* ---------- 2. Links (# means no link yet) ---------- */
  links: {
    register: "https://remit.kiecokw.com/",   // "Register now" opens the Kieco online remittance portal
    appStore: "https://apps.apple.com/us/app/kieco-exchange/id1440370697",
    playStore: "https://play.google.com/store/apps/details?id=com.kuwaitindiaexchange"
    // phone, email and WhatsApp links are built automatically from the company details
  },

  /* ---------- 3. Base currency for the ticker ---------- */
  baseCurrency: "KWD",

  /* ---------- 4. Menu ---------- */
  nav: [
    { label: { en: "Home", ar: "الرئيسية" }, href: "#top" },
    {
      label: { en: "Services", ar: "الخدمات" },
      href: "#services",
      children: [
        { label: { en: "Retail remittance", ar: "تحويلات الأفراد" }, href: "#services" },
        { label: { en: "Corporate remittance", ar: "تحويلات الشركات" }, href: "#services" },
        { label: { en: "Currency exchange", ar: "صرف العملات" }, href: "#rates" },
        { label: { en: "Foreign currency orders", ar: "طلبات العملات الأجنبية" }, href: "#rates" }
      ]
    },
    { label: { en: "Branches", ar: "الفروع" }, href: "#branches" },
    { label: { en: "What's New", ar: "الجديد" }, href: "#news" },
    { label: { en: "FAQs", ar: "الأسئلة الشائعة" }, href: "#faqs" },
    { label: { en: "About", ar: "من نحن" }, href: "#about" },
    { label: { en: "Contact", ar: "اتصل بنا" }, href: "#contact" }
  ],

  /* ---------- 5. Hero slides (4 slides). "art" is a drawing, "image" is a photo or banner file. ---------- */
  // Hero slider: photo slides ("image" is a file in images/) and one brand slide (kind: "brand"):
  // the animated gold Kieco logo beside the exchange services. The brand text is edited here.
  slides: [
    { image: "images/hero-1.jpg", alt: { en: "Instant transfers to Egypt", ar: "تحويلات فورية إلى مصر" } },
    {
      kind: "brand",
      eyebrow: { en: "Kieco Exchange · Kuwait", ar: "كيكو للصرافة · الكويت" },
      title: { en: "Send money. Exchange currency.", ar: "أرسل أموالك. اصرف عملاتك." },
      points: [
        { en: "Online transfers", ar: "تحويلات إلكترونية" },
        { en: "Foreign currency", ar: "العملات الأجنبية" },
        { en: "Branches across the country", ar: "فروع في كل المناطق" }
      ]
    },
    { image: "images/hero-3.jpg", alt: { en: "Secure their education abroad", ar: "استثمر في مستقبلهم" } }
  ],
  appPromo: {
    title: { en: "Send money from your phone", ar: "أرسل أموالك من جوالك" },
    text: { en: "Download the Kieco Exchange app to send money, track transfers and check rates anytime.", ar: "حمّل تطبيق كيكو للصرافة لإرسال الأموال ومتابعة التحويلات ومراجعة الأسعار في أي وقت." },
    points: [
      { en: "Send in a few taps", ar: "أرسل بنقرات قليلة" },
      { en: "Track every transfer", ar: "تابع كل تحويل" },
      { en: "Check rates anytime", ar: "راجع الأسعار في أي وقت" }
    ]
  },

  /* ---------- 7. Money transfer: the 10 country tiles (also used by the ticker) ----------
     Optional extras for any country (add them inside its brackets, only if you know them):
       commission: "2.5"                          shown as KWD 2.5 in the calculator
       delivery: { en: "1 minute", ar: "دقيقة واحدة" }
       best: true                                 shows the "Best rate" badge */
  rates: [
    { code: "USD", flag: "us", name: { en: "United States", ar: "الولايات المتحدة" }, rate: "3.2468" },
    { code: "AED", flag: "ae", name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" }, rate: "11.925" },
    { code: "QAR", flag: "qa", name: { en: "Qatar", ar: "قطر" }, rate: "11.818" },
    { code: "INR", flag: "in", name: { en: "India", ar: "الهند" }, rate: "306.28" },
    { code: "BDT", flag: "bd", name: { en: "Bangladesh", ar: "بنغلاديش" }, rate: "401.61" },
    { code: "PHP", flag: "ph", name: { en: "Philippines", ar: "الفلبين" }, rate: "205.93" },
    { code: "PKR", flag: "pk", name: { en: "Pakistan", ar: "باكستان" }, rate: "899.28" },
    { code: "LKR", flag: "lk", name: { en: "Sri Lanka", ar: "سريلانكا" }, rate: "1077.59" },
    { code: "NPR", flag: "np", name: { en: "Nepal", ar: "نيبال" }, rate: "489.96" },
    { code: "EGP", flag: "eg", name: { en: "Egypt", ar: "مصر" }, rate: "176.55" }
  ],

  /* ---------- 7b. More countries: only in the search list (scroll), not as tiles ---------- */
  moreRates: [
    { code: "SAR", flag: "sa", name: { en: "Saudi Arabia", ar: "السعودية" }, rate: "12.175" },
    { code: "BHD", flag: "bh", name: { en: "Bahrain", ar: "البحرين" }, rate: "1.2210" },
    { code: "OMR", flag: "om", name: { en: "Oman", ar: "عُمان" }, rate: "1.2484" },
    { code: "JOD", flag: "jo", name: { en: "Jordan", ar: "الأردن" }, rate: "2.3019" },
    { code: "IQD", flag: "iq", name: { en: "Iraq", ar: "العراق" }, rate: "4926.11" },
    { code: "YER", flag: "ye", name: { en: "Yemen", ar: "اليمن" }, rate: "766.28" },
    { code: "SDG", flag: "sd", name: { en: "Sudan", ar: "السودان" }, rate: "1451.38" },
    { code: "AFN", flag: "af", name: { en: "Afghanistan", ar: "أفغانستان" }, rate: "210.88" },
    { code: "TRY", flag: "tr", name: { en: "Turkey", ar: "تركيا" }, rate: "161.11" },
    { code: "MAD", flag: "ma", name: { en: "Morocco", ar: "المغرب" }, rate: "31.779" },
    { code: "TND", flag: "tn", name: { en: "Tunisia", ar: "تونس" }, rate: "9.7143" },
    { code: "DZD", flag: "dz", name: { en: "Algeria", ar: "الجزائر" }, rate: "436.87" },
    { code: "KES", flag: "ke", name: { en: "Kenya", ar: "كينيا" }, rate: "421.59" },
    { code: "NGN", flag: "ng", name: { en: "Nigeria", ar: "نيجيريا" }, rate: "4329.00" },
    { code: "ETB", flag: "et", name: { en: "Ethiopia", ar: "إثيوبيا" }, rate: "524.93" },
    { code: "GHS", flag: "gh", name: { en: "Ghana", ar: "غانا" }, rate: "37.662" },
    { code: "ZAR", flag: "za", name: { en: "South Africa", ar: "جنوب أفريقيا" }, rate: "53.245" },
    { code: "GBP", flag: "gb", name: { en: "United Kingdom", ar: "المملكة المتحدة" }, rate: "2.4231" },
    { code: "CAD", flag: "ca", name: { en: "Canada", ar: "كندا" }, rate: "4.5567" },
    { code: "AUD", flag: "au", name: { en: "Australia", ar: "أستراليا" }, rate: "4.6283" },
    { code: "NZD", flag: "nz", name: { en: "New Zealand", ar: "نيوزيلندا" }, rate: "5.7076" },
    { code: "EUR", flag: "de", name: { en: "Germany", ar: "ألمانيا" }, rate: "2.8875" },
    { code: "CHF", flag: "ch", name: { en: "Switzerland", ar: "سويسرا" }, rate: "2.6713" },
    { code: "RUB", flag: "ru", name: { en: "Russia", ar: "روسيا" }, rate: "265.46" },
    { code: "MYR", flag: "my", name: { en: "Malaysia", ar: "ماليزيا" }, rate: "13.254" },
    { code: "THB", flag: "th", name: { en: "Thailand", ar: "تايلاند" }, rate: "109.24" },
    { code: "CNY", flag: "cn", name: { en: "China", ar: "الصين" }, rate: "21.671" },
    { code: "JPY", flag: "jp", name: { en: "Japan", ar: "اليابان" }, rate: "512.03" },
    { code: "KRW", flag: "kr", name: { en: "South Korea", ar: "كوريا الجنوبية" }, rate: "4291.85" },
    { code: "SGD", flag: "sg", name: { en: "Singapore", ar: "سنغافورة" }, rate: "4.1464" }
  ],

  /* ---------- 8. Foreign currency calculator (second tab) ----------
     code, flag, name: the currency.
     rate: how many units of the currency you get for 1 KWD (for example "3.2468" for US dollars).
           Leave rate "" when it is not known yet: the currency then stays out of the list.
     Rates from the Central Bank of Kuwait (22.10.2026) are used where available. */
  // The 20 most important countries for the ticker (Jordan included). A rate shows when the rate file has it.
  tickerCountries: [
    { code: "INR", flag: "in", name: { en: "India", ar: "الهند" } },
    { code: "PKR", flag: "pk", name: { en: "Pakistan", ar: "باكستان" } },
    { code: "BDT", flag: "bd", name: { en: "Bangladesh", ar: "بنغلاديش" } },
    { code: "EGP", flag: "eg", name: { en: "Egypt", ar: "مصر" } },
    { code: "PHP", flag: "ph", name: { en: "Philippines", ar: "الفلبين" } },
    { code: "NPR", flag: "np", name: { en: "Nepal", ar: "نيبال" } },
    { code: "LKR", flag: "lk", name: { en: "Sri Lanka", ar: "سريلانكا" } },
    { code: "JOD", flag: "jo", name: { en: "Jordan", ar: "الأردن" } },
    { code: "SYP", flag: "sy", name: { en: "Syria", ar: "سوريا" } },
    { code: "LBP", flag: "lb", name: { en: "Lebanon", ar: "لبنان" } },
    { code: "IDR", flag: "id", name: { en: "Indonesia", ar: "إندونيسيا" } },
    { code: "USD", flag: "us", name: { en: "United States", ar: "الولايات المتحدة" } },
    { code: "GBP", flag: "gb", name: { en: "United Kingdom", ar: "المملكة المتحدة" } },
    { code: "CAD", flag: "ca", name: { en: "Canada", ar: "كندا" } },
    { code: "AUD", flag: "au", name: { en: "Australia", ar: "أستراليا" } },
    { code: "TRY", flag: "tr", name: { en: "Turkey", ar: "تركيا" } },
    { code: "SAR", flag: "sa", name: { en: "Saudi Arabia", ar: "السعودية" } },
    { code: "AED", flag: "ae", name: { en: "UAE", ar: "الإمارات" } },
    { code: "QAR", flag: "qa", name: { en: "Qatar", ar: "قطر" } },
    { code: "BHD", flag: "bh", name: { en: "Bahrain", ar: "البحرين" } }
  ],
  fxMargin: 0.01,   // buy and sell = the rate minus and plus this margin (1% is only an example: put the real margin here)
  fxRates: [
    { code: "KWD", flag: "kw", name: { en: "Kuwait", ar: "الكويت" }, rate: "" },
    { code: "USD", flag: "us", name: { en: "United States", ar: "الولايات المتحدة" }, rate: "3.2468" },
    { code: "EUR", flag: "eu", name: { en: "Euro", ar: "يورو" }, rate: "2.8875" },
    { code: "GBP", flag: "gb", name: { en: "British Pound", ar: "جنيه إسترليني" }, rate: "2.4231" },
    { code: "CHF", flag: "ch", name: { en: "Swiss Franc", ar: "فرنك سويسري" }, rate: "2.6713" },
    { code: "JPY", flag: "jp", name: { en: "Japanese Yen", ar: "ين ياباني" }, rate: "512.0328" },
    { code: "CAD", flag: "ca", name: { en: "Canadian Dollar", ar: "دولار كندي" }, rate: "4.5567" },
    { code: "AUD", flag: "au", name: { en: "Australian Dollar", ar: "دولار أسترالي" }, rate: "" },
    { code: "SAR", flag: "sa", name: { en: "Saudi Riyal", ar: "ريال سعودي" }, rate: "12.1754" },
    { code: "AED", flag: "ae", name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" }, rate: "11.9253" },
    { code: "QAR", flag: "qa", name: { en: "Qatar", ar: "قطر" }, rate: "11.8182" },
    { code: "BHD", flag: "bh", name: { en: "Bahraini Dinar", ar: "دينار بحريني" }, rate: "1.2210" },
    { code: "OMR", flag: "om", name: { en: "Omani Rial", ar: "ريال عماني" }, rate: "1.2484" },
    { code: "EGP", flag: "eg", name: { en: "Egypt", ar: "مصر" }, rate: "176.55" },
    { code: "INR", flag: "in", name: { en: "India", ar: "الهند" }, rate: "306.28" },
    { code: "PKR", flag: "pk", name: { en: "Pakistan", ar: "باكستان" }, rate: "899.28" },
    { code: "BDT", flag: "bd", name: { en: "Bangladesh", ar: "بنغلاديش" }, rate: "401.61" },
    { code: "LKR", flag: "lk", name: { en: "Sri Lanka", ar: "سريلانكا" }, rate: "1077.59" },
    { code: "NPR", flag: "np", name: { en: "Nepal", ar: "نيبال" }, rate: "489.96" },
    { code: "PHP", flag: "ph", name: { en: "Philippines", ar: "الفلبين" }, rate: "205.93" },
    { code: "JOD", flag: "jo", name: { en: "Jordan", ar: "الأردن" }, rate: "" },
    { code: "SGD", flag: "sg", name: { en: "Singapore Dollar", ar: "دولار سنغافوري" }, rate: "" },
    { code: "KRW", flag: "kr", name: { en: "South Korean Won", ar: "وون كوري" }, rate: "" },
    { code: "NZD", flag: "nz", name: { en: "New Zealand Dollar", ar: "دولار نيوزيلندي" }, rate: "" },
    { code: "HKD", flag: "hk", name: { en: "Hong Kong Dollar", ar: "دولار هونغ كونغ" }, rate: "" },
    { code: "CNY", flag: "cn", name: { en: "Chinese Yuan", ar: "يوان صيني" }, rate: "" },
    { code: "TRY", flag: "tr", name: { en: "Turkish Lira", ar: "ليرة تركية" }, rate: "" },
    { code: "THB", flag: "th", name: { en: "Thai Baht", ar: "بات تايلندي" }, rate: "" },
    { code: "MYR", flag: "my", name: { en: "Malaysian Ringgit", ar: "رينغيت ماليزي" }, rate: "" },
    { code: "ZAR", flag: "za", name: { en: "South African Rand", ar: "راند جنوب أفريقي" }, rate: "" },
    { code: "SEK", flag: "se", name: { en: "Swedish Krona", ar: "كرونة سويدية" }, rate: "" }
  ],

  /* ---------- 9. Kieco Exchange Experience (the first card is the big one) ---------- */
  experience: [
    {
      title: { en: "Branches across the country", ar: "فروع في كل المناطق" },
      text: { en: "Visit one of our branches or offsite kiosks and send money in person.", ar: "زر أحد فروعنا أو أكشاكنا الخارجية وأرسل أموالك شخصياً." }
    },
    {
      title: { en: "Online transfers", ar: "تحويلات إلكترونية" },
      text: { en: "Send money from your phone or computer in a few simple steps.", ar: "أرسل أموالك من هاتفك أو حاسوبك بخطوات بسيطة." }
    },
    {
      title: { en: "Foreign currency", ar: "العملات الأجنبية" },
      text: { en: "Buy and sell major currencies at indicative rates.", ar: "اشترِ وبِع العملات الرئيسية بأسعار استرشادية." }
    },
    {
      title: { en: "Corporate services", ar: "خدمات الشركات" },
      text: { en: "Remittance solutions designed for businesses.", ar: "حلول تحويل مصممة للشركات." }
    },
    {
      title: { en: "Friendly support", ar: "دعم ودود" },
      text: { en: "Our team is ready to help you at every step.", ar: "فريقنا جاهز لمساعدتك في كل خطوة." }
    }
  ],

  /* ---------- 10. How to remit online (3 steps) ---------- */
  remitSteps: [
    {
      title: { en: "Register", ar: "سجّل" },
      text: { en: "Create your account with your civil ID and mobile number.", ar: "أنشئ حسابك باستخدام البطاقة المدنية ورقم الجوال." }
    },
    {
      title: { en: "Enter the details", ar: "أدخل البيانات" },
      text: { en: "Choose the country, the amount and the beneficiary.", ar: "اختر الدولة والمبلغ والمستفيد." }
    },
    {
      title: { en: "Pay and track", ar: "ادفع وتابع" },
      text: { en: "Pay online and follow your transfer until it reaches the beneficiary.", ar: "ادفع إلكترونياً وتابع تحويلك حتى يصل إلى المستفيد." }
    }
  ],

  /* ---------- 11. Global alliances (partner names for now) ---------- */
  /* ---------- 11. Partners (logo strip). Put each logo in images/partners/ with this file name.
     Until a logo file is there, the partner's name is shown instead. ---------- */
  partners: [
    { name: "SBI", logo: "images/partners/sbi.png" },
    { name: "TransFast", logo: "images/partners/transfast.png" },
    { name: "Western Union", logo: "images/partners/western-union.png" },
    { name: "YES Bank", logo: "images/partners/yes-bank.png" },
    { name: "HDFC Bank", logo: "images/partners/hdfc-bank.png" },
    { name: "Bank of Ceylon", logo: "images/partners/bank-of-ceylon.png" },
    { name: "BDO Unibank", logo: "images/partners/bdo-unibank.png" },
    { name: "Himalayan Bank", logo: "images/partners/himalayan-bank.png" },
    { name: "Bank Asia", logo: "images/partners/bank-asia.png" },
    { name: "Banque du Caire", logo: "images/partners/banque-du-caire.png" },
    { name: "Metrobank", logo: "images/partners/metrobank.png" },
    { name: "Sampath Bank", logo: "images/partners/sampath-bank.png" },
    { name: "EzRemit", logo: "images/partners/ezremit.png" }
  ],

  /* ---------- 12. Locations (map, filter buttons and branch list) ----------
     areas: the filter buttons above the map. "key" must match the "area" of the branches.
     branches: one entry per branch on the map.
       lat, lng  = the two numbers in the Google Maps link (after !3d and !4d)
       area      = one of the keys in "areas" (not "all")
       hq        = true only for the head office (it gets the "Head office" label)
       address, hours = optional, leave { en: "", ar: "" } if not known
       open, close = optional, 24-hour times in Kuwait time, for example "08:00" and "20:00".
                     Leave them out if not known; then no "Open now" label is shown.
       phone     = optional, leave "" if not known
     To add a branch: copy one line inside branches and change the values.
     To remove a branch: delete its line. */
  areas: [
    { key: "all", en: "All", ar: "الكل" },
    { key: "capital", en: "Capital", ar: "العاصمة" },
    { key: "hawalli", en: "Hawalli", ar: "حولي" },
    { key: "ahmadi", en: "Ahmadi", ar: "الأحمدي" },
    { key: "jahra", en: "Jahra", ar: "الجهراء" }
  ],
  branches: [
    { name: { en: "Corporate Office", ar: "المكتب الرئيسي" }, area: "capital", lat: 29.3746908, lng: 47.9856261, hq: true, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" },
    { name: { en: "Safat Branch", ar: "فرع الصفاة" }, area: "capital", lat: 29.3677759, lng: 47.9768706, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" },
    { name: { en: "Hawally Branch", ar: "فرع حولي" }, area: "hawalli", lat: 29.332569, lng: 48.0272963, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" },
    { name: { en: "Salmiya Branch", ar: "فرع السالمية" }, area: "hawalli", lat: 29.3335428, lng: 48.0591325, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" },
    { name: { en: "Fahaheel Branch", ar: "فرع الفحيحيل" }, area: "ahmadi", lat: 29.0773803, lng: 48.1325925, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" },
    { name: { en: "Jahra Branch", ar: "فرع الجهراء" }, area: "jahra", lat: 29.3550659, lng: 47.6711442, address: { en: "", ar: "" }, hours: { en: "", ar: "" }, phone: "" }
  ],

  /* ---------- Leadership: the General Manager and the CEO. A person appears when a name is filled in. ---------- */
  leaders: [
    {
      initials: "NA",
      photo: "images/leaders/gm.jpg",
      linkedin: "https://kw.linkedin.com/in/nabil-al-najdi-27926542",   // the full LinkedIn profile link, for example "https://www.linkedin.com/in/name"
      name: { en: "Nabil Alnajdi", ar: "نبيل النجدي" },
      title: { en: "General Manager", ar: "المدير العام" },
      quote: { en: "Orchestrating high-volume foreign exchange operations with zero-compromise compliance, operational precision, and commercial excellence.", ar: "نقود عمليات صرف العملات بحجم كبير، بالتزام كامل بالامتثال، ودقة تشغيلية، وتميّز تجاري." }
    },
    {
      initials: "MA",
      photo: "images/leaders/ceo.jpg",
      linkedin: "https://kw.linkedin.com/in/mohammed-al-ateeqi-34750596",   // the full LinkedIn profile link, for example "https://www.linkedin.com/in/name"
      name: { en: "Mohammed Al Ateeqi", ar: "محمد العتيقي" },
      title: { en: "Chief Executive Officer", ar: "الرئيس التنفيذي" },
      quote: { en: "Spearheading market expansion, cross-border fintech disruption, and institutional trust in the foreign exchange ecosystem.", ar: "نقود مسيرة التوسع في الأسواق، وإحداث نقلة في التقنية المالية العابرة للحدود، وترسيخ الثقة المؤسسية في منظومة تبادل العملات الأجنبية." }
    }
  ],

  /* ---------- 13. Social media links ---------- */
  social: [
    { name: "Instagram", url: "https://www.instagram.com/kieco_kw/", icon: "ic-instagram" },
    { name: "X", url: "#", icon: "ic-x" },
    { name: "Facebook", url: "https://www.facebook.com/kiecokw/", icon: "ic-facebook" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/kieco1979", icon: "ic-linkedin" },
    { name: "TikTok", url: "https://www.tiktok.com/@kiecoexchange", icon: "ic-tiktok" }
  ],

  /* ---------- 14. All other texts ---------- */
  text: {
    skipLink: { en: "Skip to content", ar: "انتقل إلى المحتوى" },
    introWords: { en: "Fast. Affordable. Easy.", ar: "أسرع. أوفر. أسهل." },
    introPlace: { en: "Kuwait", ar: "الكويت" },
    langButton: { en: "العربية", ar: "English" },
    searchPlaceholder: { en: "Search the site", ar: "ابحث في الموقع" },
    searchAria: { en: "Search the site", ar: "ابحث في الموقع" },
    searchClear: { en: "Clear search", ar: "مسح البحث" },
    searchEmpty: { en: "No matches. Try another word.", ar: "لا توجد نتائج، جرّب كلمة أخرى." },
    searchHint: { en: "↑ ↓ to move · Enter to open · Esc to close", ar: "↑ ↓ للتنقل · Enter للفتح · Esc للإغلاق" },
    searchMenu: { en: "Menu", ar: "القائمة" },
    searchContact: { en: "Contact", ar: "تواصل معنا" },
    sendMoney: { en: "Send Money", ar: "إرسال أموال" },
    whatsappLabel: { en: "WhatsApp", ar: "واتساب" },
    topCall: { en: "Call us", ar: "اتصل بنا" },
    heroBadge: { en: "Send money online", ar: "أرسل أموالك إلكترونياً" },
    imagePlaceholder: { en: "Image placeholder", ar: "مكان الصورة" },

    rateTitle: { en: "Check the exchange rate", ar: "تحقق من سعر الصرف" },
    statsEyebrow: { en: "Kieco in numbers", ar: "كيكو بالأرقام" },
    statsTitleA: { en: "A familiar name.", ar: "اسمٌ مألوف." },
    statsTitleB: { en: "A world of care.", ar: "ورعايةٌ تصل إلى كل مكان." },
    statsText: { en: "Serving customers in Kuwait since 1979, with transfer options to 56 destinations and personal assistance at every branch.", ar: "نخدم عملاءنا في الكويت منذ 1979، مع خيارات تحويل إلى 56 وجهة ومساعدة شخصية في كل فرع." },
    stat1Label: { en: "Serving you since", ar: "نخدمكم منذ" },
    stat2Label: { en: "Branches in Kuwait", ar: "فرعاً في الكويت" },
    stat3Label: { en: "Transfer destinations", ar: "وجهة للتحويل" },
    stat4Label: { en: "Services offered", ar: "خدمات نقدمها" },
    statsGoRates: { en: "Check the exchange rate", ar: "تحقق من سعر الصرف" },
    leadersEyebrow: { en: "Leadership", ar: "القيادة" },
    leadersTitle: { en: "The people behind every transfer", ar: "الأشخاص الذين يقفون خلف كل تحويل" },
    rateIntro: { en: "Indicative rates for reference only. The final rate is confirmed at the time of the transaction.", ar: "الأسعار استرشادية للعلم فقط، ويتم تأكيد السعر النهائي وقت العملية." },
    tabTransfer: { en: "Money transfer", ar: "تحويل الأموال" },
    tabFx: { en: "Foreign currency", ar: "العملات الأجنبية" },
    rateSearchPlaceholder: { en: "Search for a country or currency", ar: "ابحث عن دولة أو عملة" },
    noResults: { en: "No country found", ar: "لا توجد دولة مطابقة" },
    calcFrom: { en: "Sending money from Kuwait to", ar: "إرسال أموال من الكويت إلى" },
    calcDest: { en: "Destination country", ar: "الدولة المستلمة" },
    calcSend: { en: "You send", ar: "أنت ترسل" },
    calcReceive: { en: "They receive", ar: "يستلم" },
    calcRate: { en: "Exchange rate", ar: "سعر الصرف" },
    calcDelivery: { en: "Delivery", ar: "التسليم" },
    calcDeliveryValue: { en: "To be confirmed", ar: "سيتم التأكيد" },
    calcCommission: { en: "Commission", ar: "العمولة" },
    calcCommissionValue: { en: "--", ar: "--" },
    calcBest: { en: "Best rate", ar: "أفضل سعر" },
    currencyUnit: { en: "KWD", ar: "دينار كويتي" },
    calcNote: { en: "Rates may be indicative and may change. The final rate is confirmed at the time of the transaction.", ar: "قد تكون الأسعار استرشادية وقد تتغير. يتم تأكيد السعر النهائي وقت العملية." },
    btnBack: { en: "Back", ar: "رجوع" },
    btnFaqs: { en: "FAQs", ar: "الأسئلة الشائعة" },
    btnRemit: { en: "Remit now", ar: "حوّل الآن" },
    selectLabel: { en: "Choose a currency", ar: "اختر العملة" },
    rateColCurrency: { en: "Currency", ar: "العملة" },
    rateColCode: { en: "Code", ar: "الرمز" },
    rateColRate: { en: "1 KWD =", ar: "1 دينار =" },
    fxLive: { en: "Live rates", ar: "أسعار مباشرة" },
    fxTitle: { en: "Foreign currencies", ar: "العملات الأجنبية" },
    fxCurrency: { en: "Currency", ar: "العملة" },
    fxAmount: { en: "Amount", ar: "المبلغ" },
    fxBuy: { en: "Buy", ar: "شراء" },
    fxSell: { en: "Sell", ar: "بيع" },
    fxBranch: { en: "Find a branch", ar: "ابحث عن فرع" },
    destLabel: { en: "Send money to", ar: "أرسل الأموال إلى" },
    destPlaceholder: { en: "Choose a country", ar: "اختر دولة" },
    fxOrder: { en: "Order currency now", ar: "اطلب العملة الآن" },
    fxColCurrency: { en: "Currency", ar: "العملة" },
    fxColBuy: { en: "Buy / 1,000", ar: "شراء / 1000" },
    fxColSell: { en: "Sell / 1,000", ar: "بيع / 1000" },
    fxSoon: { en: "Coming soon", ar: "قريباً" },
    fxBase: { en: "Base currency", ar: "العملة الأساسية" },
    fxBaseName: { en: "Kuwait", ar: "الكويت" },
    fxBuyShort: { en: "Buy", ar: "شراء" },
    fxSellShort: { en: "Sell", ar: "بيع" },
    fxShowAll: { en: "Show all currencies", ar: "عرض كل العملات" },
    fxSoon: { en: "Coming soon", ar: "قريباً" },
    fxBase: { en: "Base currency", ar: "العملة الأساسية" },
    rateSource: { en: "Source: irfanokr/currency-api, updated daily. Market rates, not the bank's buy or sell prices. Shown as units per 1 KWD.", ar: "المصدر: irfanokr/currency-api، يتحدث يومياً. أسعار سوق وليست أسعار شراء وبيع البنك. القيم وحدات مقابل الدينار الكويتي الواحد." },

    expTitle: { en: "The Kieco Exchange Experience", ar: "تجربة كيكو للصرافة" },
    expIntro: { en: "Simple, fast and convenient ways to send money and exchange currency.", ar: "طرق بسيطة وسريعة ومريحة لإرسال الأموال وصرف العملات." },
    branchCountLabel: { en: "Branches", ar: "فرعاً" },

    remitTitle: { en: "How to remit online", ar: "كيف تحوّل إلكترونياً" },
    registerText: { en: "Register now", ar: "سجّل الآن" },

    allianceTitle: { en: "Our global alliances", ar: "تحالفاتنا العالمية" },

    contactTitle: { en: "Contact us", ar: "اتصل بنا" },
    contactIntro: { en: "Send us your question and our team will get back to you.", ar: "أرسل لنا استفسارك وسيتواصل معك فريقنا." },
    formName: { en: "Your name", ar: "اسمك" },
    formEmail: { en: "Email address", ar: "البريد الإلكتروني" },
    formMobile: { en: "Mobile number", ar: "رقم الجوال" },
    formMessage: { en: "Your message", ar: "رسالتك" },
    formSubmit: { en: "Send message", ar: "إرسال الرسالة" },
    captchaText: { en: "I am not a robot", ar: "أنا لست روبوتاً" },
    cardOfficeTitle: { en: "Head office", ar: "المكتب الرئيسي" },
    cardCallTitle: { en: "Call us", ar: "اتصل بنا" },
    cardEmailTitle: { en: "Email us", ar: "راسلنا" },
    cardWhatsappTitle: { en: "WhatsApp", ar: "واتساب" },

    helpOpenText: { en: "Let us help you choose", ar: "دعنا نساعدك في الاختيار" },
    helpCloseText: { en: "Close", ar: "إغلاق" },
    helpEyebrow: { en: "Professional support", ar: "دعم احترافي" },
    helpTitle: { en: "Contact our team", ar: "تواصل مع فريقنا" },
    helpCallTeam: { en: "Call our team", ar: "اتصل بفريقنا" },
    helpChooseTitle: { en: "How can we help? Choose how to reach us.", ar: "كيف يمكننا مساعدتك؟ اختر الطريقة الأنسب للتواصل معنا." },
    helpCallLabel: { en: "Call", ar: "اتصال" },
    helpCallTitle: { en: "Let us talk.", ar: "دعنا نتحدث." },
    helpCallText: { en: "Speak directly with our team during working hours.", ar: "تحدّث مباشرة مع فريقنا خلال ساعات العمل." },
    helpWriteLabel: { en: "Write", ar: "مراسلة" },
    helpWriteTitle: { en: "Prepare an enquiry.", ar: "جهّز استفسارك." },
    helpWriteText: { en: "Tell us what you need and our team will get back to you.", ar: "أخبرنا بما تحتاجه وسيعاود فريقنا الاتصال بك." },
    helpWriteLink: { en: "Open the contact form", ar: "افتح نموذج التواصل" },
    helpVisitLabel: { en: "Visit", ar: "زيارة" },
    helpVisitTitle: { en: "A familiar face.", ar: "وجه مألوف." },
    helpVisitText: { en: "Cement House, Sharq, 4th floor.", ar: "مبنى سيمنت هاوس، الشرق، الطابق الرابع." },
    helpExplore: { en: "Explore our location", ar: "استكشف موقعنا" },
    helpHqTitle: { en: "Visit our head office.", ar: "زر مكتبنا الرئيسي." },
    helpHqText: { en: "We're here to assist you.", ar: "نحن هنا لمساعدتك." },

    storyKicker: { en: "Our beginning", ar: "بدايتنا" },
    storyTag: { en: "Built on your trust.", ar: "مبنية على ثقتكم." },
    storyEyebrow: { en: "A familiar name in Kuwait", ar: "اسم مألوف في الكويت" },
    storyTitle: { en: "Good service starts with knowing you.", ar: "الخدمة الجيدة تبدأ بمعرفتك." },
    storyText: { en: "Established in 1979 and regulated by the Central Bank of Kuwait, KIECO brings personal attention to remittance, foreign currency and corporate services.", ar: "تأسست كيكو عام 1979 وتخضع لرقابة بنك الكويت المركزي، وتقدم عناية شخصية في خدمات التحويل والعملات الأجنبية والخدمات للشركات." },
    storyDiscover: { en: "Discover our story", ar: "اكتشف قصتنا" },
    whyOpenText: { en: "Why choose KIECO", ar: "لماذا تختار كيكو" },
    whyEyebrow: { en: "The KIECO difference", ar: "ما يميز كيكو" },
    whyTitle: { en: "Service built around your needs.", ar: "خدمة مصممة حول احتياجاتك." },
    whyIntro: { en: "From everyday transfers to business payments, discover the support behind every KIECO service.", ar: "من التحويلات اليومية إلى مدفوعات الشركات، اكتشف الدعم وراء كل خدمة من خدمات كيكو." },
    why1Title: { en: "Personal support", ar: "دعم شخصي" },
    why1Text: { en: "Move money with confidence. Exchange with ease. With KIECO, every transaction is supported by trusted expertise and personal service at every branch.", ar: "حوّل أموالك بثقة، وصرّف بسهولة. مع كيكو، كل معاملة مدعومة بخبرة موثوقة وخدمة شخصية في كل فرع." },
    why2Title: { en: "Care in every transfer", ar: "عناية في كل حوالة" },
    why2Text: { en: "Every transfer is checked by our team before it is sent, so your money reaches the right person.", ar: "يدقق فريقنا كل حوالة قبل إرسالها، ليصل مالك إلى الشخص الصحيح." },
    why3Title: { en: "Reach family abroad", ar: "تواصل مع أهلك في الخارج" },
    why3Text: { en: "Send your money your way — to a bank account, card, mobile wallet, or cash pickup. We'll help you choose the right option for your destination, with a seamless and secure transfer experience.", ar: "أرسل أموالك بالطريقة التي تناسبك: إلى حساب بنكي أو بطاقة أو محفظة جوال أو استلام نقدي. نساعدك في اختيار الخيار المناسب لوجهتك، مع تجربة تحويل سلسة وآمنة." },
    why4Title: { en: "Licensed and regulated", ar: "مرخّصون ومنظّمون" },
    why4Text: { en: "Regulated by the highest financial authorities to safeguard every transaction with uncompromising security.", ar: "منظَّمون من قِبل أعلى الجهات المالية، لنحمي كل معاملة بأمان لا يقبل المساومة." },
    kwEyebrow: { en: "Serving Kuwait", ar: "نخدم الكويت" },
    kwTitle: { en: "Here for your future in Kuwait.", ar: "هنا من أجل مستقبلك في الكويت." },
    kwText: { en: "From our offices in the capital, Hawalli, Ahmadi and Jahra, KIECO serves residents and businesses across Kuwait with the same care every day.", ar: "من مكاتبنا في العاصمة وحولي والأحمدي والجهراء، تخدم كيكو المقيمين والشركات في الكويت بالعناية نفسها كل يوم." },
    kwStatBranches: { en: "Offices and branches", ar: "مكاتب وفروع" },
    kwStatDest: { en: "Transfer destinations", ar: "وجهات التحويل" },
    kwStatCurr: { en: "Currencies", ar: "عملات" },
    kwLocations: { en: "Explore our locations", ar: "استكشف فروعنا" },

    locTitle: { en: "Our locations", ar: "مواقعنا" },
    locIntro: { en: "Search by area or branch, or let us find the branch nearest to you.", ar: "ابحث بالمنطقة أو باسم الفرع، أو دعنا نجد لك أقرب فرع إليك." },
    locEyebrow: { en: "Find us", ar: "ابحث عنا" },
    locSearch: { en: "Search by area, branch or landmark", ar: "ابحث بالمنطقة أو اسم الفرع أو معلم قريب" },
    locNear: { en: "Near me", ar: "قربي" },
    locOpenNow: { en: "Open now", ar: "مفتوح الآن" },
    locListTitle: { en: "Our branches", ar: "فروعنا" },
    locViewAll: { en: "All locations", ar: "كل المواقع" },
    locGoogleMaps: { en: "Open in Google Maps", ar: "افتح في خرائط Google" },
    locEmpty: { en: "No branch matches your search. Try another area or clear the filters.", ar: "لا يوجد فرع يطابق بحثك، جرّب منطقة أخرى أو ألغِ الفلاتر." },
    locNoLocation: { en: "We could not read your location. Allow location access and try again.", ar: "تعذّر تحديد موقعك. اسمح بالوصول إلى الموقع ثم حاول مرة أخرى." },
    locSorted: { en: "Sorted by distance from you", ar: "مرتبة حسب المسافة منك" },
    locKm: { en: "km", ar: "كم" },
    locNoBranch: { en: "Choose a branch to see its address, opening hours and directions.", ar: "اختر فرعاً لعرض العنوان وساعات العمل والاتجاهات." },
    locAddress: { en: "Address", ar: "العنوان" },
    locHours: { en: "Opening hours", ar: "ساعات العمل" },
    locPhone: { en: "Phone", ar: "الهاتف" },
    locCall: { en: "Call", ar: "اتصل" },
    tabBranch: { en: "Branch", ar: "فرع" },
    tabKiosk: { en: "Offsite kiosk", ar: "كشك خارجي" },
    mapText: { en: "Map will be added here", ar: "ستتم إضافة الخريطة هنا" },
    mapDirections: { en: "Get directions", ar: "الحصول على الاتجاهات" },
    mapHeadTag: { en: "Head office", ar: "المكتب الرئيسي" },
    branchOpenNow: { en: "Open now", ar: "مفتوح الآن" },
    branchClosedNow: { en: "Closed now", ar: "مغلق الآن" },

    footerAbout: { en: "A short description of the company goes here.", ar: "وصف مختصر للشركة يوضع هنا." },
    footerQuick: { en: "Quick links", ar: "روابط سريعة" },
    footerSupport: { en: "Support", ar: "الدعم" },
    footerApp: { en: "Get the app", ar: "حمّل التطبيق" },
    appStoreText: { en: "App Store", ar: "App Store" },
    playStoreText: { en: "Google Play", ar: "Google Play" },
    footerNote: { en: "© 2026 Kieco Exchange. All rights reserved.", ar: "© 2026 كيكو للصرافة. جميع الحقوق محفوظة." }
  }
};

/* ===========================================================
   Below this line is the code that puts the texts on the page.
   You do not need to change anything below.
   =========================================================== */

(function () {
  "use strict";

  const K = KIECO;

  // Language: English by default, Arabic when the address ends with ?lang=ar
  const LANG = new URLSearchParams(window.location.search).get("lang") === "ar" ? "ar" : "en";
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";

  // Build the links from the company details
  K.links.tel = "tel:" + K.company.phone.replace(/\s+/g, "");
  K.links.mail = "mailto:" + K.company.email;
  K.links.whatsapp = "https://wa.me/" + K.company.whatsapp;
  // "Get directions" in the help panel goes to the head office (the branch marked hq)
  const hqBranch = K.branches.filter(function (b) { return b.hq; })[0];
  if (hqBranch) K.links.directions = "https://www.google.com/maps/dir/?api=1&destination=" + hqBranch.lat + "," + hqBranch.lng;

  // Rates come from a daily file of market rates: units of each currency per 1 KWD.
  // They are not the bank's buy or sell prices (buy and sell are worked out below from these).
  K.rateSource = "https://cdn.jsdelivr.net/gh/irfanokr/currency-api@main/v1/currencies/kwd.min.json";
  // Puts the rate on every currency. A currency missing from the file gets no rate and shows "coming soon".
  const applyRates = function (kwd) {
    [K.rates, K.moreRates, K.fxRates, K.tickerCountries].forEach(function (list) {
      list.forEach(function (r) {
        const v = kwd ? parseFloat(kwd[r.code.toLowerCase()]) : NaN;
        r.rate = v > 0 ? String(+v.toFixed(4)) : "";
      });
    });
  };
  // Waits for the rate file (at most 6 seconds), then the rate sections are drawn
  const loadRates = function () {
    const timeout = new Promise(function (resolve) { setTimeout(resolve, 6000); });
    const file = (typeof fetch === "function" ? fetch(K.rateSource, { cache: "no-store" }) : Promise.resolve(null))
      .then(function (res) { return res && res.ok ? res.json() : null; })
      .then(function (data) { return data && data.kwd ? data.kwd : null; })
      .catch(function () { return null; });
    return Promise.race([file, timeout]).then(function (kwd) { applyRates(kwd || null); });
  };

  // Helpers
  const t = function (value) {
    if (value && typeof value === "object") {
      return value[LANG] !== undefined ? value[LANG] : value.en;
    }
    return value;
  };
  const T = function (key) {
    return t(K.text[key]);
  };
  const esc = function (value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  const all = function (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  };
  const one = function (selector) {
    return document.querySelector(selector);
  };

  function renderNav() {
    const list = one("#nav-list");
    if (!list) return;
    list.innerHTML = K.nav.map(function (item) {
      if (!item.children) {
        return `<li><a href="${esc(item.href)}">${esc(t(item.label))}</a></li>`;
      }
      const subs = item.children.map(function (c) {
        return `<li><a href="${esc(c.href)}">${esc(t(c.label))}</a></li>`;
      }).join("");
      return `<li class="dropdown"><a href="${esc(item.href)}">${esc(t(item.label))}</a><ul class="submenu">${subs}</ul></li>`;
    }).join("");
  }

  // A slide with no photo: the animated gold Kieco logo beside the exchange services
  function brandSlideHtml(s) {
    const points = s.points.map(function (p) { return "<li>" + esc(t(p)) + "</li>"; }).join("");
    return `
        <div class="swiper-slide hero-slide hero-brand">
          <div class="hb-copy">
            <p class="hb-eyebrow">${esc(t(s.eyebrow))}</p>
            <p class="hb-title">${esc(t(s.title))}</p>
            <ul class="hb-points">${points}</ul>
          </div>
          <div class="hb-logo-wrap">
            <div class="logo-flip hb-logo">
              <img class="footer-logo" src="images/kieco-logo-gold.png" alt="Kieco Exchange" width="246" height="305">
              <img class="footer-logo footer-logo-back" src="images/kieco-logo-gold.png" alt="" aria-hidden="true" width="246" height="305">
            </div>
          </div>
        </div>`;
  }

  function renderSlides() {
    const wrap = one("#hero-slides");
    if (!wrap) return;
    wrap.innerHTML = K.slides.map(function (s, i) {
      if (s.kind === "brand") return brandSlideHtml(s);
      const priority = i === 0 ? ' fetchpriority="high"' : ' loading="lazy"';
      return `
        <div class="swiper-slide hero-slide" style="--hero-bg: url('${esc(s.image)}')">
          <img src="${esc(s.image)}" alt="${esc(t(s.alt))}"${priority}>
        </div>`;
    }).join("");
  }

  function flagImg(code) {
    if (!code) return "";
    return `<img class="flag" src="https://flagcdn.com/w80/${esc(code)}.png" alt="" width="32" height="22" loading="lazy">`;
  }

  /* ---------- Exchange rates: country tiles, calculator, and the foreign currency table ---------- */
  let calcRate = null;
  function showRates(kind) {
    const isFx = kind === "fx";
    const transferPane = one("#transfer-pane");
    const fxPane = one("#fx-pane");
    if (!transferPane || !fxPane) return;
    transferPane.hidden = isFx;
    fxPane.hidden = !isFx;
    const search = one("#rate-search");
    if (search) search.value = "";
    closeDropdown();
  }
  // Every destination in the search list (the tiles and the extra countries), A to Z
  function allDestinations() {
    return K.rates.concat(K.moreRates).filter(function (r) { return r.rate; }).sort(function (a, b) {
      return t(a.name).localeCompare(t(b.name));
    });
  }
  // Search box: opens the scrollable list of the tab you are on (countries on transfer, currencies on FX)
  function filterRates() { renderDropdown(); }
  function renderDropdown() {
    const panel = one("#rate-dropdown");
    const search = one("#rate-search");
    if (!panel || !search) return;
    const q = search.value.trim().toLowerCase();
    const isFx = !one("#fx-pane").hidden;
    const list = (isFx ? fxRateList() : allDestinations()).filter(function (r) {
      const text = (r.name.en + " " + r.name.ar + " " + r.code).toLowerCase();
      return text.indexOf(q) !== -1;
    });
    panel.innerHTML = list.length
      ? list.map(function (r) {
          return `<li><button class="dd-item" type="button" data-code="${esc(r.code)}">${flagImg(r.flag)}<span class="dd-name">${esc(t(r.name))}</span><span class="dd-code">${esc(r.code)}</span></button></li>`;
        }).join("")
      : `<li class="dd-empty">${esc(T("noResults"))}</li>`;
    panel.hidden = false;
  }
  function closeDropdown() {
    const panel = one("#rate-dropdown");
    if (panel) panel.hidden = true;
  }
  function markDestMenu(code) {
    all("#dest-menu .fx-opt").forEach(function (b) {
      const on = b.getAttribute("data-code") === code;
      b.classList.toggle("is-selected", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  }
  // the calculator is always on the page: choosing a country sets the receiving currency
  function openCalc(code) {
    const r = allDestinations().find(function (x) { return x.code === code; });
    if (!r) return;
    calcRate = r;
    setDest(false);
    markDestMenu(code);
    one("#dest-flag").innerHTML = flagImg(r.flag);
    one("#dest-code").textContent = r.code;
    one("#calc-send-flag").innerHTML = flagImg("kw");
    // the base-currency unit follows the language: "KWD" in English, "دينار" in Arabic
    const baseUnit = LANG === "ar" ? T("currencyUnit") : K.baseCurrency;
    one("#calc-send-unit").textContent = baseUnit;
    one("#calc-flow-from").innerHTML = flagImg("kw");
    one("#calc-flow-to").innerHTML = flagImg(r.flag);
    one("#calc-rate").textContent = "1 " + baseUnit + " = " + r.rate + " " + r.code;
    one("#calc-delivery").textContent = r.delivery ? t(r.delivery) : T("calcDeliveryValue");
    one("#calc-commission").textContent = r.commission
      ? (LANG === "ar" ? r.commission + " " + T("currencyUnit") : T("currencyUnit") + " " + r.commission)
      : T("calcCommissionValue");
    one("#calc-best").hidden = !r.best;
    updateCalc();
  }
  function closeCalc() {
    calcRate = null;
  }
  function updateCalc() {
    if (!calcRate) return;
    const input = one("#calc-send");
    const raw = parseFloat(String(input.value).replace(/,/g, ""));
    const amount = isNaN(raw) ? 0 : raw;
    const rate = parseFloat(calcRate.rate);
    const out = isNaN(rate) ? 0 : amount * rate;
    const recv = one("#calc-receive");
    recv.textContent = out.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // replay the small "bump" animation each time the amount changes
    recv.classList.remove("is-bump");
    void recv.offsetWidth;
    recv.classList.add("is-bump");
  }
  /* ---------- Foreign currency calculator (second tab) ---------- */
  function fxRateList() {
    return K.fxRates.filter(function (r) { return parseFloat(r.rate) > 0; });
  }
  function fxFormat(n) {
    return n.toLocaleString("en-US", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
  }
  /* ---------- Currency picker: a scrollable list with round flags; the hidden select stays the source ---------- */
  let fxMenuReady = false;
  function fxOptionHtml(r) {
    return '<li role="presentation"><button class="fx-opt" type="button" role="option" aria-selected="false" data-code="' + esc(r.code) + '">' +
      flagImg(r.flag) +
      '<span class="fx-opt-text"><b>' + esc(r.code) + "</b><span>" + esc(t(r.name)) + "</span></span></button></li>";
  }
  function setFxMenu(open) {
    const menu = one("#fx-menu");
    const trigger = one("#fx-trigger");
    const wrap = one("#fx-dd");
    if (!menu || !trigger) return;
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (wrap) wrap.classList.toggle("is-open", open);
    if (open) {
      const sel = menu.querySelector(".fx-opt.is-selected");
      if (sel) menu.scrollTop = sel.offsetTop - menu.clientHeight / 2 + sel.offsetHeight / 2;
    }
  }
  function markFxMenu(code) {
    all("#fx-menu .fx-opt").forEach(function (b) {
      const on = b.getAttribute("data-code") === code;
      b.classList.toggle("is-selected", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  }
  function chooseFx(code) {
    const select = one("#fx-select");
    if (!select) return;
    select.value = code;
    select.dispatchEvent(new Event("change"));   // updateFxCalc listens for this
    setFxMenu(false);
    const trigger = one("#fx-trigger");
    if (trigger) trigger.focus();
  }
  function initFxMenu() {
    if (fxMenuReady) return;
    const trigger = one("#fx-trigger");
    const menu = one("#fx-menu");
    if (!trigger || !menu) return;
    fxMenuReady = true;
    trigger.addEventListener("click", function () { setFxMenu(menu.hidden); });
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFxMenu(true);
        const first = menu.querySelector(".fx-opt.is-selected") || menu.querySelector(".fx-opt");
        if (first) first.focus();
      }
    });
    menu.addEventListener("click", function (e) {
      const b = e.target.closest(".fx-opt");
      if (b) chooseFx(b.getAttribute("data-code"));
    });
    menu.addEventListener("keydown", function (e) {
      const items = Array.prototype.slice.call(menu.querySelectorAll(".fx-opt"));
      const i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown" && i < items.length - 1) { e.preventDefault(); items[i + 1].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (i > 0) items[i - 1].focus(); else trigger.focus(); }
      else if (e.key === "Escape") { e.preventDefault(); setFxMenu(false); trigger.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !e.target.closest("#fx-dd")) setFxMenu(false);
    });
  }
  function renderFxCalc() {
    const select = one("#fx-select");
    if (!select) return;
    select.innerHTML = fxRateList().map(function (r) {
      return '<option value="' + esc(r.code) + '">KWD/' + esc(r.code) + " - " + esc(t(r.name)) + "</option>";
    }).join("");
    select.addEventListener("change", updateFxCalc);
    // open on USD, the pair people look for first (the base currency KWD is not a pair to convert)
    if (select.querySelector('option[value="USD"]')) select.value = "USD";
    const amount = one("#fx-amount");
    if (amount) amount.addEventListener("input", updateFxCalc);
    const menu = one("#fx-menu");
    if (menu) menu.innerHTML = fxRateList().map(fxOptionHtml).join("");
    initFxMenu();
    updateFxCalc();
  }
  function updateFxCalc() {
    const select = one("#fx-select");
    const r = K.fxRates.find(function (x) { return x.code === (select ? select.value : ""); });
    if (!r) return;
    const raw = parseFloat(String(one("#fx-amount").value).replace(/,/g, ""));
    const amount = isNaN(raw) ? 0 : raw;
    const rate = parseFloat(r.rate);
    const unit = LANG === "ar" ? T("currencyUnit") : K.baseCurrency;
    // buy: the bank buys the currency from the customer, sell: the bank sells it to the customer
    const kwdBuy = amount / (rate * (1 + K.fxMargin));
    const kwdSell = amount / (rate * (1 - K.fxMargin));
    one("#fx-flag").innerHTML = flagImg(r.flag);
    const name = one("#fx-name");
    if (name) name.innerHTML = "<b>" + esc(r.code) + "</b><span>" + esc(t(r.name)) + "</span>";
    markFxMenu(r.code);
    one("#fx-code").textContent = r.code;
    one("#fx-buy").innerHTML = fxFormat(kwdBuy) + " <small>" + unit + "</small>";
    one("#fx-sell").innerHTML = fxFormat(kwdSell) + " <small>" + unit + "</small>";
  }
  /* ---------- Transfer: a scrollable list of countries with flags; choosing one opens the calculator ---------- */
  let destReady = false;
  function setDest(open) {
    const menu = one("#dest-menu");
    const trigger = one("#dest-trigger");
    const wrap = one("#dest-dd");
    if (!menu || !trigger) return;
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    if (wrap) wrap.classList.toggle("is-open", open);
  }
  function renderDestMenu() {
    const menu = one("#dest-menu");
    // every country with a rate, in alphabetical order
    if (menu) menu.innerHTML = allDestinations().map(fxOptionHtml).join("");
    markDestMenu(calcRate ? calcRate.code : "");
  }
  function initDest() {
    if (destReady) return;
    const trigger = one("#dest-trigger");
    const menu = one("#dest-menu");
    if (!trigger || !menu) return;
    destReady = true;
    trigger.addEventListener("click", function () { setDest(menu.hidden); });
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setDest(true);
        const first = menu.querySelector(".fx-opt");
        if (first) first.focus();
      }
    });
    menu.addEventListener("click", function (e) {
      const b = e.target.closest(".fx-opt");
      if (!b) return;
      setDest(false);
      openCalc(b.getAttribute("data-code"));
    });
    menu.addEventListener("keydown", function (e) {
      const items = Array.prototype.slice.call(menu.querySelectorAll(".fx-opt"));
      const i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown" && i < items.length - 1) { e.preventDefault(); items[i + 1].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (i > 0) items[i - 1].focus(); else trigger.focus(); }
      else if (e.key === "Escape") { e.preventDefault(); setDest(false); trigger.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !e.target.closest("#dest-dd")) setDest(false);
    });
  }

  function renderRates() {
    if (!one("#dest-dd")) return;
    initDest();
    renderDestMenu();
    openCalc("USD");
    renderFxCalc();
    const back = one("#calc-back");
    if (back) back.addEventListener("click", closeCalc);
    const send = one("#calc-send");
    if (send) send.addEventListener("input", updateCalc);
    const search = one("#rate-search");
    if (search) {
      search.addEventListener("input", filterRates);
      search.addEventListener("focus", renderDropdown);
      search.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDropdown(); });
    }
    const dropdown = one("#rate-dropdown");
    if (dropdown) {
      dropdown.addEventListener("click", function (e) {
        const item = e.target.closest(".dd-item");
        if (!item) return;
        const box = one("#rate-search");
        if (box) box.value = "";
        closeDropdown();
        const code = item.getAttribute("data-code");
        if (!one("#fx-pane").hidden) chooseFx(code); else openCalc(code);
      });
    }
    // click anywhere outside the search box closes the list
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".rate-search")) closeDropdown();
    });

    // Tab 1 = money transfer (countries), tab 2 = foreign currency
    all(".rate-check .tab").forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        if (index === 0) closeCalc();
        showRates(index === 1 ? "fx" : "transfer");
      });
    });
  }

  function renderTicker() {
    const track = one("#ticker-track");
    if (!track) return;
    const once = K.tickerCountries.map(function (r, i) {
      const text = r.rate
        ? `1 ${esc(K.baseCurrency)} = <b>${esc(r.rate)}</b> <i>${esc(r.code)}</i>`
        : `<i>${esc(r.code)}</i> <span class="ticker-soon">${esc(T("fxSoon"))}</span>`;
      return `<div class="ticker-item" style="--i:${i}"><span class="tk-flag" style="--i:${i}">${flagImg(r.flag)}</span><span class="ticker-text">${text}</span></div>`;
    }).join("");
    // the list is written twice so the loop can wrap around without a gap
    track.innerHTML = once + once;
  }

  function renderExperience() {
    const grid = one("#exp-grid");
    if (!grid) return;
    grid.innerHTML = K.experience.map(function (item, index) {
      if (index !== 0) {
        return `
          <article class="exp-card exp-art-${index}" aria-label="${esc(t(item.title))}">
            <h3 style="visibility:hidden;">${esc(t(item.title))}</h3>
            <p style="visibility:hidden;">${esc(t(item.text))}</p>
          </article>`;
      }
      const branches = String(K.company.branchCount || "").trim();
      const hasBranches = branches !== "" && branches !== "--";
      const branchBlock = `
          <p style="margin-top:16px;${hasBranches ? "" : "visibility:hidden;"}">
            <span ${hasBranches ? "data-branch-count " : ""}style="font-size:48px;font-weight:700;color:#fff;">${esc(hasBranches ? branches : "--")}</span>
            <span style="display:block;color:#D6E6F5;">${esc(T("branchCountLabel"))}</span>
          </p>
          <div class="route-map" style="border:0;background:transparent;"></div>`;
      return `
        <article class="exp-card exp-large" aria-label="${esc(t(item.title))}">
          <h3 style="visibility:hidden;">${esc(t(item.title))}</h3>
          <p style="visibility:hidden;">${esc(t(item.text))}</p>
          ${branchBlock}
        </article>`;
    }).join("");
  }

  function renderSteps() {
    const list = one("#steps");
    if (!list) return;
    list.innerHTML = K.remitSteps.map(function (s, i) {
      if (i === 0 || i === 1 || i === 2) {
        // steps 2 and 3 show the image card; its own number badge is part of the picture
        return `
        <li class="step step-art-${i + 1}" aria-label="${esc(t(s.title))}">
          <span class="step-no" style="visibility:hidden;">${i + 1}</span>
          <h3 style="visibility:hidden;">${esc(t(s.title))}</h3>
          <p style="visibility:hidden;">${esc(t(s.text))}</p>
        </li>`;
      }
      return `
        <li class="step">
          <span class="step-no">${i + 1}</span>
          <h3>${esc(t(s.title))}</h3>
          <p>${esc(t(s.text))}</p>
        </li>`;
    }).join("");
  }

  function renderPartners() {
    const track = one("#partner-track");
    if (!track) return;
    const once = K.partners.map(function (p) {
      return `<span class="partner"><img src="${esc(p.logo)}" alt="${esc(p.name)}"></span>`;
    }).join("");
    // two copies of the list: the strip moves by exactly one copy and starts again
    track.innerHTML = once + once;
    // no logo file for this partner yet: remove its empty box, so only partners with a logo are shown
    all("#partner-track .partner img").forEach(function (img) {
      img.addEventListener("error", function () {
        const box = img.closest(".partner");
        if (box) box.remove();
      });
    });
  }

  /* ---------- Head office map: the real map of the head office, shown in the "Visit our head office" card ---------- */
  function renderHqMap() {
    const frame = one("#hq-map");
    if (!frame) return;
    const hq = K.branches.filter(function (b) { return b.hq; })[0];
    if (!hq || typeof hq.lat !== "number" || typeof hq.lng !== "number") return;
    const where = hq.lat + "," + hq.lng;
    frame.setAttribute("src", "https://maps.google.com/maps?q=" + where + "&z=16&hl=" + LANG + "&output=embed");
    const link = one("#hq-map-link");
    if (link) link.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=" + where);
  }

  /* ---------- Branches: a search, area chips, "near me", a branch list, a live map and the details of the chosen branch ---------- */
  const LOC = { area: "all", query: "", openOnly: false, userPos: null, selected: null, overview: false, visible: [] };
  const reduceMotionLocal = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LOC_MAP_BASE = "https://maps.google.com/maps?hl=" + LANG + "&output=embed";
  const LOC_PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  const LOC_CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const LOC_PHONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';
  const LOC_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function locAreaName(b) {
    const area = K.areas.find(function (a) { return a.key === b.area; });
    return area ? t(area) : "";
  }

  // Kilometres from the visitor (after "Near me"), or null
  function locDistance(b) {
    if (!LOC.userPos || typeof b.lat !== "number" || typeof b.lng !== "number") return null;
    const R = 6371;
    const rad = function (d) { return d * Math.PI / 180; };
    const dLat = rad(b.lat - LOC.userPos.lat);
    const dLng = rad(b.lng - LOC.userPos.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(LOC.userPos.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  // Opening times: the two numbers "open" and "close" (24-hour, Kuwait time)
  function toMinutes(text) {
    const parts = String(text).split(":");
    return Number(parts[0]) * 60 + Number(parts[1]);
  }
  // Is the branch open right now? null when the times are not filled in
  function branchOpenNow(b) {
    if (!b.open || !b.close) return null;
    const clock = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kuwait", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
    const now = toMinutes(clock);
    const from = toMinutes(b.open);
    const to = toMinutes(b.close);
    return from <= to ? (now >= from && now < to) : (now >= from || now < to);
  }
  function branchStatusHtml(b) {
    const open = branchOpenNow(b);
    if (open === null) return "";
    return '<span class="branch-status ' + (open ? "is-open" : "is-closed") + '">' + esc(T(open ? "branchOpenNow" : "branchClosedNow")) + "</span>";
  }

  function locTime(hhmm) {
    const parts = String(hhmm).split(":");
    const d = new Date(2000, 0, 1, Number(parts[0]), Number(parts[1]));
    return d.toLocaleTimeString(LANG === "ar" ? "ar-KW" : "en-US", { hour: "numeric", minute: "2-digit" });
  }
  // The written hours if they are filled in, otherwise the open and close times
  function locHours(b) {
    const text = b.hours ? t(b.hours) : "";
    if (text) return text;
    if (b.open && b.close) return locTime(b.open) + " – " + locTime(b.close);
    return "";
  }

  function locMatches(b) {
    if (LOC.area !== "all" && b.area !== LOC.area) return false;
    if (LOC.openOnly && branchOpenNow(b) !== true) return false;
    if (LOC.query) {
      const text = [t(b.name), t(b.address || {}), locAreaName(b)].join(" ").toLowerCase();
      if (text.indexOf(LOC.query) === -1) return false;
    }
    return true;
  }

  function locMapSrc(b) {
    if (!b) return LOC_MAP_BASE + "&q=Kuwait&z=10";
    return LOC_MAP_BASE + "&q=" + b.lat + "," + b.lng + "&z=15";
  }

  // The map follows the chosen branch; it shows all of Kuwait when no branch is chosen
  function setLocMap() {
    const frame = one("#loc-frame");
    if (!frame) return;
    const b = LOC.selected !== null ? K.branches[LOC.selected] : null;
    const link = one("#loc-gmaps");
    if (link) {
      link.setAttribute("href", b
        ? "https://www.google.com/maps/search/?api=1&query=" + b.lat + "," + b.lng
        : "https://www.google.com/maps/search/?api=1&query=Kieco+Exchange+Kuwait");
    }
    const src = locMapSrc(b);
    if (frame.getAttribute("src") === src) return;
    const box = one("#loc-map");
    if (box) box.classList.add("is-loading");
    frame.setAttribute("src", src);
  }

  function renderLocList() {
    const list = one("#branchList");
    if (!list) return;
    const count = one("#loc-count");
    if (count) count.textContent = LOC.visible.length + " " + T("branchCountLabel");
    const empty = one("#loc-empty");
    if (empty) empty.hidden = LOC.visible.length > 0;
    list.innerHTML = LOC.visible.map(function (i, n) {
      const b = K.branches[i];
      const active = i === LOC.selected;
      const addr = t(b.address || {});
      const status = branchStatusHtml(b);
      const dist = locDistance(b);
      const meta = (status || dist !== null)
        ? '<span class="bc-meta">' + status + (dist !== null ? '<span class="bc-dist">' + dist.toFixed(1) + " " + esc(T("locKm")) + "</span>" : "") + "</span>"
        : "";
      return '<button class="branch-card' + (active ? " is-active" : "") + '" type="button" data-index="' + i + '" aria-pressed="' + (active ? "true" : "false") + '">' +
        '<span class="bc-num">' + String(n + 1).padStart(2, "0") + "</span>" +
        '<span class="bc-body">' +
          '<span class="bc-area">' + esc(b.hq ? t(K.text.mapHeadTag) : locAreaName(b)) + "</span>" +
          '<span class="bc-name">' + esc(t(b.name)) + "</span>" +
          (addr ? '<span class="bc-addr">' + esc(addr) + "</span>" : "") +
          meta +
        "</span>" +
        '<span class="bc-arrow">' + LOC_ARROW + "</span>" +
        "</button>";
    }).join("");
  }

  function renderLocDetail() {
    const box = one("#loc-detail");
    if (!box) return;
    const i = LOC.selected;
    if (i === null || !K.branches[i]) {
      box.innerHTML = '<div class="ld-empty">' + LOC_PIN + "<p>" + esc(T("locNoBranch")) + "</p></div>";
      return;
    }
    const b = K.branches[i];
    const addr = t(b.address || {});
    const hours = locHours(b);
    const phone = b.phone ? String(b.phone) : "";
    const tel = "tel:" + phone.replace(/\s+/g, "");
    const directions = "https://www.google.com/maps/dir/?api=1&destination=" + b.lat + "," + b.lng;
    box.innerHTML =
      '<div class="ld-head">' +
        "<div>" +
          '<span class="ld-area">' + esc(b.hq ? t(K.text.mapHeadTag) : locAreaName(b)) + "</span>" +
          '<h3 class="ld-name">' + esc(t(b.name)) + "</h3>" +
        "</div>" +
        branchStatusHtml(b) +
      "</div>" +
      '<ul class="ld-info">' +
        (addr ? '<li><span class="ld-ico">' + LOC_PIN + "</span><span><small>" + esc(T("locAddress")) + "</small>" + esc(addr) + "</span></li>" : "") +
        (hours ? '<li><span class="ld-ico">' + LOC_CLOCK + "</span><span><small>" + esc(T("locHours")) + "</small>" + esc(hours) + "</span></li>" : "") +
        (phone ? '<li><span class="ld-ico">' + LOC_PHONE + "</span><span><small>" + esc(T("locPhone")) + '</small><a href="' + esc(tel) + '">' + esc(phone) + "</a></span></li>" : "") +
      "</ul>" +
      '<div class="ld-actions">' +
        '<a class="ld-btn is-primary" href="' + esc(directions) + '" target="_blank" rel="noopener"><span>' + esc(T("mapDirections")) + "</span>" + LOC_ARROW + "</a>" +
        (phone ? '<a class="ld-btn" href="' + esc(tel) + '">' + LOC_PHONE + "<span>" + esc(T("locCall")) + "</span></a>" : "") +
      "</div>";
  }

  // Recalculate the list from the filters, keep the chosen branch when it is still shown
  function applyLocFilters() {
    LOC.visible = [];
    K.branches.forEach(function (b, i) { if (locMatches(b)) LOC.visible.push(i); });
    if (LOC.userPos) {
      LOC.visible.sort(function (x, y) { return (locDistance(K.branches[x]) || 0) - (locDistance(K.branches[y]) || 0); });
    }
    if (!LOC.overview && (LOC.selected === null || LOC.visible.indexOf(LOC.selected) === -1)) {
      LOC.selected = LOC.visible.length ? LOC.visible[0] : null;
    }
    renderLocList();
    renderLocDetail();
    setLocMap();
  }

  function selectLoc(i) {
    LOC.overview = false;
    LOC.selected = i;
    renderLocList();
    renderLocDetail();
    setLocMap();
  }

  function locNearMe() {
    const hint = one("#loc-hint");
    const say = function (text) { if (hint) { hint.textContent = text; hint.hidden = !text; } };
    const near = one("#loc-near");
    if (!navigator.geolocation) { say(T("locNoLocation")); return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      LOC.userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      LOC.overview = false;
      LOC.selected = null;
      if (near) near.classList.add("is-on");
      applyLocFilters();   // sorted by distance, the nearest is chosen
      say(T("locSorted"));
    }, function () {
      say(T("locNoLocation"));
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 });
  }

  function renderLocations() {
    const list = one("#branchList");
    if (!list || !K.branches || !K.branches.length) return;

    // Area chips
    const chipBox = one("#chips");
    if (chipBox) {
      chipBox.innerHTML = K.areas.map(function (a) {
        return `<button class="chip${a.key === "all" ? " active" : ""}" type="button" data-area="${esc(a.key)}">${esc(t(a))}</button>`;
      }).join("");
      chipBox.addEventListener("click", function (e) {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        LOC.area = btn.getAttribute("data-area");
        all("#chips .chip").forEach(function (c) { c.classList.toggle("active", c === btn); });
        applyLocFilters();
      });
    }

    // Search, "open now", "near me"
    const search = one("#loc-search");
    if (search) {
      search.addEventListener("input", function () {
        LOC.query = search.value.trim().toLowerCase();
        applyLocFilters();
      });
    }
    const openToggle = one("#loc-open");
    if (openToggle) {
      openToggle.addEventListener("change", function () {
        LOC.openOnly = openToggle.checked;
        applyLocFilters();
      });
    }
    const near = one("#loc-near");
    if (near) near.addEventListener("click", locNearMe);

    // Clicking a branch card shows it on the map and in the detail card
    list.addEventListener("click", function (e) {
      const card = e.target.closest(".branch-card");
      if (!card) return;
      selectLoc(Number(card.getAttribute("data-index")));
      if (window.matchMedia("(max-width: 960px)").matches) {
        const map = one("#loc-map");
        if (map) map.scrollIntoView({ behavior: reduceMotionLocal ? "auto" : "smooth", block: "center" });
      }
    });

    // "All locations": the whole of Kuwait on the map, no branch chosen
    const allBtn = one("#loc-all");
    if (allBtn) {
      allBtn.addEventListener("click", function () {
        LOC.overview = true;
        LOC.selected = null;
        renderLocList();
        renderLocDetail();
        setLocMap();
      });
    }

    // The map loses its shimmer when it has loaded (or after a few seconds if it does not report)
    const frame = one("#loc-frame");
    const mapBox = one("#loc-map");
    if (frame && mapBox) {
      const done = function () { mapBox.classList.remove("is-loading"); };
      frame.addEventListener("load", done);
      frame.addEventListener("error", done);
      setTimeout(done, 6000);
    }

    applyLocFilters();   // the first branch is chosen at the start
  }

  /* ---------- Numbers section: each digit rolls into place and settles on its number ---------- */
  function initPulseStats() {
    const section = one("#stats");
    if (!section) return;
    section.querySelectorAll(".ps-num").forEach(function (num) {
      const value = String(num.getAttribute("data-value") || "");
      num.setAttribute("aria-label", value);
      num.innerHTML = Array.from(value).map(function (ch, i) {
        const lines = "0123456789".split("").map(function (d) { return "<i>" + d + "</i>"; }).join("");
        return '<span class="ps-w"><span class="ps-s" style="--t:' + esc(ch) + ';--dl:' + (i * 0.14).toFixed(2) + 's">' + lines + '</span></span>';
      }).join("");
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = function () {
      section.querySelectorAll(".ps-tile").forEach(function (tile) { tile.classList.add("is-in"); });
    };
    if (reduce) {
      section.classList.add("is-static");
      show();
      return;
    }
    section.classList.add("is-armed");
    if (!("IntersectionObserver" in window)) { show(); return; }
    const io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        show();
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(section);
  }

  /* ---------- Leadership cards: each one rises into place as it comes on screen ---------- */
  function renderLeaders() {
    const grid = one("#leaders-grid");
    if (!grid) return;
    const list = K.leaders.filter(function (p) { return p.name && p.name.en; });
    grid.innerHTML = list.map(function (p, i) {
      const media = p.photo
        ? `<img src="${esc(p.photo)}" alt="${esc(t(p.name))}" loading="lazy" width="150" height="150">`
        : `<span class="lead-initials" aria-hidden="true">${esc(p.initials)}</span>`;
      return `<div class="lead-tile" style="--d:${i}">
          <article class="lead-card">
            <span class="lead-quote-mark" aria-hidden="true">&ldquo;</span>
            <div class="lead-photo">${media}<span class="lead-ring" aria-hidden="true"></span></div>
            <p class="lead-quote">${esc(t(p.quote))}</p>
            <h3 class="lead-name">${esc(t(p.name))}</h3>
            <p class="lead-title">${esc(t(p.title))}</p>
            ${p.linkedin ? `<a class="lead-linkedin" href="${esc(p.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn: ${esc(t(p.name))}"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-linkedin"/></svg></a>` : ""}
          </article>
        </div>`;
    }).join("");
    const section = one("#leaders");
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = function () { grid.querySelectorAll(".lead-tile").forEach(function (el) { el.classList.add("is-in"); }); };
    if (reduce || !("IntersectionObserver" in window)) { show(); return; }
    section.classList.add("is-armed");
    const io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { show(); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(section);
  }

  /* ---------- World map of transfers (item 03): country names are glass chips that float over the picture ---------- */
  // box = [left, top, right, bottom] on the 1400 x 782 picture; each chip covers the printed label
  const TRANSFER_MAP = [
    { code: "kw", name: { en: "Kuwait", ar: "الكويت" }, box: [583, 51, 838, 180] },
    { code: "eg", name: { en: "Egypt", ar: "مصر" }, box: [104, 135, 348, 264] },
    { code: "jo", name: { en: "Jordan", ar: "الأردن" }, box: [1018, 140, 1268, 267] },
    { code: "in", name: { en: "India", ar: "الهند" }, box: [1036, 315, 1291, 442] },
    { code: "lk", name: { en: "Sri Lanka", ar: "سريلانكا" }, box: [635, 427, 918, 554] },
    { code: "ph", name: { en: "Philippines", ar: "الفلبين" }, box: [963, 514, 1277, 642] },
    { code: "bd", name: { en: "Bangladesh", ar: "بنغلاديش" }, box: [579, 597, 902, 724] }
  ];
  // the glowing route ends on the picture, as [x, y] on the same 1400 x 782 frame
  const TRANSFER_DOTS = [[715, 165], [967, 194], [397, 235], [1058, 385], [990, 632], [605, 700]];
  function renderTransferMap() {
    const host = document.getElementById("map-chips");
    if (!host) return;
    const pct = function (value, total) { return (value / total * 100).toFixed(3) + "%"; };
    const chips = TRANSFER_MAP.map(function (c, i) {
      const b = c.box;
      return '<div class="map-chip" style="left:' + pct(b[0], 1400) + ';top:' + pct(b[1], 782) +
        ';width:' + pct(b[2] - b[0], 1400) + ';height:' + pct(b[3] - b[1], 782) + ';--i:' + i + '">' +
        flagImg(c.code) +
        '<span class="map-chip-name">' + esc(t(c.name)) + '</span>' +
        '</div>';
    }).join("");
    const dots = TRANSFER_DOTS.map(function (p, i) {
      return '<span class="map-dot" style="left:' + pct(p[0], 1400) + ';top:' + pct(p[1], 782) + ';--i:' + i + '"></span>';
    }).join("");
    host.innerHTML = chips + dots;
  }

  // Mobile app section: the only place where the logo image is shown
  function renderAppPromo() {
    const box = one("#app");
    if (!box) return;
    const p = K.appPromo;
    const points = p.points.map(function (pt) {
      return `<li style="background:#fff;border:1.5px solid #1F6FB2;border-radius:999px;padding:8px 16px;color:#0B2A4A;font-weight:500;">✓ ${esc(t(pt))}</li>`;
    }).join("");
    const logo = K.company.appLogo
      ? `<div class="app-logo-wrap"><div class="app-logo-flip"><img class="app-logo" src="${esc(K.company.appLogo)}" alt="${esc(t(K.company.name))}"><img class="app-logo app-logo-back" src="${esc(K.company.appLogo)}" alt="" aria-hidden="true"></div></div>`
      : "";
    box.innerHTML = `
      <div style="background:#FFFFFF;padding:72px 5%;text-align:center;">
        ${logo}
        <h2 style="font-size:clamp(26px,3vw,36px);color:#0B2A4A;font-weight:700;margin-bottom:8px;">${esc(t(p.title))}</h2>
        <p style="color:#5A6B7D;max-width:640px;margin:8px auto 24px;">${esc(t(p.text))}</p>
        <ul style="list-style:none;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:28px;">${points}</ul>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a class="btn btn-primary" href="${esc(K.links.appStore)}" target="_blank" rel="noopener">${esc(T("appStoreText"))}</a>
          <a class="btn btn-ghost" href="${esc(K.links.playStore)}" target="_blank" rel="noopener">${esc(T("playStoreText"))}</a>
        </div>
      </div>`;
  }

  function renderFooter() {
    const quick = one("#footer-links");
    if (quick) {
      quick.innerHTML = K.nav.map(function (item) {
        return `<li><a href="${esc(item.href)}">${esc(t(item.label))}</a></li>`;
      }).join("");
    }

    const support = one("#footer-support");
    if (support) {
      support.innerHTML = `
        <li><a href="${esc(K.links.tel)}" dir="ltr">${esc(K.company.phone)}</a></li>
        <li><a href="${esc(K.links.mail)}" dir="ltr">${esc(K.company.email)}</a></li>
        <li><a href="${esc(K.links.whatsapp)}" target="_blank" rel="noopener">${esc(T("cardWhatsappTitle"))}</a></li>`;
    }

    const social = one("#social-links");
    if (social) {
      social.innerHTML = K.social.map(function (s) {
        return `<a class="soc-link" href="${esc(s.url)}" target="_blank" rel="noopener"><svg class="soc-ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#${esc(s.icon)}"/></svg><span>${esc(s.name)}</span></a>`;
      }).join("");
    }
  }


  // Header: the logo, with the name in English and Arabic underneath
  function renderLogo() {
    const el = one(".logo");
    if (!el) return;
    el.innerHTML =
      `<img class="logo-img" src="${esc(K.company.logo)}" alt="" width="268" height="320">` +
      `<span class="logo-text"><span class="logo-en">${esc(K.company.name.en)}</span>` +
      `<span class="logo-ar">${esc(K.company.name.ar)}</span></span>`;
  }

  // Put simple texts and links into the page
  function fillTexts() {
    all("[data-text]").forEach(function (el) {
      const key = el.getAttribute("data-text");
      const raw = (key in K.text) ? K.text[key] : K.company[key];
      if (raw !== undefined) el.textContent = t(raw);
    });

    all("[data-placeholder]").forEach(function (el) {
      const raw = K.text[el.getAttribute("data-placeholder")];
      if (raw !== undefined) el.setAttribute("placeholder", t(raw));
    });

    all("[data-href]").forEach(function (el) {
      const value = K.links[el.getAttribute("data-href")];
      if (value !== undefined) el.setAttribute("href", value);
    });
  }

  // The numbers in the Kuwait card come from the data (the count-up animation runs when the panel opens)
  function renderCounts() {
    const values = {
      "#stat-branches": K.branches.length,
      "#stat-rates": K.rates.length,
      "#stat-curr": K.fxRates.length - 1   // minus the base currency (KWD)
    };
    Object.keys(values).forEach(function (sel) {
      const el = one(sel);
      if (!el) return;
      el.setAttribute("data-to", String(values[sel]));
      el.textContent = String(values[sel]);
    });
  }

  /* ---------- Finishing: scroll reveal and the scroll progress bar ---------- */
  // Boxes and headings rise in as the visitor scrolls down (once, then they are left alone)
  function initReveal() {
    if (!("IntersectionObserver" in window)) return; // old browsers: everything simply stays visible
    // the help panel has its own entrance motion, so it is left out here
    const items = all("h2, .section-intro, .exp-card, .step, .contact-card, .contact-form, .rate-box").filter(function (el) {
      return !el.closest(".help, .why");
    });
    const countPerParent = new Map();
    items.forEach(function (el) {
      const parent = el.parentElement;
      const n = countPerParent.get(parent) || 0;
      countPerParent.set(parent, n + 1);
      el.style.transitionDelay = Math.min(n, 6) * 110 + "ms";   // a small wave between neighbours
      el.classList.add("reveal");
    });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        el.classList.add("in");
        // after the animation, drop the helper classes so hover effects work normally
        setTimeout(function () {
          el.classList.remove("reveal", "in");
          el.style.transitionDelay = "";
        }, 1500);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  // A thin bar at the top of the page that grows as the visitor scrolls
  /* ---------- Site search: finds any visible text on the page and jumps to it ---------- */
  const SEARCH_SELECTOR = "h1,h2,h3,h4,h5,p,li,dt,dd,figcaption,summary,th,td,label,button,a,option,.pair-name > span,.country-name,.ps-label,.ps-num,.calc-label";
  const SEARCH_LIMIT = 8;
  const SEARCH_PANES = ["fx-pane", "transfer-pane", "help"];
  let siteIndex = [];
  let siteHits = [];
  let siteActive = -1;

  // Arabic and Latin text are folded the same way: lower case, no diacritics, one form of alef, ya and ta marbuta
  function foldChar(ch) {
    const c = ch.toLowerCase();
    if (/[ً-ٰٟـ]/.test(c)) return "";
    if (c === "أ" || c === "إ" || c === "آ") return "ا";
    if (c === "ى") return "ي";
    if (c === "ة") return "ه";
    return c;
  }
  // folds a text and remembers, for every folded character, where it sits in the original text
  function foldText(text) {
    let out = "";
    const map = [];
    for (let i = 0; i < text.length; i++) {
      const f = foldChar(text[i]);
      for (let k = 0; k < f.length; k++) { out += f[k]; map.push(i); }
    }
    return { out: out, map: map };
  }
  function siteTokens(query) {
    return foldText(query).out.split(" ").filter(Boolean);
  }
  function sectionLabel(el) {
    if (el.closest(".site-header")) return T("searchMenu");
    if (el.closest(".top-bar")) return T("searchContact");
    const sec = el.closest("section, footer");
    const h = sec ? sec.querySelector("h1, h2, h3") : null;
    return h ? h.textContent.replace(/\s+/g, " ").trim() : "";
  }
  function buildSiteIndex() {
    const seen = new Set();
    const items = [];
    document.querySelectorAll("main, footer, .site-header, .top-bar").forEach(function (root) {
      root.querySelectorAll(SEARCH_SELECTOR).forEach(function (el) {
        if (el.closest("#site-search, .intro, .scroll-progress, .skip-link, [aria-hidden='true'], .swiper-slide-duplicate, .is-paged-out")) return;
        const text = el.textContent.replace(/\s+/g, " ").trim();
        if (text.length < 2 || text.length > 400) return;
        // a panel that starts hidden is still searched: a hit inside it opens the panel first
        const hidden = el.closest("[hidden]");
        let reveal = null;
        if (hidden) {
          if (SEARCH_PANES.indexOf(hidden.id) < 0) return;
          reveal = hidden.id;
        }
        const section = sectionLabel(el);
        const key = section + "|" + text;
        if (seen.has(key)) return;
        seen.add(key);
        const folded = foldText(text);
        const weight = /^H[1-5]$/.test(el.tagName) ? 3 : /^(A|BUTTON|OPTION|LABEL)$/.test(el.tagName) ? 2 : 1;
        items.push({ el: el.tagName === "OPTION" ? (el.closest("select") || el) : el, text: text, fold: folded.out, map: folded.map, section: section, reveal: reveal, weight: weight });
      });
    });
    return items;
  }
  function siteSearch(tokens) {
    const phrase = tokens.join(" ");
    const hits = [];
    siteIndex.forEach(function (it) {
      for (let i = 0; i < tokens.length; i++) {
        if (it.fold.indexOf(tokens[i]) < 0) return;
      }
      let score = it.weight;
      if (it.fold.indexOf(tokens[0]) === 0) score += 3;
      if (it.fold === phrase) score += 6;
      hits.push({ it: it, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, SEARCH_LIMIT).map(function (h) { return h.it; });
  }
  function siteSnippet(it, tokens) {
    const at = it.fold.indexOf(tokens[0]);
    const from = it.map[at];
    const to = it.map[at + tokens[0].length - 1] + 1;
    const start = Math.max(0, from - 36);
    const end = Math.min(it.text.length, Math.max(to + 90, start + 130));
    return (start > 0 ? "…" : "") + esc(it.text.slice(start, from)) +
      "<mark>" + esc(it.text.slice(from, to)) + "</mark>" +
      esc(it.text.slice(to, end)) + (end < it.text.length ? "…" : "");
  }
  function updateSiteActive(scroll) {
    const buttons = document.querySelectorAll("#site-results .sr-item");
    buttons.forEach(function (b, i) {
      const on = i === siteActive;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (scroll && buttons[siteActive]) buttons[siteActive].scrollIntoView({ block: "nearest" });
  }
  function closeSiteResults() {
    const list = document.getElementById("site-results");
    const input = document.getElementById("site-q");
    if (list) { list.hidden = true; list.innerHTML = ""; }
    if (input) input.setAttribute("aria-expanded", "false");
    siteHits = [];
    siteActive = -1;
  }
  function renderSiteResults(query) {
    const list = document.getElementById("site-results");
    const input = document.getElementById("site-q");
    const tokens = siteTokens(query);
    if (!tokens.length) { closeSiteResults(); return; }
    siteHits = siteSearch(tokens);
    siteActive = siteHits.length ? 0 : -1;
    if (!siteHits.length) {
      list.innerHTML = '<li class="sr-empty">' + esc(T("searchEmpty")) + "</li>";
    } else {
      list.innerHTML = siteHits.map(function (it, i) {
        return '<li role="presentation"><button class="sr-item" type="button" role="option" data-i="' + i + '">' +
          (it.section ? '<span class="sr-section">' + esc(it.section) + "</span>" : "") +
          '<span class="sr-text">' + siteSnippet(it, tokens) + "</span></button></li>";
      }).join("") + '<li class="sr-foot" aria-hidden="true">' + esc(T("searchHint")) + "</li>";
    }
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    updateSiteActive(false);
  }
  // the panels that start hidden: open the one a hit sits in
  function revealSitePane(id) {
    if (id === "fx-pane" || id === "transfer-pane") {
      const tab = document.querySelectorAll(".rate-toolbar .tab")[id === "fx-pane" ? 1 : 0];
      if (tab && !tab.classList.contains("active")) tab.click();
    } else if (id === "help") {
      const help = document.getElementById("help");
      const btn = document.getElementById("help-open");
      if (help && help.hidden && btn) btn.click();
    }
  }
  function openSiteHit(it) {
    if (!it) return;
    closeSiteResults();
    const header = document.querySelector(".site-header");
    const toggle = document.getElementById("search-toggle");
    if (header && header.classList.contains("search-open")) {
      header.classList.remove("search-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
    if (it.reveal) revealSitePane(it.reveal);
    const offset = (header ? header.offsetHeight : 0) + 48;
    const top = it.el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    it.el.classList.add("is-search-hit");
    window.setTimeout(function () { it.el.classList.remove("is-search-hit"); }, 2400);
  }
  function initSiteSearch() {
    const header = document.querySelector(".site-header");
    const input = document.getElementById("site-q");
    const list = document.getElementById("site-results");
    const clear = document.getElementById("site-clear");
    const toggle = document.getElementById("search-toggle");
    if (!header || !input || !list) return;
    input.setAttribute("aria-label", T("searchAria"));
    if (toggle) toggle.setAttribute("aria-label", T("searchAria"));
    if (clear) clear.setAttribute("aria-label", T("searchClear"));

    function setMobileSearch(open) {
      header.classList.toggle("search-open", open);
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) input.focus();
      else closeSiteResults();
    }

    // the index is rebuilt when the field gets focus, so panels rendered later on are included
    input.addEventListener("focus", function () {
      siteIndex = buildSiteIndex();
      if (input.value.trim()) renderSiteResults(input.value);
    });
    input.addEventListener("input", function () {
      if (clear) clear.hidden = !input.value;
      if (!siteIndex.length) siteIndex = buildSiteIndex();
      renderSiteResults(input.value);
    });
    input.addEventListener("keydown", function (e) {
      const n = siteHits.length;
      if (e.key === "ArrowDown" && n) {
        e.preventDefault();
        siteActive = (siteActive + 1) % n;
        updateSiteActive(true);
      } else if (e.key === "ArrowUp" && n) {
        e.preventDefault();
        siteActive = (siteActive - 1 + n) % n;
        updateSiteActive(true);
      } else if (e.key === "Enter" && n) {
        e.preventDefault();
        openSiteHit(siteHits[siteActive < 0 ? 0 : siteActive]);
      } else if (e.key === "Escape") {
        if (header.classList.contains("search-open")) setMobileSearch(false);
        else { closeSiteResults(); input.blur(); }
      }
    });
    // pressing a result must not take the focus away from the field before the click lands
    list.addEventListener("mousedown", function (e) { e.preventDefault(); });
    list.addEventListener("mouseover", function (e) {
      const b = e.target.closest(".sr-item");
      if (b) { siteActive = Number(b.getAttribute("data-i")); updateSiteActive(false); }
    });
    list.addEventListener("click", function (e) {
      const b = e.target.closest(".sr-item");
      if (b) openSiteHit(siteHits[Number(b.getAttribute("data-i"))]);
    });
    if (clear) clear.addEventListener("click", function () {
      input.value = "";
      clear.hidden = true;
      closeSiteResults();
      input.focus();
    });
    if (toggle) toggle.addEventListener("click", function () {
      setMobileSearch(!header.classList.contains("search-open"));
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".site-search, .search-toggle")) closeSiteResults();
    });
    // "/" moves the cursor to the search field from anywhere on the page
    document.addEventListener("keydown", function (e) {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (!input.offsetParent) return;
      e.preventDefault();
      input.focus();
    });
  }

  function initScrollProgress() {
    const bar = one("#scroll-progress");
    if (!bar) return;
    let ticking = false;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = "scaleX(" + p + ")";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderLogo();
    renderNav();
    renderSlides();
    loadRates().then(function () {
      renderRates();
      renderTicker();
    });
    renderExperience();
    renderSteps();
    renderPartners();
    renderLocations();
    renderHqMap();
    renderCounts();
    renderTransferMap();
    initPulseStats();
    renderLeaders();
    renderAppPromo();
    renderFooter();
    fillTexts();
    initReveal();
    initScrollProgress();
    initSiteSearch();

    // Language button: reload the page in the other language
    const langBtn = one(".lang-btn");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        window.location.search = "?lang=" + (LANG === "ar" ? "en" : "ar");
      });
    }
  });

})();
