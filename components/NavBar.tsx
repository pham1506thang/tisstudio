import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "./ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  const navLinks = [
    { href: "#portfolio", label: "Dự án gần đây" },
    { href: "#about", label: "Giới thiệu" },
    { href: "#concept", label: "Concept" },
    { href: "#pricing", label: "Báo giá" },
    { href: "#testimonials", label: "Cảm nhận" },
    { href: "#contact", label: "Liên hệ" },
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Tis Studio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="story-link text-foreground/80">
              {link.label}
            </a>
          ))}
          <a href="#contact" aria-label="Đặt lịch chụp">
            <Button variant="hero" size="sm">Đặt lịch</Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] sm:w-[240px]">
              <nav className="flex flex-col gap-4 pt-6">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a href={link.href} className="text-lg font-medium">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a href="#contact" aria-label="Đặt lịch chụp">
                    <Button variant="hero" className="w-full mt-4">Đặt lịch</Button>
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
