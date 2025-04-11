import React from 'react';
import Card from 'react-bootstrap/Card';
import "./GraphicDesign.css";

const GraphicDesign = () => {
    return (
        <body>
            <header className="header">
                <center>
                    <img
                        src="./images/graphicdes.png"
                        alt="homepic"
                        className="graphicdesign1_img"
                    />
                    <p className="graphicdesign_img_p1">GRAPHIC DESIGN</p>
                    <p className="graphicdesign_img_p2">Find your graphic design solution quickly!</p>
                </center>
            </header>

            <section className="section_graphicdesign1_hdr">
                <p className="p_graphicdesign1">GRAPHIC DESIGN</p>
                <div className="container_graphicdesign1">
                    <p className="p_graphicdesign1_img">
                        In a dynamic era driven by creativity and visual appeal, staying ahead in the design industry requires a commitment to innovation.
                        <br />
                        <br />
                        From the very inception of PixelCraft, we made a pledge to ourselves - to ride the wave of contemporary design trends and technological advancements.
                        <br />
                        <br />
                        Today, we are thrilled to unveil our latest offering - a captivating, imaginative, and indispensable service: Graphic Design Excellence. Harnessing the power of cutting-edge design tools and staying abreast of the latest trends, we are dedicated to delivering visually stunning and impactful graphic designs.
                        <br />
                        <br />
                        To meet this commitment head-on, we've established a dedicated research and implementation division exclusively for our graphic design services. At PixelCraft, our goal extends beyond customer satisfaction; we aim to elevate it to an unprecedented level of modernism and originality.
                    </p>
                </div>
            </section>

            <section className="section_mobiledevdesign">
                <div className="row_mobiledev">
                    <div className="column_mobiledev">
                        <div className="card_mobiledev" id="col_mobiledev">
                            <center>
                                <Card.Img src="./images/graphicdesign2.png" className="mobiledev1_img" />
                            </center>
                            <Card.Body>
                                <Card.Title className="title_mobiledev">Pc Graphic Design</Card.Title>
                                <Card.Text className="text_mobiledev">
                                Graphic design on PCs involves leveraging powerful software and hardware to create intricate designs with high precision.
                                    <br />
                                    <br />
                                    <ul><li>- Adobe Photoshop and Illustrator: Industry standards for photo editing and vector-based designs.</li>
                                        <li>- CorelDRAW: Preferred for detailed vector illustrations and technical designs.</li>
                                        <li>- Affinity Designer: An affordable alternative for creating professional-grade graphics.</li>
                                        <li>- InDesign: Ideal for desktop publishing projects like books, brochures, and magazines.</li>
                                        <li>- Powerful Hardware: High-performance PCs with advanced GPUs support seamless rendering of complex designs.</li></ul>
                                        PC-based graphic design allows for extensive multitasking and high-resolution outputs, making it a staple for professional projects.
                                    <br />
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>

                    <div className="column_mobiledesign">
                        <div className="card_mobiledesign" id="col_mobiledesign">
                            <center>
                                <Card.Img src="./images/graphicmobile.png" className="mobiledesign1_img" />
                            </center>
                            <Card.Body>
                                <Card.Title className="title_mobiledesign">Mobile Graphic Design</Card.Title>
                                <Card.Text className="text_mobiledesign">
                                Graphic design on mobile devices emphasizes flexibility and portability, enabling quick edits and on-the-go creativity.
                                    <br />
                                    <br />
                                    <ul><li>- Canva: A mobile-friendly tool for creating designs effortlessly, even for beginners.</li>
                                        <li>- Procreate: Popular on iPads for its advanced illustration and painting capabilities.</li>
                                        <li>- Adobe Fresco: Focused on sketching and drawing, with cross-device compatibility.</li>
                                        <li>- Adobe Express: Simplifies creating social media graphics directly from your mobile device.</li>
                                        <li>- Over and PicsArt: Perfect for editing photos and adding text or effects quickly.</li></ul>
                                        Mobile graphic design tools provide creative solutions for tasks like social media content, digital art, and quick mockups, offering convenience without compromising quality.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </section>

          
        </body>
    );
}

export default GraphicDesign;