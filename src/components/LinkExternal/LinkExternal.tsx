import React from "react"

interface LinkExternalProps extends Partial<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> {
  href: string,
  children: React.ReactNode
} 

/**
 * Wrapper around links that leads to external sites
 */
export function LinkExternal({
  href,
  children,
  ...rest
}: LinkExternalProps) {
  return (
    <a href={href} target="_blank" rel="no-referrer" {...rest}>{children}</a>
  )
}