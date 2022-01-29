// Vue3

// ----------------------------------
// App
// ----------------------------------
const app = Vue.createApp({
    data() {
        return {
            userTxt: "Message",
            fruits: [
                { name: "pomme", id: 1 },
                { name: "poire", id: 2 },
                { name: "banane", id: 3 },
                { name: "coco", id: 4 },
            ],
            todos: ["manger", "travailler", "dormir"],
        };
    },
    methods: {
        inverser() {
            this.todos.reverse();
        },
        ajouterTodo() {
            console.log(this.todos);
            this.todos.push(this.userTxt);
            this.userTxt = "";
        },
        ajouterTodo2(message) {
            console.log(message);
            this.todos.push(message);
        },
    },
});

// Components
app.component("note", {
    props: ["content"],
    template: "#note",
    name: "Note",
});
const Note = app.component("note");

// Event perso
// Remonter les données du composant vers l'instance principal de Vue...
app.component("ajout", {
    props: [],
    emits: ["e-internal-ajouter"],
    data() {
        return {
            internalUserTxt: "Nouveau message",
        };
    },
    methods: {
        internalAjouterTodo() {
            this.$emit("e-internal-ajouter", this.internalUserTxt);
            this.internalUserTxt = "";
        },
    },
    template: "#ajout",
    name: "Ajout",
});
const Ajout = app.component("ajout");

app.component("nav-bar", {
    template: "#nav-bar",
    name: "NavBar",
});
const NavBar = app.component("nav-bar");

// ----------------------------------
// Router
// ----------------------------------

// Pages components

// Home
app.component("home", {
    template: "#home",
    name: "Home",
});
const Home = app.component("home");

// Works
app.component("works", {
    template: "#works",
    name: "Works",
});
const Works = app.component("works");

// 404
app.component("NotFound", {
    template: "#not-found",
    name: "NotFound",
});
const NotFound = app.component("NotFound");

// Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/works", component: Works },
        { path: "/:pathMatch(.*)", component: NotFound },
    ],
});
app.use(router);
//
app.mount("#app");
