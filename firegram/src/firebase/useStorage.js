import { useState, useEffect } from 'react';
import { projectStorage,  projectFirestore, timestamps} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collection = projectFirestore.collection('images');

    //ovo je sintaksa koju su definisali iyumitelji firebase-a, nemoj da te buni
    storageRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      
      }, (err) => {
        //ovde greske definises
        setError(err);
      }, 
      // Handle successful uploads on complete      
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamps;
        collection.add({
          url:url,
          created_At:createdAt
        })
        setUrl(url);
      });

  }, [file]);

  return { progress, url, error };
}

export default useStorage;
