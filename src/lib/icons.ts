import { library } from "@fortawesome/fontawesome-svg-core";
import { faGhost, faSkull } from "@fortawesome/free-solid-svg-icons";

library.add(faGhost, faSkull);

export const icons = {
  ghost: faGhost,
  skull: faSkull,
} as const;

export type IconKey = keyof typeof icons;
