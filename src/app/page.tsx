// https://www.foerderland.de/fileadmin/_processed_/7/b/csm_hardware-komponenten_06f85289fd.jpg

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
}
