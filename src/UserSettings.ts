import { useEffect, useState } from "react";
import GlobalContext from "./sdk/GlobalContext";

const useLcid = () => {
    const [lcid, setLcid] = useState<number | null>(null);

    useEffect(() => {
        const context = GlobalContext.getGlobalContext();
        setLcid(context.userSettings.languageId);
    }, []);

    return lcid;
};

export default useLcid;