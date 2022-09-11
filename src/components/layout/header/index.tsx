import HeaderProfile from "./HeaderProfile";
import HeaderNavs from "./HeaderNav";
import styles from "../../../styles/layout/header/HeaderIndex.module.scss";

const TopHeader = () => {
  return (
    <header id={styles.header}>
      <div className="header-container">
        <HeaderProfile />
        <HeaderNavs />
      </div>
    </header>
  );
};

export default TopHeader;
