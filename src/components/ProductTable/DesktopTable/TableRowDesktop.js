import React from 'react';
import { t } from 'i18next';
import styles from '../table.module.css';


export const TableRowDesktop = ({ counts, prices, title, ...props }) => {
  return (
    <tr {...props} className={styles.productRow}>

      <tr>
        <th className={styles.title}>{title}</th>
      </tr>

      <tr>
        <th style={{ padding: '12px 0' }} className={styles.rowLabel}>{t('amount')}</th>
        {counts.map(value => (
          <td key={value} className={styles.value}>{value}</td>
        ))}
      </tr>

      <tr>
        <th className={styles.rowLabel}>{t('price')}</th>
        {prices.map(value => (
          <td key={value} className={styles.value}>{value} сом</td>
        ))}
      </tr>
    </tr>
  );
};
