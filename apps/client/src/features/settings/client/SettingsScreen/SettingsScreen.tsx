"use client";

import clsx from "clsx";
import { Bell, LockKeyhole, Monitor, Moon, ShieldCheck, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Toggle } from "@/components/Toggle";

import type { SettingsData } from "../../shared";
import { settingsScreenStyles as styles } from "./SettingsScreen.styles";

const THEME_OPTIONS = [
  {
    Icon: Sun,
    key: "themeLight" as const,
    label: "Light",
  },
  {
    Icon: Moon,
    key: "themeDark" as const,
    label: "Dark",
  },
  {
    Icon: Monitor,
    key: "themeSystem" as const,
    label: "System",
  },
] as const;

type SettingsScreenProps = {
  data: SettingsData;
}

function SettingsScreen({ data }: SettingsScreenProps) {
  const t = useTranslations("settings.screen");

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
        action={<Button variant="primary">{t("saveChanges")}</Button>}
      />
      <div className={styles.element1}>
        <Card className={styles.element2}>
          <div className={styles.element3}>
            <h2 className={styles.element4}>{t("generalTitle")}</h2>
            <p className={styles.element5}>{t("generalSubtitle")}</p>
          </div>
          <div className={styles.element6}>
            <Select label={t("language")} options={data.languageOptions} />
            <Select label={t("timezone")} options={data.timezoneOptions} />
            <div className={styles.element7}>
              <p className={styles.element8}>{t("theme")}</p>
              <div className={styles.element9}>
                {THEME_OPTIONS.map(({ Icon, key, label }) => (
                  <Button
                    key={label}
                    className={clsx(styles.themeButtonBase, {
                      [styles.themeButtonActive]: label === data.defaultTheme,
                      [styles.themeButtonInactive]: label !== data.defaultTheme,
                    })}
                  >
                    <Icon className={styles.element10} />
                    {t(key)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className={styles.element11}>
          <div className={styles.element12}>
            <Bell className={styles.element13} />
            <div>
              <h2 className={styles.element14}>{t("notificationsTitle")}</h2>
              <p className={styles.element15}>{t("notificationsSubtitle")}</p>
            </div>
          </div>
          <div className={styles.element16}>
            <Toggle
              label={t("emailNotifications")}
              description={t("emailNotificationsDesc")}
              checked={data.notifications.email}
            />
            <Toggle
              label={t("browserNotifications")}
              description={t("browserNotificationsDesc")}
              checked={data.notifications.browser}
            />
            <Toggle
              label={t("queueUpdates")}
              description={t("queueUpdatesDesc")}
              checked={data.notifications.queueUpdates}
            />
            <Toggle
              label={t("marketingNotifications")}
              description={t("marketingNotificationsDesc")}
              checked={data.notifications.marketing}
            />
          </div>
        </Card>
        <Card className={styles.element17}>
          <div className={styles.element18}>
            <ShieldCheck className={styles.element19} />
            <div>
              <h2 className={styles.element20}>{t("securityTitle")}</h2>
              <p className={styles.element21}>{t("securitySubtitle")}</p>
            </div>
          </div>
          <div className={styles.element22}>
            <Input label={t("currentPassword")} type="password" placeholder="••••••••" />
            <Button variant="secondary">
              <LockKeyhole className={styles.element23} />
              {t("changePassword")}
            </Button>
            <div className={styles.element24}>
              <Toggle
                label={t("profileVisibility")}
                description={t("profileVisibilityDesc")}
                checked={data.privacy.profileVisibility}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export { SettingsScreen };
