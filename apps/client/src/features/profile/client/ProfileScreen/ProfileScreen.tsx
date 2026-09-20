import { Camera, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";

import type { ProfileData } from "../../shared";
import { profileScreenStyles as styles } from "./ProfileScreen.styles";

interface ProfileScreenProps {
  data: ProfileData;
}

function ProfileScreen({ data }: ProfileScreenProps) {
  const t = useTranslations("profile.screen");

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
        action={<Button variant="primary">{t("saveChanges")}</Button>}
      />
      <div className={styles.grid}>
        <Card className={styles.avatarCard}>
          <span className={styles.avatar}>{data.initials}</span>
          <Button variant="secondary" className={styles.changeAvatarBtn}>
            <Camera className={styles.cameraIcon} />
            {t("changeAvatar")}
          </Button>
          <Button className={styles.removeAvatarBtn}>{t("removeAvatar")}</Button>
        </Card>
        <div className={styles.mainColumn}>
          <Card className={styles.infoCard}>
            <h2 className={styles.cardTitle}>{t("infoTitle")}</h2>
            <p className={styles.cardSubtitle}>{t("infoSubtitle")}</p>
            <div className={styles.inputsGrid}>
              <Input
                label={t("name")}
                value={data.name}
              />
              <Input
                label={t("nickname")}
                value={data.nickname}
              />
              <Input
                label={t("email")}
                type="email"
                value={data.email}
              />
              <Input
                label={t("phone")}
                placeholder={t("phonePlaceholder")}
                value={data.phone}
              />
            </div>
          </Card>
          <Card className={styles.accountCard}>
            <h2 className={styles.accountTitle}>{t("accountTitle")}</h2>
            <div className={styles.accountList}>
              <div className={styles.accountRow}>
                <span className={styles.rowLabel}>{t("accountCreated")}</span>
                <span className={styles.rowValue}>{data.accountCreated}</span>
              </div>
              <div className={styles.accountRow}>
                <span className={styles.rowLabel}>{t("authProvider")}</span>
                <span className={styles.providerValue}>
                  <Mail className={styles.mailIcon} />
                  {data.authProvider}
                </span>
              </div>
              <div className={styles.accountRow}>
                <span className={styles.rowLabel}>{t("googleAccount")}</span>
                <span className={styles.mutedValue}>{data.googleAccount}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export { ProfileScreen };
