"use client";

import { cloudinaryFullLoader, cloudinaryThumbLoader } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";

interface ClientImageProps extends ImageProps {
  version: number;
  type: "full" | "thumb";
}

export function ClientImage(props: ClientImageProps) {
  const { alt, version, type, ...rest } = props;
  const loader = type === "full" ? cloudinaryFullLoader(version) : cloudinaryThumbLoader(version);
  return <Image {...rest} alt={alt} loader={loader} />;
}

