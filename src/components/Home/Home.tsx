import Attendance from '../Attendance/Attendance';
import Intro from '../Intro/Intro';
import styles from './Home.module.scss';
function Main() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
        <section className={styles.place}>
          <h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 13.25 9 18.5 11.25 21.14C11.66 21.61 12.34 21.61 12.75 21.14C15 18.5 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                fill="currentColor"
              />
            </svg>
            Локация
          </h2>
          <p className={styles.placeDescription}>
            <span>Pasarel Lake Club</span> <br />
            се намира на ул. Самоковско шосе (посока Самоков) на 15 км. от гр. София. <br />
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.2678013676073!2d23.477637176079718!3d42.5496061231055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa7f0f29c4ec75%3A0x9633c93788b82bd1!2sPasarel%20Lake%20Club!5e0!3m2!1sen!2sbg!4v1739890540498!5m2!1sen!2sbg"
            width="250"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <article className={styles.placeImages}>
            <img
              src="https://pasarellake.club/wp-content/uploads/2023/01/DJI_0332-4-LEss-saturation.jpg"
              alt="test"
            />
          </article>
        </section>
        <section className={styles.program}>
          <h2>Празнична програма</h2>
          <p>
            <span>11 </span>Юли, <span>2026</span>
          </p>
          <article>
            <ul>
              <li>
                <span>🥂 17:00</span> - Welcome drink
              </li>
              <li>
                <span>💍 17:30</span> - Изнесен ритуал, момента в който си казваме „ДА"!
              </li>
              <li>
                <span>📸 18:00</span> - Поздравления и снимки с младоженците
              </li>
              <li>
                <span>🍽️ 19:30</span> - Празнична вечеря
              </li>
              <li>
                <span>🍰 22:00</span> - Разрязване на сватбена торта
              </li>
              <li>
                <span>🎉 22:30</span> - After party
              </li>
            </ul>
          </article>
        </section>

        <Attendance />
        <section className={styles.footer}>
          <h3>
            Ако имате нужда от допълнителна информация, не се колебайте да ни потърсите.
            <br /> Очакваме Ви!
          </h3>
        </section>
      </main>
    </>
  );
}

export default Main;
