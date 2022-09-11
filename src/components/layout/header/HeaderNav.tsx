import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/layout/header/HeaderNav.module.scss";

const HeaderNav: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.header_nav}>
      <nav className={styles.header_navbar}>
        <ul className={styles.nav}>
          <li>
            <Link href="/news">
              <a className={`${router.asPath === '/news' ? styles.active : ''}`}>
                Berita
              </a>
            </Link>
          </li>
          <li>
            <Link href="/livestream">
              <a className={`${router.asPath === '/livestream' ? styles.active : ''}`}>
                Livestream
              </a>
            </Link>
          </li>
          <li>
            <Link href="/quiz">
              <a className={`${router.asPath === '/quiz' ? styles.active : ''}`}>
                Quiz
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderNav;