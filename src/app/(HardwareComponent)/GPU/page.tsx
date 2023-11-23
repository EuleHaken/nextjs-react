import Section from "../../types/Section";
import ComponentLayout from "../ComponentLayout";
import Image from "next/image";

/*
* https://www.t-online.de/digital/hardware/id_48158094/grafikkarte-im-computer-was-genau-macht-die-eigentlich-.html
* https://databasecamp.de/ki-blog/grafikkarte
* https://de.wikipedia.org/wiki/Grafikkarte
* https://www.delst.de/de/lexikon/grafikkarte/
* https://www.etest.de/hardware/Kaufberatung.Grafikkarten.Einsatzzweck_einer_Grafikkarte_Welcher_Typ_bin_ich_.html
* https://gamergirlz.de/grafikkarten-komponenten-leistungsanforderungen-und-auswahl
*
*
*
* BILDER
* https://www.caseking.de/pc-komponenten/grafikkarten
*
* */


import Image_Grafikkarte from "@public/gpu/grafikkarte.png";

export default function Page() {
	const sections2: Section[] = [
		{
			id: "",
			title: "Die Grafikkarte (GPU)",
			level: 1,
			content: (
				<>
					<p>
						Die GPU (<u>G</u>raphics <u>P</u>rocessing <u>U</u>nit) ist der Grafikprozessor eines PC's.
						Die Grafikkarte ist nicht die GPU, sondern befindet sich die GPU auf der Grafikkarte.
					</p>
				</>
			)
		},
		{
			id: "Aufgabe",
			title: "Die Aufgabe der GPU",
			level: 1,
			content: (
				<>
					<p>
						Die GPU setzt die von der CPU verarbeiteten Befehle grafisch auf dem Bildschirm um.
					</p>
				</>
			)
		},
		{
			id: "Aufbau",
			title: "Der Aufbau von der GPU",
			level: 1,
			content: (
				<>
					<p>
						Die Grafikkarte besteht aus dem Grafikprozessor (GPU), einem Speicher, auf welchem Informationen
						abgelegt werden,
						und einem Wandlerchip, welcher die Informationen der CPU in Bilder umsetzt.
					</p>
				</>
			)
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale der GPU",
			level: 1,
			content: (
				<>
					<p>
						Je größer der Bildschirm des PC's ist, desto aufwendiger sind die Berechnungen um die
						Informationen der
						CPU in Bilder umzuwandeln.
					</p>
				</>
			)
		}
	];

	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe der Grafikkarte",
			level: 1,
			content: (
				<>
					<p>
						Die Grafikkarte, bzw. die GPU (<b>G</b>raphics <b>P</b>rocessing <b>U</b>nit, engl. für
						"Grafikprozessor" bzw. "Grafikeinheit") sorgt für die
						Berechnung von Bildern im Computer, die anschließend auf einem Monitor angezeigt werden
						können. Sie stellt die Schnittstelle zwischen den Berechnungen des Prozessors und dem Monitor
						dar.
					</p>

					<p>
						Eine Grafikkarte wandelt die Daten vom Prozessor so um, dass diese auf dem Monitor
						dargestellt werden können.
					</p>

					<Image
						src={Image_Grafikkarte}
						alt={"Grafikkarte"}/>
				</>
			),
		},
		{
			id: "Aufbau",
			title: "Der Aufbau der Grafikkarte",
			content: (
				<>
					<p>
						Eine Grafikkarte besteht aus verschiedenen mechanischen und elektronischen Teilen.
						Neben verschiedenen Abdeckungen und einem Slotblech besitzt sie einen Lüfter und Kühlkörper,
						einen Grafikprozessor (GPU), Speicher und eine Platine.
						Im Grafikspeicher werden die vom Grafikprozessor berechneten Daten zwischengespeichert.
						Die wichtigsten Komponenten moderner Grafikkarten sind:
					</p>

					<ul>
						<li>
							GPU,
						</li>

						<li>
							Grafikspeicher,
						</li>

						<li>
							sowie Anschlüsse für externe Geräte (Audio, HDMI, ...)
						</li>
					</ul>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale einer Grafikkarte",
			content: (
				<>
					<p>
						Die Leistungsfähigkeit einer Grafikkarte hängt von mehreren Faktoren ab. Grafikkarten haben
						einen eigenen Arbeits- und Zwischenspeicher. Aktuelle Standards sind GDDR4 bis GDDR6.
						Zudem bestimmen die Anzahl der Rechenkerne, der Takt sowie die Größe und die Geschwindigkeit
						des Grafikspeichers über die Leistungsfähigkeit.
					</p>

					<p>
						Die Leistung einer Grafikkarte kann in FPS (frames per second, auf Deutsch "Bilder pro Sekunde")
						angegeben werden.
					</p>
				</>
			),
			level: 1,
		},
	];


	return <ComponentLayout name="Grafikkarte" sections={sections}/>
}
