import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@Dash/ss-navbar",
  app: () => System.import("@Dash/ss-navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@Dash/ss-homepage",
  app: () => System.import("@Dash/ss-homepage"),
  activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
  name: "@Dash/ss-about",
  app: () => System.import("@Dash/ss-about"),
  activeWhen: ["/about"],
});

registerApplication({
  name: "@Dash/ss-contact",
  app: () => System.import("@Dash/ss-contact"),
  activeWhen: ["/contact"],
});

start({
  urlRerouteOnly: true,
});
