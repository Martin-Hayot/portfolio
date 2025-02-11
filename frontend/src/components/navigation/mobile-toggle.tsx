import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { useState } from "react";

export const MobileToggle = () => {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger onClick={() => setOpen(!open)} asChild>
                <Menu className="text-white w-6 h-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="fixed p-0 flex gap-0 border-none pl-4 "
            >
                <SheetTitle className="text-white text-2xl font-bold hidden">
                    Menu
                </SheetTitle>
                <div className="w-[72px]">
                    <NavigationSidebar setOpen={setOpen} />
                </div>
            </SheetContent>
        </Sheet>
    );
};
