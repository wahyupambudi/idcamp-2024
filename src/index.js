import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const heading = React.createElement(
  'h1',
  {
    className: 'intro',
    id: 'id-intro'
  },
  'Welcome React!'
);
console.log(heading);

const li1 = React.createElement('li', null, 'Nama: Wahyu Pambudi');
const li2 = React.createElement('li', null, 'Keahlian: Teknik Jaringan Komputer dan Telekomunikasi');

const ul1 = React.createElement('ul', null, [li1, li2]);

const container = React.createElement('div', null, [heading, ul1]);

const root = createRoot(document.getElementById('root'));
root.render(container);
