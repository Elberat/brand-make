import React from 'react';
import { t } from 'i18next';
import styles from '../table.module.css';


export const TableRowMobile = ({ counts, prices, title, ...props }) => {
  return (
    <tr className={styles.productInfo}>
      <th className={styles.title}>{title}</th>

      <tr className={styles.labels}>
        <th className={styles.rowLabel}>{t('amount')}</th>
        <th className={styles.rowLabel}>{t('price')}</th>
      </tr>

      <tr className={styles.valuesWrapper}>
        <tr className={styles.cell}>

          {counts.map(value => (
            <tr className={styles.value} key={value}>
              <td>{value}</td>
            </tr>
          ))}
        </tr>

        <tr className={styles.cell}>

          {prices.map(value => (
            <tr className={styles.value} key={value}>
              <td>{value} сом</td>
            </tr>
          ))}
        </tr>
      </tr>
    </tr>
  );
};
