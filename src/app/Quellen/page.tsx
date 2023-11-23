import Link from "next/link";

import styles from "./page.module.css";

export default function Page() {

	return (
		<div className={styles["source-container"]}>
			<div>
				<h1>CPU</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://www.giga.de/extra/cpu/specials/was-ist-eine-cpu-beim-pc-was-macht-der-prozessor/"
						>Giga</Link>
					</li>

					<li>
						<Link
							href="https://www.computerbild.de/artikel/cb-Tipps-PC-Hardware-Prozessor-Aufbau-31468625.html">
							Computerbild
						</Link>
					</li>

					<li>
						<Link href="https://www.chip.de/artikel/Durchblick-beim-Prozessorkauf-4_140330808.html">
							Chip
						</Link>
					</li>

					<li>
						<Link href="https://www.youtube.com/watch?v=ergYcSJ3Zns">
							YouTube
						</Link>
					</li>

					<li>
						<Link
							href="https://weltderphysik.de/gebiet/technik/nachrichten/2019/prozessor-aus-nanoroehrchen">
							WeltDerPhysik
						</Link>
					</li>

					<li>
						<Link href="https://www.intel.de/content/www/de/de/gaming/resources/cpu-clock-speed.html">
							Intel
						</Link>
					</li>

					<li>
						<Link href="https://www.avast.com/de-de/c-how-to-check-cpu-temperature">
							Avast
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://www.redhat.com/sysadmin/cpu-components-functionality">
							RedHat
						</Link>
					</li>

					<li>
						<Link
							href="https://www.yaclass.at/p/informatik/10-schulstufe/informatiksysteme-21292/systemhardware-19159/re-ae69a69e-2509-4011-8245-603b94b43db8">
							YaClass
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Arbeitsspeicher (RAM)</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://www.hagel-it.de/it-insights/arbeitsspeicher-ram-einfach-erklaert-alles-was-technikinteressierte-it-entscheider-darueber-wissen-muessen.html"
						>Hagel-IT</Link>
					</li>

					<li>
						<Link
							href="https://www.bestetipps.de/computer/definition-und-erklaerung-arbeitsspeicher/">
							BesteTipps
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://www.ebay.de/itm/313614133060">
							Ebay
						</Link>
					</li>

					<li>
						<Link
							href="https://www.delst.de/de/lexikon/arbeitsspeicher-ram/">
							Delst
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Mainboard / Motherboard</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://www.computerwissen.de/hardware/komponenten-peripherie/mainboard/"
						>Computerwissen</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link
							href="https://webshop.asus.com/de/90MB1BJ0-M0EAY0/ASUS-TUF-GAMING-X670E-PLUS-Mainboard-Sockel-AMD-AM5">
							WebShop ASUS
						</Link>
					</li>

					<li>
						<Link
							href="https://de.wikipedia.org/wiki/Chipsatz">
							Wikipedia
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Grafikkarte (GPU)</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://www.t-online.de/digital/hardware/id_48158094/grafikkarte-im-computer-was-genau-macht-die-eigentlich-.html"
						>T-Online</Link>
					</li>

					<li>
						<Link
							href="https://databasecamp.de/ki-blog/grafikkarte">
							Data Base Camp
						</Link>
					</li>

					<li>
						<Link href="https://de.wikipedia.org/wiki/Grafikkarte">
							Wikipedia
						</Link>
					</li>

					<li>
						<Link href="https://www.delst.de/de/lexikon/grafikkarte/">
							Delst
						</Link>
					</li>

					<li>
						<Link
							href="https://www.etest.de/hardware/Kaufberatung.Grafikkarten.Einsatzzweck_einer_Grafikkarte_Welcher_Typ_bin_ich_.html">
							eTest
						</Link>
					</li>

					<li>
						<Link href="https://gamergirlz.de/grafikkarten-komponenten-leistungsanforderungen-und-auswahl">
							GamerGirlz
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://www.caseking.de/pc-komponenten/grafikkarten">
							CaseKing
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Kühlsystem</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href=" https://www.elektronik-kompendium.de/sites/com/0704261.htm"
						>Elektronik-Kompendium</Link>
					</li>

					<li>
						<Link
							href="https://www.kingston.com/de/blog/gaming/air-vs-liquid-cooling-pc-builds">
							Kingston
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://de.aliexpress.com/i/1005005670423140.html">
							AliExpress
						</Link>
					</li>

					<li>
						<Link
							href="https://www.gamingguru.de/blog/custom-wasserkuehlung/">
							GamingGuru
						</Link>
					</li>

					<li>
						<Link
							href="https://www.gamestar.de/artikel/checkliste-pc-kuehlung-kuehl-und-fluesterleise-durch-den-sommer,2323831.html">
							GameStar
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Netzteil</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="http://www.netzteil-test.de/was-ist-ein-netzteil/"
						>Netzteil-Test</Link>
					</li>

					<li>
						<Link
							href="https://www.reichelt.de/magazin/ratgeber/pc-netzteile-das-ist-beim-kauf-zu-beachten/">
							Reichelt
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://www.amazon.de/Thermaltake-Smart-RGB-700W-PC-Netzteil/dp/B0744P7VHW">
							Amazon
						</Link>
					</li>

					<li>
						<Link
							href="https://www.otto.de/p/seasonic-seasonic-ssp-600jt-bulk-600w-pc-netzteil-pc-netzteil-S0E2V05D/#variationId=S0E2V05DB026">
							Otto
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Netzwerkkarte</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://de.wikipedia.org/wiki/Netzwerkkarte"
						>Wikipedia</Link>
					</li>

					<li>
						<Link
							href="https://community.fs.com/de/article/nic-card-guide-for-beginners-functions-types-and-selection-tips.html">
							Community FS
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://de.wikipedia.org/wiki/Netzwerkkarte">
							Wikipedia
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Soundkarte</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://de.wikipedia.org/wiki/Soundkarte"
						>Wikipedia</Link>
					</li>

					<li>
						<Link
							href="http://audio-lexikon.com/analog-digital/interne-externe-soundkarte/">
							Audio Lexikon
						</Link>
					</li>

					<li>
						<Link
							href="https://praxistipps.chip.de/soundkarte-kaufen-worauf-achten-die-wichtigsten-kriterien_44651">
							Praxistipps Chip
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://de.wikipedia.org/wiki/Soundkarte">
							Wikipedia
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Festplatte</h1>
				<h3>Text</h3>
				<ul>
					<li>
						<Link
							href="https://www.avast.com/de-de/c-ssd-vs-hdd"
						>Avast</Link>
					</li>

					<li>
						<Link
							href="https://praxistipps.chip.de/was-ist-eine-festplatte-einfach-erklaert_41663">
							Praxistipps Chip
						</Link>
					</li>

					<li>
						<Link href="[https://de.wikipedia.org/wiki/Festplattenlaufwerk">
							Wikipedia
						</Link>
					</li>

					<li>
						<Link
							href="https://www.giga.de/extra/ratgeber/tipps/was-ist-eine-festplatte-aufbau-einfach-erklaert/">
							Giga
						</Link>
					</li>

					<li>
						<Link
							href="https://www.elektronik-kompendium.de/sites/com/0610291.htm">
							Elektronik-Kompendium
						</Link>
					</li>

					<li>
						<Link
							href="https://www.pcwelt.de/article/1085449/leistung-der-festplatte-messen-und-verbessern.htm">
							PC Welt
						</Link>
					</li>
				</ul>

				<br/> {/*TODO replace with spacing padding/margin*/}

				<h3>Bilder</h3>
				<ul>
					<li>
						<Link href="https://www.com-magazin.de/praxis/festplatte/festplatten-technik-217154.html">
							COM Magazin
						</Link>
					</li>

					<li>
						<Link
							href="https://www.galaxus.de/de/page/eine-komplexe-angelegenheit-so-funktioniert-eine-ssd-7399">
							Galaxus
						</Link>
					</li>

					<li>
						<Link
							href="https://www.kathrein-ds.com/produkte/ersatzteile/interne-festplatte-35-1-tb">
							Kathrein-DS
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Icons</h1>
				<ul>
					<li>
						<Link href="https://icons8.de/icons">Icons 8</Link>
					</li>
				</ul>
			</div>

			<div>
				<h1>Background (Homepage)</h1>
				<ul>
					<li>
						<Link href="https://pc-wiehl.de/computer-komponenten-liefert-csw/">PC Wiehl</Link>
					</li>
				</ul>
			</div>

		</div>
	);
}
