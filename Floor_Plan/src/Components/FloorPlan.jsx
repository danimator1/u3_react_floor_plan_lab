import BedRoom from './Bedroom'
import Bath from './Bath'
import LivingRoom from './LivingRoom'

function FloorPlan () {
    const bedRoomNumber1= 1
    const bedRoomNumber2= 2
    const bedRoomNumber3= 3
    const size1 ='half'
    const size2 = 'full'




    return (
        <div className="FloorPlan">
        <BedRoom bedRoomNumber = {bedRoomNumber1} />
        <BedRoom bedRoomNumber = {bedRoomNumber2} />
        <BedRoom bedRoomNumber = {bedRoomNumber3} />
        <Bath bathSize = { size1}/>
        <Bath bathSize = { size2}/>
        <LivingRoom/>
   
      </div>
      )
}

export default FloorPlan