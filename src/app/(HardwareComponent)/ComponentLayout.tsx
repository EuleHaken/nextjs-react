import PageName from "../components/PageName";

import styles from "./ComponentLayout.module.css";
import Section from "../types/Section";
import Inhaltsverzeichnis from "../components/Inhaltsverzeichnis";

type Props = {
	name: string;
	sections: Section[];
};

export default function ComponentLayout({name, sections}: Props) {
	return (
		<Inhaltsverzeichnis sections={sections}>
			<PageName name={name}>
				{sections.map((section) => (
					<section key={section.id} id={section.id} className={styles.section}>
						<div className={styles["section-heading"]}>
							<h1>{section.title}</h1>
						</div>

						{section.content /*TODO Add thingy for inhaltsverzeichnis lol xd :D HAHA Also, push to github*/}

						{section.subsections && section.subsections.map((subsection) => (
							<section key={subsection.id} id={subsection.id} className={styles.section}>
								<div className={styles["section-heading"]}>
									<h2>{subsection.title}</h2>
								</div>
								{subsection.content}
							</section>
						))}
					</section>
				))}
			</PageName>
		</Inhaltsverzeichnis>
	);
}
