import React from 'react';

const Mapa = () => (
  <div style={{ width: '700px', position: 'relative' }}>
    <iframe
      title="google-map"
      width="700"
      height="440"
      src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Wodzis%C5%82aw%20%C5%9Bl%C4%85ski%20+(Title)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      style={{ border: 0 }}
    />
    <div
      style={{
        position: 'absolute',
        width: '80%',
        bottom: '10px',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#000',
        textAlign: 'center',
      }}
    >
      <small
        style={{ lineHeight: '1.8', fontSize: '2px', background: '#fff' }}
      >
        Powered by{' '}
        <a href="http://www.googlemapsgenerator.com/en/">
          Googlemapsgenerator.com/en/
        </a>{' '}
        &{' '}
        <a href="https://nouc.se/lan-med-lag-kreditvardighet/">
          https://nouc.se/lan-med-lag-kreditvardighet/
        </a>
      </small>
    </div>
    <style>{`
      #gmap_canvas img {
        max-width: none !important;
        background: none !important;
      }
    `}</style>
  </div>
);

export default Mapa;