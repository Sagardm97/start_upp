import React from 'react';

const GalleryItem = () => {
  const imageUrl = 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/ai-generated-gba2dce9e3_1920_xMPNobD.jpg';
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et gravida arcu. In hac habitasse platea dictumst.';

  return (
    <div className="w-64 mx-auto mb-8">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt="Placeholder" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Gallery Item</div>
          <p className="text-gray-700 text-base">{loremIpsum}</p> {/* Use the lorem ipsum description */}
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart {/* Changed button text to "Add to Cart" */}
          </button>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="flex flex-wrap justify-center mt-16">
      {[...Array(20)].map((_, index) => (
        <GalleryItem key={index} />
      ))}
    </div>
  );
};
  
export default Gallery;
