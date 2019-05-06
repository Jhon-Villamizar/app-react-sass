import React from 'react';
import Information from '../information/information';
import './body.css';

const Body = () => (
  <div className="container">
    <div className="card mb-3 card-body">
      <div className="row no-gutters">
        <div className="col-12">
          <div className="row">
            <div className="col-1">
              <div className="nav flex-column nav-pills menu-properties" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fas fa-store-alt store"></i></div>
                <div className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-home house"></i></div>
                <div className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="fas fa-building build"></i></div>
                <div className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fas fa-hotel hotel"></i></div>
              </div>
            </div>
            <div className="col-11">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <Information></Information>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">profile</div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">messages</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Body;