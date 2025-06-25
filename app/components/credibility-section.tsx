"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CredibilitySection() {
  return (
    <section className="container mx-auto px-6 lg:px-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black text-white p-8 lg:p-12 rounded-2xl text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-amatic font-bold mb-8">
          Built with Academic Excellence
        </h2>
        <p className="text-lg font-geist mb-12 max-w-3xl mx-auto opacity-90">
          Developed at Wrocław University of Science and Technology in the
          Department of Artificial Intelligence, powered by PLGrid computational
          resources.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2tazgf3pJyGqKD0uVMc3UbP5dZXCw2v4fknrm"
              alt="Wrocław University of Science and Technology"
              width={200}
              height={100}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <p className="text-xs max-w-24">
              Wrocław University of Science and Technology
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2K41VpB7kWUESHayn6gMcVwYZ8OevL9pJ5jAi"
              alt="PLGrid"
              width={200}
              height={100}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <p className="text-xs max-w-24">PLGrid computational resources</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2ZwBcf1WHvWyzso2OQ5pBDAjV4exibNU9SwmP"
              alt="Katedra Sztucznej Inteligencji"
              width={200}
              height={100}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <p className="text-xs max-w-24">Department of Artificial Intelligence</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
