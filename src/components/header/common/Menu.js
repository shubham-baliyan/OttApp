export const MENUITEMS = [
  {
    title: "TV",
    type: "sub",
    children: [
      {
        title: "OTT Special",
        type: "sub",
        tag: "new",
        children: [
          { path: "/layouts/Tools", title: "Tools", type: "link" },
          { path: "/layouts/Christmas", title: "Christmas", type: "link" },
          { path: "/layouts/Marketplace", title: "Marketplace", type: "link" },
          { path: "/layouts/Game", title: "Game", type: "link" },
          { path: "/layouts/Gym", title: "Gym", type: "link" },
          { path: "/layouts/Marijuana", title: "Marijuana", type: "link" },
          { path: "/layouts/Leftsidebar", title: "Left-Sidebar", type: "link" },
          { path: "/layouts/Jewellery", title: "Jewellery", type: "link" },
          { path: "/layouts/Pets", title: "Pets", type: "link" },
          { path: "/layouts/Metros", title: "Metros", type: "link" },
          { path: "/layouts/Vedioslider", title: "Video-Slider", type: "link" },
          { path: "/layouts/Nursery", title: "Nursery", type: "link" },
        ],
      },
      {
        title: "Sony",
        type: "sub",
        children: [
          { path: "/", title: "Fashion1", type: "link" },
          { path: "/layouts/Fashion2", title: "Fashion2", type: "link" },
          { path: "/layouts/Fashion3", title: "Fashion3", type: "link" },
          { path: "/layouts/Kids", title: "Kids", type: "link" },
        ],
      },
      {
        title: "SabTV",
        type: "sub",
        children: [
          { path: "/layouts/Basics/Lookbook", title: "Lookbook", type: "link" },
          { path: "/layouts/Basics/Video", title: "Video", type: "link" },
          { path: "/layouts/Basics/Parallax", title: "Parallax", type: "link" },
          {
            path: "/layouts/Basics/Fullpage",
            title: "Full Page",
            type: "link",
          },
        ],
      },
      { path: "/layouts/Beauty", title: "Beauty", type: "link" },
      {
        title: "ZeeTV",
        type: "sub",
        children: [
          {
            path: "/layouts/Electronic/Electronic-1",
            title: "Electronic-1",
            type: "link",
          },
          {
            path: "/layouts/Electronic/Electronic-2",
            title: "Electronic-2",
            type: "link",
          },
        ],
      },
      { path: "/layouts/Furniture", title: "Furniture", type: "link" },
      { path: "/layouts/Vegetables", title: "Vegetables", type: "link" },
      { path: "/layouts/Watch", title: "Watch", type: "link" },
      { path: "/layouts/Lights", title: "Lights", type: "link" },
      { path: "/layouts/Goggles", title: "Goggles", type: "link" },
      { path: "/layouts/Shoes", title: "Shoes", type: "link" },
      { path: "/layouts/Bags", title: "Bags", type: "link" },
      { path: "/layouts/Flowers", title: "Flowers", type: "link" },
    ],
  },

  {
    title: "Movies",
    type: "sub",
    children: [
      {
        title: "Hindi",
        type: "sub",
        children: [
          { path: "/product-details/1", title: "Left Sidebar", type: "link" },
          {
            path: "/product-details/right_sidebar",
            title: "Right Sidebar",
            type: "link",
          },
          {
            path: "/product-details/no-sidebar",
            title: "No Sidebar",
            type: "link",
          },
        ],
      },
      {
        title: "English",
        type: "sub",
        children: [
          {
            path: "/product-details/thumbnail_left",
            title: "Left Image",
            type: "link",
          },
          {
            path: "/product-details/thumbnail_right",
            title: "Right Image",
            type: "link",
          },
          {
            path: "/product-details/thumbnail_outside",
            title: "Image Outside",
            type: "link",
          },
        ],
      },
      {
        title: "Tamil",
        type: "sub",
        children: [
          {
            path: "/product-details/3_col_left",
            title: "Thumbnail Left",
            type: "link",
          },
          {
            path: "/product-details/3_col_right",
            title: "Thumbnail Right",
            type: "link",
          },
          {
            path: "/product-details/3_col_bottom",
            title: "Thumbnail Bottom",
            type: "link",
          },
        ],
      },
      {
        path: "/product-details/4_image",
        title: "4 Image",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/bundle_product",
        title: "Bundle Product",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/sticky",
        title: "Sticky",
        type: "link",
      },
      {
        path: "/product-details/accordian",
        title: "Accordian",
        type: "link",
      },
      {
        path: "/product-details/image_swatch",
        title: "Image Swatch",
        type: "link",
        tag: "New",
      },
      {
        path: "/product-details/vertical_tab",
        title: "Vertical Tab",
        type: "link",
      },
    ],
  },
  {
    title: "Sports",
    megaMenu: true,
    megaMenuType: "small",
    type: "sub",
    children: [
      {
        title: "Cricket",
        type: "sub",
        children: [
          {
            path: "/blog_left_sidebar",
            title: "Portfolio Grid 2",
            type: "link",
            icon: "alert",
          },
          {
            path: "/portfolio/grid-3",
            title: "Portfolio Grid 3",
            type: "link",
            icon: "layout-accordion-merged",
          },
          {
            path: "/portfolio/grid-4",
            title: "Portfolio Grid 4",
            type: "link",
            icon: "layers",
          },
          {
            path: "/portfolio/masonry-grid-2",
            title: "masonry Grid 2",
            type: "link",
            icon: "write",
          },
          {
            path: "/portfolio/masonry-grid-3",
            title: "masonry Grid 3",
            type: "link",
            icon: "map-alt",
          },
          {
            path: "/portfolio/masonry-grid-4",
            title: "masonry Grid 4",
            type: "link",
            icon: "map-alt",
          },
          {
            path: "/portfolio/masonry-full-width",
            title: "masonry Full Width",
            type: "link",
            icon: "map-alt",
          },
        ],
      },
      {
        title: "Football",
        type: "sub",
        children: [
          {
            path: "/layouts/Nursery",
            title: "Cart Modal Popup",
            type: "link",
            icon: "list",
          },
          {
            path: "/layouts/Vegetables",
            title: "Qty Counter",
            type: "link",
            icon: "gallery",
          },
          {
            path: "/layouts/Bags",
            title: "Cart Top",
            type: "link",
            icon: "money",
          },
          {
            path: "/layouts/Shoes",
            title: "Cart Bottom",
            type: "link",
            icon: "time",
          },
          {
            path: "/layouts/Watch",
            title: "Cart Left",
            type: "link",
            icon: "alarm-clock",
          },
          {
            path: "/layouts/Tools",
            title: "Cart Right",
            type: "link",
            icon: "alarm-clock",
          },
        ],
      },
      {
        title: "eSport",
        type: "sub",
        children: [
          {
            path: "/portfolio/title",
            title: "Title",
            type: "link",
            icon: "bar-chart",
          },
          {
            path: "/portfolio/collection-banner",
            title: "Collection Banner",
            type: "link",
            icon: "thought",
          },
          {
            path: "/portfolio/home-slider",
            title: "Home Slider",
            type: "link",
            icon: "video-camera",
          },
          {
            path: "/portfolio/category",
            title: "Category",
            type: "link",
            icon: "headphone",
          },
          {
            path: "/portfolio/service",
            title: "Service",
            type: "link",
            icon: "headphone",
          },
        ],
      },
      {
        title: "Kabaddi",
        type: "sub",
        children: [
          {
            path: "/portfolio/product-box",
            title: "Product Box",
            type: "link",
            icon: "bar-chart",
          },
          {
            path: "/portfolio/product-slider",
            title: "Product Slider",
            type: "link",
            icon: "thought",
          },
          {
            path: "/portfolio/no-slider",
            title: "No Slider",
            type: "link",
            icon: "video-camera",
          },
          {
            path: "/portfolio/multi-slider",
            title: "Multi Slider",
            type: "link",
            icon: "headphone",
          },
          {
            path: "/portfolio/tab",
            title: "Tab",
            type: "link",
            icon: "headphone",
          },
        ],
      },
      {
        title: "Badminton",
        type: "sub",
        children: [
          {
            path: "/portfolio/order-success",
            title: "Order Success",
            type: "link",
            icon: "bar-chart",
          },
          {
            path: "/portfolio/order-success-2",
            title: "Order Success 2",
            type: "link",
            icon: "thought",
          },
          {
            path: "/portfolio/email-template",
            title: "Email Template",
            type: "link",
            icon: "headphone",
          },
          {
            path: "/portfolio/email-template-2",
            title: "Email Template 2",
            type: "link",
            icon: "headphone",
          },
        ],
      },
    ],
  },
  {
    title: "News",
    type: "sub",
    children: [
      {
        title: "Headlines",
        type: "sub",
        tag: "new",
        children: [
          {
            path: "/page/vendor/vendor-dashboard",
            title: "Vendor Dashboard",
            type: "link",
          },
          {
            path: "/page/vendor/vendor-profile",
            title: "Vendor Profile",
            type: "link",
          },
          {
            path: "/page/vendor/become-vendor",
            title: "Become Vendor",
            type: "link",
          },
        ],
      },
      {
        title: "LIVE",
        type: "sub",
        children: [
          { path: "/page/account/wishlist", title: "Wishlist", type: "link" },
          { path: "/page/account/cart", title: "cart", type: "link" },
          { path: "/page/account/dashboard", title: "dashboard", type: "link" },
          { path: "/page/account/login", title: "login", type: "link" },
          {
            path: "/page/account/login-auth",
            title: "login-auth",
            type: "link",
          },
          { path: "/page/account/register", title: "register", type: "link" },
          { path: "/page/account/contact", title: "contact", type: "link" },
          {
            path: "/page/account/forget-pwd",
            title: "forgot-password",
            type: "link",
          },
          { path: "/page/account/profile", title: "profile", type: "link" },
          { path: "/page/account/checkout", title: "checkout", type: "link" },
        ],
      },
      { path: "/page/about-us", title: "about-us", type: "link" },
      { path: "/page/search", title: "search", type: "link" },
      {
        path: "/page/typography",
        title: "typography",
        type: "link",
        tag: "new",
      },
      { path: "/page/review", title: "review", type: "link" },
      { path: "/page/order-success", title: "order-success", type: "link" },
      {
        title: "Covid-19",
        type: "sub",
        children: [
          { path: "/page/compare", title: "compare", type: "link" },
          {
            path: "/page/compare-2",
            title: "compare-2",
            type: "link",
            tag: "new",
          },
        ],
      },
      { path: "/page/collection", title: "collection", type: "link" },
      { path: "/page/lookbook", title: "lookbook", type: "link" },
      { path: "/page/site-map", title: "site-map", type: "link" },
      { path: "/page/404", title: "404", type: "link" },
      { path: "/page/coming-soon", title: "coming-soon", type: "link" },
      { path: "/page/faq", title: "faq", type: "link" },
    ],
  },

  {
    title: "BLOGS",

    type: "sub",
    children: [
      {
        title: "Blog Details",
        type: "link",
        path: "/Blog"
      },

      {
        title: "Blog Left Sidebar",
        type: "link",
        path: "/blogLeftSidebar"

      },
      {
        title: "Blog Right Sidebar",
        type: "link",
        path: "/blogRightSidebar"
      },



      {
        title: "No Sidebar",
        type: "link",
        path: "/BlogDetail"

      },

    ],
  },



  /***********************************************/

  {
    title: "Premium",
    type: "sub",
    children: [
      { path: "/", title: "Fashion1", type: "link" },
      { path: "/layouts/Fashion2", title: "Fashion2", type: "link" },
      { path: "/layouts/Fashion3", title: "Fashion3", type: "link" },
      { path: "/layouts/Kids", title: "Kids", type: "link" },
    ],
  },
];
