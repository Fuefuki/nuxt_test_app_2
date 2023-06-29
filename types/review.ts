import type { MicroCMSListContent } from "microcms-js-sdk";

export type Review = {
    title: string;
    body: string;
} & MicroCMSListContent;