import React from 'react';
import { BaiduMap } from '../../../components/BaiduMap';
import './ContactMapSection.scss';

export const ContactMapSection: React.FC = () => {
  return (
    <section className="contact-map-section">
      <BaiduMap />
    </section>
  );
};
