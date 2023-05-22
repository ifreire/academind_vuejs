module.exports = {
    extends: ["@antfu", "vue-global-api"],
    
    rules: {
        /*
        * ESLint core rules
        * these are mostly the same as our Prettier config settings
        */

        "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
        "brace-style": [2, "stroustrup", { allowSingleLine: true }],
        "comma-dangle": ["error", "always-multiline"],
        "eol-last": ["error", "always"],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "template-curly-spacing": ["error", "always"],
        "multiline-comment-style": ["error", "starred-block"],
        quotes: ["error", "single", { avoidEscape: true }],
        semi: ["error", "never"],

        /*
        * Vue 3 rules
        * these are mostly a matter of preference - change as desired!
        */

        "vue/no-deprecated-slot-attribute": "warn",

        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 1,
                    allowFirstLine: true,
                },
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],

        "vue/html-closing-bracket-spacing": [
            "error",
            {
                startTag: "always",
                endTag: "always",
                selfClosingTag: "always",
            },
        ],

        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "always",
            },
        ],

        "vue/singleline-html-element-content-newline": [
            "error",
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                // ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
            },
        ],
        
        /*
        * TypeScript rules
        * these are mostly a matter of preference - change as desired!
        */

        "@typescript-eslint/explicit-function-return-type": "off",
    },
};

// 'prefer-promise-reject-errors': 'off',

// // TypeScript
// quotes: ['warn', 'single', { avoidEscape: true }],

// '@typescript-eslint/explicit-module-boundary-types': 'off',
// '@typescript-eslint/no-unused-vars': 'of
