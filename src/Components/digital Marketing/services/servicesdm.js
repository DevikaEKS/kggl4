import React from "react";
import './services.css'
import img1 from '../Assesst/Component 1.webp' 
import img2 from '../Assesst/Component 2.webp' 
import img3 from '../Assesst/Component 3.webp' 
import img4 from '../Assesst/Component 4.webp' 
import img5 from '../Assesst/Component 5.webp' 
import img6 from '../Assesst/Component 6.webp' 
import img7 from '../Assesst/Component 7.webp' 
import img8 from '../Assesst/Component 8.webp' 
import img9 from '../Assesst/Rectangle 63.webp' 
import img10 from '../Assesst/Rectangle 64.webp'
import img11 from '../Assesst/laptopimg.webp'; 
import Gallery from './gallery.js';


export function Servicesdm(){
    return(
        <>
            <div className="container-fluid ">
                <h3 className="text-center pt-5 mt-5"><b>Our Expertise <span className="servicestextcolor"></span></b></h3>
                <p className="text-center container pb-5 mt-2">At our KGGL, we adhere to a methodical approach to ensure that every online marketing endeavour yields profitable outcomes. Harness the power of KGGL's internet marketing services today and allow us to enhance both your customer acquisition and retention rates.</p>
            </div>
           
            <div class="image-container pb-5">
                <div class="image-wrapper">
                    <img src={img1} title="Technical SEO Services" alt="Improve your site’s SEO with fixes for crawl errors, HTTPS verification, site speed optimization, and duplicate content removal"/>
                    <div class="overlay pt-4">   
                        <p> <span><b>Technical SEO</b></span><br/> Enhance your online presence with expert SEO services. We fix crawl errors, verify HTTPS, optimize site speed, and eliminate duplicate content to improve crawlability and indexability. Boost your search rankings and increase conversions with our expert team.

                        </p>
                    </div> 
                </div>
                <div class="image-wrapper">
                    <img src={img2} title="Link Building Strategies" alt="Drive traffic and build trust with link building through paid ads, guest blogging, original content, and strategic collaborations"/>
                    <div class="overlay">
                        <p><b>Link Building</b><br/>Attract consistent traffic from reputable websites and build consumer trust. Our marketing team uses paid ads, sponsorships and strategic collaborations to position your content before influential audiences. We engage in targeted guest blogging, create original content, distribute data-driven infographics and boost your social media presence.</p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img3}  title="Social Media Marketing" alt="Expand your reach with targeted social media campaigns designed to boost engagement and foster growth"/>
                    <div class="overlay pt-5">
                        <p><b>Social Media Marketing</b><br/>Ready to broaden your reach and engage your audience on social media? We craft targeted campaigns to foster growth and enhance engagement.</p>
                    </div>
                </div>
                <div class="image-wrapper">
                    <img src={img4} title="Web Design & Development" alt="KGGL designs custom, mobile-friendly, SEO-optimized websites to enhance visitor engagement and support digital marketing goals."/>
                    <div class="overlay pt-5 py-2">
                        <p><b>Web Design & Development</b><br/>At KGGL, we create custom, mobile-friendly, SEO-optimized websites to meet your business goals and support digital marketing. Our strategic visual hierarchy highlights key elements to boost visitor engagement.</p>
                    </div>      
                </div>
                <div class="image-wrapper">
                    <img src={img5} alt="Capitalize on 23% annual eCommerce growth by showcasing your products and providing 24/7 convenience to customers" title="E-Commerce Marketing"/>
                    <div class="overlay pt-5 py-4">
                        <p><b>E-Commerce Marketing</b><br/>With eCommerce revenue growing 23% year-over-year, now is the perfect time to tap into its potential. Showcase your products and offer unmatched convenience to customers around the clock.</p>
                    </div>               
                </div>
                <div class="image-wrapper">
                    <img src={img6} title="Conversion Rate Optimization (CRO)" alt=" KGGL enhances SEO and engagement with content that aligns with trends and Google standards, boosting conversion rates."/>
                    <div class="overlay pt-5 py-1">
                        <p><b>Conversion Rate Optimization <br/> (CRO)</b><br/>Your website's content is crucial for SEO and visitor engagement. At KGGL, we create informative, trend-aligned content that meets Google's standards and resonates with your target audience</p>
                    </div>   
                </div>
                <div class="image-wrapper">
                    <img src={img7} title="Expert Content Writing" alt="KGGL delivers SEO-optimized content that engages visitors and follows industry trends to resonate with your target audience"/>
                    <div class="overlay pt-4">
                        <p><b>Content Writing</b><br/>
                        Your website's content is key to enhancing SEO and engaging visitors. At KGGL, we craft informative content that meets Google's standards and incorporates industry trends. Our team stays updated on market shifts and user preferences to ensure your content resonates with your target audience..</p>
                    </div>         
                </div>
                <div class="image-wrapper">
                    <img src={img8} title="Effective Email Marketing" alt="KGGL enhances email marketing with personalized newsletters that bypass spam filters and drive customer engagement."/>
                    <div class="overlay pt-3">
                        <p><b>Email Marketing</b><br/>KGGL improves your email marketing with personalized newsletters designed to bypass spam filters and drive engagement, ensuring effective customer action.</p>
                    </div>    
                </div> 
                <div class="image-wrapper">
                <source srcset={img11} media="(max-width: 576px)" title="Expert ORM Services"  alt="KG Genius Labs uses cutting-edge ORM tools, SMS engagement, and QR codes to enhance your online presence and attract more customers."/>
                    <img src={img9} alt=" KG Genius Labs uses cutting-edge ORM tools, SMS engagement, and QR codes to enhance your online presence and attract more customers" title="Expert ORM Services" className="imgsystem"/>
                    <div class="overlay pt-4">
                        <p><b>Online Reputation Management (ORM)</b><br/>Enhance your business success with KGGL's robust review generation and monitoring services. We employ cutting-edge Online Reputation Management (ORM) tools to actively manage and enhance your online presence. Our strategies include targeted two-way SMS communication for direct customer engagement and QR codes for seamless feedback collection. Trust us to optimize your online reputation effectively, ensuring your business maintains a positive image and attracts more customers.</p>
                    </div>    
                </div>
                <div class="image-wrapper">
                    <img src={img10} alt="Maximize reach and ROI with our expert PPC management. We optimize ads, bids, and targeting for effective campaigns" title="Expert PPC Management for Optimal Results"/>
                    <div class="overlay ">
                        <p><b>Pay Per Click (PPC) Management</b><br/>Swiftly reach customers with our data-driven PPC campaign. Our certified PPC Specialists manage campaigns expertly. We tailor ad copies, fine-tune bidding, optimize device targeting and monitor ROI. We also leverage seasonal trends to boost promotions.</p>
                    </div>    
                </div>
            </div>
          
        </>
    );
}