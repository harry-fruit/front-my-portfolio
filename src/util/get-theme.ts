export const getNewTheme = (theme?: string): "dark" | "light" => {
    return theme === "dark" ? "light" : "dark";
};