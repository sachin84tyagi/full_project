import React, { Component } from "react";

import { messaging } from "../../init-fcm";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./notificationDetails.scss";

import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../helpers/videoPlayer";

import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import {
  getNotificationData
} from "../../database/dal/notificationDal";

class NotificationDetails extends Component {
  state = {
    redirect: true,
    data: [],
    videoJsOptions: {},
    tableData: {},
    showSideBar: true
  };


  constructor(props) {
    super(props);
    const dataArr = [];

    messaging.onMessage(async function (payload) {
      const { data } = await payload;
      dataArr.push(data);

      localStorage.setItem("payload", JSON.stringify(dataArr));
    });
  }

  componentDidMount() {
    let user;
    let notification;
    console.log("Componenet Did Mount")
    getNotificationData().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          notification = doc.data();
          console.log("Notification Data information: ", notification)
          if (doc.exists) {
            this.setState({
              data: notification
            });
          }
        });

      }
    );
  }

  async componentWillMount() {
    console.log("CDM PARAMS image ", this.props.match.params.image);
    console.log("CDM PARAMS timeStamp ", this.props.match.params.timeStamp);
    // console.log(
    //   "CDM PARAMS stream ",
    //   JSON.parse(this.props.match.params.stream)
    // );
    //console.log("CDM PARAMS ::: ", JSON.parse(this.props.match.params.id));

    let axiosConfig = {
      headers: {
        "Content-Type":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
      }
    };

    const { data } = await axios.post(
      "https://vhlvztx86k.execute-api.us-east-1.amazonaws.com/prod/getvideostreambytimestamp",
      {
        streamName: "RekognitionStream",
        startTime: this.props.match.params.timeStamp,
        endTime: this.props.match.params.timeStamp,
        imageName: this.props.match.params.image
      },
      axiosConfig
    );
    console.log("Response from API ::: ", data)
    if (data) {
      const videoJsOptions = {
        autoplay: true,
        controls: false,
        sources: [
          {
            src: JSON.parse(data).VideoURL
          }
        ]
      };

      this.setState({ videoJsOptions });
      this.setState({ tableData: JSON.parse(data) });
    }
  }


  onClickFn = (data) => {
    console.log('data', data)
    this.setState({
      showSideBar: data
    })
  }

  componentWillUnmount() {
    const data = null;
  }
  render() {
    const { videoJsOptions } = this.state;
    return (
      <React.Fragment>
        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} onClickFn={this.onClickFn} />
        </div>
        <div className="wrapper" style={{ marginTop: "56px" }}>
          {this.state.showSideBar ? <Sidebar sideBarStatus={this.state.showSideBar} /> : <SidebarCollpase></SidebarCollpase>}

          <div id="content">
            <div
              className="social-box"
              style={{
                background: "#232838",
                paddingBottom: "200px",
                paddingLeft: "18px",
                paddingRight: "12px"
              }}
            >
              <div className="container" style={{ backgroundColor: "#232838" }}>
                <div
                  className="user-list row"
                  style={{
                    borderBottom: "0px solid #FFF",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                    marginLeft: "0px"
                  }}
                >
                  <div className="car-list-header col-md-12">
                    Messages Details
                    <div className="row mt-3">
                      <div className={`col-lg-12 text-center`}>
                        <div
                          style={{
                            boxShadow: "0 0 5px #DAA520",
                            backgroundColor: "#000"
                          }}
                        >
                          <VideoPlayer {...videoJsOptions} />
                          <hr />
                        </div>

                        <div
                          style={{
                            color: "#d19b3d",
                            fontSize: "13px",
                            marginBottom: "40px",
                            marginTop: "20px"
                          }}
                        >
                          dddd
                          {
                            //videoData.name
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <table className="table table-dark table-striped">
                      {/* <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr>
                          <th scope="row" className="table-entity">Image</th>
                          <td>
                            <img
                              src={this.state.tableData.ImageURL}
                              height="50px"
                              alt="image"
                            ></img>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="table-entity">Video URL</th>
                          <td>{this.state.tableData.VideoURL}</td>
                        </tr>
                        <tr>
                          <th scope="row" className="table-entity">Camera Name</th>
                          <td>RekognitionStream</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NotificationDetails;
