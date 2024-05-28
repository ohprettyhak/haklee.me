import React, { ReactElement } from 'react';

import { CONTACTS } from '@/constants/contacts';
import * as styles from '@/styles/app.css';

const ContactSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Contact</h3>
      {CONTACTS.map(contact => (
        <div key={contact.title} className={styles.experienceGrid.root}>
          <p className={styles.experienceGrid.metadataSubTitle}>
            {contact.title}
          </p>
          <a href={contact.link} target="_blank" className={styles.contactLink}>
            {contact.content}
          </a>
        </div>
      ))}
    </section>
  );
};

export default ContactSection;
