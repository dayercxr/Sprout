import { type Config } from "prettier";

const config: Config = {
    semi: true,
    jsxSingleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ]
}

export default config