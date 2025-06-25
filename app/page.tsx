"use client";

import { CredibilitySection } from "./components/credibility-section";
import { FeaturesSection } from "./components/feature-section";
import { Card, CardContent } from "./components/ui/card";
import { HeroSection } from "./components/hero-section";
import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export default function InkVisionLanding() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cream/99">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream/99 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-24 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2k7YyKJzbFynlcTW4Hm5VKaedwSfQjChPG6Xp"
              alt="InkVision Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="text-2xl font-amatic font-bold text-gray-800 pl-2">
              InkVision
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-black transition-colors font-geist"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-black transition-colors font-geist"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-black transition-colors font-geist"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-black transition-colors font-geist"
            >
              FAQ
            </button>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-black transition-colors font-geist"
            >
              Blog
            </Link>
          </div>

          <Button
            onClick={() => scrollToSection("waitlist")}
            className="bg-black text-white hover:bg-gray-800 font-geist"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Why We're Building This */}
      <section
        id="why-building"
        className="container mx-auto px-6 lg:px-24 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <h2 className="text-4xl lg:text-5xl font-amatic font-bold text-gray-800">
            The Tattoo Dilemma
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🤔",
                title: '"Where do I find inspiration?"',
                description:
                  "Finding tattoo inspiration is scattered across multiple platforms and sources.",
              },
              {
                emoji: "😰",
                title: '"Will it actually look good?"',
                description:
                  "The biggest fear - how will I actually look with this tattoo?",
              },
              {
                emoji: "😱",
                title: '"What if something goes wrong?"',
                description:
                  "Design ≠ Final tattoo. What if it doesn't turn out as expected?",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-6xl">{item.emoji}</div>
                <h3 className="text-2xl font-amatic font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-geist">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-amatic font-bold mb-4">The Reality</h3>
            <p className="text-xl font-geist">
              We commit to permanent tattoos without knowing how they'll
              actually look.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Blog Section */}
      <section className="container mx-auto px-6 lg:px-48 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 font-geist">
            Discover insights about tattoo culture, technology, and the future
            of body art visualization.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <div
            className="flex space-x-6 pb-4 hide-scrollbar"
            style={{ width: "max-content" }}
          >
            <style>
              {`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .hide-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                  `}
            </style>
            {[
              {
                title: "The Science Behind AI Tattoo Visualization",
                excerpt:
                  "How machine learning algorithms analyze skin texture and lighting to create realistic tattoo previews.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vO2g1pT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
                category: "Technology",
              },
              {
                title: "Creating the Perfect Moodboard",
                excerpt:
                  "Tips and tricks for organizing your tattoo inspiration and communicating with your artist.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2Qr9mg5eJ7E6HR9VLANrdSl85TGeCw1hmbxc2",
                category: "Design",
              },
              {
                title: "3D Body Modeling: The Future is Here",
                excerpt:
                  "Explore how 3D technology is revolutionizing the way we visualize tattoos on different body parts.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vYX9GlT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
                category: "Innovation",
              },
              {
                title: "Understanding Tattoo Styles with AI",
                excerpt:
                  "How our AI categorizes and recommends tattoo designs based on artistic styles and themes.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2lD3EIhskXiywK8rx16T2C7sSqh5jEmtdpg3L",
                category: "AI",
              },
              {
                title: "From Concept to Skin: A Digital Journey",
                excerpt:
                  "Follow the complete process from finding inspiration to visualizing your perfect tattoo.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2XFIVTzBvhi52FEL4fTBwOMVez8ncs9CHbKt0",
                category: "Process",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="w-80 bg-white border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={320}
                      height={180}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-black text-white px-2 py-1 rounded text-xs font-geist">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-amatic font-bold text-gray-800 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-geist text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full font-geist"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 lg:px-48 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
            Why Choose InkVision?
          </h2>
          <p className="text-xl text-gray-600 font-geist max-w-3xl mx-auto">
            The most advanced tattoo visualization platform backed by academic
            research and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🎯",
              title: "Precision Technology",
              description:
                "Advanced AI and 3D modeling ensure the most accurate tattoo visualization available.",
            },
            {
              emoji: "📱",
              title: "Mobile-First Design",
              description:
                "Built for iOS and Android with React Native and Expo for seamless cross-platform experience.",
            },
            {
              emoji: "🎨",
              title: "Massive Design Database",
              description:
                "Access thousands of professionally curated tattoo designs across all styles and themes.",
            },
            {
              emoji: "🔬",
              title: "Academic Excellence",
              description:
                "Developed at Wrocław University of Science and Technology with cutting-edge research backing.",
            },
            {
              emoji: "⚡",
              title: "Lightning Fast",
              description:
                "Powered by Modal for ML hosting and Convex backend for instant, reliable performance.",
            },
            {
              emoji: "🔒",
              title: "Secure & Private",
              description:
                "Your photos and data are protected with enterprise-grade security via Clerk authentication.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black text-white p-8 rounded-2xl space-y-4"
            >
              <div className="text-4xl">{item.emoji}</div>
              <h3 className="text-xl font-amatic font-bold">{item.title}</h3>
              <p className="font-geist opacity-90">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-black text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-amatic font-bold text-center mb-8">
            Built with Modern Technology
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                emoji: "📱",
                title: "Frontend",
                items: ["Expo", "React Native"],
              },
              { emoji: "⚙️", title: "Backend", items: ["Convex", "Clerk"] },
              { emoji: "🤖", title: "ML Hosting", items: ["Modal"] },
            ].map((tech, index) => (
              <div key={index} className="space-y-4">
                <div className="text-4xl">{tech.emoji}</div>
                <h4 className="text-xl font-amatic font-bold">{tech.title}</h4>
                <div className="space-y-2 font-geist opacity-90">
                  {tech.items.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6 lg:px-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left lg:text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 font-geist">
              A dedicated team of developers and researchers bringing InkVision
              to life.
            </p>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-amatic font-bold text-gray-800 text-left lg:text-center mb-8">
                Development Team
              </h3>
              <div
                className="overflow-x-auto -mx-6 lg:-mx-48"
                style={{
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE 10+
                }}
              >
                <style>
                  {`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .hide-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>
                <div
                  className="flex gap-6 pb-4 px-6 lg:px-48 hide-scrollbar"
                  style={{ width: "max-content" }}
                >
                  {[
                    {
                      name: "Eryk Wójcik",
                      role: "Lead Developer",
                      image: "https://utfs.io/a/oxjj5brc17/eryk-wojcik.jpg",
                      portfolio: "https://ewoj.dev",
                    },
                    {
                      name: "Dariusz Palt",
                      role: "AI Engineer: CV & 3D",
                      image: "https://utfs.io/a/oxjj5brc17/dariusz-palt.jpg",
                      portfolio: "https://dariuszpalt.dev",
                    },
                    {
                      name: "Patryk Polkowski",
                      role: "AI Engineer: 3D ",
                      image:
                        "https://utfs.io/a/oxjj5brc17/patryk-polkowski.jpg",
                      portfolio: "https://patrykpolkowski.dev",
                    },
                    {
                      name: "Bartłomiej Gintowt",
                      role: "AI Engineer: Diffusion",
                      image:
                        "https://utfs.io/a/oxjj5brc17/bartlomiej-gintowt.jpg",
                      portfolio: "https://bartlomiejgintowt.dev",
                    },
                    {
                      name: "Hanna Kaczmarek",
                      role: "UI/UX Designer",
                      image: "https://utfs.io/a/oxjj5brc17/hanna-kaczmarek.jpg",
                      portfolio: "https://haczmarek.vercel.app/",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className="w-48 lg:w-80 bg-black text-white border-gray-800 flex-shrink-0 rounded-3xl cursor-pointer hover:bg-gray-900 transition-colors"
                        onClick={() =>
                          member.portfolio &&
                          window.open(member.portfolio, "_blank")
                        }
                      >
                        <CardContent className="p-3 lg:p-4 text-left space-y-3 lg:space-y-4">
                          <div className="w-full aspect-square bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const fallback =
                                  target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                            <div
                              className="w-full h-full hidden items-center justify-center"
                              style={{ display: "none" }}
                            >
                              <Users className="h-16 lg:h-20 w-16 lg:w-20 text-gray-400" />
                            </div>
                          </div>
                          <div className="space-y-1 lg:space-y-2 py-2">
                            <h4 className="text-lg lg:text-2xl font-amatic font-bold text-white leading-tight">
                              {member.name}
                            </h4>
                            <p className="text-gray-300 font-geist text-xs lg:text-sm leading-tight">
                              {member.role}
                            </p>
                            {/* {member.portfolio && (
                              <p className="text-gray-400 font-geist text-xs hidden lg:block">
                                Click to view portfolio →
                              </p>
                            )} */}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 lg:px-48 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left lg:text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-geist">
              Everything you need to know about InkVision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How accurate is the tattoo visualization?",
                  answer:
                    "Our AI-powered visualization technology provides highly accurate representations of how tattoos will look on your skin. The system takes into account skin tone, body curvature, and lighting conditions for realistic results.",
                },
                {
                  question: "Is InkVision available on both iOS and Android?",
                  answer:
                    "Yes! InkVision is built with React Native and Expo, making it available on both iOS and Android platforms with full feature parity and seamless synchronization across devices.",
                },
                {
                  question: "How large is your tattoo design database?",
                  answer:
                    "We have thousands of tattoo designs across all styles, themes, and categories. Our database is constantly growing, and our AI automatically categorizes designs by style, theme, and objects for easy discovery.",
                },
                {
                  question:
                    "Can I share my visualizations with tattoo artists?",
                  answer:
                    "You can easily share your tattoo visualizations and moodboards with friends, family, and tattoo artists to get feedback and ensure everyone is on the same page before your appointment.",
                },
                {
                  question: "When will InkVision be available?",
                  answer:
                    "We're currently in development and testing phases. Join our waitlist to be among the first to know when InkVision launches and get early access to the app.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-black text-white rounded-lg border border-gray-800"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-amatic text-2xl font-bold text-white hover:text-gray-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-geist text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center lg:justify-end px-24 order-1 lg:order-2">
              <Image
                src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2V7NImbDbTctGMj83sUiXKqOSL7DCnroBRwY1"
                alt="InkVision Logo"
                width={200}
                height={200}
                className="hover:opacity-90 transition-opacity"
              />
            </div>

            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl lg:text-6xl font-amatic font-bold">
                Ready to See Your Perfect Tattoo?
              </h2>
              <p className="text-xl font-geist opacity-90">
                Join thousands of others on the waitlist and be the first to
                experience the future of tattoo visualization.
              </p>

              <div className="max-w-md">
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white text-black border-0 h-12 text-lg font-geist"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 h-12 text-lg font-geist"
                  >
                    Get Early Access to InkVision
                  </Button>
                </form>
                <p className="text-sm opacity-70 mt-4 font-geist">
                  No spam, just updates on our launch. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}
