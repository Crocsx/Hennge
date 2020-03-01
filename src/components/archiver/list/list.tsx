import React, { useState } from 'react';
import { IMail } from 'types/default.t';

import * as styles from './list.module.css';
import moment from 'moment';
import Logo from 'assets/images/logo.png';
import Mail from '../mail/mail';
import Constant from 'App.constant';

enum SortType{
  FROM,
  TO,
  SUBJECT,
  DATE
}

const sortFunction = (list: IMail[], sortBy: SortType, desc: 1 | -1): IMail[] => {
  let mails = [...list];
  switch(sortBy){
    case SortType.FROM:
      mails.sort((m1: IMail, m2: IMail) => {
          let x = m1.from;
          let y = m2.from;
          if(x.toLowerCase() !== y.toLowerCase()) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x > y ? 1 * desc : (x < y ? -1 * desc : 0);
      });
    break;
    case SortType.TO: 
      mails.sort((m1: IMail, m2: IMail) => {
          let x = m1.to[0];
          let y = m2.to[0];
          if(x.toLowerCase() !== y.toLowerCase()) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x > y ? 1 * desc : (x < y ? -1 * desc : 0);
      });
    break;
    case SortType.SUBJECT: 
      mails.sort((m1: IMail, m2: IMail) => {
          let x = m1.subject;
          let y = m2.subject;
          if(x.toLowerCase() !== y.toLowerCase()) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x > y ? 1 * desc : (x < y ? -1 * desc : 0);
      })
    break;
    case SortType.DATE: 
      mails.sort((m1: IMail, m2: IMail) => {
        if(moment(m1.date, Constant.DATE_FORMAT).isAfter(moment(m2.date, Constant.DATE_FORMAT))){
          return 1 * desc;
        } else {
          return -1 * desc;
        }
      });
    break;
  }
  return mails;
}

function List(props: {mails: IMail[]}) {
  const { mails } = props;
  const [getMails, setMails] = useState(mails);

  return (
    <div className={styles["List"]}>
      <div className={styles["List-counter"]}>Results: {mails.length} mail{mails.length > 1 ? "s" : ""}</div>
      {
        mails.length === 0 && 
        <div className={styles["List-container-empty"]}> 
          <img src={Logo} alt="logo" className={styles["List-container_logo"]}></img>
        </div>
      }
      {
        mails.length > 0 && 
        <div className={styles["List-container"]}>
          <div className={styles["List-container_sort"]}>
            <div 
              onClick={() => setMails(sortFunction(getMails, SortType.FROM, 1))} 
              className={styles["List-container_sort_row_header"]}>
                From
            </div>
            <div 
              onClick={() => setMails(sortFunction(getMails, SortType.TO, 1))}
              className={styles["List-container_sort_row_header"]}>
                To
            </div>
            <div 
              onClick={() => setMails(sortFunction(getMails, SortType.SUBJECT, 1))}
              className={styles["List-container_sort_row_header"]}>
                Subject
            </div>
            <div 
              onClick={() => setMails(sortFunction(getMails, SortType.DATE, 1))}
              className={styles["List-container_sort_row_header"]}>
                Date
            </div>
          </div>
          <div className={styles["List-container_tabe"]}>
            {getMails.map((mail, index) => {
                return <Mail key={index} mail={mail}></Mail>
            })}
          </div>
        </div>
        }
    </div>
  );
}

export default List;
