import React from 'react';
import { Mail } from 'types/default.t';
import * as styles from './mailPreview.module.css';
import { ReactComponent as AttachmentIcon } from 'assets/icons/icon_clip.svg';
import Constant from 'App.constant';
import moment from 'moment';
import { Tooltip } from 'antd';

const getDisplayDate = (date: string): string => {
    const dMoment = moment(date, Constant.DATE_FORMAT);
    const isToday = dMoment.isSame(new Date(), "day");
    if(isToday) {
        return dMoment.format("HH:mm");
    }

    const isSameWeek = dMoment.isSame(new Date(), "week");
    if(isSameWeek) {
        return dMoment.format("MMM DD");
    }

    return dMoment.format("YYYY/MM/DD");
}


function MailPreview(props: { mail: Mail}): JSX.Element {
const { mail } = {...props};
  return (
    <div className={styles["Mail"]}>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_from"]}`}>
            <p>{mail.from}</p>
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_to"]}`}>
            <p>{mail.to[0]}{mail.to.length > 1 && ', ...'}</p>
            {mail.to.length &&
            <div className={styles["Mail-field_to-additional"]}>
                +{mail.to.length}
            </div>}
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_subject"]}`}>
            <Tooltip className={styles["Mail-field_subject_tooltip"]} mouseEnterDelay={3} title={mail.content}>
            <p className={styles["Mail-field_subject_text"]}>{mail.subject}</p>
            {
                mail.attachments.length > 0 &&
                <div className={styles["Mail-field_attachment"]}>
                    <AttachmentIcon></AttachmentIcon>
                </div>
            }
            </Tooltip>
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_date"]}`}>
            <p>{getDisplayDate(mail.date)}</p>
        </div>
    </div>
  );
}

export default MailPreview;
