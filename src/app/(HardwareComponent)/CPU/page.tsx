//import "./page.css";
import ComponentLayout from "../ComponentLayout";
import Image from "next/image";
import Section from "../../types/Section";

import {CPU as PictureCPU} from "@public/components";
import Link from "next/link";

/*
* caseking.de/glossar/c/cpu
* [https://www.giga.de/extra/cpu/specials/was-ist-eine-cpu-beim-pc-was-macht-der-prozessor/]
* [https://www.computerbild.de/artikel/cb-Tipps-PC-Hardware-Prozessor-Aufbau-31468625.html]
* [https://www.chip.de/artikel/Durchblick-beim-Prozessorkauf-4_140330808.html]
* youtube.com/watch?v=ergYcSJ3Zns
* weltderphysik.de/gebiet/technik/nachrichten/2019/prozessor-aus-nanoroehrchen
* intel.de/content/www/de/de/gaming/resources/cpu-clock-speed.html
* https://www.avast.com/de-de/c-how-to-check-cpu-temperature#:~:text=Eine%20normale%20CPU%2DTemperatur%20h%C3%A4ngt,70%2D80%20%C2%B0C%20ansteigen.
*
*
* BILDER
* https://www.redhat.com/sysadmin/cpu-components-functionality
*https://www.yaclass.at/p/informatik/10-schulstufe/informatiksysteme-21292/systemhardware-19159/re-ae69a69e-2509-4011-8245-603b94b43db8
*
* */

import Image_CPU from "@public/cpu/cpu.png";
import Image_Aufbau from "@public/cpu/aufbau.png";

