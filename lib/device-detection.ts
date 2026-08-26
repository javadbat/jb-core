const getNavigator = () => typeof navigator === "undefined" ? undefined : navigator;

export const isMobile = () => {
  return /Mobi/i.test(getNavigator()?.userAgent ?? "");
};


export const isTablet = () => {
  const currentNavigator = getNavigator();
  const userAgent = currentNavigator?.userAgent ?? "";

  return /iPad|Tablet|PlayBook|Silk/i.test(userAgent)
    || (/Android/i.test(userAgent) && !/Mobi/i.test(userAgent))
    // iPadOS can request desktop sites and identify itself as a Mac.
    || (/Macintosh/i.test(userAgent) && (currentNavigator?.maxTouchPoints ?? 0) > 1);
};


