
import { useLoaderData } from 'react-router'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import PlantCard from '../Components/PlantCard'
import { useEffect, useState } from 'react'

const Home = () => {
  // const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   fetch('https://openapi.programming-hero.com/api/plants')
  //     .then(res => res.json())
  //     .then(data => setPlants(data.plants));
  // }, [])
  // console.log(plants)
  const {plants} = useLoaderData()

  console.log(plants);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8 px-12'>
        {plants.map(plant => (
          <PlantCard key={plant?.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default Home
