import { progress } from 'framer-motion';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
    },
};

export default nextConfig;
