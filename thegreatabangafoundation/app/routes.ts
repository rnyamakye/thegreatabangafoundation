import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/route.tsx"),
  route("about", "routes/about/route.tsx"),
  route("about/mission", "routes/about/mission/route.tsx"),
  route("about/governance", "routes/about/governance/route.tsx"),
  route("about/leadership", "routes/about/leadership/route.tsx"),
  route("impact", "routes/impact/route.tsx"),
  route("gallery", "routes/gallery/route.tsx"),
  route("blog", "routes/blog/route.tsx"),
  route("blog/:storyId", "routes/blog.$storyId.route.tsx"),
  route("contact", "routes/contact/route.tsx"),
  // route("donate", "routes/donate/route.tsx"),
] satisfies RouteConfig;
