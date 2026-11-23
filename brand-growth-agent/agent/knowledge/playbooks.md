# Knowledge — Playbooks

> P1–P8 are written with product/e-commerce examples. For services, venues, high-ticket and B2B, use P9–P10 plus `business-models.md`. The logic is the same; the money moment changes.

## P1. Weak-Sales Triage (first conversation — product version)
Ask in this order; stop when the bottleneck is obvious.
1. What do you sell, price, and margin after COGS + shipping?
2. Monthly orders, AOV, % delivered vs. placed (RTO)?
3. Repeat-purchase rate in 90 days? Best-selling SKU?
4. Ad spend / month, CPA (placed and delivered), MER?
5. How many *distinct* concepts are live? Show 3 best and 3 worst ads.
6. Pixel + CAPI? What event do you optimize on?
7. Who's the face/story of the brand?
8. Cash runway in weeks?

**Decision tree**
- Margin < CAC on delivered orders → fix offer/price/AOV/RTO before more creative.
- RTO > 30% → confirmation flow + prepaid incentive + optimize on confirmed event.
- CTR fine, CVR bad → landing / offer / trust issue.
- CTR bad, CPM normal → creative/concept issue.
- Repeat rate very low → product or post-purchase problem → retention playbook.
- All concepts look alike → Concept Platform rebuild.

## P2. 14-Day Customer Intelligence Sprint
- Day 1–3: Export last 300–1000 DMs/WhatsApp chats/comments/reviews. Tag: desire, problem, objection, CEP, exact phrase.
- Day 2: Launch post-purchase survey (3 Qs: how did you hear, what almost stopped you, why did you decide).
- Day 3–10: 8–12 switch interviews (mix VIP, one-time, and refused-delivery customers). Offer a thank-you gift, not cash discount.
- Day 4: RFM export from store/CRM.
- Day 11–14: Synthesize → 3–5 segments, Language Bank (50+ phrases), Top 10 CEPs, Top 5 objections.

## P3. Concept Platform Build (week 3–4)
1. Pick the strongest **tension** from research (what customers fight against).
2. Write 3 concept territories; pressure-test each: Is it ownable? Does it flex into 6+ angles? Can the founder/story engine carry it? Does it work for 90+ days?
3. Choose one. Name it. Define the visual world + distinctive assets + recurring format (series).
4. Build Angle Matrix: rows = Segments, columns = CEPs/Desires → pick 4–8 cells.
5. Per angle: 1 hero video + 1 UGC/street + 1 static/carousel, different people/settings.
6. Refresh rule: every 3–4 weeks add new angles/executions; every ~90 days evolve the concept (keep assets).

## P4. Meta Account Structure (rescue default)
- Campaign A — **Scale (Advantage+ Sales / broad):** winning concepts, 60–80% spend.
- Campaign B — **Concept Testing:** 1 ad set per new concept (or ACO/flexible format), 20–30% spend.
- Campaign C — **Brand/Story (reach or video views → later engagement custom audiences)**: founder/story content; grows as business stabilizes.
- Retargeting: usually folded into A (Advantage+ handles it); keep a small dedicated one only for high-intent offers (e.g., VIP early access) if data supports.
- Exclusions: recent purchasers on acquisition offers (when not using A+ existing-customer controls).
- Signals: CAPI + dedup; confirmed-order offline event; value passed; customer list with LTV value as seed.

## P5. VIP / Community Launch (week 4–8)
1. Pull top 5–10% customers by RFM.
2. Personal WhatsApp invite (founder/brand voice): "You're one of our first/best customers…"
3. Benefits: 48–72h early access, first look at new products, vote on next drop, birthday gift, direct line.
4. Rituals: monthly drop, member spotlight, behind-the-scenes voice note.
5. Measure vs. a holdout of similar customers not invited: repeat rate, AOV, LTV 90d.
6. Use member insights to brief next angles; use member list (with consent) as value-based seed.

## P6. Post-Purchase Flow (WhatsApp/SMS/Email)
- D0: Thank you + delivery expectation (reduces RTO).
- D+1 after delivery: How to use / style / care.
- D+5: Ask for review + photo (UGC library).
- D+14: Story content (founder/origin) — relationship, not offer.
- D+25–45: Cross-sell / replenishment / bundle.
- D+60: Win-back with *new* reason (new drop, community invite).

## P7. Creative Testing Readout
Judge concepts on 7-day window, minimum spend ≈ 2–3× target CPA per concept (heuristic).
- Hook rate < ~20–25% → hook problem (heuristic, varies by vertical).
- Good hook, low hold → story/pacing problem.
- Good CTR, low CVR → offer/landing mismatch.
- Winner = lowest CPA on **confirmed** orders with acceptable AOV — then make *new angles* of the concept, not 20 re-cuts.

