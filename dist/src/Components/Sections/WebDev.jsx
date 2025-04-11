import React from 'react';
import Card from 'react-bootstrap/Card';
import "./WebDev.css";

const WebDev = () => {
    return (
        
          <body>
            <header className="header">
                <center>
                    <img src="./images/webdev.png" alt="homepic" className="webdev_img"
                    />
                    <p className="webdev_img_p1">WEB DESIGN & DEVELOPMENT</p>
                    <p className="webdev_img_p2">See your website in all shapes & sizes!</p>
                </center>
            </header>

            <section className="section_webdev_hdr">
                <p className="p_webdev">WEB DESIGN & DEVELOPMENT</p>
                <div className="container_webdev">
                    <p className="p_webdev_img">
                        As a complete Web Solutions Company Codesign offers customer-oriented web design services and more importantly, deliver them effectively. Whether you are a small business or a large corporation, we can cater to all your needs, giving you an online presence that delivers the very best for you and your clients in Lebanon, or the Middle East region. A successful web design demands a clear concept as well as an ability to visualize the overall solution within the scope of business or industry at hand. Whether your goal is to provide information, products, e-commerce or online services, we can ensure that the visitors to your site enjoy an informative, user-friendly, aesthetic and interactive experience.
                        <br />
                        <br />
                        If you go through our portfolio, you will realize that our web designs are all unique and combined with passionate animations reflecting the corporate identity of our clients following the latest trends and technologies such as responsive design and development, parallax and more! Our team of dedicated artists – all young and drawing on the latest trends in web design - would spend days creating supernatural concepts translating imagination into images to present an accurate web design.
                        <br />
                        <br />
                        Therefore, within our strategy, we provide our clients with multiple website designs in order to give them a wide range of choices with the flexibility to perform changes prior to presenting the final layout.
                        <br />
                        <br />
                        Our skills for presenting your content will give your platform advantages on your competitors in Lebanon and the Middle East region.
                        </p>
                </div>
            </section>

            <section className="section_webdevdesign">
            <div className="row_webdev">
            <div className="column_webdev">
            <div className="card_webdev" id="col_webdev">
            <center>
              <Card.Img src="./images/webdev1.png" className="webdev1_img" />
              </center>
              <Card.Body>
                <Card.Title className="title_webdev">Web Development</Card.Title>
                <Card.Text className="text_webdev">
                  Web development is the process of creating and maintaining websites or web applications using various programming languages.
                  <br />
                  <br />
                  <ul><li>- HTML is fundamental for structuring content, while CSS styles and designs the layout.</li>
                  <li>- JavaScript adds dynamic and interactive elements on the client side.</li>
                  <li>- PHP facilitates server-side scripting, enabling dynamic content generation.</li>
                  <li>- Java, a versatile programming language, can be used for server-side development in frameworks like Spring.</li>
                  <li>- C++ is occasionally employed for backend development, handling complex tasks efficiently.</li></ul>
                  Additionally, JavaScript frameworks like React and Angular enhance frontend development, providing modular and scalable solutions. PHP integrates with databases like MySQL to manage dynamic data, while Java and C++ contribute to backend logic, ensuring robust server functionality. 
                  <br />
                  <br />
                  The synergy of HTML, PHP, JS, Java, and C++ empowers developers to create diverse and powerful web applications.
                  <br />
                  <br />
                  Together, these languages form a comprehensive toolkit for building feature-rich and responsive web experiences.
                </Card.Text>
              </Card.Body>
              </div>
              </div>

              <div className="column_webdesign">
            <div className="card_webdesign" id="col_webdesign">
            <center>
              <Card.Img src="./images/webdesign.png" className="webdesign1_img" />
              </center>
              <Card.Body>
                <Card.Title className="title_webdesign">Web Design</Card.Title>
                <Card.Text className="text_webdesign">
                  Web design is the art of crafting visually engaging and user-friendly interfaces for websites or web applications, utilizing a variety of tools:
                  <br />
                  <br />
                  <ul><li>- Prototyping and Wireframing: Adobe XD and Sketch are essential for creating structural blueprints and prototypes.</li>
                  <li>- Graphics and Images: Adobe Photoshop and Illustrator play a crucial role in designing captivating visuals and maintaining brand consistency.</li>
                  <li>- Styling: Cascading Style Sheets (CSS) is used to define and refine the styles of web elements.</li>
                  <li>- Responsive Design: Frameworks like Bootstrap facilitate the implementation of responsive design, ensuring optimal user experiences across devices.</li>
                  <li>- UI/UX Design Principles: The application of user interface (UI) and user experience (UX) design principles guides the creation of seamless and intuitive interactions.</li></ul>
                  This synthesis of tools empowers web designers to merge creativity with technical proficiency, enhancing aesthetics, functionality, and user engagement in the digital realm.
                </Card.Text>
              </Card.Body>
              </div>
              </div>
              </div>
            </section>

        </body>
    );
}

export default WebDev;