import React from 'react'

// Css
import styles from './SummaryResults.module.css';
import Summary from './Summary';
import YourResult from './YourResult';

const SummaryResults = () => {
    return (
        <div className={styles.container}>
            <YourResult />
            <Summary/>
        </div>
    )
}

export default SummaryResults