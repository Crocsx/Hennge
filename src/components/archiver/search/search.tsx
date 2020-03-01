import React, { useState } from 'react';
import { DatePicker } from 'antd';
import * as styles from './search.module.css';

import { ReactComponent as SearchIcon } from 'assets/icons/icon_search.svg';
import { ReactComponent as CalenderIcon } from 'assets/icons/icon_calender.svg';
import moment from 'moment';


const { RangePicker } = DatePicker;

function Search(props: { onChange: (dates: moment.Moment[]) => void }) {
  const [getDates, setDates] = useState(new Array<moment.Moment>());

  return (
    <div>
      <div className={styles["filter"]}>
        <div className={styles["filter-calender"]}>
          <CalenderIcon className={styles["filter-calender_icon"]}></CalenderIcon>
          <RangePicker 
            format={"YYYY/M/D"}
            separator="-"
            onCalendarChange={(dates, dateString) => setDates(dates as moment.Moment[])}
            allowClear={false}
            suffixIcon={null}></RangePicker>
        </div>
        <button 
          onClick={() => props.onChange(getDates)}
          className={styles["filter-search"]}>
          <SearchIcon className={styles["filter-search_icon"]}/>
        </button>
      </div>
    </div>
  );
}

export default Search;
