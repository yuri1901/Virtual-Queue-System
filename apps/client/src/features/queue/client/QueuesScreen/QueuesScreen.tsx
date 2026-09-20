import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Dropdown } from "@/components/Dropdown";
import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { Select } from "@/components/Select";
import { Link } from "@/i18n";
import { routes } from "@/libs/routes";

import type { QueueList } from "../../shared";
import { queuesScreenStyles as styles } from "./QueuesScreen.styles";

interface QueuesScreenProps {
  data?: QueueList;
}

function QueuesScreen({ data }: QueuesScreenProps) {
  const t = useTranslations("queue.list");
  const tFilters = useTranslations("Filters");
  const queues = data ?? [];

  return (
    <div className={styles.root}>
      <Header
        title={t("title")}
        description={t("description")}
        action={
          <ButtonLink
            href={routes.dashboard.createQueue}
            variant="primary"
          >
            <Plus className={styles.headerIcon} />
            {t("createQueue")}
          </ButtonLink>
        }
      />
      <div className={styles.filterRow}>
        <div className={styles.searchWrapper}>
          <SearchInput placeholder={t("searchPlaceholder")} />
        </div>
        <div className={styles.filterGroup}>
          <Select
            label=""
            options={[
              tFilters("allStatuses"),
              tFilters("active"),
              tFilters("paused"),
              tFilters("closed"),
              tFilters("draft"),
            ]}
          />
          <Filter />
        </div>
      </div>
      <Card className={styles.card}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                {[t("thQueue"), t("thStatus"), t("thWaiting"), t("thAvgWait"), t("thCreated"), ""].map((heading) => (
                  <th
                    key={heading}
                    className={styles.th}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {queues.map((queue) => (
                <tr
                  key={queue.id}
                  className={styles.tr}
                >
                  <td className={styles.tdMain}>
                    <Link
                      href={routes.dashboard.queue(queue.id)}
                      className={styles.queueLink}
                    >
                      {queue.name}
                    </Link>
                    <p className={styles.queueMeta}>
                      {queue.category} · {queue.code}
                    </p>
                  </td>
                  <td className={styles.tdBadge}>
                    <Badge variant={queue.status === "Active" ? "success" : queue.status === "Paused" ? "warning" : "neutral"}>
                      {queue.status}
                    </Badge>
                  </td>
                  <td className={styles.tdText}>{queue.waiting}</td>
                  <td className={styles.tdText}>{queue.averageWait}</td>
                  <td className={styles.tdMuted}>{queue.created}</td>
                  <td className={styles.tdActions}>
                    <Dropdown
                      items={[
                        {
                          label: t("view"),
                          icon: "archive",
                        },
                        {
                          label: t("share"),
                          icon: "share",
                        },
                        {
                          label: queue.status === "Active" ? t("pause") : t("resume"),
                          icon: "pause",
                        },
                        {
                          label: t("delete"),
                          icon: "trash",
                          danger: true,
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.mobileList}>
          {queues.map((queue) => (
            <div
              key={queue.id}
              className={styles.mobileCard}
            >
              <div className={styles.mobileHeader}>
                <div>
                  <Link
                    href={routes.dashboard.queue(queue.id)}
                    className={styles.mobileTitle}
                  >
                    {queue.name}
                  </Link>
                  <p className={styles.mobileSub}>
                    {queue.category} · {queue.code}
                  </p>
                </div>
                <Badge variant={queue.status === "Active" ? "success" : queue.status === "Paused" ? "warning" : "neutral"}>
                  {queue.status}
                </Badge>
              </div>
              <div className={styles.mobileGrid}>
                <div>
                  <p className={styles.mobileLabel}>{t("thWaiting")}</p>
                  <p className={styles.mobileVal}>{queue.waiting}</p>
                </div>
                <div>
                  <p className={styles.mobileLabel}>{t("thAvgWait")}</p>
                  <p className={styles.mobileVal}>{queue.averageWait}</p>
                </div>
              </div>
              <div className={styles.mobileActions}>
                <ButtonLink
                  href={routes.dashboard.queue(queue.id)}
                  variant="secondary"
                  className={styles.mobileBtn}
                >
                  {t("viewQueue")}
                </ButtonLink>
                <Dropdown
                  items={[
                    {
                      label: t("view"),
                      icon: "archive",
                    },
                    {
                      label: t("share"),
                      icon: "share",
                    },
                    {
                      label: t("delete"),
                      icon: "trash",
                      danger: true,
                    },
                  ]}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export { QueuesScreen };
