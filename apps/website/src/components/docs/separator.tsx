import { Separator } from '@edge-ui/react';

export function SeparatorExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="border rounded-md p-3">
                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">TypeScript</h4>
                    <p className="text-sm text-muted-foreground">
                        TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>npm</div>
                    <Separator orientation="vertical" />
                    <div>docs</div>
                    <Separator orientation="vertical" />
                    <div>source</div>
                </div>
            </div>
        </div>
    );
}
