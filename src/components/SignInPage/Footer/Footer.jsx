import "./Footer.css";
const links = [
  { key: 1, element: "About", link: "https://about.twitter.com/en" },
  { key: 2, element: "Help Center", link: "https://help.twitter.com/en" },
  { key: 3, element: "Terms of Service", link: "https://twitter.com/en/tos" },
  { key: 4, element: "Privacy Policy", link: "https://twitter.com/en/privacy" },
  {
    key: 5,
    element: "Cookie Policy",
    link: "https://help.twitter.com/en/rules-and-policies/twitter-cookies"
  },
  {
    key: 6,
    element: "Accessibility",
    link: "https://help.twitter.com/en/resources/accessibility"
  },
  {
    key: 7,
    element: "Ads info",
    link:
      "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
  },
  { key: 8, element: "Blog", link: "https://blog.twitter.com/" },
  { key: 9, element: "Status", link: "https://status.twitterstat.us/" },
  { key: 10, element: "Careers", link: "https://careers.twitter.com/" },
  {
    key: 11,
    element: "Brand Resources",
    link: "https://about.twitter.com/en/who-we-are/brand-toolkit"
  },
  {
    key: 12,
    element: "Advertising",
    link: "https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise"
  },
  { key: 13, element: "Marketing", link: "https://marketing.twitter.com/en" },
  {
    key: 14,
    element: "Twitter for Business",
    link:
      "https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
  },
  { key: 15, element: "Developers", link: "https://developer.twitter.com/en" },
  {
    key: 16,
    element: "Directory",
    link: "https://twitter.com/i/directory/profiles"
  },
  {
    key: 17,
    element: "Settings",
    link: "https://twitter.com/settings/account/personalization"
  },
  { key: 18, element: "© 2022 Twitter, Inc." }
];
const link = links.map(({ key, element, link }) => (
  <a href={link}>{element}</a>
));
export default function Footer(props) {
  return <div className="footer">{link}</div>;
}
