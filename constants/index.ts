// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/why-us', key: 'why_us', label: 'Why Us' },
    { href: '/clients', key: 'our_clients', label: 'Our Process' },
    { href: '/portofolio', key: 'our_porto', label: 'Our Work' },
    { href: '/faqs', key: 'faqs', label: 'FAQs' },
  ];

  //OUR PORTOFOLIO
  interface PortfolioCategory {
    id: number;
    name: string;
    href: string;
  }
  
  interface PortfolioItem {
    thumbnail: string;
    category: number[];
    title: string;
    description: string;
  }
  
  interface PortfolioItemWithCategories extends PortfolioItem {
    categories: PortfolioCategory[];
  }
  export const OUR_PORTOFOLIO = [
    {
      id: 1,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter',
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 2,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 3,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 4,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 5,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 7,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 8,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 9,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 10,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 11,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 3, name: 'App Development', href: '#appdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
    {
      id: 12,
      thumbnail: '/thumbnail_1.png', 
      category: [
        {
          id: 2, name: 'Web Development', href: '#webdev'
        }, 
        {
          id: 4, name: 'UI Design', href: '#ui'
        }
      ], 
      title: 'Levare Decanter', 
      description: 'Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers.',
      jobDesc: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      problemStatement: 'The wine industry lacks an accessible platform that enables wine drinkers, regardless of expertise, to fully appreciate and enjoy the authentic taste, aroma, and bouquet of their wines as intended. Currently, wine enthusiasts face challenges such as long waiting periods and resorting to artificial methods to aerate their wines, compromising the true tasting experience. There is a need for a solution that eliminates these barriers and provides a convenient way for wine lovers to enhance their enjoyment of wines without compromising quality.',
      fullDescription: 'Levare Decanter is a revolutionary wine accessory designed to enhance your wine tasting experience by providing optimal aeration for your favorite wines. Crafted with precision and innovation, the Levare Decanter is the result of unwavering commitment to bringing out the true flavors, aromas, and bouquets of wines.'
    },
  ]

  export const OUR_PORTOFOLIO_CATEGORY = [
    {id: 1, name: 'All', href: '#all'},
    {id: 2, name: 'Web Development', href: '#webdev'},
    {id: 3, name: 'App Development', href: '#appdev'},
    {id: 4, name: 'UI Design', href: '#ui'},
  ];

  export const TECH_STACK = [
    {id: 1, logo:'/tech_stack/html.png', label: 'HTML', width: 100},
    {id: 1, logo:'/tech_stack/js.png', label: 'JavaScript', width: 300},
    {id: 1, logo:'/tech_stack/wordpress.png', label: 'Wordpress', width: 100},
    {id: 1, logo:'/tech_stack/woo_commerce.png', label: 'WooCommerce', width: 100},
  ]
  
  export const OUR_CLIENTS = [
    {id: 1, href: '', logo: '/clients/levare.png', label: '', width: 128},
    {id: 2,href: '', logo: '/clients/shilindo.png', label: '', width: 90},
    {id: 3,href: '', logo: '/clients/pelita_mitra_solusindo.png', label: '', width: 36},
    {id: 4,href: '', logo: '/clients/elmoska.png', label: '', width: 64},
    {id: 5,href: '', logo: '/clients/hayumi.png', label: '', width: 106},
    {id: 6,href: '', logo: '/clients/sinar_abadi.png', label: '', width: 164},
    {id: 7,href: '', logo: '/clients/asia_sinar_inti_abadi.png', label: '', width: 32},
    {id: 8,href: '', logo: '/clients/pelita_jaya.png', label: '', width: 150},
    {id: 9,href: '', logo: '/clients/aires_advanture.png', label: '', width: 40},
    {id: 10,href: '', logo: '/clients/apix.png', label: '', width: 66},
    {id: 11,href: '', logo: '/clients/airple_cleaning_2.png', label: '', width: 98},
    {id: 12,href: '', logo: '/clients/united_rope.png', label: '', width: 36},
    {id: 13,href: '', logo: '/clients/dymos.png', label: '', width: 98},
  ]
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    { href: 'https://www.linkedin.com/company/hygeworks/', key: 'linkedin', label: 'LinkedIn' },
    { href: 'https://www.linkedin.com/company/hygeworks/', key: 'instagram', label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/hygeworks/', key: 'behance', label: 'Behance' },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Email Us:', value: 'michael@hygeworks.com', exactLink: 'mailto:michael@hygeworks.com' },
      { label: 'Contact Us:', value: '+65 8533 3575', exactLink: 'https://wa.me/+6585333575'},
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };