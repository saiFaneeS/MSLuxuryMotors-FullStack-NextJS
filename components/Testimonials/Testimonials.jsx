import styles from "./Testimonials.module.css";
import SingleCard from "./SingleCard";
// import Reveal from "../Animations/FromRight";

const Testimonials = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleBar}>
        <h1>Testimonials</h1>
        <p>What our satisfied customers say</p>
      </div>
      <div className={styles.carousel}>
        {/* <Reveal> */}
        <div className={styles.innerCarousel}>
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
        {/* </Reveal> */}
      </div>
    </div>
  );
};

export default Testimonials;
