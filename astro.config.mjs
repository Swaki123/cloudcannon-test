// @ts-check
import { defineConfig } from 'astro/config';
import  bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
    integrations: [bookshop()],
    output: 'static'
});
