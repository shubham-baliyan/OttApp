import React from "react";
import { Col, Media, Row } from "reactstrap";
// import gql from "graphql-tag";
// import { useQuery } from "@apollo/react-hooks";
import img from '../../../assets/images/blog/1.jpg'
// const GET_PRODUCTS = gql`
//   query blog($type: String!) {
//     blog(type: $type) {
//       img
//       link
//       title
//       desc
//       date
//       longDesc
//       shortDesc
//     }
//   }
// `;


const BlogList = () => {
  // var { data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: "fashion",
  //   },
  // });
  const data = [
    {
      "img": "/assets/images/blog/1.jpg",
      "link": "/blog/details",
      "title": "25 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
      "img": "/assets/images/blog/2.jpg",
      "link": "/blog/details",
      "title": "26 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
      "img": "/assets/images/blog/3.jpg",
      "link": "/blog/details",
      "title": "29 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
      "img": "/assets/images/blog/4.jpg",
      "link": "/blog/details",
      "title": "29 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
      "img": "/assets/images/blog/5.jpg",
      "link": "/blog/details",
      "title": "29 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    },
    {
      "img": "/assets/images/blog/6.jpg",
      "link": "/blog/details",
      "title": "29 January 2018",
      "desc": "Lorem ipsum dolor sit consectetur adipiscing elit",
      "date": "by: John Dio , 2 Comment",
      "longDesc": "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "shortDesc": "you how all this mistaken idea of denouncing pleasure and praising pain was born"
    }
  ]

  return (
    <>
      {/* // <!--Blog List start--> */}

      {data &&
        data.map((item, i) => (
          <Row className="blog-media" key={i}>
            <Col xl="6">
              <div className="blog-left">
                <a href="#">
                  <Media
                    src={img}
                    className="img-fluid blur-up lazyload bg-img"
                    alt=""
                  />
                </a>
              </div>
            </Col>
            <Col xl="6">
              <div className="blog-right">
                <div>
                  <h6>{item.title}</h6>
                  <a href="#">
                    <h4>{item.shortDesc}</h4>
                  </a>
                  <ul className="post-social">
                    <li>Posted By : Admin Admin</li>
                    <li>
                      <i className="fa fa-heart"></i> 5 Hits
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 10 Comment
                    </li>
                  </ul>
                  <p>{item.longDesc}</p>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      {/* <!--Blog List start--> */}
    </>
  );
};

export default BlogList;
