import React, { Component } from "react";
import Layout from "./Layout";
import $ from "jquery";
import NextSeo from "next-seo";
import swal from "sweetalert";
import LoadingOverlay from "react-loading-overlay";

// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: "Contact Us",
  description: "Contact Us"
};
class Contacts extends Component {
  state = {
    showAlert: true,
    titleAlert: "Contact Us",
    messageAlert: "ขอบคุณที่ติดต่อเรา",
    typeAlert: "text"
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  resetinput = e => {
    e.preventDefault();
    this.props.resetinput();
  };

  render() {
    const { values, handleChange, sucesssend, loading } = this.props;

    let objsucess = "";
    if (sucesssend.confirmsend == 1) {
      let promise1 = new Promise(function(resolve, reject) {
        resolve(sucesssend.confirmsend);
      });
      promise1.then(function(value) {
        if (value) {
          objsucess = swal({
            title: "Done!",
            text: "Thank you for contacting us.",
            icon: "success",
            timer: 3000,
            button: false
          });
          setTimeout(function() {
            window.location.href = "/contact";
          }, 4000);
        }
      });
    } else {
      objsucess = "";
    }
    return (
      <LoadingOverlay
        active={loading ? true : false}
        spinner
        text="Loading your content..."
      >
        <Layout>
          {/* Then we pass the config to the plugin */}
          <section className="mb-4 contact-class">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>

            {objsucess}

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          style={
                            sucesssend.confirmsend.error == 1 &&
                            sucesssend.confirmsend.name == ""
                              ? { border: "1px solid red" }
                              : {}
                          }
                          className="form-control"
                          onChange={handleChange("contact_name")}
                          value={values.contact_name}
                          placeholder="You name"
                        />
                        {sucesssend.confirmsend.error == 1 &&
                        sucesssend.confirmsend.name == "" ? (
                          <span>กรุณากรอกชื่อ</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0 mobile">
                        <input
                          type="text"
                          style={
                            sucesssend.confirmsend.error == 1 &&
                            sucesssend.confirmsend.email == ""
                              ? { border: "1px solid red" }
                              : {}
                          }
                          className="form-control"
                          onChange={handleChange("contact_email")}
                          value={values.contact_email}
                          placeholder="You email"
                        />
                        {sucesssend.confirmsend.error == 1 &&
                        sucesssend.confirmsend.email == "" ? (
                          <span>กรุณากรอก Email</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mt-3">
                        <input
                          type="text"
                          style={
                            sucesssend.confirmsend.error == 1 &&
                            sucesssend.confirmsend.phone == ""
                              ? { border: "1px solid red" }
                              : {}
                          }
                          className="form-control"
                          onChange={handleChange("contact_phone")}
                          value={values.contact_phone}
                          placeholder="You Phone"
                        />
                        {sucesssend.confirmsend.error == 1 &&
                        sucesssend.confirmsend.phone == "" ? (
                          <span>กรุณากรอกเบอร์โทรศัพท์</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mt-3">
                        <textarea
                          type="text"
                          style={
                            sucesssend.confirmsend.error == 1 &&
                            sucesssend.confirmsend.message == ""
                              ? { border: "1px solid red" }
                              : {}
                          }
                          placeholder="Your message"
                          rows="2"
                          value={values.contact_message}
                          className="form-control md-textarea"
                          onChange={handleChange("contact_message")}
                        ></textarea>
                      </div>
                      {sucesssend.confirmsend.error == 1 &&
                      sucesssend.confirmsend.message == "" ? (
                        <span>กรุณากรอกข้อความที่จะติดต่อเรา</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </form>
                <div className="mt-3">
                  <button
                    className="btn btn-info pull-right"
                    onClick={this.continue}
                  >
                    Send
                  </button>
                  <button onClick={this.resetinput} className="btn btn-warning">
                    Reset
                  </button>
                </div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fa fa-map-marker fa-2x"></i>
                    <p>ตำบลดอนแก้ว อำเภอแม่ริม จังหวัดเชียงใหม่ 50180</p>
                  </li>

                  <li>
                    <i className="fa fa-phone mt-4 fa-2x"></i>
                    <p>093-1848557</p>
                  </li>

                  <li>
                    <i className="fa fa-envelope mt-4 fa-2x"></i>
                    <p>boomgt4444@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <NextSeo config={DEFAULT_SEO} />
          <style>{`
          
            /* Smartphones (portrait and landscape) ----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
                    div.mobile{
                      padding-top: 1rem;
                  }
            }

           

            /* Smartphones (portrait) ----------- */
            @media only screen and (max-width: 320px) {
                    div.mobile{
                      padding-top: 1rem;
                  }
            }

           
            
            /* iPhone 5 (portrait &amp; landscape)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
                  div.mobile{
                    padding-top: 1rem;
                }
            }

            /* iPhone 5 (landscape)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: landscape) {
                  div.mobile{
                    padding-top: 1rem;
                }
            }

            /* iPhone 5 (portrait)----------- */
            @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
                div.mobile{
                    padding-top: 1rem;
                }
            }

            
          `}</style>
        </Layout>
      </LoadingOverlay>
    );
  }
}

export default Contacts;
