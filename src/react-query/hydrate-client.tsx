"use client";

import { HydrateProps } from "react-query";
import { HydrationBoundary } from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <HydrationBoundary {...props} />;
}

export default Hydrate;
