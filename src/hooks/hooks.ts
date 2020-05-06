import { useEffect, useState } from 'react';

export function useEmail(): number {
  const [id, setEmailId] = useState(0);
const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    const handler = (event: any) => {
        setEmailId(event.target.id);
    };  
    return () => {
      
    };
  }, []);

  return id;
}