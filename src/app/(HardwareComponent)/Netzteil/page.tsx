import ComponentLayout from "../ComponentLayout";
import Section from "../../types/Section";
import Image from "next/image";

// Mehr mit kursiv, fett oder unterstrichen arbeiten
// VORALLEM, bspw. bei "Watt" kursiv machen...

/*
* http://www.netzteil-test.de/was-ist-ein-netzteil/
* https://www.bing.com/search?q=Netzteil+Struktur+auf+Deutsch&toWww=1&redig=FAC1870EDBC843028FB39C8700DBF6D6
* https://www.reichelt.de/magazin/ratgeber/pc-netzteile-das-ist-beim-kauf-zu-beachten/
*
* BILDER
*
* https://www.amazon.de/Thermaltake-Smart-RGB-700W-PC-Netzteil/dp/B0744P7VHW
* https://www.otto.de/p/seasonic-seasonic-ssp-600jt-bulk-600w-pc-netzteil-pc-netzteil-S0E2V05D/#variationId=S0E2V05DB026
* */

import Image_Netzteil from "@public/netzteil/netzteil.png";
import Image_Kabel from "@public/netzteil/kabel.png";

export default function Page() {
	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe vom Netzteil",
			content: (
				<>
					<p>
						Das Netzteil, auch <b>P</b>ower <b>S</b>upply <b>U</b>nit (PSU) genannt, ist eine essenzielle
						Komponente eines Computers.
						Es hat die Aufgabe, das Mainboard mit genügend Strom zu versorgen. Außerdem hat es mit einigen
						Komponenten eine direkte Verbindung.
					</p>

					<p>
						Das Netzteil ist ein „Transformator“, welcher den Wechselstrom aus der Steckdose in den
						benötigten Gleichstrom transformiert.
					</p>

					<Image
						src={Image_Netzteil}
						alt={"Netzteil"}/>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbau",
			title: "Der Aufbau vom Netzteil",
			content: (
				<>
					<p>
						Ein Netzteil besteht aus verschiedenen mechanischen und elektronischen Teilen. Es hat viele
						einzelne Kabel (siehe Abbildung), welche verschiedene Anschlüsse haben. Jedes Bauteil
						eines Computers bezieht seinen Strom über das Netzteil. Da jedoch nicht jede Komponente
						gleich viel Strom und die gleiche Spannung benötigt, wandelt das Netzteil vorher für jedes
						einzelne Kabel die Stromstärke und die Spannung um.
					</p>

					<Image
						src={Image_Kabel}
						alt={"Netzteil mit vielen Kabeln"}/>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale vom Netzteil",
			content: (
				<>
					<p>
						Die Leistung des Netzteils wird in Watt angegeben. Ein einfacher Büro-Rechner ohne dedizierte
						Grafikkarte kommt mit einem 300-Watt-Netzteil aus.
						<br/>
						<br/>

						Ein Spiele-PC hingegen sollte mindestens über ein 550-Watt-Netzteil verfügen, da ein guter
						Prozessor viel Strom ziehen kann.
						<br/>
						<br/>

						High-End-Systeme mit mehr als einer Grafikkarte brauchen unter Umständen ein Netzteil mit
						750 Watt oder mehr, um den Energiehunger der Komponenten zu stillen.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Netzteil" sections={sections}/>;

	return (
		<>
			<section id="Erklärung" className="section">
				<h1>Netzteil</h1>
				<p>
					Das Netzteil versorgt den PC mit Strom.
				</p>
			</section>

			<section id="Aufgabe" className="section">
				<h1>Aufgabe</h1>
				<p>
					Das Netzteil versorgt den PC, bzw. das Mainboard mit Strom.
					Es transformiert den Wechselstrom aus der Steckdoes in Gleichstrom, welchen das Mainboard benötigt.
				</p>
			</section>

			<section id="Aufbau" className="section">
				<h1>Aufbau</h1>
				<p>
					Netzteile besitzen meist einen verbauten Lüfter, um nicht zu heiß zu werden.
					[Beim unwandeln entsteht wärme? DA meist bis zu 500W oder 1000W?]
				</p>
			</section>

			<section id="Leistungsmerkmale" className="section">
				<h1>Leistungsmerkmale</h1>
				<p>
					Je mehr Watt das Netzteil liefern kann, deso mehr Komponenten können im PC eingebaut werden,
					wie bswp. eine stärkere Grafikkarte, mehr Arbeitsspeicher, usw.
				</p>
			</section>
		</>
	);
}
