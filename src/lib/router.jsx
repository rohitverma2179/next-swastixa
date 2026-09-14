"use client";

import NextLink from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useParams as useNextParams } from "next/navigation";

// react-router <Link to="/x"> -> next/link <Link href="/x">
export function Link({ to, replace, state, ...rest }) {
  return <NextLink href={to} replace={replace} {...rest} />;
}

// useLocation() -> minimal shape used by the codebase (pathname, search, hash)
export function useLocation() {
  const pathname = usePathname() || "/";
  const [loc, setLoc] = useState({ search: "", hash: "" });
  useEffect(() => {
    setLoc({ search: window.location.search, hash: window.location.hash });
  }, [pathname]);
  return {
    pathname,
    search: loc.search,
    hash: loc.hash,
    href: pathname + loc.search + loc.hash,
    origin: "",
    key: "",
  };
}

export function useParams() {
  return useNextParams();
}

export function useNavigate() {
  const router = useRouter();
  return useCallback((to, options = {}) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      else router.forward();
      return;
    }
    if (options && options.replace) router.replace(to);
    else router.push(to);
  }, [router]);
}