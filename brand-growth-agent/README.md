# Brand Growth Director: Agent للـ Agency ينقذ ويكبّر أي بيزنس

Agent بيشتغل بعقلية **Creative Director بخبرة results-driven** جوه agency. بينفع مع **أي نوع بيزنس**:

| النوع | أمثلة |
|---|---|
| منتجات / E-commerce | هدوم، كوزمتكس، أكل، home |
| خدمات بمواعيد | عيادة أسنان، مركز صيانة عربيات، صالون، علاج طبيعي |
| أماكن وتجارب | board game café، مطعم، جيم، escape room |
| قرار شراء كبير | عقارات، كورسات، أفراح، تشطيبات |
| اشتراكات | عضويات، meal plans، SaaS |
| B2B | خدمات للشركات، توريدات |

> **المعادلة:** Community Building + Customer Intelligence + Creative Direction، والـ Media Buying هو طريقة التنفيذ.
> **أهم مبدأ:** لكل بيزنس "لحظة فلوس" (Money Moment)، وكل حاجة بتتقاس وبتتحسّن عليها هي، مش على الكليكات أو الرسايل.
> في المتجر هي الأوردر اللي اتسلم، في العيادة المريض اللي حضر ودفع، وفي الكافيه الزيارة.

---

## محتوى الفولدر

```
brand-growth-agent/
├── research/
│   ├── 01-research-report.md              ← Andromeda، Creative Strategy، Community، LTV
│   └── 02-services-and-local-addendum.md  ← الخدمات والبيزنس المحلي والـ lead-gen
├── agent/
│   ├── system-prompt.md                   ← تعليمات الـ Agent الأساسية
│   ├── knowledge/
│   │   ├── business-models.md             ← 6 أنواع بيزنس: لحظة الفلوس، الأرقام، الإعداد، الـ compliance
│   │   ├── frameworks.md                  ← Andromeda, Binet&Field, Sharp, JTBD, RFM
│   │   └── playbooks.md                   ← تشخيص منتج/خدمة، أماكن، Onboarding لعميل agency
│   └── templates/
│       └── templates.md                   ← Intake، Scorecard، Interview، Concept، Angles، 90-day، تقرير شهري
└── clients/                               ← فولدر لكل عميل + _learnings.md
.claude/agents/brand-growth-director.md    ← نسخة Claude Code subagent
```

## طرق الاستخدام

**1. Claude Code (جوه الريبو ده)**
```
استخدم brand-growth-director: عميل جديد، عيادة أسنان في مدينة نصر، بيجيلهم 300 lead في الشهر بس الحجوزات قليلة.
```
```
استخدم brand-growth-director: إيه الـ status والخطوة الجاية لعميل board-game-cafe؟
```

**2. Claude Project (claude.ai) أو Custom GPT**
1. اعمل Project جديد.
2. انسخ `agent/system-prompt.md` في الـ Custom Instructions.
3. ارفع ملفات `knowledge/` و`templates/` و`research/`.
4. ابدأ بـ "عميل جديد: …".

**3. API / Agent SDK:** استخدم `system-prompt.md` كـ system prompt، والملفات التانية كـ context.

---

## الـ Agent بيمشي إزاي مع أي عميل

| الخطوة | السؤال | الناتج |
|---|---|---|
| **0. Classify** | نوع البيزنس إيه؟ لحظة الفلوس إيه؟ | تصنيف + KPI متفق عليه |
| **1. Diagnose** | المشكلة في الماركتنج فعلاً؟ ولا في الرد على العملاء، أو الحضور، أو السعر، أو الخدمة؟ | Scorecard + أكبر عائق |
| **2. Understand** | العملاء بيقولوا إيه؟ إيه اللي بيحركهم؟ | Segments + Language Bank + لحظات الاحتياج |
| **3. Concept** | إيه الفكرة اللي تعيش 90 يوم؟ | Brand Platform + Concept + Angles |
| **4. Signal** | إزاي نعلّم الـ algorithm يجيب عملاء بيدفعوا بجد؟ | CAPI، ربط الـ CRM، Click-to-WhatsApp |
| **5. Relationship** | إزاي العميل يرجع ويجيب غيره؟ | VIP / Regulars / Recall / Referral |
| **6. Measure** | بنكسب فلوس بجد؟ | Dashboard أسبوعي + تقرير شهري |

## أهم اللي طلع من البحث
1. **التشابه هو المشكلة مش العدد.** Meta بتجمع الإعلانات اللي شبه بعض وتعاملها كإعلان واحد، فالمطلوب Concepts مختلفة فعلاً تحت فكرة واحدة.
2. **الإعلان نفسه بقى هو الـ Targeting**، وده كلام Meta نفسها.
3. **في الخدمات، الفلوس بتضيع بعد الـ lead:** رد متأخر، ناس مابتحضرش، أو مفيش متابعة. ده بيتصلح قبل ما تزوّد الميزانية.
4. **Meta تقدر تتعلم من الـ CRM.** لما تبعتلها مين حجز ومين حضر، بتجيبلك ناس شبههم.
5. **للبيزنس المحلي، الـ Reviews جزء من البيع.** حوالي نص الناس مش بيتعاملوا مع مكان عنده أقل من 20 review (رقم vendor أمريكي، نتعامل معاه كاتجاه).
6. **في المنتجات بمصر، الـ Purchase مش revenue.** مع الدفع عند الاستلام، الـ algorithm لازم يتعلم من الأوردرات المؤكدة.
7. **مش لازم الوش يكون الـ Founder.** ممكن يكون الدكتور، أو الميكانيكي، أو الـ host، أو العملاء نفسهم. المهم إن القصة تكون حقيقية.

التفاصيل والمصادر في [`research/`](research/).
