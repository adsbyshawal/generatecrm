import {
  Target,
  Briefcase,
  GraduationCap,
  Store,
  LayoutDashboard,
  Zap,
  LayoutTemplate,
  MessagesSquare,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

// Maps content.ts icon keys to Lucide components (no emoji anywhere).
const map: Record<string, LucideIcon> = {
  target: Target,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  store: Store,
  pipeline: LayoutDashboard,
  automation: Zap,
  funnels: LayoutTemplate,
  messaging: MessagesSquare,
  ai: Sparkles,
  reviews: Star,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Star;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
