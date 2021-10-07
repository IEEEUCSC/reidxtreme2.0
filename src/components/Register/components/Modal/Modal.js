import React, { useState } from "react";

import "./styles.css";

const Modal = ({ setDisplay, setChecked }) => {
  // Agree button state
  const [enabled, setEnabled] = useState(false);

  // Checks if user scrolled to bottom
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - 10 <= e.target.clientHeight;
    if (bottom) {
      setEnabled(true);
    }
  };

  // Buttons
  const handleClickCancel = () => {
    setChecked(false);
    setDisplay(false);
  };
  const handleClickAccept = () => {
    setChecked(true);
    setDisplay(false);
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <h1 className="section-title">CODE OF CONDUCT</h1>
        <div className="modal-content" onScroll={handleScroll}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          hendrerit nisi tempor mattis lobortis. Quisque vestibulum, augue eu
          dignissim cursus, enim eros consequat augue, et sagittis sem sapien
          sed quam. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vivamus viverra arcu id arcu
          fermentum, ac tristique ipsum accumsan. Ut volutpat ornare velit in
          eleifend. Donec tempus purus sed nulla varius, at viverra mi pretium.
          In pretium vel ligula vulputate hendrerit. Nam sodales ex eu luctus
          tincidunt. Quisque ante ligula, mattis non nulla mollis, pharetra
          gravida augue. Cras ex eros, molestie sit amet nulla vel, lacinia
          fringilla mi. Ut sodales ornare urna at sagittis. Etiam mollis leo
          eget purus lacinia, sit amet mattis nisi maximus. In hac habitasse
          platea dictumst. Cras facilisis dolor et augue tempus, quis lobortis
          sem viverra.
          <br />
          Nunc in tortor nibh. Etiam tristique, ipsum vel feugiat consectetur,
          lectus mi tempus diam, vel blandit risus magna quis leo. Maecenas
          egestas bibendum ex ut facilisis. Sed sollicitudin sed urna quis
          ullamcorper. In pellentesque magna sit amet lobortis dapibus. Mauris
          nec eleifend eros, non scelerisque leo. Nunc aliquam vel turpis eget
          sagittis. Sed consectetur quis diam nec pharetra. Nunc venenatis
          euismod urna, vel rhoncus nibh. Aliquam ut commodo urna, eu sagittis
          quam.
        </div>
        <div className="form-button-group">
          <button className="form-button" onClick={handleClickCancel}>
            CANCEL
          </button>
          <button
            className="form-button form-submit"
            onClick={handleClickAccept}
            disabled={!enabled}
          >
            AGREED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
