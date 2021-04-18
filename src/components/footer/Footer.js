import { Link } from 'react-router-dom';
import '../../assets/footer.css';

const Footer = () => (
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt" />
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone" />
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open" />
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#ffffff',
                                        fontSize: '45px',
                                    }}
                                >
                                    <h3 style={{ fontSize: '45px' }}>F.C Restaurant</h3>
                                </Link>
                            </div>
                            <div className="footer-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                                    do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#">
                                    <i className="fab fa-facebook-f facebook-bg" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter twitter-bg" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-google-plus-g google-bg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>
                                    Don’t miss to subscribe to our new feeds, kindly fill the form
                                    below.
                                </p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button type="button">
                                        <i className="fab fa-telegram-plane" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2021, All Right Reserved
                                <Link to="/"> Limon Rana</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;
