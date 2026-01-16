// pages/index.js
import { Gem } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  // const {
  //   personal,
  //   summary,
  //   experience,
  //   education,
  //   interests,
  //   achievements,
  //   courses,
  //   languages,
  // } = data;

  const handleLanguageChange = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <main className="cv-page">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button
          onClick={() => handleLanguageChange("sv")}
          className={router.locale === "sv" ? "active" : ""}
        >
          SV
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={router.locale === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>

      {/* LEFT */}
      <section className="cv-left">
        <h1 className="cv-name">{t("personal.name")}</h1>
        <div className="cv-title">{t("personal.title")}</div>

        <div className="cv-contact">
          <div className="personal">📞 {t("personal.phone")}</div>
          <div className="personal">
            ✉️{" "}
            <a href={`mailto:${t("personal.email")}`}>{t("personal.email")}</a>
          </div>
          <div className="personal">
            <a
              href={`https://www.linkedin.com/in/olena-kutasevych-b0b99a24b/`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="ln-icon" />{" "}
              {t("personal.linkedin")}
            </a>
          </div>
          <div className="personal">
            <a href={`https://github.com/OlenaKut`} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="ln-icon" />{" "}
              {t("personal.github")}
            </a>
          </div>
          <div>📍 {t("personal.location")}</div>
        </div>
        {/* Experience */}
        <div className="cv-section">
          <div className="cv-section-title">{t("sections.experience")}</div>

          {t("experience", { returnObjects: true }).map((item, index) => (
            <div className="cv-item" key={index}>
              <div className="cv-item-header">
                <span className="cv-item-role">{item.role}</span>
                <span className="cv-item-date">{item.period}</span>
              </div>

              <div className="cv-item-header">
                <span className="cv-item-org">{item.organization}</span>
                <span className="cv-item-location">{item.location}</span>
              </div>
              <ul>
                {item.responsibilities.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="cv-section">
          <div className="cv-section-title">{t("sections.education")}</div>

          {t("education", { returnObjects: true }).map((item, index) => (
            <div className="cv-item cv-item-education" key={index}>
              <div className="cv-item-header">
                <span className="cv-item-role">{item.degree}</span>
                <span className="cv-item-date">{item.period}</span>
              </div>

              <div className="cv-item-header">
                <span className="cv-item-org">{item.institution}</span>
                <span className="cv-item-location">{item.location}</span>
              </div>
              {item.skills && (
                <ul>
                  {item.skills.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT */}
      <aside className="cv-right">
        <img
          src={t("personal.photo")}
          alt={t("personal.name")}
          className="cv-photo"
        />

        {/* Summary */}
        <div className="cv-right-section">
          <div className="cv-right-title">{t("sections.summary")}</div>
          <p className="cv-summary">{t("summary")}</p>
        </div>

        {/* Achievements */}
        <div className="cv-right-section">
          <div className="cv-right-title">{t("sections.achievements")}</div>
          {t("achievements", { returnObjects: true }).map((item, index) => (
            <div className="cv-achievement" key={index}>
              <div className="cv-achievement-icon">
                <Gem size={20} />
              </div>
              <div>
                <span className="cv-achievement-header">{item.title}</span>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Skills */}
        <div className="cv-right-section">
          <div className="cv-right-title">{t("sections.coreSkills")}</div>

          {Object.entries(t("coreSkills", { returnObjects: true }))
            .filter(([, skills]) => Array.isArray(skills))
            .map(([category, skills]) => (
              <div className="cv-skills-group" key={category}>
                <div className="cv-skills-category">
                  {t(`coreSkillsLabels.${category}`)}
                </div>

                <div className="cv-skills-tags">
                  {skills.map((skill, i) => (
                    <span className="cv-skill-tag" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Languages */}
        <div className="cv-right-section">
          <div className="cv-right-title">{t("sections.languages")}</div>

          <div className="cv-languages">
            {t("languages", { returnObjects: true }).map((item, index) => (
              <div className="cv-language-inline" key={index}>
                <span className="cv-language-name">{item.title}</span>
                <span className="cv-language-level">{item.level}</span>

                <div className="cv-language-dots">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i < item.score ? "active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="cv-right-section">
          <div className="cv-right-title">{t("sections.interests")}</div>

          <div className="cv-achievements">
            {t("interests", { returnObjects: true }).map((item, index) => (
              <div className="cv-interests-item" key={index}>
                <div className="cv-interests-icon">
                  <Gem size={20} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
