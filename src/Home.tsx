import { makeStyles, Skeleton, SkeletonItem, tokens } from "@fluentui/react-components";
import { useConfig } from "./model/Config";
import useLcid from "./UserSettings";
import { useEffect, useState } from "react";
import ConfigReader from "./model/ConfigReader";
import { PageItemReader } from "./model/PageItemReader";
import { InvalidReader } from "./model/InvalidItemReader";

const useStyles = makeStyles({
    firstRow: {
        marginBottom: tokens.spacingVerticalM,
        width: '50%',
    },
    secondRow: {
        marginBottom: tokens.spacingVerticalM,
    },
    sectionGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: tokens.spacingVerticalM,
        marginTop: tokens.spacingVerticalM,
    },
    section: {
        boxShadow: tokens.shadow8,
        backgroundColor: tokens.colorNeutralBackground1,
        padding: tokens.spacingVerticalL,
        borderRadius: tokens.borderRadiusMedium,
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: tokens.spacingHorizontalM,
        ':hover': {
            boxShadow: tokens.shadow16,
        }
    },
    imageColumn: {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        marginRight: tokens.spacingVerticalM,
    },
    contentColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
});

const Home: React.FC = () => {
    const styles = useStyles();
    const lcid = useLcid();

    // Use the custom hook - replace 'your_config_webresource_name' with your actual WebResource name
    const { config, loading, error, reloadConfig } = useConfig();
    const [configReader, setConfigReader] = useState<ConfigReader | null>(null);
    const [items, setItems] = useState<PageItemReader[]>([]);

    const itemsInitialized = (reader: PageItemReader, index: number) => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems[index] = reader;
            return newItems;
        });
    }

    useEffect(() => {
        if (config && lcid !== null) {
            const reader = new ConfigReader(config, lcid);
            setConfigReader(reader);
            setItems(new Array(reader.itemCount()).fill(null));
            reader.initializeItems(itemsInitialized);
        }
        else {
            setConfigReader(null);
        }

    }, [config, lcid]);

    if (loading) {
        return (
            <>
                <Skeleton aria-label="Loading Content">
                    <div className={styles.firstRow}>
                        <SkeletonItem size={48} />
                    </div>
                    <div className={styles.secondRow}>
                        <SkeletonItem size={20} />
                    </div>
                </Skeleton>
            </>
        );
    }

    if (error) {
        return (
            <div style={{ color: 'red' }}>
                <h3>Error loading configuration:</h3>
                <p>{error}</p>
                <button onClick={reloadConfig} style={{ marginTop: '10px' }}>
                    Retry
                </button>
            </div>
        );
    }

    if (!config) {
        return (
            <div>
                <div>No configuration found</div>
                <button onClick={reloadConfig} style={{ marginTop: '10px' }}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>{configReader?.getTitle()}</h1>
            <p>{configReader?.getDescription()}</p>            <div className={styles.sectionGrid}>
                {items.map((item, index) => {
                    if (item instanceof InvalidReader) return <></>;

                    return (
                        <section key={index.toString()} className={styles.section} onClick={() => item?.click()}>
                            {!item && <Skeleton aria-label="Loading Item" >
                                <div className={styles.contentColumn}>
                                    <div className={styles.firstRow}>
                                        <SkeletonItem size={24} />
                                    </div>
                                    <div className={styles.secondRow}>
                                        <SkeletonItem size={20} />
                                    </div>
                                </div>
                            </Skeleton>}
                            {item && <>
                                <div className={styles.imageColumn}>
                                    {item.getImage()}
                                </div>
                                <div className={styles.contentColumn}>
                                    <h2>{item.getTitle()}</h2>
                                    <p>{item.getDescription()}</p>
                                </div>
                            </>}
                        </section>
                    );
                })}
            </div>







            {/* Display all configuration properties */}
            <div style={{ marginTop: '20px' }}>
                <h2>Configuration Details:</h2>
                <pre style={{
                    backgroundColor: '#f5f5f5',
                    padding: '15px',
                    borderRadius: '5px',
                    overflow: 'auto'
                }}>
                    {JSON.stringify(config, null, 2)}
                </pre>

                <button
                    onClick={reloadConfig}
                    style={{
                        marginTop: '10px',
                        padding: '8px 16px',
                        backgroundColor: '#007cba',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Reload Configuration
                </button>
            </div>
        </div>
    );
};

export default Home;