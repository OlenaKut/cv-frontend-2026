// pages/index.js
import data from "../data/cv.json";
import { Gem } from "lucide-react";

export default function Home() {
  const {
    personal,
    summary,
    experience,
    education,
    interests,
    achievements,
    courses,
    languages,
  } = data;

  return (
    <main className="cv-page">
      {/* LEFT */}
      <section className="cv-left">
        <h1 className="cv-name">{personal.name}</h1>
        <div className="cv-title">{personal.title}</div>

        <div className="cv-contact">
          <div>📞 {personal.phone}</div>
          <div>
            ✉️ <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
          <div>
            <a
              href={`https://www.linkedin.com/in/olena-kutasevych-b0b99a24b/`}
              target="_blank"
            >
              Linkedin: {personal.linkedin}
            </a>
          </div>
          <div>📍 {personal.location}</div>
        </div>
        {/* Experience */}
        <div className="cv-section">
          <div className="cv-section-title">ERFARENHET</div>

          {experience.map((item, index) => (
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
          <div className="cv-section-title">UTBILDNING</div>

          {education.map((item, index) => (
            <div className="cv-item cv-item-education" key={index}>
              <div className="cv-item-header">
                <span className="cv-item-role">{item.degree}</span>
                <span className="cv-item-date">{item.period}</span>
              </div>

              <div className="cv-item-header">
                <span className="cv-item-org">{item.institution}</span>
                <span className="cv-item-location">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="cv-section">
          <div className="cv-section-title">
            INTRESSEN / PROFESSIONELLT ENGAGEMANG
          </div>

          <div className="cv-interests">
            {interests.map((item, index) => (
              <div className="cv-interest-item" key={index}>
                <div className="cv-interest-icon">
                  <Gem size={16} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT */}
      <aside className="cv-right">
        <img src={personal.photo} alt={personal.name} className="cv-photo" />

        {/* Summary */}
        <div className="cv-right-section">
          <div className="cv-right-title">SAMMANFATTNING</div>
          <p className="cv-summary">{summary}</p>
        </div>

        {/* Achievements */}
        <div className="cv-right-section">
          <div className="cv-right-title">PRESTATIONER</div>
          {achievements.map((item, index) => (
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

        {/* Courses */}
        <div className="cv-right-section">
          <div className="cv-right-title">KURSER</div>

          {courses.map((item, index) => (
            <div className="cv-item" key={index}>
              <div>
                <span className="cv-item-header">{item.title}</span>
              </div>

              <div>
                <span className="cv-item-organisation">
                  {item.organization}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="cv-right-section">
          <div className="cv-right-title">SPRÅK</div>

          <div className="cv-languages">
            {languages.map((item, index) => (
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
      </aside>
    </main>
  );
}
