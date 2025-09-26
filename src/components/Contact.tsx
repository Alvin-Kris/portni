// components/ContactSection.tsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_t720dpass",
        "template_1ayjq0dss",
        form.current,
        { publicKey: "NXWbTlMUpG4EminyHss" }
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="bg-gray-600 py-16">
      <div className="fixed top-5 right-5 z-50 space-y-2 w-80">
        {status === "success" && (
          <div role="alert" className="alert alert-success shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="alert alert-error shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Failed to send message. Please try again.</span>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-5 text-center hover:text-indigo-400 transition">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-center mb-10">
          Have a question, a project idea, or just want to say hello? Feel free
          to reach out using the form below—I’d love to hear from you. You can
          also find me at my location on the map, so whether it’s a quick
          message or a visit, connecting is just a click away.
        </p>

        <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Have a Question?</h2>

            <div className="w-full mt-5 sm:mt-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                  {/* Full Name */}
                  <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Full Name"
                      className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="mb-2">
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium"
                    >
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Leave us a message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <button
                      type="submit"
                      className="btn btn-active btn-primary btn-block max-w-[200px]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Location Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Location</h2>
            <div className="w-full mt-5 sm:mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7444698251263!2d124.02903823850872!3d10.502408263652235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9bb7c8c2b3c4f%3A0xedcede8412e50fd8!2sCTU%20Danao%20Campus%20Admin%20Building!5e0!3m2!1sen!2sph!4v1757084850264!5m2!1sen!2sph"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
