import * as urlHelpers from "../lib/url-helpers"

export interface MenuItem {
  name: string
  path: string
  items?: MenuItem[]
}

export function useNavbarMenu(): MenuItem[] {
  return [
    {
      name: "About",
      path: urlHelpers.aboutUrl(),
    },
    {
      name: "Contact",
      path: urlHelpers.contactUrl(),
    },
  ]
}

export function useNavbarMobileMenu(): MenuItem[] {
  return [...useNavbarMenu()]
}
