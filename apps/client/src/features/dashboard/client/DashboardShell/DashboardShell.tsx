"use client";

import { clsx } from "clsx";
import { Bell, ChevronDown, CircleHelp, LogOut, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { type ReactNode, useState } from "react";

import { SearchInput } from "@/components/SearchInput";
import { Link, usePathname } from "@/i18n";
import { routes } from "@/libs/routes";

import { NavIcon } from "../../components";
import { navGroups } from "./DashboardShell.constants";
import { dashboardShellStyles as styles } from "./DashboardShell.styles";


function DashboardShell({ children }: { children: ReactNode }) {
  const t = useTranslations("dashboard.shell");
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/dashboard" ? pathname === href : pathname.startsWith(href));

  return (
    <div className={styles.root}>
      {open && (
        <button
          className={styles.backdrop}
          aria-label={t("closeNav")}
          onClick={() => setOpen(false)}
        />
      )}
      <aside className={clsx(styles.sidebar, open ? styles.sidebarOpen : styles.sidebarClosed)}>
        <div className={styles.sidebarHeader}>
          <Link
            href={routes.home}
            className={styles.logoLink}
            onClick={() => setOpen(false)}
          >
            <span className={styles.logoBadge}>
              <span className={styles.logoDot} />
            </span>
            Virtual Queue
          </Link>
          <button
            className={styles.closeButton}
            onClick={() => setOpen(false)}
            aria-label={t("closeNav")}
          >
            <X className={styles.closeIcon} />
          </button>
        </div>
        <nav className={styles.nav}>
          {navGroups.map((group) => (
            <div key={group.groupKey}>
              <p className={styles.groupLabel}>{t(group.groupKey)}</p>
              <div className={styles.groupItems}>
                {group.items.map(({ itemKey, href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={clsx(styles.navItem, isActive(href) ? styles.navItemActive : styles.navItemInactive)}
                  >
                    <NavIcon
                      icon={icon}
                      className={styles.navIcon}
                    />
                    {t(itemKey)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <div className={styles.accountWrapper}>
            <button
              className={styles.accountButton}
              onClick={() => setAccountOpen(!accountOpen)}
              aria-expanded={accountOpen}
            >
              <span className={styles.avatar}>JD</span>
              <div className={styles.accountInfo}>
                <p className={styles.accountName}>Jordan Davis</p>
                <p className={styles.accountEmail}>jordan@example.com</p>
              </div>
              <ChevronDown className={clsx(styles.chevronIcon, accountOpen && styles.chevronOpen)} />
            </button>
            {accountOpen && (
              <div className={styles.dropdownMenu}>
                <Link
                  href={routes.dashboard.profile}
                  className={styles.dropdownItem}
                >
                  {t("profile")}
                </Link>
                <Link
                  href={routes.dashboard.settings}
                  className={styles.dropdownItem}
                >
                  {t("settings")}
                </Link>
                <button className={styles.logoutButton}>
                  <LogOut className={styles.logoutIcon} />
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button
              className={styles.openSidebarBtn}
              onClick={() => setOpen(true)}
              aria-label={t("openNav")}
            >
              <Menu className={styles.menuIcon} />
            </button>
            <div className={styles.searchWrapper}>
              <SearchInput placeholder={t("searchPlaceholder")} />
            </div>
          </div>
          <div className={styles.headerRight}>
            <button
              className={styles.headerIconButton}
              aria-label={t("help")}
            >
              <CircleHelp className={styles.headerIcon} />
            </button>
            <Link
              href={routes.dashboard.notifications}
              className={styles.notificationsButton}
              aria-label={t("notificationsAria")}
            >
              <Bell className={styles.headerIcon} />
              <span className={styles.unreadDot} />
            </Link>
            <span className={styles.headerAvatar}>JD</span>
          </div>
        </header>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}

export { DashboardShell };
