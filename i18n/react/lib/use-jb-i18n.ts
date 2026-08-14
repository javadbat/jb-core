import { useCallback, useSyncExternalStore } from "react";
import { i18n, type JBI18N } from "jb-core/i18n";

export function useJBI18N(context: JBI18N = i18n): JBI18N {
  const subscribe = useCallback((callback: VoidFunction) => context.subscribe(callback), [context]);
  const getSnapshot = useCallback(() => context.locale.toString(), [context]);
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return context;
}
