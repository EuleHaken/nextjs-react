import Section from "../../types/Section";
import ComponentLayout from "../ComponentLayout";
import Image from "next/image";

import Festplatte_SSD from "@public/festplatte/SSD.png";
import Festplatte_HDD from "@public/festplatte/HDD.png";
import Festplatte from "@public/festplatte/festplatte.png";

/*
* https://www.avast.com/de-de/c-ssd-vs-hdd#:~:text=Hinsichtlich%20der%20Speicherkapazit%C3%A4t%20gibt%20es,Gigabyte%3A%20SSDs%20sind%20wesentlich%20teurer.
* [https://praxistipps.chip.de/was-ist-eine-festplatte-einfach-erklaert_41663]
* [https://de.wikipedia.org/wiki/Festplattenlaufwerk]
* [https://www.giga.de/extra/ratgeber/tipps/was-ist-eine-festplatte-aufbau-einfach-erklaert/]
* [https://www.elektronik-kompendium.de/sites/com/0610291.htm]
* [https://www.pcwelt.de/article/1085449/leistung-der-festplatte-messen-und-verbessern.htm]
*
* Bilder
* data:image/jpeg;base64,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
*     { => https://www.com-magazin.de/praxis/festplatte/festplatten-technik-217154.html }
*
* https://www.galaxus.de/de/page/eine-komplexe-angelegenheit-so-funktioniert-eine-ssd-7399
*   {https://static.digitecgalaxus.ch/Files/1/3/9/0/2/3/6/7/SSD%20Overview.jpg}
*
*
* https://www.kathrein-ds.com/produkte/ersatzteile/interne-festplatte-35-1-tb
* */

export default function Page() {
	const sections: Section[] = [
		{
			id: "",
			title: "Die Festplatte",
			level: 1,
			content: (
				<>
					<p>
						Festplatten sind kleine, meist rechteckige Laufwerke, welche an den Computer
						angeschlossen werden. Ihre Aufgabe ist es, Daten zu speichern und abzurufen.
					</p>

					<Image
						src={Festplatte}
						alt={"Festplatte"}/>
				</>
			)
		},
		{
			id: "Aufgabe",
			title: "Die Aufgabe der Festplatte",
			content: (
				<>
					<p>
						Eine Festplatte, auch <b>H</b>ard <b>D</b>isk (HD) oder <b>H</b>ard <b>D</b>isk <b>D</b>rive
						(HDD) genannt, ist ein kleines, meist
						rechteckiges Laufwerk, das an den Computer angeschlossen werden kann. Ihre Hauptaufgabe ist die
						Speicherung von Daten und Dateien.
					</p>

					<p>
						Sie ist das Speichermedium im Computer.
						Alle Dokumente, Bilder oder Programme werden dort gesichert.
					</p>

					<p>
						Festplatten können zum Beispiel über USB-Schnittstellen oder über SATA-Steckplätze verbunden
						werden.
						Zudem gibt es auf dem Mainboard Steckplätze, über welche man M.2 SSD-Festplatten installieren
						kann.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbaue",
			title: "Der Aufbau der Festplatte",
			content: (
				<>
					<p>
						Eine moderne Festplatte ist meist nur etwas größer als ein Smartphone.
					</p>

					<p>
						<b>HDD-Festplatte</b>
						<br/>

						Eine HDD-Festplatte funktioniert ähnlich wie ein Schallplattenspieler.
						<br/>
						Sie besteht aus mehreren magnetischen Platten, die sich sehr schnell drehen. Auf diesen Platten
						befindet sich ein mechanischer Arm, welcher Aktuator genannt wird. An diesem Arm sind Schreib-
						und Leseköpfe angebracht.

						Der Aktuator bewegt sich über die Platten.
						<br/>

						Der Lesekopf liest die auf den Platten gespeicherten Daten, während der Schreibkopf Daten auf
						die Platten schreibt.

						Der Schreibkopf ändert die Polarität der magnetischen Felder auf der Platte, um Daten zu
						speichern.
						<br/>

						Eine negative Ladung repräsentiert eine 0 und eine positive Ladung eine 1.
					</p>
					<Image
						src={Festplatte_HDD}
						alt={"Bild von SSD"}
						className="component-image"
					/>

					<p>
						<b>SSD-Festplatte</b>
						<br/>

						Im Vergleich zu HDD-Fesplatten besitzt die SSD-Festplatte keine beweglichen Teile. Sie
						funktioniert rein mit Mikrochips und Cache-Speicher.
						Dadurch ist die SSD deutlich leiser als eine HDD und kann nicht so leicht beschädigt werden.
						<br/>

						Die Daten werden in Flash-Speichern gespeichert, welche elektrisch geladen werden. Dies
						ermöglicht den schnellen Zugriff auf die Daten und eine schnelle Speicherung von Daten.
						Außerderm ist die SSD somit auch widerstandsfähiger gegen Stöße oder einen physischen
						Schock, da sie keine beweglichen teile hat.
						<br/>

						Dadurch ist die SSD jedoch auch in der Regel teurer als eine HDD-Festplatte.
					</p>
					<Image
						src={Festplatte_SSD}
						alt={"Bild von SSD"}
						className="component-image"
					/>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale einer Festplatte",
			content: (
				<>
					<p>
						Die Leistungsfähigkeit einer Festplatte hängt von mehreren Faktoren ab.
						Die wichtigsten Faktoren sind die Speichergröße und die Geschwindigkeit, mit welcher Daten
						abgerufen und beschrieben werden können.
					</p>

					<p>
						Speicherkapazitäten können von wenigen Gigabyte bis hin zu sehr großen
						Terrabyte variieren.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Festplatte" sections={sections}/>;

	return (
		<>
			<section id="Erklärung" className="section">
				<h1>Festplatten (HDD / SSD)</h1>
				<p>
					Festplatten werden verwendet, um Daten speichern zu können.
				</p>
			</section>

			<section id="Aufgabe" className="section">
				<h1>Aufgabe</h1>
				<p>
					Die Aufgabe von Festplatten ist es, Daten zu speichern und abzurufen.
				</p>
			</section>

			<section id="Aufbau" className="section">
				<h1>Aufbau</h1>
				<p>
					Beim Aufbau muss man zwischen HDD und SSD unterscheiden:
				</p>

				<section id="HDD" className="section-2">
					<h2>HDD</h2>
					<p>
						Eine HDD (<u>H</u>ard <u>D</u>isk <u>D</u>rive) besteht aus mehreren Disks (CDs), die sich im
						inneren (im Gehäuse der Festplatte)
						schnell drehen und von einem Lese-/ Schreibkopf gelesen und beschrieben werden.
						Dieser Kopf verändert die Polarität (also die Ladung) der Disks und ändert so deren Wert in
						Binär (Negativ: 0, Positiv: 1).
					</p>
				</section>

				<section id="SSD" className="section-2">
					<h2>SSD</h2>
					<p>
						Eine SSD (<u>S</u>olid <u>S</u>tate <u>D</u>rive) besitzt mehrere NAND-Flash-Speicher,
						Cache-Speicher, Controller
						und Firmware. Sie schreibt die Daten auf die NAND-Speicher oder speichert sie im Cache.
					</p>
				</section>
			</section>

			<section id="Leistungsmerkmale" className="section">
				<h1>Leistungsmerkmale</h1>
				<p>
					Je größer der Speicher der Festplatte, desto mehr Daten können gespeichert werden.
				</p>
				<p>
					Je schneller die Festplatte ist, desto schneller können Daten gespeichert und abgerufen werden.
				</p>
			</section>
		</>
	);
}
