import React from 'react'

import memoryIcon from '../assets/icon-memory.svg';
import reactionIcon from '../assets/icon-reaction.svg';
import verbalIcon from '../assets/icon-verbal.svg';
import visualIcon from '../assets/icon-visual.svg';

// Css
import styles from './Summary.module.css';

const Summary = () => {
    return (
        <div className={styles.container}>
            {/* title */}
            <h1 className={styles.title}>Summary</h1>

            {/* attributes */}
            <div className={styles.attributes}>

                {/* reaction */}
                <div className={`${styles.attribute} ${styles.reaction}`} id="reaction">
                    {/* icon & title */}
                    <div className={styles.iconTitle}>
                        <img
                            className={styles.attIcon}
                            src={reactionIcon}
                            alt='reactionIcon'
                        />
                        <h1>Reaction</h1>
                    </div>
                    {/* grade */}
                    <div className={styles.attGrade}>
                        <p><b>80</b> / 100</p>
                    </div>
                </div>

                {/* memory */}
                <div className={`${styles.attribute} ${styles.memory}`} id="memory">
                    {/* icon & title */}
                    <div className={styles.iconTitle}>
                        <img
                            className={styles.attIcon}
                            src={memoryIcon}
                            alt='memoryIcon'
                        />
                        <h1>Memory</h1>
                    </div>
                    {/* grade */}
                    <div className={styles.attGrade}>
                        <p><b>92</b> / 100</p>
                    </div>
                </div>

                {/* verbal */}
                <div className={`${styles.attribute} ${styles.verbal}`} id="verbal">
                    {/* icon & title */}
                    <div className={styles.iconTitle}>
                        <img
                            className={styles.attIcon}
                            src={verbalIcon}
                            alt='verbalIcon'
                        />
                        <h1>Verbal</h1>
                    </div>
                    {/* grade */}
                    <div className={styles.attGrade}>
                        <p><b>61</b> / 100</p>
                    </div>
                </div>

                {/* visual */}
                <div className={`${styles.attribute} ${styles.visual}`} id="visual">
                    {/* icon & title */}
                    <div className={styles.iconTitle}>
                        <img
                            className={styles.attIcon}
                            src={visualIcon}
                            alt='visualIcon'
                        />
                        <h1>Visual</h1>
                    </div>
                    {/* grade */}
                    <div className={styles.attGrade}>
                        <p><b>72</b> / 100</p>
                    </div>
                </div>
            </div>

            <button className={styles.button}>
                Continue
            </button>
        </div>
    )
}

export default Summary