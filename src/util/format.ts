import { formatDistanceToNowStrict } from "date-fns";
import enUS from "date-fns/locale/en-US";
import ptBR from "date-fns/locale/pt-BR";
import esES from "date-fns/locale/es";

function getLocale(language: string) {
  switch (language) {
    case "pt-BR":
      return ptBR;
    case "es-ES":
      return esES;
    case "en-US":
    default:
      return enUS;
  }
}

export function formatPublishedAt(publishedAt: string, language: string) {
  return formatDistanceToNowStrict(new Date(publishedAt), {
    addSuffix: true,
    locale: getLocale(language),
  });
}

export function formatVideoViewCount(viewCount: string) {
  let viewCountNum = parseInt(viewCount);

  const units = ["", "K", "M", "B"];
  let unitIdx = 0;

  while (viewCountNum > 1000 && unitIdx < units.length - 1) {
    viewCountNum /= 1000;
    unitIdx++;
  }

  return viewCountNum.toFixed(2) + units[unitIdx];
}
