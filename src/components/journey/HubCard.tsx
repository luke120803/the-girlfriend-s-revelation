import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type HubCardProps = {
  item: {
    id: string;
    title: string;
    description: string;
    link: string;
    disabled?: boolean;
  };
};

export function HubCard({ item }: HubCardProps) {
  const cardContent = (
    <motion.div
      className={`w-full p-6 bg-bg-card rounded-lg shadow-soft text-left ${
        item.disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={!item.disabled ? { y: -5, boxShadow: "var(--shadow-medium)" } : {}}
      whileTap={!item.disabled ? { scale: 0.98, y: -2 } : {}}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-display text-xl text-text-primary">{item.title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
      {!item.disabled && (
        <motion.div
          className="mt-4 flex items-center justify-end text-accent-dark text-sm"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          Explorar <ArrowRight className="ml-2 h-4 w-4" />
        </motion.div>
      )}
    </motion.div>
  );

  return item.disabled ? (
    <div>{cardContent}</div>
  ) : (
    <Link to={item.link}>{cardContent}</Link>
  );
}
