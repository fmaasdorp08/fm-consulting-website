import { legalEntity } from '@/config';
import { A, Callout, Caps, Details, H3, LegalLayout, List, P, type LegalSection } from './LegalLayout';

const sections: LegalSection[] = [
  {
    id: 'the-agreement',
    title: 'The agreement',
    content: (
      <>
        <P>
          These Terms of Service (the “Terms”) govern your access to and use of{' '}
          <strong>{legalEntity.website}</strong> (the “Site”). The Site is operated by{' '}
          <strong>{legalEntity.name}</strong>, a private company registered in South Africa under registration
          number {legalEntity.registrationNumber}, trading as {legalEntity.tradingName} (“FM Consulting”, “we”,
          “us” or “our”).
        </P>
        <P>
          By using the Site you agree to these Terms and to our <A to="/privacy">Privacy Policy</A>. If you do not
          agree, please do not use the Site.
        </P>
      </>
    ),
  },
  {
    id: 'scope',
    title: 'Scope of these terms',
    content: (
      <>
        <P>
          The Site tells you about FM Consulting, our services and our published thinking. It lets you contact us,
          request a consultation and subscribe to our insights. It does not sell goods or services online, and no
          consulting agreement is formed through it.
        </P>
        <Callout>
          Any engagement with FM Consulting is governed only by a written proposal, engagement letter or services
          agreement signed by both parties. If that agreement conflicts with these Terms, the agreement prevails.
        </Callout>
        <P>
          Sending an enquiry or booking a consultation does not create a client relationship, and it does not oblige
          either of us to proceed.
        </P>
      </>
    ),
  },
  {
    id: 'using-the-site',
    title: 'Using the site',
    content: (
      <P>
        You may browse the Site for your own information and for legitimate business purposes. To submit information
        through the Site you must be at least 18, or have the consent of a parent or guardian. If you submit
        information on behalf of a business, you confirm that you are authorised to do so.
      </P>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    content: (
      <>
        <P>You agree not to:</P>
        <List
          items={[
            'use the Site for any unlawful purpose, or in breach of any applicable law or regulation;',
            'submit false or misleading information, or another person’s details without their permission;',
            'send spam, malicious code or automated submissions through our forms;',
            'attempt to gain unauthorised access to the Site or the systems that host it, or interfere with their operation;',
            'scrape, copy or harvest the Site’s content or contact details in bulk — including to build or train datasets — without our written permission;',
            'frame or mirror the Site, or present it as connected to another business.',
          ]}
        />
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    content: (
      <>
        <P>
          The Site and its content — the text, Insights articles, frameworks, graphics, the FM Consulting name, mark
          and visual identity, and the code that runs it — belong to FM Consulting or its licensors and are protected
          by South African and international intellectual property law.
        </P>
        <P>
          You may read, link to and quote short extracts from our Insights articles, provided you credit FM Consulting
          and link to the source. Any other copying, adaptation, republication or commercial use needs our prior
          written consent.
        </P>
        <P>
          Some photographs are used under licence from third-party image libraries or photographers. Their owners
          retain all rights in them.
        </P>
      </>
    ),
  },
  {
    id: 'not-advice',
    title: 'Insights are not advice',
    content: (
      <>
        <P>
          Our Insights articles and other Site content are general commentary on marketing, growth and business
          practice. They are not legal, financial, tax or investment advice, and they are not tailored to your
          circumstances.
        </P>
        <Callout>
          Don’t act on Site content alone. Where a decision carries material legal or financial risk, take advice from
          a qualified professional who knows your situation.
        </Callout>
        <P>
          Content reflects our view on the date it was published and may become outdated. We are not obliged to update
          it.
        </P>
      </>
    ),
  },
  {
    id: 'other-sites',
    title: 'Links to other sites',
    content: (
      <P>
        The Site links to third-party websites, including the sources cited in our articles. We don’t control those
        sites and are not responsible for their content, availability or privacy practices. A link is not an
        endorsement.
      </P>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    content: (
      <>
        <Callout>
          We work to keep the Site accurate, secure and available. We can’t guarantee it will always be all three.
        </Callout>
        <P>
          To the extent the law allows, the Site and its content are provided “as is” and “as available”, without
          warranties of any kind, express or implied — including warranties of accuracy, completeness, fitness for a
          particular purpose and non-infringement.
        </P>
        <P>
          Results, figures and client outcomes described on the Site illustrate past work. They are not a promise of
          the results your business will achieve.
        </P>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability and indemnity',
    content: (
      <>
        <H3 n="9.1">Limitation of liability</H3>
        <Caps>
          To the maximum extent permitted by law, FM Consulting, its directors and personnel will not be liable for any
          indirect, incidental, special or consequential loss, or for any loss of profit, revenue, data or goodwill,
          arising from your use of, or inability to use, the Site or its content. Our total liability for any claim
          arising from your use of the Site is limited to R1,000.
        </Caps>
        <P>
          Nothing in these Terms limits liability that cannot lawfully be limited — including liability for fraud or
          gross negligence, or your rights under the Consumer Protection Act, 2008 where it applies. This section
          covers use of the Site only; services we provide under a signed engagement carry their own terms.
        </P>
        <H3 n="9.2">Indemnity</H3>
        <P>
          To the extent the law allows, you indemnify FM Consulting against claims, losses and reasonable legal costs
          that arise from your breach of these Terms or your misuse of the Site.
        </P>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law and disputes',
    content: (
      <>
        <H3 n="10.1">Governing law</H3>
        <P>These Terms are governed by the laws of the Republic of South Africa.</P>
        <H3 n="10.2">Talk to us first</H3>
        <P>
          If you have a concern about the Site, contact us before taking any formal step. Most issues are resolved
          faster in a conversation than in a letter. We will respond within ten business days.
        </P>
        <H3 n="10.3">Jurisdiction</H3>
        <P>
          Subject to any rights you have as a consumer, you consent to the jurisdiction of the Western Cape Division of
          the High Court, Cape Town. Either of us may also bring proceedings in a magistrates’ court that has
          jurisdiction, and you consent to that jurisdiction under section 45 of the Magistrates’ Courts Act, 1944.
        </P>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    content: (
      <P>
        We may update these Terms from time to time. The “Last updated” date at the top of this page shows when they
        last changed, and material changes will be noted here. If you keep using the Site after a change takes effect,
        the updated Terms apply.
      </P>
    ),
  },
  {
    id: 'general',
    title: 'General',
    content: (
      <List
        items={[
          'If any part of these Terms is found to be unenforceable, the rest remains in effect.',
          'If we don’t enforce a provision straight away, we have not waived our right to enforce it later.',
          'These Terms and our Privacy Policy are the entire agreement between you and us about the Site. They do not cover consulting engagements.',
          'You may not transfer your rights under these Terms. We may transfer ours as part of a reorganisation or sale of our business.',
          'We may communicate with you electronically, and notices sent by email are valid written notices.',
        ]}
      />
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <>
        <P>Questions about these Terms can go to:</P>
        <Details
          rows={[
            { label: 'Company', value: <>{legalEntity.name}</> },
            { label: 'Registration no.', value: <span className="font-mono-brand">{legalEntity.registrationNumber}</span> },
            { label: 'Email', value: <A href={`mailto:${legalEntity.email}`}>{legalEntity.email}</A> },
            { label: 'Phone', value: <A href={`tel:${legalEntity.phone.replace(/\s+/g, '')}`}>{legalEntity.phone}</A> },
            { label: 'Legal notices', value: legalEntity.registeredOffice },
          ]}
        />
        <P>
          We choose our registered office, above, as the address where we will accept service of legal documents.
        </P>
      </>
    ),
  },
];

export function TermsPage() {
  return (
    <LegalLayout
      docNumber="01"
      title="Terms of Service"
      lede={
        <>
          {legalEntity.website} is the website of {legalEntity.name}. These Terms cover your use of this website only.
          Consulting work is governed by the proposal or engagement letter we sign with you.
        </>
      }
      sections={sections}
      alsoSee={{ label: 'Privacy Policy', to: '/privacy' }}
    />
  );
}
