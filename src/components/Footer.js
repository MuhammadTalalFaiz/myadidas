export default function Footer(){
    return (
        
        <footer className="bg-dark text-light py-4 w-100">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Adidas</h5>
              <p>Saudi Arabia<br/>Riyadh Al Qudsiyyah</p>
              <p>Email: mfaiz.bscs21seecs@seecs.edu.pk<br/>Phone: +92 3167586086</p>
            </div>
           
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Men</a></li>
                <li><a href="#" className="text-light text-decoration-none">Women</a></li>
                <li><a href="#" className="text-light text-decoration-none">Kids</a></li>
              </ul>
            </div>
           
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Follow Us</h5>
              <div>
                <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i> Facebook</a>
                <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="#" className="text-light me-3"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 MyAdidas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
      
     
      
    )
}