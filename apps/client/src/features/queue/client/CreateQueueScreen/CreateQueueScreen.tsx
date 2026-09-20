import { ArrowLeft, Check, Clock3, Info } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Toggle } from "@/components/Toggle";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import { createQueueScreenStyles as styles } from "./CreateQueueScreen.styles";

function CreateQueueScreen() {
  const t = useTranslations("queue.create");

  return (
    <div className={styles.root}>
      <Link
        href={routes.dashboard.queues}
        className={styles.backLink}
      >
        <ArrowLeft className={styles.backIcon} />
        {t("backLink")}
      </Link>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t("eyebrow")}</p>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>{t("description")}</p>
      </div>
      <div className={styles.stepper}>
        <span className={styles.activeStep}>
          <span className={styles.activeStepNumber}>1</span>
          {t("stepBasics")}
        </span>
        <span className={styles.divider} />
        <span className={styles.stepItem}>
          <span className={styles.stepNumber}>2</span>
          {t("stepSettings")}
        </span>
        <span className={styles.divider} />
        <span className={styles.stepItem}>
          <span className={styles.stepNumber}>3</span>
          {t("stepAccess")}
        </span>
        <span className={styles.divider} />
        <span className={styles.stepItem}>
          <span className={styles.stepNumber}>4</span>
          {t("stepReview")}
        </span>
      </div>
      <div className={styles.form}>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>{t("basicInfoTitle")}</h2>
          <p className={styles.cardSubtitle}>{t("basicInfoSubtitle")}</p>
          <div className={styles.grid2}>
            <div className={styles.fullCol}>
              <Input
                label={t("nameLabel")}
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div className={styles.fullCol}>
              <Textarea
                label={t("descLabel")}
                placeholder={t("descPlaceholder")}
              />
            </div>
            <Select
              label={t("categoryLabel")}
              options={[t("categoryPlaceholder"), "Clinic", "Barbershop", "Restaurant", "Service center", "Event", "Office"]}
            />
            <Input
              label={t("locationLabel")}
              placeholder={t("locationPlaceholder")}
            />
          </div>
        </Card>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>{t("configTitle")}</h2>
          <p className={styles.cardSubtitle}>{t("configSubtitle")}</p>
          <div className={styles.grid2}>
            <Input
              label={t("maxPeopleLabel")}
              placeholder={t("maxPeoplePlaceholder")}
              type="number"
            />
            <Input
              label={t("avgServiceTimeLabel")}
              placeholder={t("avgServiceTimePlaceholder")}
            />
            <label className={styles.inputLabel}>
              <span className={styles.labelRow}>
                {t("openingTimeLabel")} <Clock3 className={styles.labelIcon} />
              </span>
              <input
                type="time"
                defaultValue="09:00"
                className={styles.inputField}
              />
            </label>
            <label className={styles.inputLabel}>
              <span className={styles.labelRow}>
                {t("closingTimeLabel")} <Clock3 className={styles.labelIcon} />
              </span>
              <input
                type="time"
                defaultValue="17:00"
                className={styles.inputField}
              />
            </label>
          </div>
        </Card>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>{t("accessTitle")}</h2>
          <p className={styles.cardSubtitle}>{t("accessSubtitle")}</p>
          <div className={styles.optionsList}>
            <Toggle
              label={t("allowRemoteJoin")}
              description={t("allowRemoteJoinDesc")}
              checked
            />
            <Toggle
              label={t("requireNickname")}
              description={t("requireNicknameDesc")}
              checked
            />
            <Toggle
              label={t("allowLeave")}
              description={t("allowLeaveDesc")}
              checked
            />
            <Toggle
              label={t("sendNotifications")}
              description={t("sendNotificationsDesc")}
            />
          </div>
          <div className={styles.infoBox}>
            <Info className={styles.infoIcon} />
            {t("changeNotice")}
          </div>
        </Card>
      </div>
      <div className={styles.actions}>
        <ButtonLink
          href={routes.dashboard.queues}
          variant="secondary"
        >
          {t("cancel")}
        </ButtonLink>
        <Button variant="secondary">
          <Check className={styles.submitIcon} />
          {t("saveDraft")}
        </Button>
        <Button variant="primary">{t("submit")}</Button>
      </div>
    </div>
  );
}

export { CreateQueueScreen };
