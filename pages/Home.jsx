import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { FaSchool, FaCalendarAlt, FaBook, FaUsers, FaBriefcase, FaUserFriends } from 'react-icons/fa';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  // return (
  //   <div>
  //     {/* top */}
  //     <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
  //       <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
  //         Find your next <span className='text-slate-500'>perfect</span>
  //         <br />
  //         place with ease
  //       </h1>
  //       <div className='text-gray-400 text-xs sm:text-sm'>
  //         Sahand Estate is the best place to find your next perfect place to
  //         live.
  //         <br />
  //         We have a wide range of properties for you to choose from.
  //       </div>
  //       <Link
  //         to={'/search'}
  //         className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
  //       >
  //         Let's get started...
  //       </Link>
  //     </div>

  //     {/* swiper */}
  //     <Swiper navigation>
  //       {offerListings &&
  //         offerListings.length > 0 &&
  //         offerListings.map((listing) => (
  //           <SwiperSlide>
  //             <div
  //               style={{
  //                 background: `url(${listing.imageUrls[0]}) center no-repeat`,
  //                 backgroundSize: 'cover',
  //               }}
  //               className='h-[500px]'
  //               key={listing._id}
  //             ></div>
  //           </SwiperSlide>
  //         ))}
  //     </Swiper>

  //     {/* listing results for offer, sale and rent */}

  //     <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
  //       {offerListings && offerListings.length > 0 && (
  //         <div className=''>
  //           <div className='my-3'>
  //             <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
  //             <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
  //           </div>
  //           <div className='flex flex-wrap gap-4'>
  //             {offerListings.map((listing) => (
  //               <ListingItem listing={listing} key={listing._id} />
  //             ))}
  //           </div>
  //         </div>
  //       )}
  //       {rentListings && rentListings.length > 0 && (
  //         <div className=''>
  //           <div className='my-3'>
  //             <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
  //             <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
  //           </div>
  //           <div className='flex flex-wrap gap-4'>
  //             {rentListings.map((listing) => (
  //               <ListingItem listing={listing} key={listing._id} />
  //             ))}
  //           </div>
  //         </div>
  //       )}
  //       {saleListings && saleListings.length > 0 && (
  //         <div className=''>
  //           <div className='my-3'>
  //             <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
  //             <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
  //           </div>
  //           <div className='flex flex-wrap gap-4'>
  //             {saleListings.map((listing) => (
  //               <ListingItem listing={listing} key={listing._id} />
  //             ))}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  
  return (
    <div className="flex">
    <div className="w-1/5 bg-gray-200 h-screen">
      <ul className="py-4">
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaSchool className="mr-2" />
            <span>Schools</span>
          </button>
        </li>
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaCalendarAlt className="mr-2" />
            <span>Events</span>
          </button>
        </li>
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaBook className="mr-2" />
            <span>Collections</span>
          </button>
        </li>
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaUsers className="mr-2" />
            <span>Team</span>
          </button>
        </li>
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaBriefcase className="mr-2" />
            <span>Meetings</span>
          </button>
        </li>
        <li className="px-4 py-2 border-b border-gray-300">
          <button className="w-full flex items-center">
            <FaUserFriends className="mr-2" />
            <span>New Portals</span>
          </button>
        </li>
      </ul>
    </div>
    <div className="w-4/5">
      <div className="flex justify-between">
        <div className="w-3/5 mr-5">
          <h2 className="text-xl font-semibold mb-3">Featured Concept</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">New Concept 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et gravida arcu. In hac habitasse platea dictumst.</p>
          </div>
        </div>
        <div className="w-2/5">
          <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
          <ul className="divide-y divide-gray-300">
            <li className="py-3">
              <span className="text-lg font-semibold">Event 1</span>
              <p className="text-gray-700">Date: DD/MM/YYYY</p>
            </li>
            <li className="py-3">
              <span className="text-lg font-semibold">Event 2</span>
              <p className="text-gray-700">Date: DD/MM/YYYY</p>
            </li>
            <li className="py-3">
              <span className="text-lg font-semibold">Event 3</span>
              <p className="text-gray-700">Date: DD/MM/YYYY</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="mt-10 py-5 bg-gray-200 text-center">
        <p className="text-gray-600">© 2024 Sahand Estate. All rights reserved.</p>
      </footer>
    </div>
  </div>
);
}