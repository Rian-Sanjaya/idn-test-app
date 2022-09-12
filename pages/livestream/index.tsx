import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import { baseUrl } from "../../src/helpers/config";
import styles from "../../src/styles/Livestream.module.scss";

type Data = {
  id: string;
  type: string;
  headlineText: string;
  category: string;
  image: string;
};

const LivestreamPage = () => {
  const [livestreamData, setLivestreamData] = useState<Array<Data>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/api/livestream`)
      .then((res) => res.json())
      .then((data) => {
        setLivestreamData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main_content}>
        <div className={styles.grid}>
          {(!livestreamData || livestreamData.length === 0) && (
            <>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={230} />
              </div>
            </>
          )}
          {livestreamData &&
            livestreamData.length > 0 &&
            livestreamData.map((livestream, i) => (
              <div
                key={livestream.id}
                className={styles.card}
                style={{ backgroundImage: `url(${livestream.image})` }}
              >
                <div className={styles.card_content}>
                  <div
                    className={`${
                      i === 0 ? styles.live_box : styles.clip_box
                    } ${
                      livestream.type === "Terjadwal" ? styles.terjadwal : ""
                    }`}
                  >
                    {i === 0 ? (
                      <>
                        <span style={{ fontSize: "9px" }}>
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                        <span>&nbsp;10,5rb</span>
                        <span>&nbsp;|&nbsp;</span>
                        <span style={{ color: "#ED2227" }}>
                          &bull;&nbsp;Live
                        </span>
                      </>
                    ) : (
                      <span
                        className={`${
                          livestream.type === "Terjadwal" ? styles.text : ""
                        }`}
                      >
                        {livestream.type}
                      </span>
                    )}
                  </div>
                  <div className={styles.description_box}>
                    <div className={styles.description}>
                      {livestream.headlineText}
                    </div>
                    <div className={styles.category}>{livestream.category}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LivestreamPage;
