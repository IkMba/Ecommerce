function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-one">
          <h4>Company</h4>
          <p className="text-light">Find a location nearest you. See</p>
          <p></p>
          <p className="text-black">+391 (0)35 2568 4593</p>
          <p>hello@domain.com</p>
        </div>
        <div className="footer-two">
          <h4>Useful Links</h4>
          <p className="text-light">NewProducts</p>
          <p className="text-light">Best Sellers</p>
          <p className="text-light">Bundle & Save</p>
          <p className="text-light">Online Gift Card</p>
        </div>
        <div className="footer-three">
          <h4>Information</h4>
          <p className="text-light">Start a Return</p>
          <p className="text-light">Contact Us</p>
          <p className="text-light">Shipping FAQ</p>
          <p className="text-light">Terms and Condition</p>
          <p className="text-light">Privacy Policy</p>
        </div>
        <div className="footer-four">
          <h3>Good Emails</h3>

          <p className="text-light">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>

          <div className="footer-input">
            <input type="text" placeholder="Enter your email address" />
            <button className="btn-black">Suscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <p className="text-light">&copy; codewithIk</p>
        <img src="/images/logo.png" alt="" />
        <img src="/images/pay.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
