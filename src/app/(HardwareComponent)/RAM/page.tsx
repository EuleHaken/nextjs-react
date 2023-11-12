import { ReactNode } from "react";
import IComponent from "./IComponent";

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
