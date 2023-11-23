import ComponentLayout from "../ComponentLayout";
import Section from "../../types/Section";
import Image from "next/image";

/*
* https://www.elektronik-kompendium.de/sites/com/0704261.htm
* https://www.kingston.com/de/blog/gaming/air-vs-liquid-cooling-pc-builds
*
*
* BILDER
* https://de.aliexpress.com/i/1005005670423140.html
* https://www.gamingguru.de/blog/custom-wasserkuehlung/
* https://www.gamestar.de/artikel/checkliste-pc-kuehlung-kuehl-und-fluesterleise-durch-den-sommer,2323831.html
* */

import Image_Airflow from "@public/kühlsystem/airflow.png";
import Image_Lüfter from "@public/kühlsystem/lüfter.png";
import Image_Wasserkühlung from "@public/kühlsystem/wasserkühlung.png";

export default function Page() {
	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe vom Kühlsystem",
			content: (
				<>
					<p>
						Das Kühlsystem eines Computers soll die Wärme, die von den verschiedenen Komponenten
						erzeugt wird, abführen. Es sorgt dafür, dass die Komponenten nicht überhitzen und bei
						optimaler Temperatur arbeiten können.
					</p>

					<Image
						src={Image_Airflow}
						alt={"Airflow"}
						style={{width: "25%", height: "auto"}}/>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbau",
			title: "Der Aufbau vom Kühlsystem",
			content: (
				<>
					<p>
						Es gibt verschiedene Arten von Kühlsystemen, die in Computern verwendet werden, darunter
						Luftkühlung und Flüssigkeitskühlung.
					</p>

					<p>
						Bei der Luftkühlung kommen Lüfter und Kühlkörper zum Einsatz. Die Wärme wird meistens über
						sogenannte "Heatpipes", also eine Art Wärmerohr, zum Lüfter, bzw. dem Kühlkörper abgeleitet. Von
						dort aus führt der Lüfter die Wärme nach außen ab und saugt gleichzeigit kalte, frische Luft
						von außen an.
					</p>
					<Image
						src={Image_Lüfter}
						alt={"Lüfter"}/>

					<p>
						Bei der Flüssigkeitskühlung wird eine Kühlflüssigkeit durch Rohre gepumpt und von dort meist zu
						einem Lüfter geführt. Dieser kühlt die Flüssigkeit ab und führt die Wärme nach außen ab.
						Beide Systeme haben ihre Vor- und Nachteile und werden je nach den spezifischen Anforderungen
						des Computers eingesetzt.
					</p>
					<Image
						src={Image_Wasserkühlung}
						alt={"Wasserkühlung"}
						style={{width: "auto", height: "auto"}}/>

					<p>
						Diese Prozesse helfen dabei, die Temperatur der Komponenten zu regulieren und eine
						Überhitzung zu verhindern.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale vom Kühlsystem",
			content: (
				<>
					<p>
						Die Leistungsfähigkeit eines Kühlsystems hängt von mehreren Faktoren ab.
						<br/>
						<br/>

						Bei der Luftkühlung ist
						die Größe und Anzahl der Lüfter sowie die Effizienz des Kühlkörpers entscheidend.
						<br/>

						Bei der Flüssigkeitskühlung spielen die Pumpleistung, die Größe des Radiators und die Qualität
						der
						verwendeten Flüssigkeit eine Rolle.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Kühlsystem" sections={sections}/>;

	return (
		<>
			<section id="Erklärung" className="section">
				<h1>Kühlungssystem</h1>
				<p>
					Ein PC benötigt ein Kühlungssystem um nicht zu überhitzen.
				</p>
			</section>

			<section id="Aufgabe" className="section">
				<h1>Aufgabe</h1>
				<p>
					Das Kühlungssystem soll den PC, bzw. die einzelnen PC Komponenten kühlen und somit
					vor Überhitzung schützen.
				</p>
			</section>

			<section id="Aufbau" className="section">
				<h1>Aufbau</h1>
				<p>
					Kühlungssystem können einen Unterschiedlichen Aufbau haben.
				</p>
				<section id="Lüfter" className="section-2">
					<h2>Lüfter</h2>
					<p>
						Zum Kühlen kann beispielsweise ein Lüfter verwendet werden.
						Dieser saugt kalte Luft von außen an und führt warme Luft nach außen.
					</p>
				</section>
				<section id="Wasserkühlung" className="section-2">
					<h2>Wasserkühlung</h2>
					<p>
						Ein PC kann aber auch mithilfe von einem Wasserzyklus gekühlt werden
					</p>
					<p>
						Hierbei zirkuliert eine Kühlflüssigkeit in einem Kreislauf. Eine Pumpe sorgt dafür,
						dass dieser Kreislauf ständig erhalten bleibt.
						Die Kühlflüssigkeit wird dann in einen Körper, welcher meistens aus Aluminium besteht, gepumpt,
						in dem sich eine Lüfter befindet, welcher die warme Flüssigkeit abkühlt.
						Die Flüssigkeit, welche nun wieder kalt ist, wird nun wieder weitergepumpt und der Kreislauf
						beginnt
						von vorne.
					</p>
				</section>
			</section>

			<section id="Leistungsmerkmale" className="section">
				<h1>Leistungsmerkmale</h1>
				<p>
					Je mehr Lüfter, bzw. je mehr Kühlung vorhanden ist, desto geringer ist die Chance,
					dass der PC überhitzt.
					Da somit eine Überhitzung vermieden wird, kann der PC leistungsfähig bleiben und die Komponenten
					werden nicht beschädigt.
				</p>
			</section>
		</>
	);
}
