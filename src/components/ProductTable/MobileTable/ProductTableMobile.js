import React from 'react';
import styles from '../table.module.css';
import { TableRowMobile } from './TableRowMobile';


export const ProductTableMobile = ({ priceList, counts }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        {priceList.map((info => (
          <TableRowMobile
            counts={counts}
            title={info.title}
            prices={info.prices}
          />
        )))}
      </table>
    </div>
  );
};