export default function CPU() {
	const sections: Section[] = [
		{
			id: "",
			title: "Die CPU",
			level: 1,
			content: (
				<>
					<p>
						Die CPU ist das Herz vom jedem
						Computer. Sie führt die Befehle eines Computerprogramms aus, indem sie die
						grundlegenden arithmetischen, logischen, Steuerungs- und Eingabe-/Ausgabeoperationen
						ausführt.
						Ohne die CPU würde der Computer keinerlei Berechnungen durchführen können, wodurch er
						schlichtweg nicht funktionieren würde.
					</p>

					<Image src={Image_CPU} alt={"Image of CPU"}/>
				</>
			),
		},
		{
			id: "Aufgabe",
			title: "Die Aufgaben der CPU",
			level: 1,
			content: (
				<>
					<p>
						Die CPU (<b>C</b>entral <b>P</b>rocessing <b>U</b>nit), auf Deutsch "Zentrale Steuerungseinheit"
						oder auch Hauptprozessor genannt, berechnet und steuert alle wichtigen Vorgänge, Anfragen sowie
						Ein- und Ausgaben des Computer.
					</p>

					<p>
						Sie führt Maschinencode (bestehend aus 0 & 1) aus (wie das Betriebssystem oder verschiedene
						Programme), treibt Prozesse voran und arbeitet diese ab.
					</p>
				</>
			)
		},
		{
			id: "Aufbau",
			title: "Der Aufbau der CPU",
			level: 1,
			content: (
				<>
					<p>
						Der Prozessor besteht aus einem Steuerwerk, einem Register (also einem kleinen Speicher), einem
						Rechenwerk und Datenleitungen, die als Busse bezeichnet werden.
						Er befindet sich auf dem Mainboard und bildet die zentrale Recheneinheit des PCs. Verbunden wird
						er über den CPU-Sockel, welcher - je nach Baujahr und Hersteller - unterschiedlich aufgebaut
						sein
						kann.
					</p>

					<Image
						src={Image_Aufbau}
						alt={"Aufbau CPU"}/>

					<p>
						<b>Steuerwerk</b>
						<br/>
						Das Steuerwerk lädt Befehle, interpretiert diese, wandelt Binärcode in Befehle um, welche
						der Prozessor bearbeiten kann. Diese Befehle werden dann an das Rechenwerk übergeben.

						<br/>
						<br/>

						<b>Register</b>
						<br/>
						Das Register ist ein kleiner Speicher, welcher aus
						einem Befehlsregister (aktueller Maschinenbefehl), einem
						Befehlszähler (Speicheradresse des nächsten Befehls) und einem
						Statusregister (Status der aktuellen Operation) besteht.

						<br/>
						<br/>

						<b>Rechenwerk</b>
						<br/>
						Das Rechenwerk bearbeitet die Befehle vom Steuerwerk. Hier werden arithmetische
						und logische Befehle ausgeführt. Außerdem werden hier alle Berechnungen durchgeführt.
					</p>

					<p>
						Da sich die CPU bei den ganzen Berechnungen ziemlich stark erwärmen kann und Temperaturen von
						bis zu 80°C und mehr erreichen kann, benötigt sie ein Kühlsystem. Nur so kann sichergestellt
						werden, dass sie nicht überhitzt und somit nicht beschädigt wird und intakt bleiben kann.
					</p>

					<p>
						Bei einer Überhitzung kann nicht nur die Leistung des PC's geringer werden,
						sondern die CPU kann auch <span className="text-important">beschädigt</span> werden.
					</p>
				</>
			)
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale einer CPU",
			content: (
				<>
					<p>
						Die Leistung eines Prozessors ist unter anderem von der Taktfrequenz der CPU abhängig, also
						wie schnell die CPU arbeiten kann. So bedeutet zum Beispiel eine Taktfrequenz von
						<b> 4</b>GHz, dass
						pro Sekunde ungefähr <b>4</b> Millionen Takte ausgeführt werden.
					</p>

					<p>
						Ein Takt bedeutet, dass sich millionen von Transistoren in der CPU entweder öffnen (1) oder
						schließen (0).
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="CPU" sections={sections}/>;
}

/*
export default function Page() {
	return (
		<PageName name="CPU">
			<section id="Section1">
				<div className="section-heading">
					<h1>Die CPU</h1>
				</div>
				<p>
					Some cool information about the CPU
				</p>
				<p style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}>
					{"Hello ".repeat(50)}
					<Image
						src="/components/cpu.png"
						alt="IMAGE"
						width={100}
						height={100}
						quality={1}
					/>
					{"More text ".repeat(50)}
				</p>
				<p>
					{"More text ".repeat(150)}
				</p>
			</section>

			<section id="Section2">
				<div className="section-heading">
					<h1>Aufgaben der CPU</h1>
				</div>
				<p>
					Some cool information about the CPU
				</p>
				<p>
					{"Hello ".repeat(1500)}
				</p>
				{
					// TODO Make it, so that the section above stops earlier,
					// 	so that the next section is on top without the old
					// 	one still showing on top!
				}
			</section>
		</PageName>
	);
}
 */
/*
export default function Page() {
  return (
    <>
      <div>
        <h3>CPU</h3>
        Die CPU (<u>C</u>entral <u>P</u>rocessing <u>U</u>nit) ist der
        Hauptproessor eines PC's.
      </div>

      <div>
        <p>
          Die CPU ist das Herzstück eines PC's. Ohne sie könnte der PC keinerlei
          Berechnungen durchführung, wodurch der PC nicht funktionieren würde.
        </p>
        <p>
          Sie führt Maschinencode aus, wie das Betriebssystem oder verschiedene
          Programme. Sie treibt Processe voran und arbeitet diese ab.
        </p>
      </div>

      <div>
        <p>
          Eine CPU besteht aus Milliarden von kleinen Transistoren. Diese
          schalten einen elektrischen Strom entweder ein (= 1) oder aus (= 0),
          bzw. öffnen und schließen den Stromkreis. Wie Schnell diese
          Transistoren sich öffnen oder schließen wird mit dem Takt oder Zyklus
          angegeben.
          {/* ... mit dem [[Takt]] oder Zyklus:
					Eine art link zu [[Takt]] machen, wo kurz beschrieben wird, was damit gemeint ist (Wie bei Wikipedia),
					sodass hier wirklich nur der Aufbau da steht, und nicht was eine Takt oder Zyklus ist.

					Vorerst bleibt der untenstehende Teil aber noch da, das soll erst später umgesetzt werden./}
          Bei jedem Takt werden Milliarde von Transistoren geöffnet oder
          geschlossen. Dieser Takt wird in Hertz (1/s) angegeben. Ein Takt von 4
          GHz bedeutet also, dass pro Sekunde vier Milliarde (Giga) mal mehrere
          Milliarde Transistoren sich schließen oder öffnen. Da dies alles sehr
          anstrengend für die CPU ist, erwärmt sie sich auf dauer stark. Daher
          benötigt sie ein Kühlungssystem, um nicht zu überhitzen. Bei einer
          Überhitzung kann nicht nur die Leistung des PC's geringer werden,
          sondern kann die CPU auch beschädigt werden. Jede CPU hat eine gewisse
          Anzahl an Kernen, mit dem folgenden Aufbau:
        </p>

        <ul>
          <li>Steurwerk</li>

          <li>Register (kleine Speicher)</li>

          <li>Rechenwerk</li>
        </ul>

        <p>
          Das Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.
        </p>

        {/* TODO: Das mit Kernen genauer erklären, usw......../}
      </div>

      <div>
        <p>
          Das Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.Das
          Steuerwerk lädt Befehle und interpretiert diese. Zudem besitzt es
          einen Befehlsdecorder, welcher Binärcode (1 und 0) in Befehle, die der
          Prozessor bearbeiten kann. Er schaut sich die Befehle aus einem
          Befehlssatz (Liste aller Befehle) and und übergibt diese Befehle dann
          an das Rechenwerk. Das Register ist ein kleiner Speicher, welcher aus
          einem Befehlsregiter (= aktueller Maschinenbefehl), einem
          Befehlszähler (= Speicheradresse des nächsten Befehls) und einem
          Statusregister (= Status der aktuellen Operation). Das Rechenwerk
          besitzt eine ALU (Arithmetisch Logische Einheit). Es bearbeitet
          Befehle, welche sie vom Steuerwerk bekommt. Hier werden arithmetische
          und logische Befehle ausgeführt. Das Rechenwerk besitzt zwei
          Eingangsregister (Datenregister: Daten die verarbeitet werden sollen;
          Akkumulator: Zwischenergebnisse aus der vorherigen Rechnung). Die ALU
          bekommt außerdem die Operation vom Steuerwerk, was mit den Zahlen
          passieren soll (Addieren, Subtrahieren, Vergleichen, usw.). Dieses
          Ergebnis wird dann mit einem Status zum Steurwerk zurückgeführt.
        </p>
      </div>
    </>
  );
}
*/
