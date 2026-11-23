# Research Addendum — Services, Local & Lead-Gen Businesses

> مكمل لـ `01-research-report.md`. الهدف: نتأكد إن المنهج ينفع لأي بيزنس، مش بس اللي بيبيع منتجات. يعني عيادة أسنان، أو مركز صيانة عربيات، أو board game café، أو B2B.

## 1) الفكرة الأساسية: نفس المنهج، بس "لحظة الفلوس" بتختلف
في الـ e-commerce لحظة الفلوس هي الأوردر اللي اتسلم. في الخدمات هي **العميل اللي حضر ودفع**، مش الـ lead.
أغلب بيزنسات الخدمات بتخسر فلوسها **بعد** الـ lead: رد متأخر، حجز ماتمّش، العميل ماجاش، أو الخدمة ماكملتش.

## 2) Meta بتدعم التحسين على جودة الـ lead (رسمي)
- **Conversion Leads optimization:** بتبعت مراحل الـ CRM (اتحجز، حضر، دفع) لـ Meta عن طريق Conversions API، والسيستم بيتعلم يجيب ناس شبه اللي بيكملوا للآخر.
  - شغال حالياً مع Instant Forms (Lead Ads) بس.
  - Meta بتنصح إن المرحلة اللي بتحسّن عليها تكون نسبة التحويل ليها بين 1% و40%.
  - Meta بتقول إن تكلفة الـ quality lead أقل بـ 21% في المتوسط، وده **رقم Meta نفسها**.
  - Zapier بتنصح إن بيزنس الخدمات يختار مرحلة في الـ CRM بتتنبأ بالإيراد وبتحصل خلال حوالي 28 يوم من الـ lead.
- **Click-to-WhatsApp:** ينفع تحسّن على Leads أو Purchases بدل مجرد Conversations.
  - WhatsApp بتقول إن ده بيدي تكلفة lead أقل بـ 24% في المتوسط، وتكلفة purchase أقل بـ 10%. دي **أرقام ودراسات حالة Meta نفسها**.
  - فيه تعارض بين وثائق الـ API ودليل WhatsApp، فاتأكد من الاختيارات المتاحة في Ads Manager بتاعك.

## 3) Speed-to-lead
- كل المصادر متفقة على الاتجاه: كل ما ترد أسرع، كل ما التحويل يعلى. وأغلب الشركات بترد ببطء.
  - في test على 114 شركة B2B، ولا شركة اتصلت خلال 5 دقايق، و42% بس اتصلوا خلال ساعة (Workato).
- الأرقام المنتشرة زي "21x" و"391%" و"100x" **مصادرها ضعيفة**، فمانبنيش عليها وعود للعميل.
- القاعدة العملية: SLA للرد أقل من 5 لـ 15 دقيقة في ساعات الشغل، ورد تلقائي على WhatsApp بره ساعات الشغل.

## 4) Reviews و Google Business Profile (أساسي للبيزنس المحلي)
بيانات BrightLocal (vendor، والعينة أمريكية، فنتعامل معاها كاتجاه):
- 97% من الناس بيقروا الـ reviews، و41% بيقروها "دايماً" سنة 2026، بعد ما كانت 29%.
- 49% بيثقوا في الـ reviews قد ثقتهم في ترشيح شخصي.
- 47% مش هيتعاملوا مع بيزنس عنده أقل من 20 review.
- Google هي المنصة الأولى للـ reviews.

الخلاصة: للعيادة أو المركز أو الكافيه، الـ reviews جزء من الـ conversion funnel، مش "حاجة زيادة".

## 5) Compliance للمجالات الصحية (عيادات)
- سياسة Meta الرسمية بتمنع الإعلان اللي بيقول أو بيلمّح لصفات شخصية عند اللي بيتفرج، ومنها الحالات الصحية.
  - مثال ممنوع: "بتعاني من…؟".
  - استخدام "انت/بتاعك" مش ممنوع في حد ذاته. الممنوع إنك تلمّح لحالة عنده.
- مافيش استهداف بالحالات الصحية.
- الـ cosmetic procedures لازم تستهدف 18+.
- صور الـ Before/After عالية الخطورة. فيه مصدر ثانوي بيقول إن السياسة اتغيرت في يوليو 2026، **بس مش متأكد منه رسمياً**. اتأكد من Meta Business Help Center.
- لازم كمان تلتزم بقواعد الإعلان الطبي المحلية وخصوصية المرضى. أي صورة أو شهادة لمريض لازم موافقة مكتوبة.

## 6) ليه البيزنس المحلي والخدمات أكتر استفادة من فكرة البوست
- القرار مبني على **الثقة**، والثقة بتتبني بوش حقيقي (دكتور، ميكانيكي، صاحب المكان) وقصة ومجتمع.
- الـ Retention بيحصل بطبيعة الخدمة: كشف كل 6 شهور، صيانة كل 10,000 كم، game night كل أسبوع. ده Community و LTV جاهزين.
- الـ Referrals هي أقوى قناة عند أغلب بيزنسات الخدمات، و Community Building بيكبّرها.

## المصادر
- [Conversions API for CRM Integration — Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration)
- [Meta guide to better lead quality — Zapier](https://zapier.com/blog/meta-guide-to-better-lead-quality/)
- [Meta + Make: Conversions API for CRM](https://www.make.com/en/blog/meta-make-conversions-api-for-crm)
- [Down-funnel optimizations on WhatsApp — WhatsApp Business](https://business.whatsapp.com/resources/resource-library/whatsapp-business-app-resources/down-funnel-optimizations-whatsapp)
- [Click-to-WhatsApp — Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp)
- [Lead response time study (114 companies) — Workato](https://workato.com/the-connector//lead-response-time-study)
- [Vendor response time — Chili Piper](https://www.chilipiper.com/article/chili-insights-vendor-response-time)
- [Local Consumer Review Survey 2025 — BrightLocal](https://www.brightlocal.com/research/local-consumer-review-survey-2025/)
- [Do reviews still matter — Search Engine Journal](https://www.searchenginejournal.com/do-reviews-still-matter-study-looks-at-changing-consumer-behavior/541077/)
- [Health and Wellness ad policy — Meta Transparency Center](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness)
- [Privacy violations & personal attributes — Meta Transparency Center](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/)
- [Personal health and appearance — Meta Transparency Center](https://transparency.meta.com/policies/ad-standards/objectionable-content/personal-health-and-appearance)
- [Facebook ads for dental — AdsUploader](https://adsuploader.com/blog/facebook-ads-dental)
