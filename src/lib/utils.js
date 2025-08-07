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
  title = "MenuScores - Live scores, reimagined for the Mac.",
  description = "Live Scores - Right From Your Notch ",
  image = "/openGraph.png",
  icons = "/logos/icon_256x256.png",
} = {}) {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      siteName: "MenuScores",
      url: "https://menuscores.vercel.app/",
      type: "website",
      images: [{ url: image }],
    },
    metadataBase: new URL("https://menuscores.vercel.app/"),
  };
}
