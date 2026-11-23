# Brand Growth Director — Agent لإنقاذ البيزنس اللي مبيعاته ضعيفة

Agent بيشتغل بعقلية **Creative Director بخبرة results-driven**، مبني على بحث عن:
Meta Andromeda، و Long-Term Creative Strategy، و Customer Intelligence، و Community & LTV.

> **المعادلة:** Community Building + Customer Intelligence + Creative Direction ← والـ Media Buying هو طريقة التنفيذ.

---

## محتوى الفولدر

```
brand-growth-agent/
├── research/
│   └── 01-research-report.md      ← البحث: إيه المدعوم بأدلة، وإيه المبالغ فيه، والمصادر
├── agent/
│   ├── system-prompt.md           ← "دماغ" الـ Agent (portable)
│   ├── knowledge/
│   │   ├── frameworks.md          ← Andromeda, Binet&Field, Sharp, JTBD, RFM, Measurement
│   │   └── playbooks.md           ← Triage, Intelligence Sprint, Concept Build, Account, VIP...
│   └── templates/
│       └── templates.md           ← Intake, Scorecard, Interview Script, Concept, Angles, 90-day
└── clients/                       ← الـ Agent بيحط فيه شغل كل عميل
.claude/agents/brand-growth-director.md  ← نسخة Claude Code subagent
```

## طريقة 1: Claude Code (جوه الريبو ده)
الـ subagent متعرّف في `.claude/agents/brand-growth-director.md`. اكتب مثلاً:
```
استخدم brand-growth-director: عندي براند هدوم ستات، 400 أوردر في الشهر، الـ RTO 32%، و CPA عالي. اعملي diagnosis وخطة 90 يوم.
```
لو عندك exports (DMs، reviews، orders CSV) حطها في `brand-growth-agent/clients/<اسم-البراند>/` وقوله يحللها.

## طريقة 2: Claude Project (claude.ai) أو Custom GPT
1. اعمل Project جديد.
2. انسخ محتوى `agent/system-prompt.md` في الـ **Custom Instructions**.
3. ارفع `knowledge/frameworks.md` و `knowledge/playbooks.md` و `templates/templates.md` و `research/01-research-report.md` كـ **Project Knowledge**.
4. ابدأ بـ: "عايز أعمل diagnosis لبيزنس…" — هيسألك أسئلة الـ Intake.

## طريقة 3: API / Agent SDK
استخدم `system-prompt.md` كـ system prompt وحمّل ملفات الـ knowledge كـ context. ممكن تزود tools زي قراءة CSV من Shopify/EasyOrders، أو قراءة Meta Ads Insights، أو تصدير محادثات WhatsApp.

---

## الـ Agent بيعمل إيه؟ (D-U-C-S-R-M)

| المرحلة | السؤال | الناتج |
|---|---|---|
| **Diagnose** | المشكلة في الماركتنج فعلاً؟ ولا في المنتج/السعر/الـ RTO/الـ margin؟ | Scorecard + أكبر bottleneck |
| **Understand** | مين العملاء دول بجد؟ بيقولوا إيه؟ إيه اللي بيحركهم؟ | Segments + Language Bank + Category Entry Points |
| **Concept** | إيه الفكرة اللي تعيش 90 يوم وتطلع منها كل الإعلانات؟ | Brand Platform + Core Concept + Angle Matrix |
| **Signal** | إزاي نأكّل الـ algorithm صح؟ | Account structure + CAPI + Value-based seeds + Confirmed-order events |
| **Relationship** | إزاي نحوّل المشتري لعضو؟ | VIP / WhatsApp Community / Early Access / Post-purchase flow |
| **Measure** | إحنا بنكسب فلوس بجد؟ | Margin, MER, CAC, AOV, LTV, RTO dashboard |

## أهم 5 حاجات طلعت من البحث
1. **مش المشكلة في عدد الإعلانات، المشكلة في التشابه.** Meta بتجمع الإعلانات اللي شبه بعض وتعاملها كإعلان واحد. المطلوب Concepts مختلفة فعلاً (شخص مختلف، موقف مختلف، رغبة مختلفة، format مختلف) تحت فكرة واحدة كبيرة.
2. **Creative = Targeting.** Meta نفسها قالت إن الـ creative diversification بقى أهم أداة توصل بيها للجمهور.
3. **الكتب القديمة رجعت:** Binet & Field (≈60/40 brand/activation) و Byron Sharp (Category Entry Points + Distinctive Assets) هما بالظبط اللي الـ algorithm بيكافئه.
4. **في مصر: الـ Purchase مش revenue.** مع COD والـ RTO ~25–35%، لازم تقيس وتبعت events على الأوردرات المؤكدة/المستلمة.
5. **Founder story مهمة بس مش شرط بقاء.** المهم يكون فيه إنسان أو قصة حقيقية الناس تتعلق بيها، وفيه بدائل (Origin, Expert, Community faces, Craft).

التفاصيل والمصادر: [`research/01-research-report.md`](research/01-research-report.md)
