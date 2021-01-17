import React from 'react';
import {Card} from "reactstrap";
import './index.scss'

const ContactUs = () => {
    window.scroll(0 ,0)
    return (
        <section className="contact">
            <Card>
                <div className="block">
                    <div className="wrap">
                        {/* RESPONSIVE_FIRST_320X100 Banner */}{/* DFP */}
                        <div className="bnr_320">
                            <center>
                                <div id="div-6" data-google-query-id="CKfk_Z3Wou4CFeEStwAdi7cKGg">
                                    <div id="google_ads_iframe_/32866417/GamesQwik_320_100_1_0__container__" /></div>
                            </center>
                        </div>
                        {/*  DPF END */}
                        <h3>Get in touch</h3>
                        <span className="text">
      <span className="flex_line" style={{ "-webkitFlexFlow": "row wrap"}}>
        <span className="int" style={{display: "inline-block", width: "50%" ,height: 130}}>We'd love to hear from you. Drop us a line and we'll contact you shortly.</span>
        <span className="details">
          <span className="line"><label>Email:</label> support@pikoya.com</span>
          <span className="line"><label>Company Name:</label> Pikoya Ltd</span>
          <span className="line"><label>Address:</label> Derekh Yafo 30, Haifa, Israel</span>
        </span>
      </span>
      <span className="cnt_form">
        <div id="contact_us_entry" />
        <span className="contact_form">
          <span className="line">
            <span className="alert_green" id="congrats_label" style={{display: 'none'}}>Thank You for Contacting Us</span>
          </span>
          <span className="line">
            <span className="alert_red" id="captcha_wrong_label" style={{display: 'none'}}>Please validate you are not a robot with reCAPTCHA</span>
          </span>
          <span className="line">
            <span className="alert_red" id="empty_fields_label" style={{display: 'none'}}>Please fill in the fields highlighted in red</span>
          </span>
          <form method="post" id="input_form">
            <span className="line">
              <label>Name:</label>
              <input type="text" id="name_input" name="name"  />
            </span>
            <span className="line">
              <label>Email:</label>
              <input type="text" id="email_input" name="email" />
            </span>
            <span className="line">
              <label>Subject:</label>
              <select id="subject_input" name="subject">
                <option>Select a topic</option>
                <option value="I want to advertise on your website">I want to advertise on your website</option>
                <option value="I want to publish my game">I want to publish my game</option>
                <option value="I want to publish a guest post">I want to publish a guest post</option>
                <option value="I have a question...">I have a question...</option>
              </select>
            </span>
            <span className="line">
              <label>Details:</label>
              <textarea id="details_input" name="details" defaultValue={""} />
            </span>
            <span className="line">
              <label />
              <div className="g-recaptcha" data-sitekey="6LewBdwZAAAAAIYhC8VzdXTVOnzjQj_PqsPVU8v1"><div style={{width: '304px', height: '78px'}}><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LewBdwZAAAAAIYhC8VzdXTVOnzjQj_PqsPVU8v1&co=aHR0cHM6Ly93d3cuZ2FtZXNxd2lrLmNvbTo0NDM.&hl=en&v=r8jtf1oixV0IGff4hgB4EzDF&size=normal&cb=m3gs02j7ynug" width={304} height={78} role="presentation" name="a-k25pcat63dnx" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} /></div><iframe style={{display: 'none'}} /></div>
            </span>
            <input type="hidden" name="page" defaultValue="true" />
          </form>
          <span className="line align_right">
            <span className="submit pointer" id="submit_button">
              Submit</span>
          </span>
          <span className="line text">
            <h2>Write for Us</h2>
            <span>
              <p>We are always on the lookout for the next great game review writer.</p>
              <p>If you think you have what it takes to write for us and that you like the idea of being able to play games, write about it and earn some cash, then please use the contact form above and reach out to us!</p>
              <p>Note: Please put "Game Review Writer Job Application" in the Subject line and we'll get back to you!</p>
            </span>
          </span>
        </span>
      </span>
    </span>
                        {/* TOP_MIDDLE_728X90 Banner */}{/* DFP */}
                        <div className="bnr_728">
                            <center>
                                <div id="div-8" style={{width: 'auto', height: 'auto', display: 'inline-block'}} data-google-query-id="CKnk_Z3Wou4CFeEStwAdi7cKGg">
                                    <div id="google_ads_iframe_/32866417/GamesQwik_728_90_2_0__container__" style={{border: '0pt none', width: '728px', height: '90px'}} /></div>
                            </center>
                        </div>
                        {/*  DPF END */}
                    </div>
                </div>

            </Card>
        </section>
    );
}

export default ContactUs;
