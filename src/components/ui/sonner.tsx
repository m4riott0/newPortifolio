
import { Toaster as Sonner, toast } from "sonner";
import { useTheme } from "@/context/ThemeContext";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  try {
    const { theme } = useTheme();

    return (
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        expand={false}
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
        {...props}
      />
    );
  } catch (error) {
    // Fallback when ThemeProvider is not available (during initialization)
    return (
      <Sonner
        theme="system"
        className="toaster group"
        expand={false}
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
        {...props}
      />
    );
  }
};

export { Toaster, toast };
