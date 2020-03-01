import React, { useState, useEffect } from 'react';
import { Mail } from 'types/default.t';

import { ReactComponent as SortIcon } from 'assets/icons/icon_arrow01.svg';
import * as styles from './list.module.css';
import moment from 'moment';
import Logo from 'assets/images/logo.png';
import MailPreview from 'components/archiver/mailPreview/mailPreview';
import Constant from 'App.constant';

// 3 sort type, desc, asc, and none
const SORTING_TYPE = 3;
enum SortType{
  FROM = "From",
  TO = "To",
  SUBJECT = "Subject",
  DATE = "Date"
}

const sortList = (list: Mail[], sortBy: SortType, desc: 1 | -1): Mail[] => {
  const mails = [...list];
  switch(sortBy){
    case SortType.FROM:
      mails.sort((m1: Mail, m2: Mail) => {
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
      mails.sort((m1: Mail, m2: Mail) => {
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
      mails.sort((m1: Mail, m2: Mail) => {
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
      mails.sort((m1: Mail, m2: Mail) => {
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

function List(props: {mails: Mail[]}): JSX.Element {
  const { mails } = props;
  const [getMails, setMails] = useState(mails);
  useEffect(() => { setMails(mails) }, [mails]);

  const [getSortBy, setSortBy] = useState({type: SortType.FROM, counter: 0});

  // This part could be done better
  // Basicaly, we store the sorting type and it's value
  // value can be :
  // v % 3 === 1 => sort asc
  // v % 3 === 2 === => sort desc
  // v % 3 === 0 => no sorting
  const selectSortBy = (filter: SortType): void => {
    const currFilter = getSortBy;
    const filterValue = currFilter.type === filter ? currFilter.counter + 1 : 1;

    if(filterValue % SORTING_TYPE === 0) {
      setMails(mails);
      setSortBy({type: SortType.FROM, counter: 0});
    } else {
      setMails(sortList(getMails, filter, filterValue % SORTING_TYPE === 1 ? 1 : -1));
      setSortBy({type: filter, counter: filterValue});
    }
  }

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
            {Object.keys(SortType).filter(
                value => (isNaN(Number(value)) === true)
              ).map(type => {
              return <div
                key={type}
                onClick={(): void => selectSortBy(SortType[type])}
                className={styles["List-container_sort_row_header"]}>
                  {SortType[type]}
                  {getSortBy.type === SortType[type] &&
                    <SortIcon className={styles["List-container_sort_row_header_icon_"+(getSortBy.counter % SORTING_TYPE)]}></SortIcon>
                  }
              </div>
            })}
            <div className={styles["List-container_sort_row_header"]}>
              Preview
            </div>
          </div>
          <div className={styles["List-container_tabe"]}>
            {getMails.map((mail, index) => {
                return <MailPreview key={index} mail={mail}></MailPreview>
            })}
          </div>
        </div>
        }
    </div>
  );
}

export default List;
