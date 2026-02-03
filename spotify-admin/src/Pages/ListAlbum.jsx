import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListAlbum = () => {

  const [data, setData] = useState([]);

  const fetchAllAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list_album`);
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      toast.error("Error Occure.");
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/album/remove_album/${id}`);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAllAlbum();
      }
    } catch (error) {
      toast.error("Error Occure.");
    }
  }

  useEffect(() => {
    fetchAllAlbum();
  }, []);

  return (
    <div>
      <p>All Album List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Background Color</b>
          <b>Action</b>
        </div>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                <img className='w-12' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type='color' value={item.bgColor} />
                <p onClick={()=>{removeAlbum(item._id)}} className='text-center text-red-600 cursor-pointer'>X</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ListAlbum;

