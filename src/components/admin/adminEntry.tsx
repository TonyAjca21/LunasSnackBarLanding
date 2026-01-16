import { Dashboards } from "./Dashboard.tsx";
import {LoginAdmin} from "./loginAdmin.tsx";
import { auth } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";


export function AdminEntry() {
const [user,setUser] = useState<any>(null);
const [loading,setLoading] = useState(true);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
}, []);
if (loading) {
    return <div className="text-center text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold">Cargando...</div>;   

}
 return user ? <Dashboards /> : <LoginAdmin/>;
}

export default AdminEntry