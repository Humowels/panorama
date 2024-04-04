import React from "react";

export function CarInlineCardSkeleton() {
  return (
    <div className="w-full border-b border-gray-300 flex items-center justify-between h-16">
      <div className="h-2 w-32 bg-gray-300 animate-pulse rounded-full" />
    </div>
  );
}
