import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { truncateString } from "../../src/helpers/stringFunctions";
import { baseUrl } from "../../src/helpers/config";
import styles from "../../src/styles/Quiz.module.scss";

type Data = {
  id: string;
  plays: string;
  headlineText: string;
  category: string;
  image: string;
};

const QuizPage = () => {
  const [quizData, setQuizData] = useState<Array<Data>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/api/quiz`)
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data);
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
          {(!quizData || quizData.length === 0) && (
            <>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
              <div className={styles.flex_card}>
                <Skeleton height={226} />
                <Skeleton count={2} />
              </div>
            </>
          )}
          {quizData &&
            quizData.length > 0 &&
            quizData.map((quiz) => (
              <div key={quiz.id} className={styles.card}>
                <div className={styles.card_content}>
                  <div className={styles.image_box}>
                    <img
                      className={styles.image_main}
                      src={quiz.image}
                      alt="quiz picture"
                    />
                  </div>
                  <div
                    className={`text_label`}
                    style={{
                      marginTop: "12px",
                      marginBottom: "8px",
                      fontSize: "12px",
                    }}
                  >
                    {quiz.category}
                  </div>
                  <div className={`text_content`}>
                    {truncateString(quiz.headlineText, 42)}
                  </div>
                  <div className={`text_label`} style={{ marginTop: "8px" }}>
                    <span style={{ fontWeight: "900", fontSize: "12px" }}>
                      {quiz.plays}
                    </span>{" "}
                    plays
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
