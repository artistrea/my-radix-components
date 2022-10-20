import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import styled, { css } from "styled-components"

const NavRoot = styled(NavigationMenuPrimitive.Root)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 1;
`

const NavRootList = styled(NavigationMenuPrimitive.List)`
    all: unset;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    box-shadow: 0 2px 10px #333;
    & > * {
        position: relative;
        display: grid;
        align-items: center;
    }
`

const NavSubList = styled(NavigationMenuPrimitive.List)`
    all: unset;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    box-shadow: 0 2px 10px #333;
`

const itemStyles = css`
    padding: 8px 12px;
    outline: none;
    user-select: none;
    font-weight: 500;
    border-radius: 4px;
    font-size: 15px;
    color: violet;
    &:focus {
        position: relative;
        box-shadow: 0 0 0 2px rgb(178, 70, 178);
    }
    &:hover {
        background-color: rgb(138, 30, 138);
    }
`

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger)`
    all: unset;
    ${itemStyles};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
`

const StyledLink = styled(NavigationMenuPrimitive.Link)`
    ${itemStyles};
    display: block;
    text-decoration: none;
    font-size: 15px;
`

const StyledContent = styled(NavigationMenuPrimitive.Content)`
    position: absolute;
    min-width: 100%;
`

export {
    NavRoot,
    NavRootList,
    NavSubList,
    StyledTrigger,
    StyledLink,
    StyledContent,
}
