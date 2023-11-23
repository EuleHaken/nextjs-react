import ComponentLayout from "../ComponentLayout";
import Section from "../../types/Section";
import Image from "next/image";


/*
* https://de.wikipedia.org/wiki/Netzwerkkarte
* https://community.fs.com/de/article/nic-card-guide-for-beginners-functions-types-and-selection-tips.html
*
* BILDER
* https://de.wikipedia.org/wiki/Netzwerkkarte
* */

import Image_Netzwerkkarte from "@public/netzwerkkarte/netzwerkkarte.png";

export default function Page() {
	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe der Netzwerkkarte",
			content: (
				<>
					<p>
						Die Netzwerkkarte, auch Netzwerkadapter oder NIC
						(<b>N</b>etwork <b>I</b>nterface <b>C</b>ard) genannt, ist eine elektronische Schaltung zur Verbindung
						eines Computers mit einem lokalen Netzwerk zum Austausch von Daten.
						Ihre primäre Aufgabe ist die Herstellung einer physikalischen Verbindung zum Netzwerk über
						ein geeignetes Zugriffsverfahren und die Implementierung der ersten oder auch zweiten
						OSI-Schicht (meist Ethernet).
					</p>

					<Image
						src={Image_Netzwerkkarte}
						alt={"Netzwerkkarte"}/>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbau",
			title: "Der Aufbau der Netzwerkkarte",
			content: (
				<>
					<p>
						Netzwerkkarten bestehen auf der einen Seite aus einer Netzwerkschnittstelle, die für die
						jeweiligen Netzwerktypen bzw. die Netzwerkarchitektur ausgelegt ist, und auf der anderen Seite
						aus einer an die jeweilige Computerarchitektur angepasste Bus-Schnittstelle.
					</p>

					<p>
						Seit einigen Jahren haben praktisch alle Computer die (kabelgebundene) Netzwerkfunktionalität
						bereits auf ihrer Hauptplatine und benötigen nur noch eine Netzwerkkarte, falls eine weitere,
						schnellere oder drahtlose Verbindung benötigt wird.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale der Netzwerkkarte",
			content: (
				<>
					<p>
						Basierend auf verschiedenen Geschwindigkeiten gibt es 10Mbps, 100Mbps, 10/100Mbps adaptive
						Karte (kann zwischen 10Mbps und 100Mbps wechseln), 1000Mbps, 10GbE (10 Gigabit Ethernet),
						25G (25 Gigabit Ethernet) oder sogar noch schnellere Netzwerkkarten auf dem Markt.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Netzwerkkarte" sections={sections}/>;

	return (
		<>
			<section id="Erklärung" className="section">
				<h1>Netzwerkkarten</h1>
				<p>
					Netzwerkkarten ermöglichen dem PC einen Internetzugang.
				</p>
			</section>

			<section id="Aufgabe" className="section">
				<h1>Aufgabe</h1>
				<p>
					Die Netzwerkkarte versorgt den PC mit Internet (meist WLAN). Durch Sie kann er mit anderen
					Teilnehmern
					des Netzes kommunizieren.
				</p>
			</section>

			<section id="Aufbau" className="section">
				<h1>Aufbau</h1>
				<p>
					Es gibt interne und externe Netzwerkkarten.
				</p>
			</section>

			<section id="Leistungsmerkmale" className="section">
				<h1>Leistungsmerkmale</h1>
				<p>
					TODO
				</p>
			</section>
		</>
	);
}
