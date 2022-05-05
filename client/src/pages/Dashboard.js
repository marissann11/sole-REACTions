import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import AdminShoe from "../components/AdminShoe";

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
      <div>
        <div className="upload">
          <Button
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Click to Upload Image
          </Button>
        </div>
        <AdminShoe />
      </div>
    );
  }
}

export default Dashboard;
