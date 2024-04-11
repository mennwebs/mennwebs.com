export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Menn',
  subtitle: 'Stories and thoughts.',
  description: 'Menn - Chakkrisn Talawat, Web designer and developer from Pai, Thailand.',
  image: {
    src: '/img/menn.jpg',
    alt: 'Menn Webs - Chakkrisn Talawat, Web designer and developer from Pai, Thailand.'
  },
  headerNavLinks: [
    {
      text: 'Stories',
      href: '/stories'
    },
    {
      text: 'Tags',
      href: '/tags'
    },
    {
      text: 'About',
      href: '/about'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Terms',
      href: '/terms'
    }
  ],
  socialLinks: [
    {
      text: 'facebook',
      href: 'https://www.facebook.com/MennWebs/'
    },
    {
      text: 'x',
      href: 'https://twitter.com/mennwebs'
    },
    {
      text: 'youtube',
      href: 'https://www.youtube.com/@mennwebs'
    },
    {
      text: 'instagram',
      href: 'https://instagram.com/mennwebs'
    }
  ],
  hero: {
    title: 'Web designer and developer',
    text: 'living in the mountains of Pai, Thailand.',
    image: {
      src: '/hero.jpeg',
      alt: 'A person sitting at a desk in front of a computer'
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  subscribe: {
    title: 'Subscribe to Newsletter',
    text: 'Latest posts directly in your inbox.',
    formUrl: '#'
  },
  postsPerPage: 8
};

export default siteConfig;
