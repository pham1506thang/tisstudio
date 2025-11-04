import { CLOUD_NAME } from "@/config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function getFullSizeUrl(img_id: string, version: number): string {
  return `${CLOUDINARY_BASE_URL}/q_auto:best/v${version}/${img_id}`;
}

export function getThumbSizeUrl(
  img_id: string,
  w: number = 200,
  version: number
): string {
  return `${CLOUDINARY_BASE_URL}/w_${w},q_auto:good/v${version}/${img_id}`;
}

export function cloudinaryFullLoader(version: number) {
  return ({ src }: { src: string }) => {
    return getFullSizeUrl(src, version);
  };
}
export function cloudinaryThumbLoader(version: number) {
  return ({ src, width }: { src: string; width: number }) => {
    return getThumbSizeUrl(src, width, version);
  };
}

// Image sizes constants for next/image
// Unified thumb sizes aligned to Tailwind breakpoints (2 cols on mobile, 3 cols from md)
export const THUMB_IMAGE_SIZES =
  "(min-width: 1536px) 25vw, (min-width: 1280px) 25vw, (min-width: 1024px) 30vw, (min-width: 768px) 33vw, 50vw";
export const FULLSCREEN_IMAGE_SIZES = "100vw";

// Placeholder tiny SVG (soft gray, fits bright gallery)
export const BLUR_PLACEHOLDER_BASE64 =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNzUiIGZpbGw9IiNlYmVhZWYiLz48L3N2Zz4=";
