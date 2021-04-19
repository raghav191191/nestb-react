import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class MainPage extends Component {
    render() {
        return (
            <div>
                <section id="hero_banner" className="hero_banner height100">
                    <div className="container custom_container height100 display_table">
                        <h1 className="visible-xs">Smart technology to revolutionise buying and selling property</h1>
                        <div className="hero_img">
                            <img src="images/smart-technology.png" />
                        </div>
                        <div className="hero_txt">
                            <h1 className="hidden-xs">Smart technology to revolutionise buying and selling property</h1>
                            <p className="hero_lead_txt">Interested in what we are doing,<br />want to be involved or just fancy a chat?</p>
                            <Link to={'/'} className="btn custom_theme_btn">Register to Beta</Link>
                        </div>
                        <div className="arrow_banner links_anchor">
                            <Link to={"/about_us"}><img src="images/arrow.png" /></Link>
                        </div>
                    </div>
                </section>



                <section id="about_us" className="about_us height100">
                    <div className="container custom_container height100 display_table">
                        <div className="about_content">
                            <div className="header_section head_left">
                                <h2>About Us</h2>
                            </div>
                            <p>Buying or selling property is confusing, slow, and bogged down with unnecessary details. At Nestb, we think its time for an entirely new approach.</p>
                            <p>So we've developed a game-changing set of smart technologies to make property conveyance simpler, faster, and more transparent for everyone.</p>
                        </div>
                    </div>
                </section>

                <section id="platform" className="platform height100 desktop-sec">
                    <div className="container custom_container height100 display_table">
                        <div className="platform_content">
                            <div className="header_section head_center text-center">
                                <h2>Our Platform</h2>
                            </div>


                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Consumers">
                                    <div className="platform_slider">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/simplify.png" />
                                                <h3>Simplify the process</h3>
                                                <p>Eliminate confusion by using our end-to-end, seamless online transaction platform.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/faster.png" />
                                                <h3>Get it done faster</h3>
                                                <p>Don't get stuck playing the waiting game. Make quicker and better decisions with real time housing market data.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/best-deal.png" />
                                                <h3>Make your best deal</h3>
                                                <p>Stay connected 24/7 with our online platform. Get quick access to real time information and state of the art decision-making tools.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Estate Agents">
                                    <div className="platform_slider">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/be-first.png" />
                                                <h3>Be the first to know</h3>
                                                <p>Get access to deep market insights with real-time updates. Know valuation trends and other important facts.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/loyal-clients.png" />
                                                <h3>Create happier, loyal clients</h3>
                                                <p>Simplify the customer journey with our online, end-to-end process; keep them engaged and avoid frustration.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/optimise.png" />
                                                <h3>Optimize your deal flow</h3>
                                                <p>Take advantage of our leads marketplace to get access to verified buyers and sellers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey={3} title="Investors">
                                    <div className="platform_slider">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/get-ahead.png" />
                                                <h3>Get ahead of the curve</h3>
                                                <p>Gain insights from data-driven smart analysis tools to spot trends first to make the right investments.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/confidence.png" />
                                                <h3>Move with confidence</h3>
                                                <p>Have all necessary financial verification and documentation uploaded and stored securely in one place.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="platform_grid">
                                                <img src="images/save-time.png" />
                                                <h3>Save time and hassles</h3>
                                                <p>Simplify buying and selling with our online, end-to-end, automated transaction platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>

                        </div>
                    </div>
                </section>

                <section id="platform" className="platform height100 mobile-sec">
                    <div className="container custom_container height100 display_table">
                        <div className="platform_content">
                            <div className="header_section head_center text-center">
                                <h2>Our Platform</h2>
                            </div>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Consumers">
                                    <div className="platform_slider">
                                        <Carousel autoPlay className="white">
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/simplify.png" />
                                                        <h3>Simplify the process</h3>
                                                        <p>Eliminate confusion by using our end-to-end, seamless online transaction platform.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/faster.png" />
                                                        <h3>Get it done faster</h3>
                                                        <p>Don't get stuck playing the waiting game. Make quicker and better decisions with real time housing market data.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <img className="hidden" src="" />
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="platform_grid">
                                                        <img src="images/best-deal.png" />
                                                        <h3>Make your best deal</h3>
                                                        <p>Stay connected 24/7 with our online platform. Get quick access to real time information and state of the art decision-making tools.</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </Carousel>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Estate Agents">
                                    <div className="platform_slider">
                                        <Carousel autoPlay className="white">
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/be-first.png" />
                                                        <h3>Be the first to know</h3>
                                                        <p>Get access to deep market insights with real-time updates. Know valuation trends and other important facts.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/loyal-clients.png" />
                                                        <h3>Create happier, loyal clients</h3>
                                                        <p>Simplify the customer journey with our online, end-to-end process; keep them engaged and avoid frustration.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <img className="hidden" src="" />
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="platform_grid">
                                                        <img src="images/optimise.png" />
                                                        <h3>Optimize your deal flow</h3>
                                                        <p>Take advantage of our leads marketplace to get access to verified buyers and sellers.</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </Carousel>
                                    </div>
                                </Tab>
                                <Tab eventKey={3} title="Investors">
                                    <div className="platform_slider">
                                        <Carousel autoPlay className="white">
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/get-ahead.png" />
                                                        <h3>Get ahead of the curve</h3>
                                                        <p>Gain insights from data-driven smart analysis tools to spot trends first to make the right investments.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    <div className="platform_grid">
                                                        <img src="images/confidence.png" />
                                                        <h3>Move with confidence</h3>
                                                        <p>Have all necessary financial verification and documentation uploaded and stored securely in one place.</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <img className="hidden" src="" />
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="platform_grid">
                                                        <img src="images/save-time.png" />
                                                        <h3>Save time and hassles</h3>
                                                        <p>Simplify buying and selling with our online, end-to-end, automated transaction platform.</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </Carousel>
                                    </div>
                                </Tab>
                            </Tabs>

                        </div>
                    </div>
                </section>

                <section id="blogs" className="blogs height100">
                    <div className="container custom_container height100 display_table">
                        <div className="blog_content">
                            <div className="header_section head_center text-center">
                                <h2>Latest Blogs</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="blog_grid">
                                        <img src="images/pic3.png" />
                                        <div className="blog_caption">
                                            <p>Why Neighborhoods with Strong Communities Make Great Places to Live</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="blog_grid">
                                                <img src="images/pic6.png" />
                                                <div className="blog_caption">
                                                    <p>Eliminate confusion</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="blog_grid">
                                                <img src="images/pic4.png" />
                                                <div className="blog_caption">
                                                    <p>Move with confidence</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="blog_grid visible-xs">
                                        <img src="images/pic2.png" />
                                        <div className="blog_caption">
                                            <p>Why Neighborhoods with Strong</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="blog_grid">
                                                <img src="images/pic5.png" />
                                                <div className="blog_caption">
                                                    <p>Create happier, more loyal clients</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="blog_grid">
                                                <img src="images/pic1.png" />
                                                <div className="blog_caption">
                                                    <p>Move with confidence</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_grid hidden-xs">
                                        <img src="images/pic2.png" />
                                        <div className="blog_caption">
                                            <p>Why Neighborhoods with Strong</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact_us" className="contact_us height100">
                    <div className="container custom_container height100 display_table">
                        <div className="contact_content">
                            <div className="header_section head_center text-center">
                                <h2 className="hidden-xs">Sign Up for Beta!</h2>
                                <h2 className="visible-xs">Register interest for beta form</h2>
                            </div>
                            <div className="row">
                                <div className="cont_img">
                                    <img src="images/Register_your_interest.png" />
                                </div>
                                <div className="contact_form">
                                    <form action="/">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" type="text" id="fname" name="" placeholder="Write your name here" required="" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input className="form-control" type="email" id="email" name="" placeholder="Enter your email address" required="" />
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" id="subject" name="" placeholder="Enter free text, your purpose etc." rows="6"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input className="submit_btn btn custom_theme_btn" type="submit" value="Send" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default MainPage;