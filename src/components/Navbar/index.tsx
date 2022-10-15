import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavRoot, NavRootList, NavSubList,
    StyledContent, StyledLink, StyledTrigger
} from "./styles";

type NavbarItemDefaults = {
    text: string;
    value: string;
    isSubmenu?: boolean
}

type SubmenuItem = NavbarItemDefaults & {
    isSubmenu: true
    orientation: "vertical" | "horizontal";
    items: NavbarItem[];
}

type LinkItem = NavbarItemDefaults & {
    isSubmenu?: false
    urlTo: string;
}

export type NavbarItem = | SubmenuItem | LinkItem


interface NavbarProps {
    orientation: "vertical" | "horizontal";
    items: NavbarItem[];
}

const Menu = (props : NavbarItem) => {
    const { isSubmenu, value, text } = props

    return (
        <NavigationMenu.Item value={value}>
            {
                isSubmenu ?
                <>
                    <StyledTrigger>{ text }</StyledTrigger>
                    <StyledContent aria-orientation={props.orientation}>
                        <NavigationMenu.Sub defaultValue={props.items[0]?.value}>
                            <NavSubList aria-orientation={props.orientation}>
                                {
                                    props.items.map((item) =>
                                    <Menu {...item} key={item.text} />
                                    )
                                }
                            </NavSubList>
                        </NavigationMenu.Sub>
                    </StyledContent>
                </>
                :
                // Need another library/framework's Link component?
                // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
                <StyledLink href={ props.urlTo }>
                    { text }
                </StyledLink>
                }
        </NavigationMenu.Item>

    )
} 

const Navbar = ({ items, orientation } : NavbarProps) => {
    return (
        <NavRoot orientation={orientation}>
            <NavRootList>
                {
                    items.map((item) =>
                        <Menu {...item} key={item.text}/>
                    )
                }
            </NavRootList>
        </NavRoot>
    )
}

export default Navbar
