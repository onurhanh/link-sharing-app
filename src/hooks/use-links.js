import { useEffect, useState } from "react";

export function useLinks() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const storedLinks = JSON.parse(localStorage.getItem("links")) || [];
        setLinks(storedLinks);
    }, []);

    const addLink = (link = "", platform = "") => {
        setLinks((prev) => [
            ...prev,
            {
                id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
                link,
                platform,
            },
        ]);
    };

    const changeLink = (id, name, value) => {
        setLinks((prevLinks) =>
            prevLinks.map((link) =>
                link.id == id ? { ...link, [name]: value } : link
            )
        );
    };

    const saveLinks = (newLinks) => {
        setLinks(newLinks);
        localStorage.setItem("links", JSON.stringify(newLinks));
    };

    const removeLink = (id) => {
        const changedLinks = links.filter((link) => link.id != id);
        saveLinks(changedLinks);
    };

    return { links, removeLink, addLink, changeLink, saveLinks };
}
