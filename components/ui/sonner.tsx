"use client"

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery"
import { IconAlertTriangle, IconCircleDashedCheck, IconFileAlert, IconInfoHexagon, IconLoader } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  const isMobile = useClientMediaQuery('(max-width: 640px)')
  console.log('isMobile >', isMobile ? 'top-center' : 'top-right')

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position={isMobile ? 'top-center' : 'top-right'}
      icons={{
        success: <IconCircleDashedCheck className="text-success" />,
        info: <IconInfoHexagon size={30}  className="text-info" />,
        warning: <IconAlertTriangle size={30}  className="text-warning" />,
        error: <IconFileAlert size={30}  className="text-error" />,
        loading: <IconLoader size={30}  />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background flex mx-auto sm:mx-0 h-fit flex-row space-x-3 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg top-2 sm:top-4 sm:right-4 ",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
