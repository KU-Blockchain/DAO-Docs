import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn by Building",
    Svg: require("@site/static/img/learn-by-doing.svg").default,
    description: (
      <>
        The DAO creates a unique learning experience for students of all levels
        to engage with emerging technology. Learning is an important
        contribution, and it's rewarded as such. No prior blockchain or
        development experience is required.
      </>
    ),
  },
  {
    title: "All Contributions Matter",
    Svg: require("@site/static/img/contributions-matter.svg").default,
    description: (
      <>
        We want all members to get credit for their work. Every student has an
        equal opportunity to ascend the community leaderboard, no matter what
        unique skills they bring to the table.
      </>
    ),
  },
  {
    title: "Every Voice is Heard",
    Svg: require("@site/static/img/voices-are-heard.svg").default,
    description: (
      <>
        Every member is able to vote in the DAO, and every vote counts. Our
        unique voting model allows for both direct democracy and
        participation-weighted voting, depending on the nature of the community
        decision.{" "}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
