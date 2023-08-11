import React from 'react'

// Css
import styles from './YourResult.module.css';

const YourResult = () => {
    return (
        <div className={styles.container}>
            {/* title */}
            <h1 className={styles.title}>Your Result</h1>

            {/* score container */}
            <div className={styles.scoreContainer}>
                {/* user score */}
                <h1 className={styles.score}>76</h1>

                {/* available score */}
                <h2 className={styles.availableScore}>of 100</h2>
            </div>

            {/* grade */}
            <h1 className={styles.grade}>Great</h1>

            {/* description */}
            <p className={styles.description}>
                You scored higher than 65% of the people who have taken these testes
            </p>
        </div>
    )
}

export default YourResult