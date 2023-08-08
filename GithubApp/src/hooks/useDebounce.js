import React, { useState, useEffect } from "react";

export function useDebounce(delay = 2000) {
    const [searchValue, setSearchValue] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

    const applyTimeout = (delayFn) => clearTimeout(delayFn);
    const timeoutFn = () => setSearchValue(searchQuery);

    useEffect(() => {
        const delayFn = setTimeout(timeoutFn, delay);
        return applyTimeout(delayFn)
    }, [searchQuery, delay]);

    return [searchValue, setSearchQuery];
}