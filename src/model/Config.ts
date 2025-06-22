import { useState, useEffect } from 'react';

// Extend the Window interface to include __homepageconfigwebresourceurl__
declare global {
    interface Window {
        __homepageconfigwebresourceurl__: string;
    }
}

const devTimeout = 1000;

interface Config {
    title: string;
    titles: Translation[] | null;
    description: string;
    descriptions: Translation[] | null;
    items: PageItem[];
}

interface Translation {
    lcid: number;
    label: string;
}

interface PageItem {
    type: "Table" | "WebResource" | "Url"
}

interface TableItem extends PageItem {
    type: "Table";
    name: string;
    description: string;
    descriptions: Translation[] | null;
}
interface WebResourceItem extends PageItem {
    type: "WebResource";
    name: string;
    title: string;
    titles: Translation[] | null;
    description: string;
    descriptions: Translation[] | null;
}
interface UrlItem extends PageItem {
    type: "Url";
    url: string;
    title: string;
    titles: Translation[] | null;
    description: string;
    descriptions: Translation[] | null;
}





// Custom hook for loading configuration using dynamic imports
const useConfig = () => {
    const [config, setConfig] = useState<Config | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                setLoading(true);
                setError(null);

                const configUrl = getConfigWebResourceName();

                // In development mode, try to load dev config if no specific config is provided
                if (__DEV__ && !configUrl) {
                    const devConfig = await getDevConfig();
                    if (devConfig) {
                        setConfig(devConfig);
                        setLoading(false);
                        return;
                    }
                }

                if (!configUrl) {
                    setLoading(false);
                    setError('Configuration WebResource name is not provided');
                    return;
                }

                // Use dynamic import to load the configuration module
                const configModule = await import(configUrl);

                // Extract the default export (your config object)
                setConfig(configModule.default);
                setLoading(false);

            } catch (err: unknown) {
                console.error('Failed to load configuration:', err);
                setError((err as Error)?.message || 'Failed to load configuration');
                setLoading(false);
            }
        };

        loadConfig();
    }, []);


    // Function to reload configuration
    const reloadConfig = async () => {
        try {
            setLoading(true);
            setError(null);

            const configUrl = getConfigWebResourceName();

            // In development mode, try to load dev config if no specific config is provided
            if (__DEV__ && !configUrl) {
                const devConfig = await getDevConfig();
                if (devConfig) {
                    setConfig(devConfig);
                    setLoading(false);
                    return;
                }
            }

            if (!configUrl) {
                setError('Configuration WebResource name is not provided');
                return;
            }

            // Add cache busting parameter to force reload
            const cacheBustedUrl = `${configUrl}?t=${Date.now()}`;
            const configModule = await import(cacheBustedUrl);

            setConfig(configModule.default);
            setLoading(false);

        } catch (err: unknown) {
            console.error('Failed to reload configuration:', err);
            setError((err as Error)?.message || 'Failed to reload configuration');
            setLoading(false);
        }
    };

    return { config, loading, error, reloadConfig };
};

const getDevConfig = async (): Promise<Config | null> => {
    if (__DEV__) {
        try {
            // Add 3 second delay for development testing
            await new Promise(resolve => setTimeout(resolve, devTimeout));

            // Dynamic import of config-template.js only in development
            const configModule = await import('../config-template.js') as { default: Config };
            return configModule.default;
        } catch (error) {
            console.warn('Could not load development config template:', error);
            return null;
        }
    }
    return null;
};


const getConfigWebResourceName = (): string | null => {
    // First check for 'data' parameter in query string
    if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const dataParam = urlParams.get('data');

        if (dataParam) {
            return dataParam;
        }
    }

    // Check if the global variable is defined
    if (typeof window !== 'undefined' && window.__homepageconfigwebresourceurl__) {
        return window.__homepageconfigwebresourceurl__;
    }
    return null;
}

export { useConfig, type Config, type Translation, type PageItem, type TableItem, type WebResourceItem, type UrlItem };