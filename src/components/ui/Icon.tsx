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
  Inbox,
  Send,
  CalendarCheck,
  Replace,
  Wallet,
  TrendingUp,
  Building2,
  Tags,
  UserPlus,
  Rocket,
  Heart,
  type LucideIcon,
} from "lucide-react";

// Maps content.ts icon keys to Lucide components (no emoji anywhere).
const map: Record<string, LucideIcon> = {
  // audiences / segments
  target: Target,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  store: Store,
  // home feature keys
  pipeline: LayoutDashboard,
  automation: Zap,
  funnels: LayoutTemplate,
  messaging: MessagesSquare,
  ai: Sparkles,
  reviews: Star,
  // solutions
  capture: Inbox,
  followup: Send,
  booking: CalendarCheck,
  // pricing value
  replace: Replace,
  save: Wallet,
  gain: TrendingUp,
  // partners
  agency: Building2,
  reseller: Tags,
  referral: UserPlus,
  // about
  sparkle: Sparkles,
  rocket: Rocket,
  heart: Heart,
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
