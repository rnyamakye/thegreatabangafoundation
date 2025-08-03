import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/route.tsx"),
  route("about", "routes/about/route.tsx"),
  route("impact", "routes/impact/route.tsx"),
  route("contact", "routes/contact/route.tsx"),
  // route("donate", "routes/donate/route.tsx"),
] satisfies RouteConfig;
