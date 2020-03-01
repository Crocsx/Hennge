import React from 'react';
import { IMail } from 'types/default.t';
import * as styles from './mail.module.css';
import { ReactComponent as AttachmentIcon } from 'assets/icons/icon_clip.svg';

function Mail(props: { mail : IMail}) {
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
            <p className={styles["Mail-field_subject_text"]}>{mail.subject}</p>
            {
                mail.attachments.length > 0 && 
                <div className={styles["Mail-field_attachment"]}>
                    <AttachmentIcon></AttachmentIcon>
                </div>
            }
        </div>
        <div className={`${styles["Mail-field"]} ${styles["Mail-field_date"]}`}>
            <p>{mail.date}</p>
        </div>
    </div>
  );
}

export default Mail;
