'use strict';

module.exports = {
    src: {
        php: ['**/*.php', '!vendor/**'],
        images: 'develop/images/**/*',
        scss: 'develop/scss/**/*.scss',
        css: ['**/*.css', '!node_modules/**', '!develop/vendor/**'],
        js: ['develop/js/**/*.js', '!node_modules/**'],
        json: ['**/*.json', '!node_modules/**'],
        i18n: 'develop/languages/'
    },
    dest: {
        i18npo: 'develop/languages/',
        i18nmo: 'languages/',
        images: 'images/',
        css: '',
        js: 'js/',
    },
    lintfiles: {
        phpcs: 'phpcs.xml',
        phpmd: 'phpmd.xml',
        eslint: '.eslintrc',
        stylelint: '.stylelintrc'
    },
    bump: {
      files: [
          './package.json',
          './composer.json'
      ]
    },
    messages: {
        css: 'Stylesheet compiled and saved.',
        i18n: 'Translation file generated.',
        images: 'Image files compressed and copied.',
        js: 'JavaScript task complete.',
        potomo: 'PO files converted to MO files.',
        styleguide: 'Styleguide task complete.'
    },
    hologram: {
        config: 'hologram_config.yml'
    },
    server: {
        url: 'library.dev'
    },
    css: {
        basefontsize: 16,
        scss: {
            'style': {
                src: 'develop/scss/style.scss',
                dest: './',
                outputStyle: 'compressed',
            }
        }
    },
    js: {},
    theme: {}
};
