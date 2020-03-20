const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

const purgecss = postcssPurgecss({
    // Specify the paths to all of the template files in your project.
    content: [
        './public/**/*.html',
        './src/**/*.vue',
    ],

    // Inlucde any special chracters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

    // Whitelist auto generated classes for transitions and router links.
    whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/ // jscs:ignore
    ],
  });

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
    ],
  };
