import {useState, useEffect} from 'react';
import { projectFirestore } from './config';

const useFirebase = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
       
        let unsub = projectFirestore.collection(collection)
        .orderBy('created_At', 'desc')
        .onSnapshot(snaps=>{
            let documents = [];//da bi se slika pojavila odmah nakon upload-a
            //ovaj red mora ovde da bude definisan;
            snaps.forEach(doc=>{
                
                documents.push({...doc.data(), id:doc.id})//umesto tri tacke bi morao da napise
                //npr podaci: doc.data()
            })
            setDocs(documents);
        })
        return () => {
            unsub();// this is a cleanup function that react will run when
            // a component using the hook unmounts
        }
    }, [collection])
    return {docs}
}
 
export default useFirebase;