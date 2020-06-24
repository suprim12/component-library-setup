module.exports = function (api) {
    api.cache(true);
    const presets = [
        ["@babel/preset-env", { "modules": false, "targets": { "browsers": "> 0.25%, ie 11, not op_mini all, not dead" } }],
        "@babel/preset-react",]
    const plugins = ["macros"];
    return {
        presets,
        plugins,
    };
}