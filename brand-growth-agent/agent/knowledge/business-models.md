# Knowledge — Business Model Playbook (any business, not only e-commerce)

The method (Diagnose → Understand → Concept → Signal → Relationship → Measure) is the same for every business.
What changes per model is: **the money moment**, **the funnel**, **the signal you feed Meta**, **the metrics**, and **the retention/community play**.

**Step 0 for every client:** classify the business into one (or two) archetypes below. Hybrids are common (e.g., a dental clinic that also sells whitening kits = B + A).

---

## Quick map

| Archetype | Examples | Money moment (what to optimize & measure) | Main Meta setup |
|---|---|---|---|
| **A. Product / E-commerce** | Fashion, cosmetics, home goods, food brands | Delivered / paid order | Sales objective + Pixel/CAPI, confirmed-order events (COD) |
| **B. Appointment service** | Dental/medical/aesthetic clinic, auto service center, salon, physio, vet | Patient/customer **shows up and pays** (not the lead) | Lead Ads + CRM→CAPI (Conversion Leads) or Click-to-WhatsApp optimized for leads; offline "showed/paid" events |
| **C. Experience / venue** | Board game café, restaurant, gym, escape room, kids' play area, event space | **Visit / booking / reservation** + repeat visits | Awareness/reach + Click-to-WhatsApp/booking; local radius; event-based content |
| **D. High-ticket / considered** | Real estate, education/courses, weddings, renovation, cars | **Qualified meeting → contract** | Lead Ads with qualifying questions + CRM stages back to Meta; long nurture |
| **E. Subscription / membership** | Gym memberships, meal plans, SaaS, clubs | **Paid conversion + retention month 2/3/6** | Trial/lead → paid events; churn is the real problem |
| **F. B2B services** | Agencies, software, wholesale, corporate services | **Qualified opportunity → closed deal** | Lead Ads/LinkedIn; founder/expert content; CRM stages |

---

## A. Product / E-commerce
- Funnel: Ad → product page → order → confirmation → delivery → repeat.
- Key metrics: AOV, CAC on delivered orders, RTO %, contribution margin, repeat rate, LTV 90/180.
- Common bottlenecks: margin can't absorb CAC, RTO, weak offer, all creatives look alike.
- Community: VIP early access, drops, co-creation.
- (Covered in depth in `playbooks.md` P1–P8.)

## B. Appointment Service (clinic, auto service, salon…)
- Funnel: Ad → message/lead → **response** → booking → **show-up** → treatment/service → follow-up → **next visit / referral**.
- The money is lost *after* the lead more often than before it. Diagnose: response time, booking rate, show rate, case acceptance (clinics), average ticket.
- Key metrics: Cost per lead, **cost per booked appointment**, **show rate**, cost per **showed & paid** customer, average ticket, case acceptance rate, rebooking/recall rate, referral share, review count & rating.
- Signal: feed Meta the **booked/showed/paid** stage via CRM → Conversions API (Conversion Leads optimization works with Instant Forms; choose a stage that predicts revenue and happens within ~28 days). For WhatsApp-first businesses, use Click-to-WhatsApp with lead optimization and tag outcomes in the CRM.
- Speed-to-lead: the direction of evidence is consistent — faster response = higher conversion; set a **< 5–15 min response SLA** (exact multipliers in the market are weakly sourced).
- Trust is the product: reviews (Google Business Profile), real doctor/technician faces, process transparency, certifications, pricing clarity.
- Story engine: the **expert** (doctor, master mechanic) is usually stronger than a "founder".
- Creative angles from Category Entry Points: *trigger moments* — pain/emergency, upcoming event (wedding, travel), season (summer AC check, pre-Ramadan), milestone (first car service, kid's first dental visit), fear (cost, pain, being cheated).
- Retention/community: recall reminders (6-month check-up, 10,000-km service), family plans, membership/maintenance plans, referral program, WhatsApp broadcast with tips.
- **Compliance (health):** Meta prohibits ads that assert or imply personal attributes incl. health conditions ("Do you suffer from…?"); no targeting by health conditions; before/after imagery is high-risk — verify current policy; no unsubstantiated claims. Also respect local medical-advertising rules and patient privacy (never use patient data/images without written consent).
- Auto service: fear of being overcharged/cheated is the #1 anxiety → transparency content (show the old part, price before work, video updates on WhatsApp).

## C. Experience / Venue (board game café, restaurant, gym…)
- Funnel: Ad/organic → discovery → **visit/booking** → experience → share (UGC) → return → bring friends.
- The product *is* the experience and the community — this model benefits the most from the post's thesis.
- Key metrics: visits/bookings per week, cost per booking, average spend per head, table/slot utilization by day/hour, repeat-visit rate (30/60d), group size, % of visits from referrals/regulars, review rating.
- Signal: Click-to-WhatsApp / booking events, store-visit proxies, local radius targeting; reach & frequency matter more because the decision is often spontaneous.
- Creative: show *people having the moment* (not the place empty); recurring series (weekly game night, tournament, chef's special, member of the month). Category Entry Points: "what to do this weekend", birthdays, team outings, date night, rainy day, exam-over celebrations.
- Fill the dead hours: specific offers/events for low-utilization slots instead of blanket discounts.
- Community is the moat: regulars' club, leagues/tournaments, loyalty card/app, WhatsApp community for events, host/game-master as the face.
- Story engine: the owner, the host, or the regulars.

## D. High-ticket / Considered
- Long cycle → content that builds trust over weeks (education, proof, case studies), retargeting/nurture via WhatsApp/email, sales-team quality matters.
- Qualifying questions in forms; CRM stages (qualified → meeting → proposal → won) sent back to Meta.
- Metrics: cost per qualified lead, lead→meeting %, meeting→close %, sales cycle length, revenue per lead.

## E. Subscription / Membership
- Acquisition cost is recovered over months → **churn** is usually the real bottleneck.
- Metrics: trial→paid %, month-2/3/6 retention, LTV:CAC, payback period.
- Community and onboarding (first 30 days) drive retention.

## F. B2B Services
- Founder/expert-led content (LinkedIn + Meta), case studies, clear ICP, outbound + inbound.
- Metrics: qualified opportunities, win rate, deal size, cycle length, pipeline coverage.

---

## Universal rules across models
1. Find the **money moment** and optimize/measure on it — not on clicks, leads, or "messages started".
2. Close the **data loop**: CRM/booking/POS outcome → back to Meta (CAPI / offline events) with consent.
3. Fix **operations leaks** (response time, show rate, delivery, service quality) before scaling spend.
4. Build **one Core Concept** per client, with angles from that client's Category Entry Points and segments.
5. Pick the right **story engine** (founder / expert / host / community / craft / origin).
6. Make **reviews and referrals** a system, especially for local businesses (Google Business Profile).
