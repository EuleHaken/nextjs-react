import ComponentLayout from "../ComponentLayout";
import Section from "../../types/Section";
import Image from "next/image";

/*
*https://www.hagel-it.de/it-insights/arbeitsspeicher-ram-einfach-erklaert-alles-was-technikinteressierte-it-entscheider-darueber-wissen-muessen.html
* https://www.delst.de/de/lexikon/arbeitsspeicher-ram/
* https://www.bestetipps.de/computer/definition-und-erklaerung-arbeitsspeicher/
*
* BILDER
* https://www.ebay.de/itm/313614133060
* https://www.delst.de/de/lexikon/arbeitsspeicher-ram/
* */


import Image_RAM from "@public/ram/ram.png";
import Image_NakedRam from "@public/ram/naked-ram.png";

export default function Page() {
	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe vom RAM",
			content: (
				<>
					<p>
						Der Arbeitsspeicher, auch bekannt als RAM (<b>R</b>andom <b>A</b>ccess <b>M</b>emory), ist ein
						wesentlicher Bestandteil eines Computers. Er spielt eine entscheidende Rolle bei
						der Leistung und Geschwindigkeit des Systems.
					</p>

					<Image
						src={Image_RAM}
						alt={"RAM Modul"}/>

					<p>
						Der Arbeitsspeicher ist ein temporärer Speicherplatz, der Daten und Anweisungen enthält,
						auf die der Prozessor schnell zugreifen kann.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbau",
			title: "Der Aufbau vom RAM",
			content: (
				<>
					<p>
						Der Arbeitsspeicher besteht aus nummerierten Speicherzellen, von denen jede jeweils ein Byte
						(ein Zeichen) speichern kann. Jede Zelle hat eine eindeutige Adresse, über die der Prozessor
						auf die gespeicherten Daten zugreifen kann.
					</p>

					<Image
						src={Image_NakedRam}
						alt={"Naked RAM Module"}/>

					<p>
						Der Arbeitsspeicher arbeitet mit einer viel höheren Geschwindigkeit als die Festplatte,
						was zu schnelleren Lese- und Schreibvorgängen führt.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale vom RAM",
			content: (
				<>
					<p>
						Der Arbeitsspeicher ist durch drei wesentliche Elemente charakterisiert:
					</p>

					<ul>
						<li>
							Die Größe des Speichers,
						</li>
						<li>
							die Übertragungsrate der Daten,
						</li>
						<li>
							sowie die Zugriffsgeschwindikeit.
						</li>
					</ul>

					<p>
						Grundsätzlich gilt, je höher, besser und schneller die jeweiligen Werte sind, desto
						leistungsfähiger ist der Computer.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Arbeitsspeicher" sections={sections}/>;
}

/*
export class RAM extends IComponent {
  public static override Name() {
    return "Arbeitsspeicher (RAM)";
  }

  public static override Erläuterung() {
    return (
      <>
        Der Arbeitsspeicher, oder auch RAM (<u>R</u>andom <u>A</u>ccess <u>M</u>
        emory) genannt, ist ein kurzfristiger, nicht permanenter Speicher.
      </>
    );
  }

  public static override Aufgabe() {
    return (
      <>
        Im RAM können Daten gespeichert werden, mit denen die wichtigsten
        Funktionen ausgeführt werden können, wie zum Beispiel das Laden von
        Apps, im Internet surfen oder Dokumente öffnen/bearbeiten. Durch den
        kurzfristigen Speicher (Cache) können Apps schnell geöffnet werden. Das
        verringert das lange Laden. Wenn der PC die Daten zuerst von der
        Festplatte laden müsste, würde das Laden relativ lange dauern. Der RAM
        beschleunigt also den PC.
      </>
    );
  }

  public static override Aufbau() {
    return (
      <>
        Der RAM besitzt einen kurzfristigen Speicher für die Verarbeitung von
        kleinen Datenbits. Er besteht aus Kondensatoren und Transistoren, welche
        sich entweder ein- oder ausschalten. Die Daten werden im RAM in einer
        zufälligen (<u>R</u>andom) Reihenfolge gespeichert.
      </>
    );
  }

  public static override Leistungsmerkmale() {
    return (
      <>
        Je größer der RAM, desto schneller und leistungsfähiger der PC. Je mehr
        Speicher der RAM hat (4GB, 8GB, 16GB, ...), desto mehr Daten können
        zwischengespeichert werden, was den PC leistungsfähiger macht.
      </>
    );
  }
}
*/
