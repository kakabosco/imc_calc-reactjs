import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Calcule seu IMC</h1>
            <img className={styles.img} src="/imc.png" alt="IMC" />
        </header>
    );
};

export default Header;