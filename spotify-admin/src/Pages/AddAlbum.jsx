import React, { useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [bgColor, setBgColor] = useState('#F54927');
  const [loading, setLoading] = useState(false);

  const submitFormHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('bgColor', bgColor);

      const response = await axios.post(`${url}/api/album/create_album`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setImage(false);
        setName('');
        setDesc('');
        setBgColor(''); //#F54927
      } else {
        toast.error("Somthing Went Worng.");
      }

    } catch (error) {
      toast.error("Error Occure.");
    }
    setLoading(false);
  }

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
    </div>
  ) : (
    <>
      <form onSubmit={submitFormHandler} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          <input type="file" id="image" accept='image/*' hidden onChange={(e) => { setImage(e.target.files[0]) }} />
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album name</p>
          <input value={name} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' type="text" required onChange={(e) => { setName(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album description</p>
          <input value={desc} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' type="text" required onChange={(e) => { setDesc(e.target.value) }} />
        </div>

        <div className='flex flex-col gap-3'>
          <p>Background Color</p>
          <input type='color' value={bgColor} onChange={(e) => { setBgColor(e.target.value) }} />
        </div>

        <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
      </form>
    </>

  )
}

export default AddAlbum;
