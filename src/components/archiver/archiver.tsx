import React from 'react';
import Search from './search/search';
import List from './list/list';
import * as styles from './archiver.module.css'
import { Mail } from 'types/default.t';
import moment, { Moment } from 'moment';
import Constant from 'App.constant';


interface ArchiverState {
  mails: Mail[];
}

interface ArchiverProps {
  mails: Mail[];
}

class Archiver extends React.Component<ArchiverProps, ArchiverState> {
  state = {
    mails: new Array<Mail>()
  }

  componentDidMount(): void {
    this.setState({
      mails: this.props.mails
    });
  }

  onRangeChange(dates: moment.Moment[]): void {
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

  render(): JSX.Element {
    return (
      <div className={styles["Archiver"]}>
          <header className={styles["Archiver-header"]}>
            <Search onChange={(dates): void => this.onRangeChange(dates)}></Search>
          </header>
          <section className={styles["Archiver-section"]}>
            <List mails={this.state.mails}></List>
          </section>
      </div>
    );
  }
}

export default Archiver;
