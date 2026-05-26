
import Parser from "rss-parser";

const parser = new Parser();

export async function getMediumPosts() {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://streetlevelthought.medium.com/feed",
      {
        next: { revalidate: 3600 },
      }
    );

    const data = await response.json();

    return data.items.slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
    return [];
  }
}

