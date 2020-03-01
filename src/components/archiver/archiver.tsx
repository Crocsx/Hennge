import React from 'react';
import Search from './search/search';
import List from './list/list';
import * as styles from './archiver.module.css'
import { IMail } from 'types/default.t';
import moment, { Moment } from 'moment';
import Constant from 'App.constant';


interface ArchiverState {
  mails: IMail[];
}

interface ArchiverProps {
  mails: IMail[];
}

class Archiver extends React.Component<ArchiverProps, ArchiverState> {
  state = {
    mails: new Array<IMail>()
  }

  componentDidMount(){
    this.setState({
      mails: this.props.mails
    });
  }

  onRangeChange(dates: moment.Moment[]) {
    let filteredMails = this.props.mails;
    if(dates[0] && dates[1]){
      filteredMails = this.props.mails.filter((mail) => {
        return moment(mail.date, Constant.DATE_FORMAT).isBetween(dates[0], dates[1], "days", "[]")
      })
    }
    this.setState({
      mails: filteredMails
    });
  }

  render() {
    return (
      <div className={styles["Archiver"]}>
          <header className={styles["Archiver-header"]}>
            <Search onChange={(dates) => this.onRangeChange(dates)}></Search>
          </header>
          <section className={styles["Archiver-section"]}>
            <List mails={this.state.mails}></List>
          </section>
      </div>
    );
  }
}

export default Archiver;
