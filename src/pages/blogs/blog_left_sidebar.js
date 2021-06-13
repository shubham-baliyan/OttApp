import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogList from '../blogs/common/blog-list';
import BlogSidebar from '../blogs/common/blog-sidebar';
import MasterFooter from "../../components/footer/Masterfooter";
import Header from "../../components/header/Header";

const blogLeftSidebar = () => {
    return (
        <>
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                        <BlogSidebar />
                        <Col xl="9" md="7" lg="8" className="order-sec">
                            <BlogList />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Header />
            <MasterFooter />
        </>
    )
}

export default (blogLeftSidebar);