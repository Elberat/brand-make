import React from 'react';
import styles from '../table.module.css';
import { TableRowDesktop } from './TableRowDesktop';


export const ProductTableDesktop = ({ priceList, counts }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        {priceList.map((info, idx) => (
          <TableRowDesktop
            counts={counts}
            title={info.title}
            prices={info.prices}
          />
        ))}
      </table>
    </div>
  );
};
