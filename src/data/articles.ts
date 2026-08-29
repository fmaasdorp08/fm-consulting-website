export interface RichTextSegment {
  text: string;
  href?: string;
}

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph' | 'note'; content: RichTextSegment[] }
  | { type: 'list'; style: 'ordered' | 'unordered'; items: RichTextSegment[][] };

export interface Article {
  number: number;
  title: string;
  byline: string;
  slug: string;
  category: string;
  date: string;
  publishedTime: string;
  readTime: string;
  wordCount: number;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    "number": 1,
    "title": "AI Won't Fix Bad Marketing: Where Automation Actually Creates Value",
    "byline": "FM Consulting ZA",
    "slug": "ai-wont-fix-bad-marketing",
    "category": "AI & Automation",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "5 min read",
    "wordCount": 968,
    "excerpt": "Buying the tool isn't the same as fixing the problem. AI doesn't repair a broken process, it just runs it faster, mistakes and all.",
    "image": "/images/insights/ai-wont-fix-bad-marketing.jpg",
    "imageAlt": "Strategy workshop notes arranged across a planning wall",
    "imageCredit": "Walls.io",
    "imageSource": "https://www.pexels.com/photo/sticky-notes-on-a-whiteboard-15543113/",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I've had this exact conversation about six times this month. A business owner tells me they \"need to get on AI.\" Half the time they can't say what that actually means. They saw a demo. Read a LinkedIn post. Watched a competitor roll out a chatbot and got nervous. So, automation shows up as a line item in the next budget meeting before anyone's worked out what it's meant to fix."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Buying the tool isn't the same as fixing the problem. That's the part nobody wants to hear. AI doesn't repair a broken process, it just runs it faster, mistakes and all. Hand it a lead-routing workflow that's already a mess and you get the same mess, quicker and harder to unwind. What matters is whether the process was defined before you automated it, and whether a real person is on the hook for what comes out the other end."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The AI-readiness test"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Here's the test I run before anyone spends a rand on a subscription, four questions, and you need a yes to all four:"
          }
        ]
      },
      {
        "type": "list",
        "style": "ordered",
        "items": [
          [
            {
              "text": "Is the process defined? If your team can't describe the steps the same way twice, AI won't either."
            }
          ],
          [
            {
              "text": "Is the information reliable? Feed it inconsistent or outdated inputs and you'll get confident-sounding nonsense back."
            }
          ],
          [
            {
              "text": "Is there a measurable outcome? If you can't tell whether it worked, you can't tell whether it was worth paying for."
            }
          ],
          [
            {
              "text": "Is someone responsible for reviewing what comes out? Automation without an owner is just risk with a nicer interface."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Miss one and you're not ready to automate yet. You're ready to fix the process, which is less exciting, but it's where the actual leverage sits."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where it earns its keep"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "When those four boxes are ticked, AI pays for itself fast. Research synthesis: pulling scattered information into something usable. Reporting and analysis: turning raw platform exports into a proper read on performance, faster than a person building the same thing in a spreadsheet at midnight. Content operations: first drafts, variations on a theme, one idea repurposed across five channels. Then the unglamorous stuff, lead admin and routing, and repetitive internal tasks generally, the kind nobody wants to do and, because of that, nobody does well."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Notice what's missing. Positioning. Brand judgment. Anything where being confidently wrong actually costs you something."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where it shouldn't operate alone"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Pricing decisions. Brand positioning. Anything client-facing where tone carries real commercial weight, or touching someone's money, health, or legal standing. AI can take the first pass. It doesn't get final say. I've watched a support queue auto close a complaint because a bot scored it \"low priority”, technically correct, commercially disastrous. Pull the human checkpoint out and you haven't sped anything up. You've just found a faster way to be wrong in public."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Privacy, accuracy, and brand risk"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Every tool you plug into your data becomes one more place that data can leak, or quietly train a model you don't control. Every output you don't check is a factual error walking around wearing your brand's name. That's not an argument against automation; it's an argument for scoping it tightly and auditing it early. The OECD's own "
          },
          {
            "text": "research on SME AI adoption",
            "href": "https://www.oecd.org/en/publications/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6.html"
          },
          {
            "text": " backs a similar view from a different angle: it frames genuine readiness around a business's digital maturity, skills, and access to finance, alongside infrastructure like data and connectivity, not around how quickly a business can bolt new software onto old habits."
          }
        ]
      },
      {
        "type": "heading",
        "text": "One pilot beats five tools"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The businesses actually seeing returns aren't running five disconnected AI tools bolted onto processes that were never fixed. They picked one high-value, properly defined process, automated that one thing well, and let internal confidence build before touching anything else. Scattered tools produce scattered accountability. Nobody owns the outcome, so nobody notices when it quietly gets worse."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Measure it properly"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Before you switch anything on, decide what you're tracking: time saved per task, output quality against a real standard, error rate, and — the one everyone conveniently forgets, commercial impact. Time saved that never shows up as more output, better margins, or faster revenue isn't a result. It's a vanity metric with a monthly invoice attached."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Run a 30-day experiment"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Pick one process. Confirm it clears the readiness test. Put one person's name against quality control, nobody else's. Run it for 30 days. Track the four numbers above and let the evidence decide, not vibes, whether it scales, gets adjusted, or gets killed."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That's the whole methodology. It isn't complicated. Which is exactly why most businesses skip it and buy another tool instead."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "So before the next vendor pitch, do this yourself first. Write down every task your team repeats more than once a week. Run each one through the four questions above. You'll probably land on two or three real candidates, not fifty. That short list, not whatever roadmap slide someone built for the board, is where an actual automation strategy starts."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If you can't name a single process that would pass that test right now, that's fine, that's your starting point. Map the repeatable, well-defined parts of your operation before you look at software again. Picture the business you actually want: a person at the controls, automation quietly handling the repeatable steps underneath. That's not a tagline, it's closer to an org chart. An undocumented process isn't a defined one, and no AI tool is going to save it."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is the exercise I run with clients at FM Consulting before we touch a single tool. If you'd rather have someone run the diagnostic alongside you than do it solo, that's what the engagement looks like. If not, the four questions above will get you there on your own."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "OECD: AI adoption by SMEs",
              "href": "https://www.oecd.org/en/publications/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6.html"
            }
          ]
        ]
      }
    ]
  },
  {
    "number": 2,
    "title": "Before You Spend More on Marketing",
    "byline": "FM Consulting ZA",
    "slug": "before-you-spend-more-on-marketing",
    "category": "Growth Strategy",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "6 min read",
    "wordCount": 1192,
    "excerpt": "Before you put another rand into reach, find out where the current investment has stopped working.",
    "image": "/images/insights/before-you-spend-more-on-marketing.jpg",
    "imageAlt": "A single drop falling from an outdoor water tap",
    "imageCredit": "Rajesh S Balouria",
    "imageSource": "https://www.pexels.com/photo/close-up-of-dripping-outdoor-water-tap-32042965/",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "There's a sentence that can empty a marketing budget very quickly: \"We need more leads.\""
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Sometimes that's true. Often it isn't."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "More leads are easy to ask for because the fix looks obvious. Increase the ad spend. Add another channel. Post more often. Change agencies. Increase the sales force. For a business owner, that feels like action. But if the business is already losing people between the advert, the enquiry, the quote and the sale, more traffic just feeds the same problem."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Before you put another rand into reach, find out where the current investment has stopped working."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Marketing did its job. The business still lost the sale."
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A campaign can do its job and the business can still miss the sale. Follow me: someone clicks the ad, lands on the right page, fills in the form, and then waits two days for a reply. Or the enquiry gets sent to three people and nobody's sure who owns it. Or the quote goes out with no follow-up. Marketing takes the blame because revenue didn't move, even though the leak happened after the lead arrived."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The opposite happens too: sales blames poor lead quality, when the advert actually promised something the business doesn't sell at that price. Is that a sales problem? Or did the system break earlier?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I don't start with cost per click or impressions. I start with a less glamorous question: what happens, in order, from the moment a person notices the business to the point money changes hands?"
          }
        ]
      },
      {
        "type": "heading",
        "text": "See the big picture"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Keep it simple. A person sees the offer. They show interest. Their details are captured. It's now a marketing qualified lead. The team responds. The lead is qualified and is now a sales qualified lead. A quote or proposal is sent. The customer buys. Then they either return, refer someone, or disappear."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That's the growth system. Your version may involve a website, WhatsApp, a phone call, a store visit, an EFT, a sales rep, or all of them at once. It doesn't matter. Put the actual steps on one page, including the awkward manual parts people normally leave out of the presentation."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Then give every handover an owner. \"Marketing\" is not an owner. \"The sales team\" isn't much better. If nobody can name the person responsible for moving an enquiry to the next step, you've probably found part of the leak already."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The five-point leak test"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "First, are enough of the right people arriving?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Look at traffic and enquiries by source, but don't stop at volume. Which sources produce people who fit the offer, have a real need, and can actually buy? A cheap lead that never qualifies is not cheap. It's admin."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Second, do your customers understand the offer?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the right audience arrives but doesn't act, look at the promise, price, proof and next step. Can a visitor tell what you do, who it's for, and what happens after they click? If the advert says one thing and the landing page says another, don't buy more clicks. Fix the gap."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Third, can they take the next step without fighting the business?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Test the form. Test the click-to-WhatsApp button. Phone the number. Try it on a mobile connection, not only on the office Wi-Fi. Check whether a quote request asks for twelve fields when four would do. Small pockets of friction are easy to ignore internally because the team already knows how the system works. A new customer doesn't, and to them, it's not small at all."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Fourth, does anyone respond properly?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Measure how many enquiries are acknowledged, contacted, qualified and followed up. Check the time between those steps. You don't need a complicated CRM to begin; you need a reliable record and one definition of what counts. If half the leads live in someone's inbox and the other half sit unread on WhatsApp, the report is fiction. The devil is in the detail."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Fifth, does the sale hold after the marketing promise?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Measure accepted quotes, completed purchases, cancellations, returns, complaints, repeat business and referrals. A campaign that produces sales the operation can't deliver profitably is not a successful campaign. It's a capacity problem with a media budget attached."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Find the ugly number first"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Now calculate the movement between each step: relevant visits to enquiries, enquiries to qualified opportunities, qualified opportunities to quotes, quotes to sales, and customers to repeat purchases or referrals."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Don't rush off to find an industry benchmark. Your first comparison is against your own business: one offer against another, one channel against another, this month against a sensible previous period. Outside benchmarks can be useful later, but they won't explain why your Cape Town enquiries are answered and your Johannesburg enquiries aren't."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Find the first transition where performance drops. That matters because every number below it is affected by what happened above it. Fixing the bottom of the funnel while the offer is attracting the wrong audience is just tidying up the wrong end."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Fix one leak at a time"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Pick one offer and a period long enough to include its normal sales cycle. Pull the numbers from the ad platforms, website analytics, inboxes, WhatsApp logs, CRM, quoting system and sales records. They will not match neatly. That's useful information, not a reason to abandon the exercise. Don't get pulled into a side project trying to make every system agree perfectly, that's a different leak for a different day."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Choose the largest fixable leak. Make one meaningful change and leave the rest alone long enough to see what happened. It might be a clearer offer, a shorter form, a response-time rule, a quote follow-up sequence or a better qualification question."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Set the measure before you start. If the goal is more qualified enquiries, count qualified enquiries. If the goal is more sales, count completed sales and gross margin. Clicks, likes and reach can help explain the result, but they are not the result."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where the next rand should go"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the right audience isn't arriving and the rest of the system converts well, spend on reach."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If customers arrive but don't enquire, spend on the offer, proof and conversion path."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If good enquiries go cold, spend on response, ownership and follow-up."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If sales happen once and customers vanish, stop calling it an acquisition problem. That's a retention question."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is how we approach the diagnostic at FM Consulting. We map the full path, agree on the definitions, find the first material leak, and fix that before adding more activity. It is slower than approving another campaign in the budget meeting. It is also far less expensive than paying to send more people into a system that loses them."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "So before the next media proposal lands, put the real customer path on one page. Add the numbers you already have. Mark the gaps honestly."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Your growth plan starts at the first leak, not at the top of the marketing budget."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Google Analytics Help: Life cycle collection",
              "href": "https://support.google.com/analytics/answer/12924233?hl=en"
            }
          ],
          [
            {
              "text": "Google Analytics Help: User acquisition report versus traffic acquisition report",
              "href": "https://support.google.com/analytics/answer/14731736?hl=en"
            }
          ],
          [
            {
              "text": "Google Analytics Help: How to attribute credit for key events",
              "href": "https://support.google.com/analytics/answer/12958241?hl=en"
            }
          ]
        ]
      }
    ]
  },
  {
    "number": 3,
    "title": "The Numbers Look Good",
    "byline": "FM Consulting ZA",
    "slug": "the-numbers-look-good",
    "category": "Analytics",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "5 min read",
    "wordCount": 1074,
    "excerpt": "The problem is not always that the marketing is bad. Sometimes the reporting is simply answering a cheaper question.",
    "image": "/images/insights/the-numbers-look-good.jpg",
    "imageAlt": "A data-reporting dashboard displayed on a laptop screen",
    "imageCredit": "Stephen Dawson",
    "imageSource": "https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "There is a particular kind of marketing meeting I have very little patience for."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Reach is up. Engagement is up. Website traffic looks healthy. Everyone has a dashboard open, and according to the dashboard, things are moving in the right direction."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Then somebody asks the obvious question: \"So why isn't revenue growing?\""
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That is usually where the room goes quiet."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The problem is not always that the marketing is bad. Sometimes the reporting is simply answering a cheaper question. It's telling you whether activity happened, not whether that activity turned into commercially useful behaviour."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A click is real. A lead may also be real. Neither one, on its own, pays an invoice."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The dashboard may be right about the wrong thing"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Most marketing reports mix three different layers together and then treat them as if they mean the same thing."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The first layer is activity: impressions, reach, views, visits, engagement and enquiries. Useful. But they are evidence of motion, not evidence of growth."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The second layer is efficiency: cost per click, cost per lead, conversion rate and cost per acquisition. Still, a cheap lead that nobody can sell to is expensive in a nicer outfit."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The third layer is the real business outcome: qualified opportunities, won business, revenue, margin, repeat purchases, and the time it took to get there."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is where the reporting often breaks. Marketing owns the activity data. Sales owns the pipeline. Finance owns the revenue. Everyone reports their part, and nobody joins the three together. So the numbers look good in three separate rooms while the business result goes missing between them."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Define what you're actually calling a conversion"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Before I trust a dashboard, I want to know what the business has decided counts as success."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A form submission? A WhatsApp enquiry? A booked meeting? A qualified opportunity? A signed proposal? Money in the bank?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Google Ads describes a conversion",
            "href": "https://support.google.com/google-ads/answer/6308?hl=en"
          },
          {
            "text": " as a customer action that the advertiser has chosen as valuable. That choice matters. If downloading a brochure and completing a purchase both sit in the report under \"conversions,\" the total can rise while the commercial value falls."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I am not saying the smaller actions are useless. They can show progress. I am saying they need names, definitions and different values. A person who opened a PDF is not in the same place as somebody who has budget, a real need and a decision date."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the dashboard hides that difference, it is decorating the problem."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Attribution is not a court judgment"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Google Analytics defines attribution",
            "href": "https://support.google.com/analytics/answer/14547371?hl=en"
          },
          {
            "text": " as assigning credit to ads, clicks and other factors along the path to a meaningful action. The important word is assigning. Attribution is a model. It is a structured way of interpreting a journey, not a camera recording the full truth."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "One customer may see a LinkedIn post, search the business two weeks later, click a Google ad, speak to somebody on WhatsApp, disappear, return through email, and eventually sign a proposal after a phone call. Which channel made the sale?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The answer depends on the question, the data available and the attribution model being used. That's why I get nervous when three platforms all appear to claim the same revenue. Each platform sees the part of the journey it can see."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Use attribution. Just don't confuse it with certainty."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where the revenue connection usually disappears"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The first gap is definition. Marketing says \"lead.\" Sales means \"person worth speaking to.\" Finance means nothing until there is actual revenue. Agree on the stages, or every conversion rate after that is suspect."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The second gap is the handover. A lead enters a form, inbox, spreadsheet or CRM, but the original source gets lost. When the sale eventually closes, nobody can connect it back to the campaign."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The third gap is offline activity. Calls, proposals, meetings, store visits and WhatsApp conversations may carry the real commercial work, while the analytics platform only sees the first online action. "
          },
          {
            "text": "Google",
            "href": "https://support.google.com/google-ads/answer/13063108?hl=en"
          },
          {
            "text": " and "
          },
          {
            "text": "Meta",
            "href": "https://www.facebook.com/business/help/AboutConversionsAPI"
          },
          {
            "text": " both provide ways to send later-stage or offline outcomes back into their measurement systems. That doesn't make the data perfect, but it shows why measuring only the website form is incomplete."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The fourth gap is averaging. A channel can look profitable overall while one campaign, service line, region or customer type is carrying the result. Average performance is very good at hiding who is doing the work."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "And then there is timing. Marketing activity happens now. Revenue may arrive later. If the reporting window ignores the normal sales cycle, a good campaign can look weak too early, or an old campaign can make this month's activity look better than it is."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Five questions the dashboard must answer"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I use five questions to pull the reporting back towards the business:"
          }
        ]
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "What did we spend, and where?"
            }
          ],
          [
            {
              "text": "What meaningful customer action did that spend produce?"
            }
          ],
          [
            {
              "text": "How many of those actions became qualified opportunities?"
            }
          ],
          [
            {
              "text": "What became won revenue and useful margin?"
            }
          ],
          [
            {
              "text": "Where did people stall, drop out or take longer than expected?"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the dashboard cannot answer those questions, adding more charts will not save it."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Rebuild the monthly scorecard"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I would start with one page."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "At the top: spend, qualified opportunities, wins, revenue and margin. Under that: the movement between stages. Then the diagnostic numbers such as source, cost, conversion rate and time in stage."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Every metric needs a plain-language definition. Every lead source needs to survive the handover into the sales record. Every closed deal needs a value and an outcome. And when the data is incomplete, say so. An honest gap is more useful than a confident fiction."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Run this for a month before buying another reporting tool. Pick a recent period, trace actual customers backwards, and compare what marketing, sales and finance each recorded. You will find the breaks quickly."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The objective is not a prettier dashboard. It is a line of sight from money spent to money earned, with enough detail to tell you where the system is working and where it is leaking."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the numbers look good but revenue is not growing, don't start by arguing about the colour of the chart. Ask whether you are measuring activity, efficiency or an actual business outcome."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That distinction is where a useful conversation starts."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Google Analytics: GA4 attribution",
              "href": "https://support.google.com/analytics/answer/14547371?hl=en"
            }
          ],
          [
            {
              "text": "Google Ads: Conversion tracking definition",
              "href": "https://support.google.com/google-ads/answer/6308?hl=en"
            }
          ],
          [
            {
              "text": "Google Ads: Conversion values, including qualified and closed offline leads",
              "href": "https://support.google.com/google-ads/answer/13063108?hl=en"
            }
          ],
          [
            {
              "text": "Meta Business Help Centre: About Conversions API",
              "href": "https://www.facebook.com/business/help/AboutConversionsAPI"
            }
          ]
        ]
      }
    ]
  },
  {
    "number": 4,
    "title": "More Leads Won't Fix a Weak Sales Process",
    "byline": "FM Consulting ZA",
    "slug": "more-leads-wont-fix-a-weak-sales-process",
    "category": "Sales Performance",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "6 min read",
    "wordCount": 1104,
    "excerpt": "If enquiries are sitting in a shared inbox, being called late and then forgotten, adding more leads doesn't fix the problem.",
    "image": "/images/insights/more-leads-wont-fix-a-weak-sales-process.jpg",
    "imageAlt": "Close-up of an industrial pipeline valve",
    "imageCredit": "Ries Bosch",
    "imageSource": "https://unsplash.com/photos/close-up-of-an-old-industrial-valve-with-date-1901-ZZw8xM0s3sc",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "\"More leads\" is one of the easiest answers to give when the sales pipeline looks thin."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "It gives marketing something to launch and delays the more uncomfortable question: what happened to the leads you already had?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If enquiries are sitting in a shared inbox, being called late, sent the same generic proposal, and then forgotten, adding more leads doesn't fix the problem. It gives you a larger pile of unworked customers nobody followed up with properly."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That is not a lead-generation problem. That is a sales-process problem wearing a marketing label."
          }
        ]
      },
      {
        "type": "heading",
        "text": "A lead is not an opportunity"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The word \"lead\" does far too much work inside most businesses."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Marketing may use it for anybody who completed a form. Sales may only count somebody who answered the phone. Management may hear \"lead\" and imagine revenue entering the pipeline."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A lead is an expression of interest. An opportunity is a lead the business has qualified and decided is genuinely worth pursuing. The exact criteria will vary, but the distinction needs to exist."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Microsoft's Dynamics 365 guidance",
            "href": "https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales"
          },
          {
            "text": " uses repeatable stages from lead through qualification, proposal and close. I care that the team can explain those stages without making them up as they go."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Here is the handover I want to see:"
          }
        ]
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "The enquiry is captured with its source."
            }
          ],
          [
            {
              "text": "One person owns it."
            }
          ],
          [
            {
              "text": "The first contact attempt has a due time."
            }
          ],
          [
            {
              "text": "The lead is qualified against agreed criteria."
            }
          ],
          [
            {
              "text": "A next step and date are recorded."
            }
          ],
          [
            {
              "text": "The opportunity either moves forward or closes with a real reason."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A CRM is not the process. Without those behaviours, it is a filing cabinet with notifications."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where leads normally disappear"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The first leak is ownership. A form goes to a group inbox. A WhatsApp message sits on somebody's phone. Everybody assumes somebody else called."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The second leak is response. I'm not going to invent one magic number for every business. But the business needs an agreed response standard, cover for when the owner is unavailable, and a visible list of overdue enquiries."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The third leak is qualification. \"Bad lead\" is often shorthand for \"we never agreed what good looks like.\" Decide what matters: fit, need, ability to buy, decision process, timing and whether there's a sensible next step. Disqualifying honestly is better than filling the pipeline with polite fiction."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The fourth leak is follow-up. One email goes out. No reply. The record goes quiet. If there's no next action with a date, there's no follow-up system. There's memory, but memory is not a reliable sales tool."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The fifth leak is the proposal. A template goes out before the need is properly understood. It describes the company, lists services, ends with a price, and everybody waits."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A proposal without an agreed problem, decision process and next step is a document. It is not a deal."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "And then there are the lost reasons. If every closed record says \"not interested,\" you haven't collected sales data. You've collected a shrug."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Is it lead quality or the sales process?"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is where marketing and sales usually start blaming each other. I'd rather audit the handover."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Take a recent batch of enquiries and trace each one from source to outcome. Don't start with the dashboard. Open the actual records."
          }
        ]
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Was the contact information usable?"
            }
          ],
          [
            {
              "text": "Was an owner assigned?"
            }
          ],
          [
            {
              "text": "How long did the first meaningful contact take?"
            }
          ],
          [
            {
              "text": "Was the person reached?"
            }
          ],
          [
            {
              "text": "Did the lead meet the agreed qualification criteria?"
            }
          ],
          [
            {
              "text": "Was a next step booked?"
            }
          ],
          [
            {
              "text": "If a proposal was sent, what happened after that?"
            }
          ],
          [
            {
              "text": "Was the final outcome and reason recorded?"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Patterns appear quickly."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If people can't be reached because the details are false or incomplete, look at the source and form quality."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If people are reached but rarely qualify, inspect the targeting, offer and definition of a lead."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If qualified opportunities reach proposal stage and then stall, look at discovery, value, decision-making, proposal quality and follow-up."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If nobody can answer because the records are blank, the first problem isn't performance. It's visibility."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The bare minimum follow-up system"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "You don't need a massive sales transformation project to fix the basics."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Every new enquiry needs an owner and a due date. Every contacted lead needs a qualification status. Every open opportunity needs a next action and date. Every lost opportunity needs a reason somebody can learn from."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Then create a follow-up rhythm that makes sense for the buying process. Not a sequence designed to annoy people until they surrender. A deliberate set of contacts across the channels the customer uses, with a reason for each one."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the customer says no, record the no. If the timing is wrong, set a future date. If there's no fit, close it. It's simple: a clean pipeline is more useful than a large one full of ghosts."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Five numbers I would review"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "I'd keep the first view simple:"
          }
        ]
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Time to first meaningful contact."
            }
          ],
          [
            {
              "text": "Contact rate."
            }
          ],
          [
            {
              "text": "Qualification rate."
            }
          ],
          [
            {
              "text": "Proposal-to-win rate."
            }
          ],
          [
            {
              "text": "Time sitting in each stage without a next action."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "These numbers tell you where to look. Add lead source and revenue, and you can separate channels creating volume from those creating opportunities the business can actually close."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Google Ads provides a process",
            "href": "https://support.google.com/google-ads/answer/9888656"
          },
          {
            "text": " for importing later-stage lead outcomes back into campaign measurement. The advertising system should eventually learn the difference between a form submission and a qualified or closed lead."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Run the meeting differently"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Once a week, put marketing and sales in the same review. I saw this work well at a call centre I used to work at and it produced actionable next steps, not just a status update."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Look at enquiries by source. Check anything untouched or overdue. Review which leads moved, which stalled, and why. Look at proposals with no next step. Check the lost reasons. Compare won business back to where it started."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Don't turn it into a two-hour presentation. The meeting exists to assign action, not admire the CRM."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "More leads become useful once this process is working. Until then, more volume just hides the real issue and makes the backlog more expensive."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Before spending another rand on lead generation, map the handover from enquiry to sale. Give every stage an owner, a definition and a next action."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If the process is sound and the business still needs more volume, excellent. Go and get more leads."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "But if the process is weak, fix the pipe before you open up the tap."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Microsoft Learn: Understand the sales process",
              "href": "https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales"
            }
          ],
          [
            {
              "text": "Microsoft Learn: Qualify and convert a lead to an opportunity",
              "href": "https://learn.microsoft.com/en-us/dynamics365/sales/qualify-lead-convert-opportunity-sales"
            }
          ],
          [
            {
              "text": "Salesforce Trailhead: Track prospects with Salesforce Leads",
              "href": "https://trailhead.salesforce.com/content/learn/modules/prospect-tracking-with-salesforce-leads-quick-look/track-prospects-with-salesforce-leads"
            }
          ],
          [
            {
              "text": "Google Ads: About enhanced conversions for leads",
              "href": "https://support.google.com/google-ads/answer/9888656"
            }
          ]
        ]
      }
    ]
  },
  {
    "number": 5,
    "title": "Retention Before Reach",
    "byline": "FM Consulting ZA",
    "slug": "retention-before-reach",
    "category": "Retention",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "6 min read",
    "wordCount": 1124,
    "excerpt": "If customers can reasonably return, renew, upgrade, replenish or refer, ignoring them while paying for more strangers deserves a proper explanation.",
    "image": "/images/insights/retention-before-reach.jpg",
    "imageAlt": "A hand watering an established green plant",
    "imageCredit": "Olga Lioncat",
    "imageSource": "https://www.pexels.com/photo/hand-watering-plant-7245617/",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "New customers make better slides."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Acquisition has a campaign, a lead number, a cost and a graph pointing upwards. Retention is quieter. It looks like a second order, a renewal that didn't lapse, a customer who came back without needing to be convinced from scratch. Because it's less visible, it often gets whatever is left after the acquisition budget has been approved."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That's backwards when the business already has customers who should be buying again and aren't."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Retention is not always the answer. A business entering a new market genuinely needs reach. But if customers can reasonably return, renew, upgrade, replenish or refer, ignoring them while paying for more strangers deserves a proper explanation."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Retention is not another campaign"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The first question isn't, \"What should we send the database?\" It's, \"Why would a good customer want to come back?\""
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If delivery was late, support disappeared, the invoice was wrong, or the product didn't do what the marketing promised, an email sequence won't repair the relationship. Retention starts in the experience, not in the email platform."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Look at complaints, refunds, cancellations, missed service levels and unresolved tickets. If the same issue keeps appearing, fix it before you launch a loyalty idea. A discount offered on top of a bad experience is not loyalty. It's a cheaper version of the same disappointment."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The retention decision"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Before moving budget from acquisition, answer five questions."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Can the customer reasonably buy again? Define the next useful action: a reorder, renewal, service interval, upgrade, related product or referral. \"Stay engaged with the brand\" is not an action."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Did the customer receive the value they paid for? If you can't confirm delivery, usage or satisfaction, start with onboarding, adoption or service recovery. Selling the next thing can wait."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Do you know when a customer is due, active, at risk or lapsed? A person who bought last week shouldn't receive the same message as someone who disappeared a year ago. Set the normal buying or renewal window, then define what late means."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Do you have clean contact details and a lawful reason to use them? Being in a spreadsheet is not permission. South Africa's POPIA rules for electronic direct marketing matter, especially when old lists have moved between staff, agencies and systems."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Does the next sale make commercial sense? Measure gross margin, fulfilment cost, discount and service load. Revenue bought with a heavy discount and expensive support can look good in the CRM while doing very little for the business."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If those answers are weak, don't build a retention campaign yet. Fix the missing part first."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Stop treating the database as one audience"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A customer database is a history of different relationships, not a mailing list."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "New customers may need onboarding. Active customers may be due to reorder or renew. At-risk customers may be using less or have an unresolved complaint. Lapsed customers need a reason to return, not a cheerful \"we miss you\" sent on schedule. Strong customers may be ready to refer, review or upgrade."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Those groups shouldn't get the same message. The timing, offer and next step should match what the business knows. If all you have is a name and email address, improve the data through real customer interactions. Don't fill the gap with assumptions."
          }
        ]
      },
      {
        "type": "heading",
        "text": "What useful retention looks like"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Onboarding matters when customers buy but fail to start, use or understand the product. Help them reach the value they paid for."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Reorder and renewal reminders work when timing is predictable. Base them on the purchase or contract date, not on the marketing calendar. A useful reminder arrives because something is due. A nuisance arrives because it's Tuesday."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A next offer should follow naturally from the first purchase and stay close to the original need. A win-back message needs a credible reason to reconsider, such as a fixed service issue or a changed offer. Sometimes the right first message is a question: what made you stop?"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Measure behaviour, not database activity."
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Open rates and clicks can help diagnose a message. They don't prove retention."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Track repeat purchase or renewal, time to the second purchase, order frequency, revenue and gross margin per customer, reactivation, cancellations, refunds, complaints and opt-outs. Choose measures that fit the buying cycle. A monthly measure makes no sense for a service customers normally renew once a year."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Compare customer groups over time. Cohort analysis can show whether customers acquired in different periods behave differently later. It may expose a campaign that produced first purchases but little return behaviour."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If possible, leave a small comparable group out of the activity. Otherwise, a customer who would have returned anyway gets counted as a campaign success."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Keep the POPIA line clear"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The Information Regulator's guidance",
            "href": "https://inforegulator.org.za/wp-content/uploads/2020/07/GUIDANCE-NOTE-ON-DIRECT-MARKETING-IN-TERMS-OF-THE-PROTECTION-OF-PERSONAL-INFORMATION-ACT-4-OF-2013-POPIA.pdf"
          },
          {
            "text": " is specific. Electronic direct marketing to an existing customer is allowed only under conditions. Contact details must have been obtained in the context of a sale, the marketing must concern the business's own similar products or services, and the customer must get a reasonable, free and uncomplicated opportunity to object when details are collected and with each message."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "So a purchased list is not a retention strategy. Neither is an old spreadsheet nobody can explain."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Keep records of consent and objections. Identify the sender. Give people a working way to stop the messages, and honour it. If permissions are unclear, clean that up before you reactivate the database."
          }
        ]
      },
      {
        "type": "heading",
        "text": "When reach should still win"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Keep investing in acquisition when customers have little reason to buy again, the business is entering a new category or location, the existing base is too small for the growth target, or retention is healthy and the constraint really is demand."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The two still connect. The promises used to win customers shape whether they stay. The reasons they leave should change what marketing says next."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Run one retention test"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Pick one customer segment, one behaviour you want to change and one reason the customer might care. Set the baseline. Run the activity for a period that fits the buying cycle. Measure commercial movement, service impact and opt-outs. Then decide whether to scale, change or stop."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This is how we handle retention work at FM Consulting. We start with the customer journey and the business economics, not with a campaign calendar. If there's a service problem, it goes on the table. If the data is unusable, that gets fixed. If acquisition is still the right answer, the numbers should show it."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Your next rand does not automatically belong at the top of the funnel. Sometimes it belongs with the customers who have already told you yes once."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Information Regulator: Guidance Note on Direct Marketing under POPIA",
              "href": "https://inforegulator.org.za/wp-content/uploads/2020/07/GUIDANCE-NOTE-ON-DIRECT-MARKETING-IN-TERMS-OF-THE-PROTECTION-OF-PERSONAL-INFORMATION-ACT-4-OF-2013-POPIA.pdf"
            }
          ],
          [
            {
              "text": "Google Analytics Help: Retention overview report",
              "href": "https://support.google.com/analytics/answer/11004084?hl=en"
            }
          ],
          [
            {
              "text": "Google Analytics Help: Cohort exploration",
              "href": "https://support.google.com/analytics/answer/9670133?hl=en"
            }
          ]
        ]
      }
    ]
  },
  {
    "number": 6,
    "title": "POPIA, Consent, and Direct Marketing",
    "byline": "FM Consulting ZA",
    "slug": "popia-consent-and-direct-marketing",
    "category": "Compliance",
    "date": "29 August 2026",
    "publishedTime": "2026-08-29T00:00:00+02:00",
    "readTime": "7 min read",
    "wordCount": 1272,
    "excerpt": "A customer database can be valuable. It can also become the part nobody can properly explain.",
    "image": "/images/insights/popia-consent-and-direct-marketing.jpg",
    "imageAlt": "A smartphone displaying a privacy policy update agreement",
    "imageCredit": "Rahul Shah",
    "imageSource": "https://www.pexels.com/photo/smartphone-with-updating-app-6458059/",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A customer database can be valuable. It can also become the part nobody can properly explain."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A contact form becomes a spreadsheet. The spreadsheet gets imported into a CRM. An old mailing list appears. A campaign partner sends over leads. Before long, the business has thousands of names but no reliable answer to a basic question: why are we allowed to contact this person?"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "That is a compliance problem waiting for a campaign."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "This article is practical marketing guidance, not legal advice. If your circumstances are unclear or the risk is material, speak to a South African privacy lawyer."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Start with the channel"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "POPIA does not treat every form of direct marketing the same way. The Information Regulator separates unsolicited electronic communication under section 69 from non-electronic direct marketing under the Act's broader lawful-processing rules."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Email, SMS, telephone calls, automated calls, push notifications and direct messages on platforms such as LinkedIn or Instagram fall on the electronic side in the Regulator's guidance. Post, hand-delivered mail and in-person approaches are non-electronic."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The telephone point catches people out. A live sales call may feel different from an email blast, but the Regulator's current view is that telephone calling is electronic communication. Don't build a cold-calling process on the assumption that it sits outside section 69."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Consent is not a vague checkbox"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "For unsolicited electronic direct marketing, the starting rule is simple: processing is prohibited unless the person has consented or qualifies under the existing-customer exception."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "If consent is required, you may approach a person once to ask for it, provided they haven't previously withheld it. The request must use Form 4 or a substantially similar form and process. It needs to specify the goods or services and intended channel so consent can be voluntary, specific and informed. If consent is requested by telephone, the Regulator says the Form 4 content must be read out and the call recorded."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Silence is not consent. Neither is a CRM field that says \"source: website\" with no record of what the person saw or agreed to. The responsible party carries the burden of proving consent, so your records need to do more than suggest it probably happened."
          }
        ]
      },
      {
        "type": "heading",
        "text": "The customer exception is narrower than it sounds"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Being in the CRM does not make someone a customer for section 69. The exception applies where you obtained the contact details in the context of a sale, market your own similar products or services, and gave the customer a reasonable opportunity to object when the details were collected and in every marketing communication after that. The objection must be free and free of unnecessary formality."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A lead, old enquiry or event attendee does not automatically qualify. Nor does a customer relationship give you an unrestricted right to promote anything sold by an affiliate or campaign partner. \"Own similar products or services\" matters, and the answer depends on what was sold and what you now want to market."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Non-electronic does not mean unregulated"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "For post or in-person direct marketing, consent may not always be required. A business may be able to rely on legitimate interests, but that is not a free pass. The Regulator expects an assessment before processing starts: identify the purpose, test necessity and proportionality, then balance the business interest against the person's rights, expectations and likely impact."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A person can object at any time. Once they do, the processing must stop. The Regulator also says businesses must maintain a database of objections so those people are not contacted again."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Where databases go wrong"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The risky cases are usually ordinary: an old spreadsheet with no provenance, a purchased or rented list, consent wording nobody can find, or an unsubscribe that removes a person from one campaign but leaves them active elsewhere."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A bought list is not automatically usable. The Regulator treats the sharing, sale or rental of contact details as further processing that must comply with POPIA's purpose and transparency requirements. Electronic outreach still has to clear section 69. An email address on a public profile does not, on its own, create blanket permission to market electronically."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Your CRM should record the contact source, collection date, privacy or consent wording shown, purpose, approved channel, and whether you rely on consent or the customer exception. Record objections and withdrawals too. Keep the minimum information needed to honour them and prevent an accidental re-import."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Do not outsource the responsibility"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Your CRM provider, email platform, call centre or agency may be an operator processing personal information on your behalf. POPIA requires an operator to act with your knowledge or authorisation, keep the information confidential and maintain appropriate security measures under a written contract. It must notify you immediately where there are reasonable grounds to believe unauthorised access occurred."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Buying software does not transfer accountability. You still need to know who can access the data, where it is stored, how suppression records move between systems, and what happens when a provider relationship ends. If personal information moves outside South Africa, section 72 adds another layer to check."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Run the audit before the next campaign"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Here is the practical review I would run:"
          }
        ]
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Map every list and state where it came from."
            }
          ],
          [
            {
              "text": "Classify each contact: proven consent, qualifying customer, another defensible basis for non-electronic marketing, or unresolved."
            }
          ],
          [
            {
              "text": "Review every form, landing page and checkout. Save the exact wording and version, not just the submission date."
            }
          ],
          [
            {
              "text": "Test objections and unsubscribes from the customer's side. Confirm they update the CRM, campaign tools and external providers."
            }
          ],
          [
            {
              "text": "Review provider contracts, security controls, access rights, data locations and offboarding."
            }
          ],
          [
            {
              "text": "Assign one owner for consent evidence, suppression records and retention rules."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Anything unresolved stays out of the campaign until someone can support it. \"We have always used this list\" is not a lawful basis. It's just an old habit."
          }
        ]
      },
      {
        "type": "heading",
        "text": "When to bring in legal counsel"
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Get formal advice where list origins are unclear, the customer exception or \"similar products\" test is disputed, data is shared across companies, children or special personal information are involved, automated profiling affects people materially, or data moves across borders. Do the same for a complaint, security compromise, high-volume campaign or unusual channel."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A marketing adviser can map the data flow, repair forms and CRM fields, test unsubscribe journeys and put ownership around the process. A lawyer should make the call where the legal basis or risk is genuinely uncertain."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "My view is simple: if your team cannot explain why each person is on the list, what you may send them, and how they can stop it, the database is not ready to scale."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "At FM Consulting, we help growing businesses review the marketing operation around the data: where it enters, how it moves, and where the controls break. Clean that up before you add another tool, provider or campaign."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Sources and further reading"
      },
      {
        "type": "list",
        "style": "unordered",
        "items": [
          [
            {
              "text": "Protection of Personal Information Act 4 of 2013 — official government PDF",
              "href": "https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf"
            },
            {
              "text": ": sections 1, 8, 11, 13–21, 69, 71 and 72 underpin the definitions, consent burden, objections, documentation, retention, operator controls, electronic direct-marketing rules, automated decisions and cross-border transfers."
            }
          ],
          [
            {
              "text": "Information Regulator Guidance Note on Direct Marketing, 3 December 2024",
              "href": "https://inforegulator.org.za/wp-content/uploads/2020/07/GUIDANCE-NOTE-ON-DIRECT-MARKETING-IN-TERMS-OF-THE-PROTECTION-OF-PERSONAL-INFORMATION-ACT-4-OF-2013-POPIA.pdf"
            },
            {
              "text": ": paragraphs 4–7 distinguish electronic and non-electronic marketing, state the Regulator's view on telephone calls, explain consent and the customer exception, and require objection records. Paragraphs 9–10 address collection sources, transparency, list sharing and profiling."
            }
          ],
          [
            {
              "text": "Information Regulator Form 4 — consent for electronic direct marketing",
              "href": "https://inforegulator.org.za/wp-content/uploads/2020/07/FORM-4-APPLICATION-FOR-THE-CONSENT-OF-A-DATA-SUBJECT-FOR-THE-PROCESSING-OF.pdf"
            },
            {
              "text": ": the prescribed consent fields and channel choices."
            }
          ]
        ]
      },
      {
        "type": "note",
        "content": [
          {
            "text": "The Regulator states that its Guidance Note is advisory. POPIA and its Regulations prevail if there is any inconsistency. This article therefore describes telephone classification specifically as the Regulator's current view."
          }
        ]
      }
    ]
  }
];
