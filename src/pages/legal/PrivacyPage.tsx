import { legalEntity } from '@/config';
import { A, Callout, Details, H3, LegalLayout, List, P, type LegalSection } from './LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    content: (
      <>
        <P>
          <strong>{legalEntity.name}</strong> (registration number {legalEntity.registrationNumber}), trading as{' '}
          {legalEntity.tradingName}, is the responsible party for personal information collected through{' '}
          {legalEntity.website} (the “Site”). In this policy, “we”, “us” and “our” mean FM Consulting.
        </P>
        <P>
          Words such as “personal information”, “processing”, “responsible party” and “operator” have the meanings given
          to them in the Protection of Personal Information Act, 2013 (“POPIA”).
        </P>
        <P>
          This policy covers the Site, the enquiries it receives and our newsletter. Personal information we process
          for clients during a consulting engagement is governed by our agreement with that client.
        </P>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'Information we collect',
    content: (
      <>
        <H3 n="2.1">Information you give us</H3>
        <List
          items={[
            <>
              <strong>Contact form.</strong> Your name, company, email address, phone number (optional), the service
              you’re interested in, an indicative budget (optional) and your message.
            </>,
            <>
              <strong>Newsletter.</strong> Your email address, and a record of your consent: the date, time and the
              wording you agreed to.
            </>,
            <>
              <strong>Direct contact.</strong> Whatever you include when you email, call or message us.
            </>,
          ]}
        />
        <P>
          Please don’t send us special personal information — such as health information or details of your religious
          or political beliefs — or information about children. We don’t need it.
        </P>
        <H3 n="2.2">Information collected automatically</H3>
        <P>When you visit the Site, our analytics and advertising tools collect:</P>
        <List
          items={[
            'your device and browser type, operating system, screen size and language;',
            'your IP address, from which an approximate location (city or country) is derived;',
            'the pages you view, how you arrived (the referring site and any campaign tags), time on page, and clicks on buttons and contact links;',
            'cookie and similar identifiers set by Google Analytics and Meta (see section 05).',
          ]}
        />
        <Callout>
          We never send what you type into our forms — your name, email, phone number or message — to Google or Meta.
        </Callout>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    title: 'How we use it, and why we may',
    content: (
      <>
        <P>We process personal information only for these purposes, each with a lawful basis under POPIA:</P>
        <List
          items={[
            <>
              <strong>Responding to your enquiry</strong> — replying, scheduling a consultation and preparing a
              proposal. Basis: steps you have asked us to take before a possible contract, and our legitimate interest
              in responding to business enquiries.
            </>,
            <>
              <strong>Sending our insights newsletter</strong> — only if you subscribed. Basis: your consent. Every
              email includes a way to unsubscribe.
            </>,
            <>
              <strong>Understanding how the Site performs</strong> — measuring traffic, which content is read and
              which pages lead to enquiries, using Google Analytics. Basis: our legitimate interest in running and
              improving the Site or, for visitors from the UK, the EEA and Switzerland, your consent.
            </>,
            <>
              <strong>Measuring and improving our advertising</strong> — measuring whether our ads on Facebook and
              Instagram lead to visits and enquiries, and showing our ads to people who have visited the Site, using
              the Meta Pixel. Basis: our legitimate interest in marketing our own services or, for visitors from the
              UK, the EEA and Switzerland, your consent. You can object or withdraw consent at any time (see sections
              05 and 08).
            </>,
            <>
              <strong>Keeping the Site secure and meeting legal obligations</strong> — preventing spam and abuse,
              keeping records the law requires and responding to lawful requests. Basis: legal obligation and
              legitimate interest.
            </>,
          ]}
        />
        <P>
          We don’t sell personal information. We won’t add you to our newsletter because you sent an enquiry, and we
          won’t use your information for a new purpose that isn’t compatible with these without telling you first.
        </P>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    content: (
      <>
        <P>
          We share personal information only with service providers (operators) that help us run the Site and our
          business, and only to the extent each needs it:
        </P>
        <List
          items={[
            <>
              <strong>Vercel</strong> — hosts the Site and processes server logs, including IP addresses.
            </>,
            <>
              <strong>Web3Forms</strong> — receives contact form and newsletter submissions and forwards them to our
              inbox.
            </>,
            <>
              <strong>Microsoft</strong> — our email service, where enquiries are received and answered.
            </>,
            <>
              <strong>Google</strong> — Google Analytics 4, for Site measurement.
            </>,
            <>
              <strong>Meta Platforms</strong> — the Meta Pixel, for advertising measurement and audiences.
            </>,
            <>
              <strong>Unsplash</strong> — some images load from Unsplash’s servers, which receive your IP address
              when they do.
            </>,
          ]}
        />
        <P>
          We may also disclose information where the law, a court or a regulator requires it, to protect our legal
          rights, or to a successor if our business is reorganised or sold. Any successor must honour this policy.
        </P>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    content: (
      <>
        <P>
          The Site sets no cookies of its own. It remembers your cookie choice, if you make one, in your browser’s
          local storage. The measurement tools we use do set cookies, and they load only on our live website:
        </P>
        <List
          items={[
            <>
              <strong>Analytics — Google Analytics 4.</strong> Cookies named <code>_ga</code> and{' '}
              <code>_ga_&lt;ID&gt;</code> distinguish visitors and sessions. They last up to two years.
            </>,
            <>
              <strong>Advertising — Meta Pixel.</strong> The <code>_fbp</code> cookie links visits to ad activity and
              lasts up to 90 days. Meta may also use its own cookies if you are logged in to Facebook or Instagram.
            </>,
          ]}
        />
        <H3 n="5.1">Visitors from the UK, the EEA and Switzerland</H3>
        <P>
          If you visit from the United Kingdom, the European Economic Area or Switzerland, analytics and advertising
          cookies stay off unless you accept them in the cookie notice. Until then, the Meta Pixel does not load and
          Google Analytics runs in a cookieless mode that sends no cookie identifiers. To decide whether to show the notice,
          we check the country you are visiting from, as indicated by your IP address. We don’t store your IP
          address.
        </P>
        <H3 n="5.2">Your choices</H3>
        <List
          items={[
            'Change or withdraw your choice at any time under “Cookie preferences” at the bottom of every page. Declining also records your objection to analytics and advertising cookies under POPIA.',
            'We honour the Global Privacy Control signal. If your browser sends it, we treat it as declining analytics and advertising cookies.',
            'Block or delete cookies in your browser settings. The Site works without them.',
            <>
              Install Google’s{' '}
              <A href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</A>.
            </>,
            'Manage how Meta uses your activity for ads in your Facebook or Instagram account settings, under Accounts Centre → Ad preferences.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'cross-border',
    title: 'Cross-border transfers',
    content: (
      <>
        <P>
          Our service providers store and process information outside South Africa, mainly in the United States and
          the European Union.
        </P>
        <P>
          As section 72 of POPIA requires, we only transfer personal information abroad where the recipient is bound
          by law, binding corporate rules or an agreement that gives it protection substantially similar to POPIA, or
          where the transfer is necessary to deal with your request or with your consent.
        </P>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    content: (
      <List
        items={[
          <>
            <strong>Enquiries that don’t lead to an engagement</strong> — up to 24 months after our last contact, then
            deleted.
          </>,
          <>
            <strong>Client correspondence</strong> — for the engagement and afterwards for as long as tax and company
            law require us to keep records, typically five to seven years.
          </>,
          <>
            <strong>Newsletter</strong> — until you unsubscribe. We keep a record of your consent and of your opt-out
            for as long as we need it to show we respected your choice.
          </>,
          <>
            <strong>Analytics</strong> — Google Analytics event data is kept for no more than 14 months. Meta keeps
            Pixel data under its own terms.
          </>,
          <>
            <strong>Hosting logs</strong> — kept by Vercel for a limited period for security and operations.
          </>,
        ]}
      />
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    content: (
      <>
        <P>Under POPIA you have the right to:</P>
        <List
          items={[
            'ask whether we hold personal information about you, and request a copy of it;',
            'ask us to correct or delete information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading or obtained unlawfully;',
            'object, on reasonable grounds, to our processing of your information — and object to direct marketing at any time;',
            'withdraw any consent you have given, such as for our newsletter;',
            'not be subject to decisions based solely on automated processing that significantly affect you (we make none);',
            'lodge a complaint with the Information Regulator.',
          ]}
        />
        <P>
          To exercise any of these rights, contact our Information Officer (section 11). We will need to verify your
          identity, and we aim to respond within 30 days. Confirming whether we hold your information is free. If a
          prescribed fee applies to a copy of records, we will tell you before we charge it. You may also request
          records under the Promotion of Access to Information Act, 2000.
        </P>
      </>
    ),
  },
  {
    id: 'direct-marketing',
    title: 'Direct marketing',
    content: (
      <>
        <Callout>
          We email our insights only to people who have subscribed. We don’t buy, rent or share mailing lists.
        </Callout>
        <List
          items={[
            'Subscribing is opt-in, and we record what you agreed to and when.',
            'Every email includes a way to unsubscribe, free of charge. You can also opt out by emailing us.',
            'We keep a record of opt-outs so you are not contacted again.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    content: (
      <>
        <P>
          We take reasonable technical and organisational measures to protect personal information against loss,
          damage and unauthorised access. The Site is served only over encrypted connections (HTTPS), access to
          enquiries is limited to the people who need it, and we use established providers with strong security
          practices.
        </P>
        <P>
          No system is completely secure. If a security compromise affects your personal information, we will notify
          you and the Information Regulator as POPIA requires.
        </P>
      </>
    ),
  },
  {
    id: 'information-officer',
    title: 'Information Officer and complaints',
    content: (
      <>
        <P>
          Our Information Officer is responsible for our compliance with POPIA and handles requests and complaints
          about personal information.
        </P>
        <Details
          rows={[
            { label: 'Information Officer', value: <>{legalEntity.informationOfficer}, {legalEntity.informationOfficerRole}</> },
            {
              label: 'Email',
              value: (
                <>
                  <A href={`mailto:${legalEntity.email}?subject=POPIA%20request`}>{legalEntity.email}</A>
                  <span className="text-exvia-black/50"> — subject “POPIA request”</span>
                </>
              ),
            },
            { label: 'Phone', value: <A href={`tel:${legalEntity.phone.replace(/\s+/g, '')}`}>{legalEntity.phone}</A> },
            { label: 'Location', value: <>{legalEntity.registeredOffice} <span className="text-exvia-black/50">— full address on request</span></> },
          ]}
        />
        <P>
          If you are not satisfied with our response, you may complain to the Information Regulator (South Africa).
          POPIA complaints are lodged through the Regulator’s{' '}
          <A href="https://eservices.inforegulator.org.za/">eServices portal</A>.
        </P>
        <Details
          rows={[
            { label: 'Website', value: <A href="https://inforegulator.org.za/">inforegulator.org.za</A> },
            { label: 'Enquiries', value: <A href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</A> },
            { label: 'Toll-free', value: '0800 017 160' },
          ]}
        />
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    content: (
      <P>
        The Site is for businesses and is not directed at anyone under 18. We don’t knowingly collect children’s
        personal information. If you believe a child has sent us information, contact us and we will delete it.
      </P>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    content: (
      <P>
        We may update this policy as the Site, our tools or the law change. The “Last updated” date at the top of this
        page shows when it last changed, and material changes will be noted here.
      </P>
    ),
  },
];

export function PrivacyPage() {
  return (
    <LegalLayout
      docNumber="02"
      title="Privacy Policy"
      lede={
        <>
          What personal information FM Consulting collects through this website, why, who we share it with, and the
          rights you have under the Protection of Personal Information Act, 2013.
        </>
      }
      sections={sections}
      alsoSee={{ label: 'Terms of Service', to: '/terms' }}
    />
  );
}
