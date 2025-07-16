const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-copyright">
            <h2 className="footer-title">© 2025 Ved Prakash</h2>
            <p className="footer-text">All rights reserved.</p>
          </div>
  
          <div className="footer-section footer-links">
            <h2 className="footer-title">Links</h2>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section footer-address">
            <h2 className="footer-title">Address</h2>
            <address className="footer-address-text">
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Country</p>
            </address>
          </div>
          <div className="footer-section footer-contact">
            <h2 className="footer-title">Contact</h2>
            <ul className="footer-list">
              <li>Email: <a href="mailto:info@example.com" className="footer-link">info@example.com</a></li>
              <li>Phone: <a href="tel:+911234567890" className="footer-link">+91 1234567890</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made with ❤️ by Ved Prakash
        </div>
      </footer>
    )
}

export default Footer