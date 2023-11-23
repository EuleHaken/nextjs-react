//import { convertDataToSections, InputData } from "../../convertDataToSections";
import ComponentLayout from "../ComponentLayout";
import Section from "../../types/Section";
import Image from "next/image";

/*
*https://de.wikipedia.org/wiki/Soundkarte
* http://audio-lexikon.com/analog-digital/interne-externe-soundkarte/
* https://praxistipps.chip.de/soundkarte-kaufen-worauf-achten-die-wichtigsten-kriterien_44651
*
* BILDER
*https://de.wikipedia.org/wiki/Soundkarte
*
* */

import Image_Soundkarte from "@public/soundkarte/soundkarte.png";

export default function Page() {
	const sections: Section[] = [
		{
			id: "aufgabe",
			title: "Aufgabe",
			content: (
				<>
					<p>
						Eine Soundkarte, auch Audio-Interface genannt, ist eine optionale Komponente der Hardware eines
						Computers, die analoge und digitale Audiosignale verarbeitet.
						Sie ermöglicht die Aufzeichnung, Erzeugung, Mischung, Bearbeitung und Wiedergabe von
						Tonsignalen.
					</p>

					<Image
						src={Image_Soundkarte}
						alt={"Soundkarte"}/>
				</>
			),
			level: 1,
		},
		{
			id: "aufbau",
			title: "Aufbau",
			content: (
				<>
					<p>
						Eine Soundkarte besteht aus verschiedenen mechanischen und elektronischen Teilen.
						Sie hat viele verschiedene Anschlüsse. Je nach Typ können analoge
						und digitale Tonquellen und -verarbeiter angeschlossen werden.
						Der Anschluss an den PC erfolgt über die PCI- bzw. PCI-Express-Bus Steckplätze.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "leistungsmerkmale",
			title: "Leistungsmerkmale",
			content: (
				<>
					<p>
						Die Leistungsfähigkeit einer Soundkarte hängt von mehreren Faktoren ab. Die Soundkarte sollte
						mindestens eine Samplerate von 48 kHz bei einer Sampletiefe von 24 Bit unterstützen.
						Ein- und Ausgangslatenzen im Bereich von 6ms sind optimal.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Soundkarte" sections={sections}/>;
	;

	const data = [
		{
			id: "Erklärung",
			name: "Soundkarten",
			content: ["Soundkarten erlauben dem PC Ton abzuspielen"]
		},
		{
			id: "Aufgabe",
			name: "Aufgabe",
			content: [
				`Die Aufgabe der Soundkarte ist es,
				Ton an Anschlussmäglichkeiten wie AUX, Lautsprecher
				oder Kopfhörer bereitszustellen.`
			]
		},
		{
			id: "Aufbau",
			name: "Aufbau",
			content: [
				`Eine Soundkarte besitzt analoge und digitale Eingangs- und Ausgangsschnittstellen,
				einen DA- und AD-Wandler [was das?],
				einen integrierten Prozessor (DSP = Digital Sound Processor oder APU = Audio Processing Unit)
				und einen Speicher (RAM für flüchtige und ROM für feste Daten, wie bspw. Firmware).`,
				{
					id: "DA_Wandler",
					name: "DA-Wandler",
					content: ["Ein DA-Wandler ist ein Wandler lol.", "Er ist halt für irgendwas zuständig"]
				}
			]
		},
		{
			id: "Leistungsmerkmale",
			name: "Leistungsmerkmale",
			content: ["TODO"]
		}
	];

	//return convertDataToSections(data);
}
