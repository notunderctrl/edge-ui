import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    Heading,
    GitHubIcon,
    DiscordIcon,
    useTheme,
    Button
} from '@edge-ui/react';
import { SunIcon, MoonIcon, Menu } from 'lucide-react';
import Link from 'next/link';

const Links = [
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Hooks', href: '/hooks' }
];

export function NavigationExample() {
    const { isDark, toggle } = useTheme();

    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <NavigationMenu className="justify-between px-5 md:px-0 md:justify-center grid grid-flow-col md:grid-cols-4 py-5 border-b-[1.5px] shadow-sm w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">
                            <Heading size="h3" className="font-bold">
                                EdgeUI
                            </Heading>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className={`hidden md:block col-span-2`}>
                    <NavigationMenuList>
                        {Links.map((l, i) => (
                            <NavigationMenuItem key={i}>
                                <Link href={l.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {l.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </div>

                <div className={`hidden md:block`}>
                    <NavigationMenuList className="flex flex-row gap-5">
                        <Link href="https://github.com/neplextech" target="_blank">
                            <span className="sr-only">GitHub</span>
                            <GitHubIcon className="h-5 w-5 cursor-pointer" />
                        </Link>
                        <Link href="/">
                            <span className="sr-only">Discord</span>
                            <DiscordIcon className="h-5 w-5 cursor-pointer" />
                        </Link>
                        <button aria-label="Toggle Theme" onClick={toggle}>
                            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                        </button>
                    </NavigationMenuList>
                </div>

                <NavigationMenuList className="md:hidden">
                    <NavigationMenuItem>
                        <Button variant="ghost">
                            <span className="sr-only">Open Sidebar</span>
                            <Menu />
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
