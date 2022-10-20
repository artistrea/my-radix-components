import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import {
    NavRoot,
    NavRootList,
    NavSubList,
    StyledContent,
    StyledLink,
    StyledTrigger,
} from "./styles"

type NavbarItemDefaults = {
    text: string
    value: string
    isSubmenu?: boolean
}

type SubmenuItem = NavbarItemDefaults & {
    isSubmenu: true
    attachedTo?: "right" | "left" | "bottom" // default === "bottom"
    items: NavbarItem[]
}

type LinkItem = NavbarItemDefaults & {
    isSubmenu?: false
    urlTo: string
}

export type NavbarItem = SubmenuItem | LinkItem

interface NavbarProps {
    items: NavbarItem[]
}

const Menu = (props: NavbarItem) => {
    const { isSubmenu, value, text } = props

    return (
        <NavigationMenu.Item value={value}>
            {isSubmenu ? (
                <>
                    <StyledTrigger>{text}</StyledTrigger>
                    <StyledContent
                        aria-orientation="vertical"
                        style={{
                            left: props.attachedTo === "right" ? "100%" : "",
                            right: props.attachedTo === "left" ? "100%" : "",
                            top:
                                props.attachedTo === "bottom" ||
                                props.attachedTo === undefined
                                    ? "100%"
                                    : "",
                        }}
                    >
                        <NavigationMenu.Sub
                            defaultValue={props.items[0]?.value}
                        >
                            <NavSubList aria-orientation="vertical">
                                {props.items.map((item) => (
                                    <Menu {...item} key={item.text} />
                                ))}
                            </NavSubList>
                        </NavigationMenu.Sub>
                    </StyledContent>
                </>
            ) : (
                // Need another library/framework's Link component?
                // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
                <StyledLink href={props.urlTo}>{text}</StyledLink>
            )}
        </NavigationMenu.Item>
    )
}

const Navbar = ({ items }: NavbarProps) => {
    return (
        <NavRoot orientation="horizontal">
            <NavRootList>
                {items.map((item) => (
                    <Menu {...item} key={item.text} />
                ))}
            </NavRootList>
        </NavRoot>
    )
}

export default Navbar
