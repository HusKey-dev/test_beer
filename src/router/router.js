import { createRouter, createWebHashHistory } from "vue-router";

import Main from "@/components/Main.vue";
import UserProfile from "@/components/UserProfile";

const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "profile",
                component: UserProfile,
            },
        ],
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
