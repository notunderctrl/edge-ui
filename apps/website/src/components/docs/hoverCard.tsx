import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from '@edge-ui/react';
import { CalendarDays } from 'lucide-react';

export function HoverCardExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="text-blue-500 font-semibold">
                        @neplextech
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/neplextech.png" />
                            <AvatarFallback>NT</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h1 className="text-base font-semibold">Neplex Technologies</h1>
                            <h4 className="text-sm font-semibold text-blue-500">@neplextech</h4>
                            <p className="text-sm">Neplex Open Source – creators and maintainers of EdgeUI.</p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                                <span className="text-xs text-muted-foreground">Joined November 2022</span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
