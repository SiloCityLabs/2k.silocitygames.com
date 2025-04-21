// --- Helpers ---
import { generateGithubLink } from "@/helpers/_silabs/generateGithubLink";

export function noAttrInfoLink(
  game: string,
  position: string,
  height: string,
  weight: string,
  wingspan: string
) {
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    {
      title: `[${game}] - Add 2K Ratings - [P-${position}/H-${height}/W-${weight}/WP-${wingspan}]`,
      labels: "enhancement",
      template: "add-ratings-template.md",
    }
  );

  return [
    `No ratings available yet. <br> <a href="${githubLink}" target="_blank">Suggest Ratings</a>`,
  ];
}
