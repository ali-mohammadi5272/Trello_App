import Container from "../../modules/Container/Container";
import styles from "./HomePage.module.scss";
import Columns from "../../modules/Columns/Columns";

const HomePage = () => {
  return (
    <main className={styles.page}>
      <Container>
        <Columns />
      </Container>
    </main>
  );
};

export default HomePage;
