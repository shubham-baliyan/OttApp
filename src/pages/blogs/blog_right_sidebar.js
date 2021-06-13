import React from 'react';
import { Container, Row } from 'reactstrap';
// import CommonLayout from '../../components/shop/common-layout';
import BlogList from './common/blog-list';
import BlogSidebar from './common/blog-sidebar';
import MasterFooter from "../../components/footer/Masterfooter";
import Header from "../../components/header/Header";


// import { withApollo } from '../../helpers/apollo/apollo';

const blogRightSidebar = () => {
    return (
        <>
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <BlogList />
                        </div>
                        <BlogSidebar />
                    </Row>
                </Container>
            </section>
            <Header />
            <MasterFooter />
        </>
    )
}

export default (blogRightSidebar);