## P8. Founder Story Workshop
Questions: Why did you start? What moment made you decide? What did you sacrifice? What do you refuse to compromise on? Who did you make this for? What's the hardest thing that happened? What do customers tell you that made you emotional?
Output: 30-sec version, 2-min version, 5 story "episodes" for a content series. Must be true.

## P9. Service / Lead-Gen Triage (clinics, auto service, salons, high-ticket, B2B)
Ask in this order:
1. What services, price/ticket range, and which service makes the most profit?
2. Leads per month and from where (Meta forms, WhatsApp, calls, walk-ins, Google, referrals)?
3. **Who answers, and how fast?** (Test it yourself: send a WhatsApp at 9 pm and at 1 pm. Time the reply and grade the script.)
4. Lead → booking %? Booking → show %? Show → paid %? (Case acceptance for clinics.)
5. Average ticket per visit, and visits per customer per year?
6. Google rating and number of reviews vs. top 3 local competitors?
7. Is there a CRM or at least a sheet tracking each lead to an outcome?
8. Who is the trusted face (doctor, master technician, owner)?

**Decision tree**
- Reply > 15 min or no script → fix response ops first (auto-reply, script, owner, SLA). Ads can't fix this.
- Many leads, low booking → qualification + script + offer clarity (price anchor, what's included).
- Bookings fine, low show rate → reminders (24h + 2h WhatsApp), deposit or confirmation, directions/location pin.
- Shows fine, low acceptance → trust/price presentation, financing/packages, expert explanation content.
- Few reviews / low rating → review system before scaling ads (local trust gate).
- Good everything, low volume → creative/concept + reach problem → Concept Platform.

**Signal setup:** Lead Ads (Instant Forms) + CRM stages → Conversions API → Conversion Leads optimization on "Booked" or "Showed" (pick the stage with a 1–40% rate that happens within ~28 days). WhatsApp-first: Click-to-WhatsApp with lead optimization, and tag outcomes (booked/showed/paid) in the WhatsApp CRM.

**Auto service specific:** transparency is the creative (show the worn part, price before work, video update on WhatsApp); maintenance reminders by km/date; fleet/corporate accounts as a B2B line.
**Clinic specific:** expert-led education content, comfort and pain-anxiety handling, clear pricing ranges, financing/installments, family plans, 6-month recall; strict health ad-policy compliance.

## P10. Venue / Experience Playbook (board game café, restaurant, gym, entertainment)
1. Map utilization by day × hour. Find the dead slots.
2. Map occasions (CEPs): weekend plans, birthdays, team outings, date nights, after exams, Ramadan nights, rainy days.
3. Build a **recurring program** (the Core Concept in action): weekly game night, monthly tournament, beginners' night, ladies' night, corporate team-building package.
4. Content shows **people having the moment** (laughing, competing, celebrating), not empty interiors. Make the host/game master/chef a recurring character.
5. Regulars' club: WhatsApp community, member card (Nth visit reward), early booking for events, leaderboard/hall of fame, bring-a-friend.
6. Offers target dead slots only (e.g., weekday group deal), never blanket discounts.
7. UGC loop: photo corner, hashtag, repost regulars, review ask after a great night.
8. Metrics: bookings/week, utilization of dead slots, spend per head, repeat visits 30/60d, % of visits from regulars and referrals, rating.

## P11. Agency Client Onboarding (any business)
**Day 0–2: Kickoff**
- Fill T1 (Intake Brief) with the client; get access to Ads accounts, Pixel/CAPI, CRM/booking system/POS/store, Google Business Profile, WhatsApp Business.
- Classify the business (Step 0) and agree on the **money moment** in writing. This becomes the KPI in the contract/reporting.
- Mystery-shop: message, call and (if possible) visit as a customer. Document the experience.

**Day 3–7: Audit**
- Ads audit: number of *distinct* concepts, structure, events optimized, tracking health.
- Funnel audit: each stage's conversion, plus operations leaks.
- Brand audit: platform, assets, story engine, reviews.
- Deliver T2 Scorecard + #1 bottleneck + 2-week stabilization plan.

**Week 2–4: Intelligence & Concept**
- VoC mining + 8–12 switch interviews (client helps recruit) → segments, language bank, CEPs.
- Concept Platform (T4) + Angle Matrix (T5) → client approval → production plan.

**Ongoing cadence**
- Weekly: T8 dashboard + 3 actions.
- Monthly: T9 report (delta, learnings, next month's angles, community actions).
- Quarterly: concept review (evolve or replace), budget split review, LTV cohort read.
- Add patterns that worked to `clients/_learnings.md` (anonymized).
