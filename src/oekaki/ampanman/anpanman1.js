import React, { Component } from 'react';
import './anpanman1.scss';

class Anpanman extends Component {
  render() {
    return (
      <div className='anpanman'>
        <div className='face'>
          <div className='eyebrowsline'>
            <div className='eyebrows'></div>
            <div className='eyebrows'></div>
          </div>
          <div className='eyeline'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          <div className='noseline'>
            <div className='cheekleft'></div>
            <div className='nose'></div>
            <div className='cheekright'></div>
          </div>
          <div className='mouth'></div>
        </div>
      </div>
    );
  }
}

export default Anpanman;