export type Language = {
    code: string;
    name: string;
};

export const languages: Record<string, Language> = {
    en: {
        code: "en",
        name: "English",
    },
    es: {
        code: "es",
        name: "Español",
    },
};
