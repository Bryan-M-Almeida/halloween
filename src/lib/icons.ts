import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGhost,
  faSkull,
  faShirt,
  faClock,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGhost, faSkull, faShirt, faClock, faCalendarDays, faLocationDot);

export const icons = {
  ghost: faGhost,
  skull: faSkull,
  dress: faShirt,
  time: faClock,
  date: faCalendarDays,
  location: faLocationDot,
} as const;

export type IconKey = keyof typeof icons;
