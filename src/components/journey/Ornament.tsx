import { motion } from "motion/react";
import { useAtmosphere } from "@/hooks/useAtmosphere";
import { Castle, Bird, Fish, Cloud } from "lucide-react";

type OrnamentProps = {
  className?: string;
};

export function Ornament({ className }: OrnamentProps) {
  const { state } = useAtmosphere();

  const getIcon = () => {
    switch (state.theme) {
      case "ballet":
        return <Cloud size={48} strokeWidth={1} />;
      case "classic":
        return <Castle size={48} strokeWidth={1} />;
      case "artistic":
        return <Bird size={48} strokeWidth={1} />;
      case "marine":
        return <Fish size={48} strokeWidth={1} />;
      default:
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C12 5 8 8 8 12C8 16 12 19 12 19C12 19 16 16 16 12C16 8 12 5 12 5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      key={state.theme}
      transition={{ duration: 1 }}
    >
      {getIcon()}
    </motion.div>
  );
}
