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
					
					Vorerst bleibt der untenstehende Teil aber noch da, das soll erst später umgesetzt werden.*/}
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

        {/* TODO: Das mit Kernen genauer erklären, usw........*/}
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
