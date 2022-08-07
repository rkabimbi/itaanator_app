import React, { useEffect, useState } from 'react'

export default function ContractPage() : JSX.Element{

    // https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          }); }, []);



  return (
    <div>contractPage
       
    </div>

  )
}
