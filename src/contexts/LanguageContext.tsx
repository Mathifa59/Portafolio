"use client";
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import type { Lang } from "@/data/translations";

const key = "mathias-portfolio-language";
let currentLang: Lang = "es";
let initialized = false;
const LanguageContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: "es",
  toggleLang: () => {},
});
function subscribe(callback: () => void) {
  const update = () => {
    initialized = false;
    callback();
  };
  window.addEventListener("portfolio-language", callback);
  window.addEventListener("storage", update);
  return () => {
    window.removeEventListener("portfolio-language", callback);
    window.removeEventListener("storage", update);
  };
}
function getSnapshot(): Lang {
  if (!initialized) {
    try {
      currentLang = window.localStorage.getItem(key) === "en" ? "en" : "es";
    } catch {
      /* Keep the in-memory language if storage is unavailable. */
    }
    initialized = true;
  }
  return currentLang;
}
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => "es" as Lang);
  const toggleLang = useCallback(() => {
    currentLang = getSnapshot() === "es" ? "en" : "es";
    try {
      window.localStorage.setItem(key, currentLang);
    } catch {
      /* The toggle also works without persistent storage. */
    }
    window.dispatchEvent(new Event("portfolio-language"));
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLang = () => useContext(LanguageContext);
