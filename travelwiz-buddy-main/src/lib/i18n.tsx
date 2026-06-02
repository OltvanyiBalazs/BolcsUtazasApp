import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "hu" | "en";

type Dict = Record<string, { hu: string; en: string }>;

export const t: Dict = {
  // Nav
  nav_home: { hu: "Főoldal", en: "Home" },
  nav_services: { hu: "Szolgáltatások", en: "Services" },
  nav_prices: { hu: "Árlista", en: "Pricing" },
  nav_reviews: { hu: "Vélemények", en: "Reviews" },
  nav_cta: { hu: "Ajánlatkérés", en: "Get a quote" },

  // Tagline
  tagline: { hu: "Tanácsadás. Tervezés. Élmények.", en: "Advice. Planning. Experiences." },

  // Home hero
  hero_eyebrow: { hu: "Személyre szabott utazástervezés", en: "Personal travel planning" },
  hero_title: { hu: "Utazz bölcsebben, ne pedig drágábban.", en: "Travel wiser, not more expensive." },
  hero_sub: {
    hu: "Megkeresem neked a legjobb repjegy + szállás kombókat, hogy te csak az élményekre koncentrálhass.",
    en: "I find the best flight + hotel combos so you can focus only on the experience.",
  },
  hero_cta: { hu: "Kérek egy ajánlatot", en: "Request a quote" },
  hero_secondary: { hu: "Áraim megnézése", en: "See pricing" },

  // About
  about_title: { hu: "Ki is vagyok én?", en: "Who am I?" },
  about_p1: {
    hu: "Üdvözöllek az oldalamon. Az oldalam és saját magam célja az, hogy segítsek az embereknek világot látni — látni olyan helyeket, amikről álmodni se mertek volna, és eljutni oda, amit eddig csak filmekben láttak.",
    en: "Welcome to my site. My goal — and the goal of this page — is to help people see the world: places they wouldn't even have dared to dream of, and destinations they've only seen in films.",
  },
  about_p2: {
    hu: "De ki is vagyok én? Egy teljesen átlagos családból jöttem, ahol a szüleim hónapokig spórolgattak, hogy elvihessenek minket a testvéremmel egy pár napra.",
    en: "But who am I? I come from a completely ordinary family, where my parents saved for months just to take us away for a few days with my sibling.",
  },
  about_p3: {
    hu: "Ahogy nőttem fel, és kezdtem utánajárni a dolgoknak, jöttem rá, hogy igazából egy nyaralás nem luxus. Amilyen összegeket elköltöttek a szüleim arra, hogy egy szomszédos országba elmehessünk, egy kis tervezéssel és utánajárással akár más kontinensekre is eljuthatunk.",
    en: "As I grew up and started looking into things, I realised that a holiday isn't really a luxury. With a bit of planning and research you can reach other continents for the same amount my parents spent on a trip to a neighbouring country.",
  },
  about_p4: {
    hu: "Folyamatosan érett bennem és alakult ki, hogy merre kell keresgélni, mire kell figyelni — és mára már számtalan helyre sikerült eljutnom, ezeknek köszönhetően.",
    en: "Over time I learned where to look and what to watch out for — and thanks to this I've already made it to countless places.",
  },
  about_p5: {
    hu: "A célom az, hogy segíthessek az embereken, mert mindenki megérdemli, hogy egy kicsit elszakadhasson a hétköznapokból és kikapcsolódhasson — olyan emlékeket szerezve, amik egész életében vele maradnak.",
    en: "My goal is to help people, because everyone deserves to step away from everyday life for a little while — and collect memories that stay with them for a lifetime.",
  },
  about_p6: {
    hu: "A mai napig emlékszem, hogyan vigyorgott édesanyám, amikor eljutottunk Disneylandbe, vagy ahogy a legjobb barátommal a Grand Canyon szélén ücsörögtünk.",
    en: "To this day I remember my mother's smile when we made it to Disneyland, and sitting at the edge of the Grand Canyon with my best friend.",
  },

  // Why me
  why_title: { hu: "Miért engem válassz?", en: "Why choose me?" },
  why_1_t: { hu: "Személyre szabott", en: "Personalized" },
  why_1_d: {
    hu: "Nincs két egyforma utazó. A te igényeidre, büdzsédre és stílusodra szabom az ajánlatot.",
    en: "No two travelers are alike. I tailor every offer to your needs, budget and style.",
  },
  why_2_t: { hu: "Időt spórolok neked", en: "I save your time" },
  why_2_d: {
    hu: "Órákat tölthetnél keresgéléssel — én pár munkanapon belül kész tervet adok a kezedbe.",
    en: "You could spend hours searching — I deliver a complete plan within a few business days.",
  },
  why_3_t: { hu: "Pénzt spórolok neked", en: "I save you money" },
  why_3_d: {
    hu: "Olyan kombinációkat találok meg, amiket a nagy oldalak elrejtenek. Sokszor a tanácsadás ára többszörösen megtérül.",
    en: "I find combinations the big sites hide. The cost of my service often pays back many times over.",
  },
  why_4_t: { hu: "Őszinte tanácsadás", en: "Honest advice" },
  why_4_d: {
    hu: "Nincs jutalék, nincs rejtett érdek. Csak az, ami neked a legjobb.",
    en: "No commissions, no hidden interests. Only what's best for you.",
  },

  // How it works
  how_title: { hu: "Hogyan működik?", en: "How does it work?" },
  how_1_t: { hu: "1. Felveszed velem a kapcsolatot", en: "1. You get in touch" },
  how_1_d: {
    hu: "Írj e-mailt vagy DM-et TikTokon — megbeszéljük az úti célt, az időpontot és a kereted.",
    en: "Drop me an email or a TikTok DM — we discuss the destination, dates and budget.",
  },
  how_2_t: { hu: "2. 3–5 munkanapos keret", en: "2. 3–5 business day window" },
  how_2_d: {
    hu: "3–5 munkanapon belül megkapod a személyre szabott utazási PDF-et, minden részlettel és linkkel.",
    en: "Within 3–5 business days you receive your personalised travel PDF with all the details and links.",
  },
  how_3_t: { hu: "3. Megkapod a tervet", en: "3. You get the plan" },
  how_3_d: {
    hu: "Linkekkel, árakkal és tippekkel együtt. Te csak rákattintasz a foglalás gombra.",
    en: "With links, prices and tips. You just click the booking button.",
  },

  // What you get
  what_title: { hu: "Mit kapsz a szolgáltatással?", en: "What you get" },
  what_1: { hu: "Konkrét repjegy- és szállásajánlatok foglalási linkkel", en: "Concrete flight and hotel offers with booking links" },
  what_2: { hu: "3 variáció eltérő ársávban", en: "3 variations in different price ranges" },
  what_3: { hu: "Tippek a transzferhez és helyi közlekedéshez", en: "Tips for transfers and local transport" },
  what_4: { hu: "Pénzvisszafizetési és lemondási tudnivalók", en: "Refund and cancellation info" },
  what_5: { hu: "Személyes válasz minden kérdésedre", en: "Personal answer to every question" },

  // Destinations
  dest_title: { hu: "Hová tudlak elvinni?", en: "Where can I send you?" },
  dest_sub: { hu: "Néhány úti cél, amit a közelmúltban terveztem ügyfeleimnek.", en: "A few destinations I recently planned for clients." },

  // Nearby airports
  nearby_title: { hu: "Környező országokból is keresek repjegyet", en: "I also search flights from neighbouring countries" },
  nearby_d: {
    hu: "Sokszor olcsóbb Bécsből, Pozsonyból vagy Prágából elindulni, mint Budapestről — és összességében jobban kijössz vele, még a kiutazást is beleszámolva. Ha szeretnéd, ezekre a repterekre is keresek ajánlatot, és megmutatom, melyik éri meg igazán.",
    en: "It's often cheaper to fly from Vienna, Bratislava or Prague than from Budapest — and even with the travel to the airport you come out ahead. On request I'll search these airports too and show you which one really pays off.",
  },

  // Custom requests
  custom_title: { hu: "Egyedi kérésed van?", en: "Have a custom request?" },
  custom_d: {
    hu: "Bármilyen utazással kapcsolatos segítségre van szükséged — még ha nem is szerepel a fenti csomagok között —, írj nyugodtan. Ha tudok segíteni, segítek. Ha nem, őszintén megmondom.",
    en: "If you need any kind of travel-related help — even something not listed in the packages above — just reach out. If I can help, I will. If not, I'll tell you honestly.",
  },

  // Pricing
  prices_title: { hu: "Árlista", en: "Pricing" },
  prices_sub: { hu: "Egyszeri, transzparens díjak. Munkaidő: 3–5 munkanap.", en: "One-time, transparent fees. Turnaround: 3–5 business days." },
  price_basic_t: { hu: "Alap keresés", en: "Basic search" },
  price_basic_p: { hu: "4 000 Ft", en: "€10" },
  price_basic_d: { hu: "Csak repjegy VAGY csak szállás, egy időpontra.", en: "Only flight OR only hotel, for a single date." },
  price_combo_t: { hu: "Repjegy + Szállás", en: "Flight + Hotel" },
  price_combo_p: { hu: "12 000 Ft / 4 fő", en: "€30 / 4 people" },
  price_combo_d: { hu: "4 főig egységesen 12 000 Ft, plusz fő esetén +2 000 Ft / fő.", en: "Up to 4 people flat €30, additional person +€5 each." },
  price_vip_t: { hu: "VIP csomag", en: "VIP package" },
  price_vip_p: { hu: "20 000 Ft", en: "€50" },
  price_vip_d: { hu: "Repjegy, szállás, transzfer és kész programterv az ottlétedre.", en: "Flights, hotel, transfer and a complete itinerary for your stay." },
  price_priority_t: { hu: "Prioritási jegy", en: "Priority pass" },
  price_priority_p: { hu: "2 000 Ft", en: "€5" },
  price_priority_d: { hu: "A következő utat garantáltan a tiéddel kezdem.", en: "I guarantee the next trip I plan is yours." },
  price_featured: { hu: "Legnépszerűbb", en: "Most popular" },
  price_extra: { hu: "Extra", en: "Extra" },
  price_order: { hu: "Megrendelem", en: "Order" },
  price_deadline: { hu: "Minden csomag határideje: 3–5 munkanap.", en: "All packages delivered within 3–5 business days." },

  // Services
  services_title: { hu: "Szolgáltatások", en: "Services" },
  services_sub: { hu: "Részletek arról, mi mit takar.", en: "Details on what each package includes." },

  // Reviews
  reviews_title: { hu: "Vélemények", en: "Reviews" },
  reviews_empty_t: { hu: "Hamarosan itt jelennek meg az első vélemények", en: "First reviews coming soon" },
  reviews_empty_d: {
    hu: "Még nincs nyilvános visszajelzés. Ha már dolgoztunk együtt, szívesen veszem, ha megosztod a tapasztalataidat e-mailben!",
    en: "No public reviews yet. If we've already worked together, feel free to share your experience by email!",
  },

  // Legal
  legal_title: { hu: "Jogi tudnivalók", en: "Legal information" },
  legal_1_t: { hu: "Tanácsadási szolgáltatás", en: "Advisory service" },
  legal_1_d: {
    hu: "A Bölcs Utazás kizárólag utazási tanácsadási és tervezési szolgáltatást nyújt. Nem vagyok utazásszervező, nem vagyok utazásközvetítő, és nem értékesítek utazási szolgáltatásokat. Az általam ajánlott repjegyeket, szállásokat és egyéb szolgáltatásokat te magad foglalod le közvetlenül a szolgáltatóknál.",
    en: "Bölcs Utazás provides travel advisory and planning services only. I am not a tour operator or travel agent, and I do not sell travel services. You book the flights, accommodation and other services I recommend directly with the providers yourself.",
  },
  legal_2_t: { hu: "Felelősség", en: "Liability" },
  legal_2_d: {
    hu: "A foglalásokért, az árváltozásokért, a járattörlésekért, a szállás minőségéért és minden, az utazás során felmerülő körülményért az adott szolgáltató (légitársaság, szálláshely, biztosító stb.) felelős. A tanácsadói tevékenységem során a legjobb tudásom szerint járok el, de a végleges döntés és felelősség mindig téged terhel.",
    en: "Bookings, price changes, flight cancellations, accommodation quality and all circumstances arising during travel are the responsibility of the relevant service provider (airline, hotel, insurer, etc.). I act to the best of my knowledge in my advisory work, but the final decision and responsibility always rest with you.",
  },
  legal_3_t: { hu: "Visszatérítés", en: "Refunds" },
  legal_3_d: {
    hu: "A tanácsadási díj a munka megkezdésekor esedékes és nem visszatéríthető, mivel a szolgáltatás teljesítése a kutatási és tervezési munkámmal megtörténik. Ha bármi miatt mégsem utazol el, a tervet később bármikor felhasználhatod.",
    en: "The advisory fee is due when work begins and is non-refundable, as the service is delivered through my research and planning work. If you don't end up travelling, you can use the plan later at any time.",
  },
  legal_4_t: { hu: "Adatkezelés", en: "Data handling" },
  legal_4_d: {
    hu: "Az általad megadott adatokat kizárólag a tanácsadáshoz használom fel, harmadik félnek nem adom át.",
    en: "I use the data you provide solely for the advisory work and do not share it with third parties.",
  },

  // Contact
  contact_title: { hu: "Kapcsolat", en: "Contact" },
  contact_sub: { hu: "Írj e-mailt vagy üzenj TikTokon — 24 órán belül válaszolok.", en: "Email or DM on TikTok — I reply within 24 hours." },
  contact_email_label: { hu: "E-mail", en: "Email" },

  // Footer
  footer_rights: { hu: "Minden jog fenntartva.", en: "All rights reserved." },

  // Language switch
  lang_switch: { hu: "EN", en: "HU" },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: keyof typeof t) => string;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hu");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "hu" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const tr = (key: keyof typeof t) => t[key]?.[lang] ?? String(key);

  return <LangContext.Provider value={{ lang, setLang, tr }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
