"use client";

import { CredibilitySection } from "./components/credibility-section";
import { FeaturesSection } from "./components/feature-section";
import { Card, CardContent, CardFooter } from "./components/ui/card";
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
    <div className=" bg-cream/99">
      {/* Hero Section */}
      <div id="hero">
        <HeroSection onScrollToSection={scrollToSection} />
      </div>

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Why We're Building This */}
      <section
        id="why-building"
        className="container mx-auto px-4 lg:px-24 py-8 lg:py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12"
        >
          <h2 className="text-2xl lg:text-5xl font-amatic font-bold text-gray-800">
            The Tattoo Dilemma
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                className="space-y-3 lg:space-y-4"
              >
                <div className="text-4xl lg:text-6xl">{item.emoji}</div>
                <h3 className="text-lg lg:text-2xl font-amatic font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 font-geist">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black text-white p-6 lg:p-8 rounded-2xl"
          >
            <h3 className="text-xl lg:text-3xl font-amatic font-bold mb-4">
              The Reality
            </h3>
            <p className="text-base lg:text-xl font-geist text-center">
              We commit to permanent tattoos
              <br />
              without knowing how they'll actually look.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* Blog Section */}
      <section className="container mx-auto px-4 lg:px-24 py-8 lg:py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-base lg:text-xl text-gray-600 font-geist">
            Discover insights about tattoo culture, technology, and the future
            of body art visualization.
          </p>
        </motion.div>

        <div
          className="overflow-x-auto overflow-y-hidden -mx-4 lg:-mx-0"
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
          <div className="flex gap-4 lg:gap-6 pb-4 px-4 lg:px-0 hide-scrollbar min-w-max items-start">
            {[
              {
                title: "Beyond the Uncanny Valley",
                excerpt:
                "Explore how parametric models are revolutionizing 3D avatars - Why this is the right diraction for tattoo visualization.",
                image:
                "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2bMEPVrKnNmTE5LR1ofd6r2JMpah4lUgISy03",
                category: "3D AI",
                slug: "parametric-models",
              },
              {
                title: "Tattoo Overlay on Human Skin",
                excerpt:
                  "We developed a pipeline for realistic tattoo application on photos of human bodies using generative models from the Flux family. Our approach combines Flux.1 Fill dev with custom LoRA adapters for unprecedented realism.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2TElBznFQpBwYfiEI6AgFcVZSbjG8HeUkdNRP",
                category: "Generative AI",
                slug: "inpainting",
              },
              {
                title: "Efficient Multi-View Diffusion",
                excerpt:
                "We built a method of Multi-View Diffusion with comparable results to SoTA, but 4x faster training through efficient adapter-based conditioning.",
                image:
                "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vO2g1pT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
                category: "Generative AI",
                slug: "multiview",
              },
              {
                title: "Making a 3D avatar from a single image",
                excerpt:
                  "We put 4 state-of-the-art AI models to the test: Human3Diffusion, SIFU, LHM, and InstantMesh. Discover which tool is right for your specific 3D creation needs.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N27IaY54xSFx0ceOsPGpuw7f4lW5mRv9a2BJbZ",
                category: "3D Reconstruction",
                slug: "avatars-3d",
              },
              {
                title: "Trends in Tattoo Styles",
                excerpt:
                  "Tattoos have been around for centuries, but the styles and techniques used have evolved over time. From traditional to modern, here are some of the most popular tattoo styles today based on our analysis of 55,000 Reddit posts.",
                image:
                  "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2Qr9mg5eJ7E6HR9VLANrdSl85TGeCw1hmbxc2",
                category: "Data Analysis",
                slug: "tattoo",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="w-48 lg:w-80 h-100 lg:h-auto bg-black text-white border-gray-800 flex-shrink-0 rounded-3xl cursor-pointer transition-colors">
                    <CardContent className="p-3 lg:p-4 text-left h-full lg:h-auto flex flex-col lg:space-y-3">
                      <div className="w-full aspect-square bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlaid elements in bottom right */}
                        <div className="absolute bottom-2 right-2 space-y-2 flex flex-col items-end">
                          <span className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-geist backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 lg:flex-none flex flex-col justify-center lg:justify-start space-y-1 lg:space-y-2 py-1 lg:py-2 min-h-0">
                        <h3 className="text-lg lg:text-2xl font-amatic font-bold text-white leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 font-geist text-xs lg:text-sm leading-tight line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <CardFooter className="flex justify-end p-1 pt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/90 text-black border-0 hover:bg-white font-geist text-xs px-2 py-1 h-auto backdrop-blur-sm w-full"
                        >
                          Read More
                        </Button>
                      </CardFooter>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 lg:px-24 py-8 lg:py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
            Why Choose InkVision?
          </h2>
          <p className="text-base lg:text-xl text-gray-600 font-geist max-w-3xl mx-auto">
            The most advanced tattoo visualization platform backed by academic
            research and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
              title: "Huge Design Database",
              description:
                "Access hundreds of professionally curated tattoo designs across all styles and themes.",
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
              className="bg-black text-white p-4 lg:p-8 rounded-2xl space-y-3 lg:space-y-4"
            >
              <div className="text-2xl lg:text-4xl">{item.emoji}</div>
              <h3 className="text-lg lg:text-2xl font-amatic font-bold">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base font-geist opacity-90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 lg:mt-16 bg-black text-white p-4 lg:p-8 rounded-2xl"
        >
          <h3 className="text-xl lg:text-3xl font-amatic font-bold text-center mb-4 lg:mb-8">
            Built with Modern Technology
          </h3>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 text-center">
            {[
              {
                emoji: "📱",
                title: "Frontend",
                items: ["Expo", "React Native"],
              },
              { emoji: "⚙️", title: "Backend", items: ["Convex", "Clerk"] },
              { emoji: "🤖", title: "ML Hosting", items: ["Modal"] },
            ].map((tech, index) => (
              <div key={index} className="space-y-3 lg:space-y-4">
                <div className="text-2xl lg:text-4xl">{tech.emoji}</div>
                <h4 className="text-base lg:text-xl font-amatic font-bold">
                  {tech.title}
                </h4>
                <div className="space-y-2 font-geist opacity-90">
                  {tech.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm lg:text-base">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </section>

      {/* Team Section */}
      <section id="team" className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left lg:text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-base lg:text-xl text-gray-600 font-geist">
              A dedicated team of developers and researchers bringing InkVision
              to life.
            </p>
          </motion.div>

          <div
            className="overflow-x-auto overflow-y-hidden -mx-4 lg:-mx-0"
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
            <div className="flex gap-4 lg:gap-6 pb-4 px-4 lg:px-0 hide-scrollbar min-w-max items-start">
              {[
                {
                  name: "Eryk Wójcik",
                  role: "Lead Developer",
                  image: "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N25OngliDa293pjEAanQOIe4FulXgwSz0Gvr8s",
                  portfolio: "https://ewoj.dev",
                },
                {
                  name: "Dariusz Palt",
                  role: "AI Engineer: CV & 3D",
                  image: "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2W9WS1xmc0kAa4M8uzG9ZTifQmNe3sFow7dLX",
                  portfolio: "https://www.linkedin.com/in/dariusz-palt-709b8214a",
                },
                {
                  name: "Patryk Polkowski",
                  role: "AI Engineer: 3D ",
                  image: "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2G5ZWVV4G9ioa2bnI8wXQKkdztyuLNAhxfZrm",
                  portfolio: "https://www.linkedin.com/in/patryk-polkowski?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  name: "Bartłomiej Gintowt",
                  role: "AI Engineer: Diffusion",
                  image: "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2NS7DDo53ZjAaJmlBFytHbuf6KQ40e82xSOhV",
                  portfolio: "https://www.linkedin.com/in/bart%C5%82omiej-gintowt-188838371/",
                },
                {
                  name: "Hanna Kaczmarek",
                  role: "UI/UX Designer",
                  image: "https://utfs.io/a/oxjj5brc17/https:/xNYugo9hq5N2EuC4c7Zd3Mb1RFgVrYTOBQn5ulPzWiewhJjt",
                  portfolio: "https://haczmarek.vercel.app/",
                },
                {
                  name: "Weronika Jakubowska",
                  role: "3D ML Expert",
                  image: "https://utfs.io/a/oxjj5brc17/weronika",
                  portfolio: "https://genwro.ai.pwr.edu.pl/",
                },
                {
                  name: "PhD Maciej Zięba",
                  role: "Diffusion ML Expert",
                  image: "https://utfs.io/a/oxjj5brc17/maciek",
                  portfolio: "https://genwro.ai.pwr.edu.pl/",
                },
                {
                  name: "PhD Kamil Adamczewski",
                  role: "Technical Advisor",
                  image: "https://utfs.io/a/oxjj5brc17/kamil",
                  portfolio: "https://genwro.ai.pwr.edu.pl/",
                },
                {
                  name: "PhD Piotr Bródka",
                  role: "Technical Advisor",
                  image: "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2t1gzVzpJyGqKD0uVMc3UbP5dZXCw2v4fknrm",
                  portfolio: "https://linktr.ee/piotrbrodka",
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
                    className="w-48 lg:w-80 h-72 lg:h-auto bg-black text-white border-gray-800 flex-shrink-0 rounded-3xl cursor-pointer transition-colors"
                    onClick={() =>
                      member.portfolio &&
                      window.open(member.portfolio, "_blank")
                    }
                  >
                    <CardContent className="p-3 lg:p-4 text-left h-full lg:h-auto flex flex-col lg:space-y-3">
                      <div className="w-full aspect-square bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
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
                      <div className="flex-1 lg:flex-none flex flex-col justify-center lg:justify-start space-y-1 lg:space-y-2 py-1 lg:py-2 min-h-0">
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
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="container mx-auto px-4 lg:px-24 py-8 lg:py-16 max-w-4xl"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left lg:text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-5xl font-amatic font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-xl text-gray-600 font-geist">
              Everything you need to know about InkVision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-3 lg:space-y-4"
            >
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
                  <AccordionTrigger className="px-6 py-4 text-left font-amatic text-lg lg:text-2xl font-bold text-white hover:text-gray-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 font-geist text-sm lg:text-base text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="bg-black text-white py-8">
        <div className="container mx-auto px-4 lg:px-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2V7NImbDbTctGMj83sUiXKqOSL7DCnroBRwY1"
                alt="InkVision Logo"
                width={200}
                height={200}
              />
            </div>

            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h2 className="text-2xl lg:text-6xl font-amatic font-bold">
                Ready to See Your Perfect Tattoo?
              </h2>
              <p className="text-base lg:text-xl font-geist opacity-90">
                Join thousands of others on the waitlist and be the first to
                experience the future of tattoo visualization.
              </p>

              <div className="max-w-md">
                <form className="space-y-3 lg:space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white text-black border-0 h-12 text-sm lg:text-base font-geist w-full"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 h-12 text-sm lg:text-base font-geist"
                  >
                    Get Early Access to InkVision
                  </Button>
                </form>
                <p className="text-sm opacity-70 mt-4 font-geist">
                  No spam, just updates on our launch.
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
