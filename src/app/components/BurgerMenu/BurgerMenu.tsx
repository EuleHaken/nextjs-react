import styles from "./BurgerMenu.module.css";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  show: boolean;
};

export default function BurgerMenu({ show }: Props) {
  if (!show) return null;

  return (
    <>
      <div className={styles.menu}>
        <div>
          <Dropdown name="Übersicht">
            <Dropdown name="CPU" href="/CPU">
              <Dropdown name="LONG NAME AAAAAAAAAAAAAAAAAAA" />
            </Dropdown>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
