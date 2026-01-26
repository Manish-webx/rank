document.addEventListener("DOMContentLoaded", function () {
    const footerHtml = `
    <!-- Footer Section -->
    <section class="section-small footer bg-dark">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">Rankmator</h4>
                    <p style="color: #ccc;">Your Growth Partner in the Digital World.</p>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">Contact Us</h4>
                    <p style="color: #ccc; margin: 5px 0;">
                        <i class="fa fa-envelope" style="color: #d0cc37;"></i> 
                        <a href="mailto:contact@rankmator.com" style="color: #ccc; text-decoration: none;">contact@rankmator.com</a>
                    </p>
                    <p style="color: #ccc; margin: 5px 0;">
                        <i class="fa fa-envelope" style="color: #d0cc37;"></i> 
                        <a href="mailto:rankmator@gmail.com" style="color: #ccc; text-decoration: none;">rankmator@gmail.com</a>
                    </p>
                    <p style="color: #ccc; margin: 5px 0;">
                        <i class="fa fa-phone" style="color: #d0cc37;"></i> 
                        <a href="tel:+919560864432" style="color: #ccc; text-decoration: none;">+91 9560864432</a>
                    </p>
                    <p style="color: #ccc; margin: 5px 0;">
                        <i class="fa fa-whatsapp" style="color: #25D366;"></i> 
                        <a href="https://api.whatsapp.com/send?phone=919560864432&text=Hi%20Rankmator!" 
                           target="_blank" style="color: #ccc; text-decoration: none;">+91 9560864432</a>
                    </p>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">Follow Us</h4>
                    <ul class="list-inline footersocial">
                        <li><a href="#" target="_blank"><i class="fa fa-facebook-square fa-fw fa-lg"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa fa-instagram fa-fw fa-lg"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa fa-linkedin-square fa-fw fa-lg"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">Quick Links</h4>
                    <p style="margin: 5px 0;"><a href="about.html" style="color: #ccc; text-decoration: none;">About Us</a></p>
                    <p style="margin: 5px 0;"><a href="contact.html" style="color: #ccc; text-decoration: none;">Contact</a></p>
                    <p style="margin: 5px 0;"><a href="seo.html" style="color: #ccc; text-decoration: none;">Services</a></p>
                </div>
            </div>
            <div class="row" style="margin-top: 30px;">
                <div class="col-md-12 text-center">
                    <p style="color: #ccc; border-top: 1px solid #444; padding-top: 20px;">
                        &copy; 2025 Rankmator. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- WhatsApp Floating Widget -->
    <a href="https://api.whatsapp.com/send?phone=919560864432&text=Hi%20Rankmator!%20I%20need%20help%20with%20digital%20marketing." 
       target="_blank">
        <img src="img/whatsup.png" 
             style="position: fixed; bottom:10px; right:10px; z-index: 999; width: 60px; height: 60px;" 
             alt="WhatsApp" />
    </a>
    `;

    const container = document.getElementById('footer-include');
    if (container) {
        container.innerHTML = footerHtml;
    }
});
