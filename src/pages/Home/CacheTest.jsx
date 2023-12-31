import React from 'react';

const CacheTest = () => {
    // Try to get data from the cache, but fall back to fetching it live.
    async function getData() {
        const cacheVersion = 1;
        const cacheName = `myapp-${cacheVersion}`;
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        let cachedData = await getCachedData(cacheName, url);

        if (cachedData) {
            console.log("Retrieved cached data");
            return cachedData;
        }

        console.log("Fetching fresh data");

        const cacheStorage = await caches.open(cacheName);
        await cacheStorage.add(url);
        cachedData = await getCachedData(cacheName, url);
        await deleteOldCaches(cacheName);

        return cachedData;
    }

    // Get data from the cache.
    async function getCachedData(cacheName, url) {
        const cacheStorage = await caches.open(cacheName);
        const cachedResponse = await cacheStorage.match(url);

        if (!cachedResponse || !cachedResponse.ok) {
            return false;
        }

        return await cachedResponse.json();
    }

    // Delete any old caches to respect user's disk space.
    async function deleteOldCaches(currentCache) {
        const keys = await caches.keys();

        for (const key of keys) {
            const isOurCache = key.startsWith("myapp-");
            if (currentCache === key || !isOurCache) {
                continue;
            }
            caches.delete(key);
        }
    }

    const cache = async () => {
        try {
            const data = await getData();
            console.log({ data });
        } catch (error) {
            console.error({ error });
        }
    }



    return (
        <div>
            <button onClick={cache}>cache</button>
        </div>
    );
};

export default CacheTest;