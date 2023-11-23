// https://www.foerderland.de/fileadmin/_processed_/7/b/csm_hardware-komponenten_06f85289fd.jpg

import Image from "next/image";
import styles from "./page.module.css";

import "./page.css";
import Link from "next/link";

import {
	CPU,
	RAM,
	GPU,
	Kühlsystem,
	Mainboard,
	Netzteil,
	Netzwerkkarte,
	Soundkarte,
	Festplatte,
} from "../../public/components";

import BackgroundImage from "@public/background.png";

export default function Home() {
	return (
		<div className="body-container">
			<div className="container">
				{/*#region Row #1*/}
				<Link href="/CPU" className="item">
					<p>CPU</p>
					<Image
						src={CPU}
						alt={"CPU"}/>
				</Link>

				<Link href="/RAM" className="item">
					<p>Arbeitsspeicher (RAM)</p>
					<Image
						src={RAM}
						alt={"RAM"}/>
				</Link>

				<Link href="/Mainboard" className="item">
					<p>Mainboard / Motherboard</p>
					<Image
						src={Mainboard}
						alt={"Mainboard"}/>
				</Link>
				{/*#endregion*/}

				{/*#region Row #2*/}
				<Link href="/GPU" className="item">
					<p>Grafikkarte (GPU)</p>
					<Image
						src={GPU}
						alt={"GPU"}/>
				</Link>

				<Link href="/Kuehlsystem" className="item">
					<p>Kühlsystem</p>
					<Image
						src={Kühlsystem}
						alt={"Kühlsystem"}/>
				</Link>

				<Link href="/Netzteil" className="item">
					<p>Netzteil</p>
					<Image
						src={Netzteil}
						alt={"Netzteil"}/>
				</Link>
				{/*#endregion*/}

				{/*#region Row #3*/}
				<Link href="/Netzwerkkarte" className="item">
					<p>Netzwerkkarte</p>
					<Image
						src={Netzwerkkarte}
						alt={"Netzwerkkarte"}/>
				</Link>

				<Link href="/Soundkarte" className="item">
					<p>Soundkarte</p>
					<Image
						src={Soundkarte}
						alt={"Soundkarte"}/>
				</Link>

				<Link href="/Festplatte" className="item">
					<p>Festplatte</p>
					<Image
						src={Festplatte}
						alt={"Festplatte"}/>
				</Link>
				{/*#endregion*/}
			</div>
		</div>
	);

	/*
	return (
		<>
			<div className={styles["background-image"]}>
				<div className={styles["blur-box"]}>
					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={100}
							height={100}
						/>
						<div>CPU</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/ram.png"}
							alt={"RAM"}
							width={100}
							height={100}
						/>
						<div>RAM</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/mainboard.png"}
							alt={"Mainboard"}
							width={100}
							height={100}
						/>
						<div>Mainboard / Motherboard</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Laufwerke</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Kühlungssystem</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Grafikkarte (GPU)</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Soundkarte</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Netzwerkkarte</div>
					</div>

					<div className={styles["box-item"]}>
						<Image
							src={"/components/cpu.png"}
							alt={"CPU"}
							width={64}
							height={64}
						/>
						<div>Netzteil</div>
					</div>
				</div>
			</div>
		</>
	);
	 */
}
