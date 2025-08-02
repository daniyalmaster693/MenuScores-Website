import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "SuperCorners - Supercharge your Mac's Corners",
  description = "Supercharge your Mac's Corners",
  image = "/openGraph.png",
  icons = "/icon_256x256.png",
} = {}) {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      siteName: "SuperCorners",
      url: "https://supercorners.vercel.app/",
      type: "website",
      images: [{ url: image }],
    },
    metadataBase: new URL("https://supercorners.vercel.app/"),
  };
}
