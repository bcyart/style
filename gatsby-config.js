/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: "BCY ART",
    description: "BCY ART’ a hoş geldiniz. Burası isteklerin ve fikirlerin sanatla harmanlanıp, filme dönüştüğü yer. Kısaca burası sinematik çalışmaların doğduğu topraklar.Video içerik , video kurgu ,drone çekimleri ,fotoğraf çekimleri ve banner tasarımları için doğru yerdesiniz.",
    keywords: "gatsby, gatsbyjs project, video,kurgu,içerik,banner,renk,edit,drone,fotoğraf,studio,tasarımi,motion graphic,grafik,intro",
    image: `/static/image.png`,
    url: "bcyart.net",
    siteUrl: `https://www.bcyart.net`,
    author:`berkay yüksel , burak can yüksel`,
    icon: `/static/favicon.ico`,
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-react-helmet`,{
    resolve: `gatsby-plugin-styled-components`}
],
}
