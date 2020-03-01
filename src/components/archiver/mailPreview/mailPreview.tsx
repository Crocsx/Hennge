import React, { useState } from 'react';
import { Mail } from 'types/default.t';
import * as styles from './mailPreview.module.css';
import { ReactComponent as AttachmentIcon } from 'assets/icons/icon_clip.svg';
import Constant from 'App.constant';
import moment from 'moment';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

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
  const [getPreview, setPreview] = useState(false);
  return (
    <div className={`${styles[`Mail-${getPreview ? 'expanded' : 'collapsed'}`]}`}>
      <div className={`${styles[`Mail-container`]}`}>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_from"]}`}>
          <p>{mail.from}</p>
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_to"]}`}>
          <p>{mail.to[0]}{mail.to.length > 1 && ', ...'}</p>
          {mail.to.length > 1 &&
          <div className={styles["Mail-field_to-additional"]}>
            +{mail.to.length - 1}
          </div>}
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_subject"]}`}>
          <p className={styles["Mail-field_subject_text"]}>{mail.subject}</p>
          {
            mail.attachments.length > 0 &&
            <div className={styles["Mail-field_attachment"]}>
              <AttachmentIcon></AttachmentIcon>
            </div>
          }
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_date"]}`}>
          <p>{getDisplayDate(mail.date)}</p>
        </div>
        <div onClick={(): void => setPreview(!getPreview)} className={`${styles["Mail-field"]} ${styles["Mail-field_preview"]}`}>
          {getPreview && <EyeOutlined style={{margin: "auto"}} />}
          {!getPreview && <EyeInvisibleOutlined style={{margin: "auto"}} />}
        </div>
      </div>
      {
        getPreview &&
        <div className={`${styles["Mail-content"]}`}>
          {mail.content}
        </div>
      }
    </div>
  );
}

export default MailPreview;
