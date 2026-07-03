import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { contactConfig } from '@/config';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

export function ContactPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Consultation Request — ${formData.name}${formData.company ? ` (${formData.company})` : ''}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Company: ${formData.company}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service Required: ${formData.service}`,
        `Budget Range: ${formData.budget}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')
    );
    return `mailto:${contactConfig.contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // No key configured yet — fall back to the visitor's email client
    if (!contactConfig.web3formsKey) {
      window.location.href = buildMailto();
      setSubmitted(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactConfig.web3formsKey,
          subject: `Consultation Request — ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          from_name: 'FM Consulting Website',
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong sending your message. Please email us directly instead.');
      }
    } catch {
      setError('Something went wrong sending your message. Please email us directly instead.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header Section */}
      <section className="w-full pb-16 lg:pb-24 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-4xl">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                Contact
              </span>
            </div>
            <h1
              className={cn(
                'text-4xl lg:text-6xl font-semibold text-exvia-black mt-6 leading-tight transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Let's Discuss Your Growth Goals
            </h1>
            <p
              className={cn(
                'text-xl lg:text-2xl text-exvia-black/70 mt-6 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              Ready to improve your business performance? Book a consultation with our team. 
              We'll explore your challenges, identify opportunities, and outline how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="text-2xl font-semibold text-exvia-black mb-6">
                  Get in Touch
                </h2>
                <p className="text-exvia-black/70 mb-8">
                  Fill out the form and we'll respond within 24 hours. For urgent inquiries, 
                  feel free to call us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-white flex-shrink-0">
                      <Mail className="w-5 h-5 text-exvia-black" />
                    </div>
                    <div>
                      <div className="font-medium text-exvia-black">Email</div>
                      <a href={`mailto:${contactConfig.contactInfo.email}`} className="text-exvia-black/70 hover:text-exvia-black transition-colors">
                        {contactConfig.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-white flex-shrink-0">
                      <Phone className="w-5 h-5 text-exvia-black" />
                    </div>
                    <div>
                      <div className="font-medium text-exvia-black">Phone</div>
                      <a href={`tel:${contactConfig.contactInfo.phone}`} className="text-exvia-black/70 hover:text-exvia-black transition-colors">
                        {contactConfig.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-white flex-shrink-0">
                      <MapPin className="w-5 h-5 text-exvia-black" />
                    </div>
                    <div>
                      <div className="font-medium text-exvia-black">Location</div>
                      <div className="text-exvia-black/70">{contactConfig.contactInfo.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-white flex-shrink-0">
                      <Clock className="w-5 h-5 text-exvia-black" />
                    </div>
                    <div>
                      <div className="font-medium text-exvia-black">Business Hours</div>
                      <div className="text-exvia-black/70">{contactConfig.contactInfo.hours}</div>
                    </div>
                  </div>
                </div>

                {/* Response Expectation */}
                <div className="mt-8 p-4 bg-white border border-exvia-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-exvia-black">Fast Response</div>
                      <div className="text-sm text-exvia-black/60">We typically respond within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" ref={formRef}>
              <div
                className={cn(
                  'bg-white border border-exvia-border rounded-lg p-8 lg:p-10 transition-all duration-800 ease-out-quart',
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-exvia-black mb-3">
                      Thank You!
                    </h3>
                    <p className="text-exvia-black/70">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-exvia-black mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-exvia-black mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-exvia-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-exvia-black mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors"
                          placeholder="+27 21 555 0123"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-exvia-black mb-2">
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="growth-strategy">Growth Strategy</option>
                          <option value="digital-marketing">Digital Marketing Strategy</option>
                          <option value="customer-acquisition">Customer Acquisition</option>
                          <option value="customer-lifecycle">Customer Lifecycle & Retention</option>
                          <option value="analytics">Analytics & Reporting</option>
                          <option value="business-performance">Business Performance Consulting</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-exvia-black mb-2">
                          Estimated Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under R50,000</option>
                          <option value="50k-100k">R50,000 - R100,000</option>
                          <option value="100k-250k">R100,000 - R250,000</option>
                          <option value="250k-500k">R250,000 - R500,000</option>
                          <option value="over-500k">Over R500,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-exvia-black mb-2">
                        Tell us about your business goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-exvia-border rounded-lg focus:outline-none focus:border-exvia-black transition-colors resize-none"
                        placeholder="What challenges are you facing? What are your growth objectives?"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600">
                        {error}{' '}
                        <a href={buildMailto()} className="underline">
                          Email us directly
                        </a>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-exvia-black text-white font-medium rounded-lg hover:bg-exvia-black/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {sending ? 'Sending…' : 'Send Message'}
                    </button>

                    <p className="text-sm text-exvia-black/50 text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Info */}
      <section className="w-full py-16 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              What to Expect from Your Consultation
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              A focused conversation about your business, your challenges, and your growth opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We'll discuss your business model, current performance, and growth objectives."
                },
                {
                  step: "02",
                  title: "Diagnosis",
                  description: "We'll identify the biggest opportunities and bottlenecks in your growth system."
                },
                {
                  step: "03",
                  title: "Direction",
                  description: "We'll outline how FM Consulting can help you achieve your goals."
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-white/30 rounded-full">
                    <span className="text-sm font-geist-mono">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
