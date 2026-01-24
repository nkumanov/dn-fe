import mainIntroImg from '../../assets/70eb029b-c11f-4745-9e11-e62c0a55a4bc.jpeg';
import styles from './Intro.module.scss';
import mainImage from '../../assets/70eb029b-c11f-4745-9e11-e62c0a55a4bc.jpeg';
function Intro() {
  return (
    <>
      <section className={styles.wrapper}>
        <section className={styles.sectionFirst}>
          <h1>Николай и Десислава </h1>
          <h2>11 Юли, 2026</h2>
        </section>
        <section className={styles.sectionSecond}>
          <article>
            <span>Скъпи гости,</span>
            <span>Добре дошли в нашия сватбен уебсайт.</span>
            <p>
              Нашият уебсайт е създаден с много любов, за да Ви помогне лесно и удобно да откриете
              цялата информация за празника, както и да потвърдите присъствието си и да посочите
              предпочитанията си за храна.
            </p>

            <img src={mainIntroImg} alt="test" />
          </article>
        </section>
      </section>
    </>
  );
}

export default Intro;
