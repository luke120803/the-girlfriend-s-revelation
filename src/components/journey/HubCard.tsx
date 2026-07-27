import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

type HubCardProps = {
  item: {
    id: string;
    title: string;
    description: string;
    link: string;
    disabled?: boolean;
    links?: { label: string; url: string }[];
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

  if (item.links && item.links.length > 0) {
    return (
      <motion.div
        className="w-full p-6 bg-bg-card rounded-lg shadow-soft text-left"
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-display text-xl text-text-primary">{item.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
        <div className="mt-4 flex flex-col gap-2">
          {item.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 border border-text-primary/10 text-text-secondary text-sm font-body transition-all hover:border-accent hover:text-accent active:scale-95"
              style={{ borderRadius: 0 }}
            >
              {l.label}
              <ExternalLink size={14} className="ml-2 shrink-0" />
            </a>
          ))}
        </div>
      </motion.div>
    );
  }

  return item.disabled ? (
    <div>{cardContent}</div>
  ) : (
    <Link to={item.link}>{cardContent}</Link>
  );
}
