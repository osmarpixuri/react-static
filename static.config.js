const fs = require("fs");
const matter = require("gray-matter");

function getContent(fileName) {
  // TODO: map all files
  // Read markdown file contents
  const data = fs.readFileSync(`./src/content/${fileName}`, "utf8");
  // Convert to frontmatter object and markdown content //
  const dataObj = matter(data);
  // Remove unused key //
  delete dataObj.orig;
  return dataObj;
}

export default {
  getSiteData: () => ({
    title: "React Static with Netlify CMS"
  }),
  getRoutes: async () => {
    const about = getContent("about.md");
    const contact = getContent("contact.md");
    const home = getContent("home.md");

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({ home })
      },
      {
        path: "/about",
        component: "src/containers/About",
        getData: () => ({ about })
      },
      {
        path: "/contact",
        component: "src/containers/Contact",
        getData: () => ({ contact })
      },
      { is404: true, component: "src/containers/404" }
    ];
  }
};
