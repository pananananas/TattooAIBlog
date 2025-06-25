"use client";

import { Zap, Star, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "1. Explore & Discover",
    description:
      "Browse through thousands of tattoo designs with our intelligent search. Find patterns by style, theme, or objects automatically detected in each design.",
    icon: Zap,
    feature: "AI-powered search and categorization",
    video:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2bdS1d8KnNmTE5LR1ofd6r2JMpah4lUgISy03",
    poster:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2lD3EIhskXiywK8rx16T2C7sSqh5jEmtdpg3L",
  },
  {
    id: 2,
    title: "2. Create Moodboards",
    description:
      "Save your favorite designs and organize them into personalized moodboards. Perfect for planning your tattoo journey and sharing ideas with your artist.",
    icon: Star,
    feature: "Organize and curate your favorites",
    video:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2HsKkulJjlWzPtbysdAhN8O3RiIKYwBxk6cEm",
    poster:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2Qr9mg5eJ7E6HR9VLANrdSl85TGeCw1hmbxc2",
  },
  {
    id: 3,
    title: "3. Visualize on Your Skin",
    description:
      "Take a photo of the body part you want to tattoo and see how your chosen design will actually look on your skin using our advanced AI technology.",
    icon: Shield,
    feature: "Advanced AI visualization technology",
    video:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2z97rFZiPliR8KUM6EBdVJwzk2pSyAt5nQs9v",
    poster:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vO2g1pT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
  },
  {
    id: 4,
    title: "4. 3D Body Modeling",
    description:
      "Create a 3D model of your body part for even more accurate visualization. See your tattoo from every angle before making the final decision.",
    icon: Users,
    feature: "Share with friends and tattoo artists",
    video:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2BQMDUo0nasMjNBWV39D5R41ekxlvpH7hdtqA",
    poster:
      "https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2vYX9GlT7dNVFw8oSOluz9TbHIB5itJ3yjmea",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-black min-h-screen rounded-3xl mx-2 lg:mx-24 pb-8 lg:pb-12"
    >
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-24 pt-8 lg:pt-16 pb-6 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-amatic font-bold text-white text-2xl lg:text-5xl mb-6">
            How InkVision Works?
          </h2>
          <p className="text-gray-300 font-geist text-base lg:text-xl leading-relaxed">
            Huge database of tattoo designs. Browse interesting styles, create
            moodboards of favorite tattoos - discover! Effective pattern search
            thanks to automatic extraction of style, theme and tattoo objects.
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 lg:px-24">
        {features.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`
        mb-8 lg:mb-12 last:mb-0
        grid grid-cols-1 gap-6 
        lg:grid-cols-2 lg:gap-12 lg:items-center
        ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}
      `}
    >
      {/* Video Container */}
      <div
        className={`
        ${index % 2 === 1 ? "lg:col-start-2" : ""}
        flex justify-center
      `}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-[240px] lg:max-w-xs xl:max-w-sm"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={feature.poster}
            className="w-full rounded-2xl shadow-2xl"
            style={{ aspectRatio: "9/16" }}
          >
            <source src={feature.video} type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Content Container */}
      <div
        className={`
        ${index % 2 === 1 ? "lg:col-start-1" : ""}
        space-y-4 text-left
      `}
      >
        <motion.h3
          className="font-amatic font-bold text-white text-xl lg:text-3xl"
          initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 font-geist text-base lg:text-xl leading-relaxed"
          initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {feature.description}
        </motion.p>

        <motion.div
          className="flex items-center gap-3 justify-start"
          initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white text-black p-3 rounded-lg">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-geist text-gray-300 text-sm lg:text-base">
            {feature.feature}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
