import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogList from './common/blog-list';
import MasterFooter from "../../components/footer/Masterfooter";
import Header from "../../components/header/Header";

const BlogDetail = () => {
    return (
        <>
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                        <Col>
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

export default (BlogDetail);