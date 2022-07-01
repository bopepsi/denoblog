import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Bowen",
  author: "Bowen",
  avatar: "./bw2.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:bopepsi@gmail.com" },
    { title: "GitHub", url: "https://github.com/bopepsi" },
  ],
  background: "#f9f9f9",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});