import { ScreenSection } from "../journey/ScreenSection";
import { HubCard } from "../journey/HubCard";
import { HUB_ITEMS } from "@/content/hub";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HubScreen() {
  return (
    <ScreenSection id="hub" theme="artistic">
      <div className="w-full max-w-md mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl text-text-primary"
          >
            Um Cantinho Nosso
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-text-secondary"
          >
            Explore outras memórias e surpresas que preparei para você.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-12 space-y-6"
        >
          {HUB_ITEMS.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <HubCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScreenSection>
  );
}
