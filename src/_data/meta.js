export const url = process.env.URL || 'https://www.belskate.by';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'БелСкейтРесурс: скейтпарки, события, сервис в Беларуси';
export const siteDescription = 'БелСкейтРесурс — комплекс решений, направленных на эффективную реализацию проектов в сегменте «Скейтбординг» в Республике Беларусь';
export const siteType = 'Person'; // schema
export const locale = 'be_BY';
export const lang = 'ru';
export const skipContent = 'Skip to content';
export const author = {
  name: 'БелСкейтРесурс', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'belskateres@mail.ru', // i.e. hola@lenesaile.com - email of the author
  website: 'https://www.belskate.by' // i.e. https.://www.lenesaile.com - the personal site of the author
};
export const creator = {
  name: 'БелСкейтРесурс', // i.e. Lene Saile - creator's (developer) name.
  email: 'belskateres@mail.ru',
  website: 'https://www.belskate.by'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#0767f7'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "БелСкейтРесурс — комплекс решений, направленных на эффективную реализацию проектов в сегменте «Скейтбординг» в Республике Беларусь"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Скейтпарки и скейтбординг в Беларуси',
  description: 'БелСкейтРесурс — комплекс решений, направленных на эффективную реализацию проектов в сегменте «Скейтбординг» в Республике Беларусь',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/', '/about/', '/blog/', '/styleguide/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
