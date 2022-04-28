import React, { Component } from "react";

class Dashboard extends Component {
  uploadWidget() {
   window.cloudinary.openUploadWidget(
      { cloud_name: "gw-bootcamp", upload_preset: "upload_shoes" },
      function (error, result) {
        console.log(result);
      }
    );
  }
  
  render() {
    return (
      <body>
        <div className="container">
          Hi, I'm the dashboard.
          <div className="upload">
            <button
              onClick={this.uploadWidget.bind(this)}
              className="upload-button"
            >
              Click here to Submit Image
            </button>
          </div>
        </div>
      </body>
    
    );
  }
}



export default Dashboard;
