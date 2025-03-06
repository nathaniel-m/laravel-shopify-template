import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import createApp from "@shopify/app-bridge";
import { AppLink, NavigationMenu } from "@shopify/app-bridge/actions";

const config = {
    // The client ID provided for your application in the Partner Dashboard.
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
    // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
    host: new URLSearchParams(location.search).get("host"),
    forceRedirect: true,
};

const app = createApp(config);

const dashboardLink = AppLink.create(app, {
    label: "Dashboard",
    destination: "/dashboard",
});

NavigationMenu.create(app, {
    items: [dashboardLink],
    active: dashboardLink,
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
console.log("index");
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
