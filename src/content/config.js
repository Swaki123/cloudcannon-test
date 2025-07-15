import {z, defineCollection } from "astro:content";

const pages = defineCollection({
    type: "page",
    schema: z.object({
        title: z.string(),
        content: z.string(),
        heroComponent: z.any(),
    }),
});

export const collections = {
    pages,
}