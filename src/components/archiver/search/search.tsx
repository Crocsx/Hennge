import React from 'react';
import { DatePicker } from 'antd';
import * as styles from './search.module.css';

import { ReactComponent as SearchIcon } from 'assets/icons/icon_search.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/icon_calender.svg';


const { RangePicker } = DatePicker;

function Search(props: { onChange: (dates: any, dateString: string[]) => void }) {
  return (
    <div>
      <div className={styles["filter"]}>
        <div className={styles["filter-calender"]}>
          <CalenderIcon className={styles["filter-calender_icon"]}></CalenderIcon>
          <RangePicker 
            format={"YYYY/M/D"}
            separator="-"
            onCalendarChange={(date, dateString) => props.onChange(date, dateString)}
            allowClear={false}
            suffixIcon={null}></RangePicker>
        </div>
        <button className={styles["filter-search"]}>
          <SearchIcon className={styles["filter-search_icon"]}/>
        </button>
      </div>
    </div>
  );
}

export default Search;
