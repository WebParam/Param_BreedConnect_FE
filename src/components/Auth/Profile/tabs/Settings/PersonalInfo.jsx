import React, { useState, useEffect } from 'react';

export default function PersonalInfo() {


    return (

<div className="tab-pane fade" id="id5" role="tabpanel">
<div className="sherah-paymentm sherah__item-group sherah-default-bg sherah-border ">
  <h4 className="sherah__item-group sherah-default-bg sherah-border__title">
    Change Password
  </h4>
  <div className="row">
    <div className="col-xxl-8  col-lg-6 col-md-6 col-12">
      {/* Sign in Form */}
      <form
        className="sherah-wc__form-main sherah-form-main--v2 p-0"
        action="#"
        method="post"
      >
        <div className="form-group">
          <label className="sherah-wc__form-label">
            Old Password *
          </label>
          <div className="form-group__input">
            <input
              className="sherah-wc__form-input"
              placeholder="●●●●●●"
              id="password-field"
              type="password"
              name="password"
              maxLength={8}
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="sherah-wc__form-label">
            New Password *
          </label>
          <div className="form-group__input">
            <input
              className="sherah-wc__form-input"
              placeholder="●●●●●●"
              id="password-field"
              type="password"
              name="password"
              maxLength={8}
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="sherah-wc__form-label">
            Re-enter Password *
          </label>
          <div className="form-group__input">
            <input
              className="sherah-wc__form-input"
              placeholder="●●●●●●"
              id="password-field"
              type="password"
              name="password"
              maxLength={8}
              required="required"
            />
          </div>
        </div>
        <div className="form-group mg-top-30">
          <button
            type="submit"
            className="sherah-btn sherah-btn__primary"
          >
            Changed Password
          </button>
        </div>
      </form>
      {/* End Sign in Form */}
    </div>
    <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
      <div className="sherah-password__img">
        <img src="img/p-update-img.png" alt="" />
      </div>
    </div>
  </div>
</div>
</div>
    )
}