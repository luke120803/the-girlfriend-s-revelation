import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useParallax(speed = 0.1) {
  const triggerRef: RefObject<HTMLElement> = useRef(null);
  const targetRef: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const target = targetRef.current;

    if (trigger && target) {
      const y = (trigger.offsetHeight - target.offsetHeight) * speed;

      gsap.fromTo(
        target,
        { y: -y },
        {
          y: y,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            scrub: 0.5,
          },
        }
      );
    }
  }, [speed]);

  return { triggerRef, targetRef };
}