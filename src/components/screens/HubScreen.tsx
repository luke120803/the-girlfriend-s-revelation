import { ScreenSection } from "../journey/ScreenSection";
import { HubCard } from "../journey/HubCard";
import { HUB_ITEMS } from "@/content/hub";
import { Reveal } from "../Reveal";

export function HubScreen() {
  return (
    <ScreenSection id="hub">
      <div className="w-full max-w-md mx-auto px-4 py-16">
        <Reveal>
          <h2 className="font-display text-3xl text-text-primary text-center">
            Um Cantinho Nosso
          </h2>
          <p className="mt-2 text-center text-text-secondary">
            Explore outras memórias e surpresas que preparei para você.
          </p>
        </Reveal>
        <div className="mt-12 space-y-6">
          {HUB_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={0.1 * index}>
              <HubCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </ScreenSection>
  );
}
