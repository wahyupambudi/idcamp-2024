import React from 'react';

function ContactItemBody({ id, name, tag }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">id: {id}</h3>
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;