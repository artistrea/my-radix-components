import Navbar from "./components/Navbar"
import type { NavbarItem } from "./components/Navbar"

const navbarItems: NavbarItem[] = [
    {
        text: "twitter",
        value: "twitter",
        urlTo: "https://twitter.com",
    },
    {
        text: "submenu",
        value: "submenu",
        isSubmenu: true,
        items: [
            {
                text: "facebook",
                value: "facebook",
                urlTo: "https://facebook.com",
            },
            {
                text: "facebook2",
                value: "facebook2",
                urlTo: "https://facebook.com",
            },
        ],
    },
    {
        text: "submenu++",
        value: "submenu++",
        isSubmenu: true,
        items: [
            {
                text: "submenu",
                value: "submenu",
                isSubmenu: true,
                attachedTo: "right",
                items: [
                    {
                        text: "facebook",
                        value: "facebook",
                        urlTo: "https://facebook.com",
                    },
                    {
                        text: "facebook2",
                        value: "facebook2",
                        urlTo: "https://facebook.com",
                    },
                ],
            },
            {
                text: "twitter",
                value: "twitter",
                urlTo: "https://twitter.com",
            },
        ],
    },
]

function App() {
    return (
        <div>
            <Navbar items={navbarItems} />
            <h1>Hello World</h1>
        </div>
    )
}

export default App
