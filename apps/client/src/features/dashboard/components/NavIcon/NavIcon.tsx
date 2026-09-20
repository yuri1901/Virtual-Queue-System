import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  LayoutDashboard,
  Plus,
  Settings,
  SlidersHorizontal,
  UserRound,
  UsersRound,
} from "lucide-react";

import type { NavIconType } from "../../client/DashboardShell/DashboardShell.constants";

type NavIconProps = {
  icon: NavIconType;
  className?: string;
};

const ICON_MAP: Record<NavIconType, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  "users-rounds": UsersRound,
  plus: Plus,
  "sliders-horizontal": SlidersHorizontal,
  "bar-chart": BarChart3,
  bell: Bell,
  "user-round": UserRound,
  setting: Settings,
};

function NavIcon({ icon, className }: NavIconProps) {
  const IconComponent = ICON_MAP[icon];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
}

export { NavIcon };