import { Contact, Menu, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <>
      <header className="z-50 border border-b-gray-700 backdrop-blur supports-[backdrop-blur]:bg-background/90 py-2 px-4 bg-background/40 fixed top-0 left-0 right-0 shadow-sm">
        <div className="max-w-5xl mx-auto flex md:justify-between justify-end items-center ">
          <div className="flex justify-start space-x-10 items-center">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:bg-accent cursor-pointer">
                    <span className="flex justify-center space-x-3 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 stroke-3 stroke-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                        />
                      </svg>

                      <p className="text-xs font-medium tracking-tight">
                        Projects
                      </p>
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#skills"
                    className="hover:bg-accent cursor-pointer"
                  >
                    <span className="flex justify-center  space-x-2 items-center">
                      <User className="size-4 text-foreground stroke-3 " />
                      <span className="text-xs font-medium tracking-tight">
                        Skills
                      </span>
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:bg-accent cursor-pointer">
                    <span className="flex justify-center space-x-2 items-center">
                      <User className="size-4 text-foreground stroke-3 " />
                      <span className="text-xs font-medium tracking-tight">
                        About me
                      </span>
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex  justify-center items-center space-x-2 ">
            <Link href="#">
              <Button className="cursor-pointer">
                <Contact /> Contact with me
              </Button>
            </Link>
            <Link href="https://github.com/SujonHiro">
              {/*className="inline-flex justify-center items-center space-x-1.5 bg-accent px-4 py-2 rounded-md transition-colors "*/}
              <Button variant="outline" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                </svg>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/sujon-howlader-6442b5198/">
              {/*className="inline-flex justify-center items-center space-x-1.5 bg-accent px-4 py-2 rounded-md transition-colors "*/}
              <Button variant="outline" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                </svg>
              </Button>
            </Link>
          </div>
          {/*For mobile men*/}
          <Sheet className="z-55">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden ml-2">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="py-24 px-5 w-full flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link
                    href="#prjects"
                    className="hover:bg-accent px-4 py-2 rounded-md"
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#skills"
                    className="hover:bg-accent px-4 py-2 rounded-md"
                  >
                    Skills
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#blogs"
                    className="hover:bg-accent px-4 py-2 rounded-md"
                  >
                    Blogs
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="hover:bg-accent px-4 py-2 rounded-md"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
