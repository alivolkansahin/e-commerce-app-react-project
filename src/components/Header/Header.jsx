import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css"


export function Header () {
    return (
    <header className={styles['header']}>
        <NavBar/>
    </header>
    )
}