import Section from "../../types/Section";
import ComponentLayout from "../ComponentLayout";
import Image from "next/image";

/*
* https://www.computerwissen.de/hardware/komponenten-peripherie/mainboard/
*
* BILDER
* https://webshop.asus.com/de/90MB1BJ0-M0EAY0/ASUS-TUF-GAMING-X670E-PLUS-Mainboard-Sockel-AMD-AM5
* https://de.wikipedia.org/wiki/Chipsatz
* */

import Image_Mainboard from "@public/mainboard/mainboard.png";
import Image_Erklärung from "@public/mainboard/erklärung.png";

export default function Page() {
	const sections1: Section[] = [
		{
			id: "",
			title: "Das Mainboard",
			level: 1,
			content: (
				<>
					<p>
						Das Mainboard (oder auch Motherboard) ist die Hauptplatine von einem PC.
						Sie verbindet alle Komponenten miteinander (wie eine Art Autobahn
					</p>
					<p>
						Ob man nun "Mainboard" oder "Motherboard" sagt, ist irrelevant, da beide Namen
						das Gleiche bedeuten.
					</p>
				</>
			)
		},
		{
			id: "Aufgabe",
			title: "Die Aufgabe des Mainboards",
			level: 1,
			content: (
				<>
					<p>
						Das Mainboard ist die Hauptplatine im PC. Sie ist der zentrale Verbindungspunkt und verbindet
						alle Komponenten und externen Peripheriegeräte, wie z.B. externe Festplatten, USB-Sticks oder
						Maus und Tastatur.
					</p>
				</>
			)
		},
		{
			id: "Aufbau",
			title: "Der Aufbau vom Mainboard",
			level: 1,
			content: (
				<>
					<p>
						Auf dem Mainboard befindet sich (bereits eingebaut oder über Steckplätze):
					</p>

					<ul>
						<li>
							CPU
						</li>
						<li>
							GPU
						</li>
						<li>
							RAM
						</li>
						<li>
							Kühlungssystem
						</li>
						<li>
							Festplatten (HDD / SSD)
						</li>
						<li>
							Sound-, Netzwerk- und Adapterkarten
						</li>
					</ul>

					<p>
						Es verbindet die einzelnen Komponenten über Glasfaserschichten, Kupferverbindungsbahnen und
						Kupferebenen.
					</p>
					<p>
						Weiter Komponenten können über (Erweiterungs-) Steckplätze hinzugefügt werdem:
					</p>

					<ul>
						<li>
							Netzteil
						</li>
						<li>
							Prozessorsockel
						</li>
						<li>
							Peripheral Component Interconnect (PCI)
						</li>
						<li>
							PCI Express (PCIe)
						</li>
						<li>
							SSD Festplatten (M.2)
						</li>
						<li>
							USB (Über USB-Schnittstelle)
						</li>
						<li>
							Lüfter
						</li>
						<li>
							RAM
						</li>
					</ul>

					<p>
						Das Mainboard besitzt meist sogennante "Heatpipes", über die die Wärme, welche durch die
						Komponenten entsteht
						zum Lüfter abgeleitet wird und durch diesen abgeführt wird.
						Dies verhindet das Entstehen von "Hotspots" (= Stellen, an denen es deutlich wärmer ist)
					</p>
				</>
			)
		}
	];

	const sections: Section[] = [
		{
			id: "Aufgabe",
			title: "Die Aufgabe vom Mainboard",
			content: (
				<>
					<p>
						Das Mainboard, auch Motherboard oder Hauptplatine genannt, ist das Herzstück eines jeden PCs
						bzw. Computers. Die zentrale Aufgabe eines Mainboards ist es, alle Komponenten eines Computers
						miteinander zu verbinden, sodass sie fehlerfrei und korrekt arbeiten.
					</p>

					<Image
						src={Image_Mainboard}
						alt={"Mainboard"}
						style={{width: "40rem"}}/>

					<p>
						Ob man nun "Mainboard" oder "Motherboard" sagt, ist irrelevant, da beide Namen
						das Gleiche bedeuten.
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Aufbau",
			title: "Der Aufbau vom Mainboard",
			content: (
				<>
					<p>
						Das Mainboard ist die zentrale Platine (Leiterplatte) eines
						Computers. Es sorgt dafür, dass alle Komponenten eines Rechners miteinander verbunden sind,
						richtig arbeiten und den Computer so zum Laufen bringen können.
					</p>

					<p>
						Auf dem Mainboard befinden sich die jeweiligen Bausteine (z.B. der Prozessorsockel für die
						CPUs, Kühlkörper), Schnittstellen für weitere Komponenten wie beispielsweise Peripheriegeräte
						(z.B. Maus und Tastatur) sowie Steckplätze für Erweiterungskarten bzw. Steckkarten
						(z.B. zusätzliche Grafikkarten, mehr RAM, M.2 SSD).
					</p>
				</>
			),
			level: 1,
		},
		{
			id: "Leistungsmerkmale",
			title: "Die Leistungsmerkmale vom Mainboard",
			content: (
				<>
					<p>
						Ein Mainboard besteht grundsätzlich aus den folgenden Komponenten:
					</p>

					<ul>
						<li>
							Chipsatz,
						</li>
						<li>
							CPU-Sockel,
						</li>
						<li>
							PCI-Steckplätze,
						</li>
						<li>
							und RAM-Steckplätze
						</li>
					</ul>

					<Image
						src={Image_Erklärung}
						alt={"Erklärung Mainboard"}
						style={{width: "45rem"}}/>

					<p>
						Der Chipsatz besteht aus mehreren Schaltkreisen, die zusammen eine Einheit bilden.
						Er funktioniert als Verbindungsglied zwischen den einzelnen Komponenten eines Computers.
						<br/>
						<br/>

						Der CPU-Sockel ist der Ort, an dem die CPU, angebracht wird.
						<br/>
						<br/>

						Die PCI-Steckplätze sind dazu da, um das System erweitern zu können.
						<br/>
						<br/>

						Die RAM-Steckplätze sind für die RAM-Bausteine.
					</p>
				</>
			),
			level: 1,
		},
	];

	return <ComponentLayout name="Mainboard" sections={sections}/>;

	return (
		<>
			<section id="Leistungsmerkmale" className="section">
				<h1>Leistungsmerkmale</h1>
				<p>
					Mainboards können verschiedene Chipstätze besitzen. Zu den standardmäßigen zählen:
				</p>

				<ul>
					<li>
						Intel
					</li>
					<li>
						AMD
					</li>
				</ul>

				<p>
					Außerdem kann ein Mainboard eine Sonderaustattung besitzen. Hierzu zählt:
				</p>
				<ul>
					<li>
						Audio
					</li>
					<li>
						Netzwerk
					</li>
					<li>
						Mehr RAM-Steckplätze
					</li>
					<li>
						USB-Steckplätze
					</li>
					<li>
						PCIe und M.2
					</li>
					<li>
						RGB Systeme
					</li>
				</ul>

				<p>
					Natürlich gibt es Mainboards auch in unterschiedlichen Größen, die sogenannten "Formfaktoren
				</p>
				<ul>
					<li>
						ATX (17 * 17cm)
					</li>
					<li>
						Micro-ATC (24,4 * 24,4cm)
					</li>
					<li>
						Mini-ITX (30,5 * 24,4cm)
					</li>
					<li>
						E-ATX (30,5 * 33cm)
					</li>
				</ul>
			</section>
		</>
	);
}
