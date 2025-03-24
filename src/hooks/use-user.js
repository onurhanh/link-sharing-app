// bir tane user state i tutun
// localstorage da varsa oradaki değeri state içine aktarın
// yoksa zaten kullanıcı bilgi kaydetmemiştir yani boş olacak
// kullanıcı bilgilerini doldurursa ve save butonuna basarsa çalıştırılacak (localstorage a kaydedecek) bir fonksiyon hazırlayın
import { useEffect, useState } from "react";
export function useUser() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        console.log(storedUser);

        setUser(storedUser);
    }, []);

    const saveUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    return { user, saveUser, setUser };
}
