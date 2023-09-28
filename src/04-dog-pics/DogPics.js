import { useEffect, useState } from "react";

export default function DogPics () {
  const [imgSrc, setImgSrc] = useState('');
  const apiUrl = "https://dog.ceo/api/breeds/image/random";

  const fetchDog = async() => {
    await fetch(apiUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setImgSrc(data.message)
      });
  }

  useEffect(() => {
    fetchDog();
  }, [])

  return (
    <div className='dog-pics'>
      <img src={`${imgSrc}`} alt="" width="auto" height="400px"/>
      <button onClick={() => fetchDog()}>🐶</button>
    </div>
  )
}
