import { useState, useEffect } from "react";
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
    fetch(`http://localhost:3000/api/livestream`)
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
          {
            livestreamData && livestreamData.length > 0 && 
            livestreamData.map((livestream, i) => (
              <div key={livestream.id} className={styles.card} style={{ backgroundImage: `url(${livestream.image})` }}>
                <div className={styles.card_content}>
                  <div className={`${i === 0 ? styles.live_box : styles.clip_box}`}>
                    {
                      i === 0 
                      ? <><span>10,5rb</span><span>|</span><span>Live</span></>
                      : <span>{livestream.type}</span>
                    }
                  </div>
                  <div className={styles.description_box}>
                    <div className={styles.description}>{livestream.headlineText}</div>
                    <div className={styles.category}>{livestream.category}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LivestreamPage;
