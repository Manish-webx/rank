document.addEventListener("DOMContentLoaded", function () {
    const footerHtml = `
    
    
    <section class="section-small footer bg-dark">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">Rankmator</h4>
                    <p style="color: #ccc;">Your Growth Partner in the Digital World.</p>
                    <p style="color: #ccc; font-size: 14px;">We deliver data-driven digital marketing solutions that help businesses grow online.</p>
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
                    <h4 style="color: #d0cc37;">Our Services</h4>
                    <p style="margin: 5px 0;"><a href="seo.html" style="color: #ccc; text-decoration: none;">SEO Services</a></p>
                    <p style="margin: 5px 0;"><a href="local-seo-services.html" style="color: #ccc; text-decoration: none;">Local SEO Services</a></p>
                    <p style="margin: 5px 0;"><a href="performance-marketing.html" style="color: #ccc; text-decoration: none;">Performance Marketing</a></p>
                    <p style="margin: 5px 0;"><a href="content-marketing.html" style="color: #ccc; text-decoration: none;">Content Marketing</a></p>
                    <p style="margin: 5px 0;"><a href="social-media-marketing.html" style="color: #ccc; text-decoration: none;">Social Media Marketing</a></p>
                    <p style="margin: 5px 0;"><a href="email-marketing.html" style="color: #ccc; text-decoration: none;">Email Marketing</a></p>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <h4 style="color: #d0cc37;">More Services</h4>
                    <p style="margin: 5px 0;"><a href="ecommerce-marketing.html" style="color: #ccc; text-decoration: none;">Ecommerce Marketing</a></p>
                    <p style="margin: 5px 0;"><a href="branding-creative-design.html" style="color: #ccc; text-decoration: none;">Branding & Creative Design</a></p>
                    <p style="margin: 5px 0;"><a href="ai-marketing.html" style="color: #ccc; text-decoration: none;">AI Marketing</a></p>
                    <p style="margin: 5px 0;"><a href="website.html" style="color: #ccc; text-decoration: none;">Website Development</a></p>
                    <p style="margin: 5px 0;"><a href="healthcare-seo-agency.html" style="color: #ccc; text-decoration: none;">Healthcare SEO</a></p>
                    <p style="margin: 5px 0;"><a href="dental-seo-agency.html" style="color: #ccc; text-decoration: none;">Dental SEO</a></p>
                </div>
            </div>
            
            <!-- Social Media & Quick Links Row -->
            <div class="row" style="margin-top: 40px; border-top: 1px solid #444; padding-top: 30px;">
                <div class="col-md-6 text-center">
                    <h5 style="color: #d0cc37; margin-bottom: 15px;">Follow Us</h5>
                    <div style="display: inline-block;">
                        <a href="https://www.facebook.com/rankmator" target="_blank" style="color: #ccc; margin: 0 10px; text-decoration: none;">
                            <i class="fa fa-facebook fa-2x" style="transition: color 0.3s;"></i>
                        </a>
                        <a href="https://www.instagram.com/rankmator" target="_blank" style="color: #ccc; margin: 0 10px; text-decoration: none;">
                            <i class="fa fa-instagram fa-2x" style="transition: color 0.3s;"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/rankmator" target="_blank" style="color: #ccc; margin: 0 10px; text-decoration: none;">
                            <i class="fa fa-linkedin fa-2x" style="transition: color 0.3s;"></i>
                        </a>
                        <a href="https://twitter.com/rankmator" target="_blank" style="color: #ccc; margin: 0 10px; text-decoration: none;">
                            <i class="fa fa-twitter fa-2x" style="transition: color 0.3s;"></i>
                        </a>
                        <a href="https://www.youtube.com/@rankmator" target="_blank" style="color: #ccc; margin: 0 10px; text-decoration: none;">
                            <i class="fa fa-youtube fa-2x" style="transition: color 0.3s;"></i>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <h5 style="color: #d0cc37; margin-bottom: 15px;">Quick Links</h5>
                    <p style="display: inline-block; margin: 0 15px;">
                        <a href="index.html" style="color: #ccc; text-decoration: none;">Home</a>
                    </p>
                    <p style="display: inline-block; margin: 0 15px;">
                        <a href="about.html" style="color: #ccc; text-decoration: none;">About Us</a>
                    </p>
                    <p style="display: inline-block; margin: 0 15px;">
                        <a href="contact.html" style="color: #ccc; text-decoration: none;">Contact</a>
                    </p>
                </div>
            </div>
            
            <!-- Copyright Row -->
            <div class="row" style="margin-top: 30px;">
                <div class="col-md-12 text-center">
                    <p style="color: #ccc; border-top: 1px solid #444; padding-top: 20px; margin-bottom: 0;">
                        &copy; 2025 Rankmator. All Rights Reserved. 
                    </p>
                </div>
            </div>
        </div>
    </section>


    
    <a href="https://api.whatsapp.com/send?phone=919560864432&text=Hi%20Rankmator!%20I%20need%20help%20with%20digital%20marketing." 
       target="_blank">
        <img src="img/whatsup.png" 
             style="position: fixed; bottom:10px; right:10px; z-index: 999; width: 50px; height: 50px;" 
             alt="WhatsApp" />
    </a>
    `;

    const container = document.getElementById('footer-include');
    if (container) {
        container.innerHTML = footerHtml;
    }
});
