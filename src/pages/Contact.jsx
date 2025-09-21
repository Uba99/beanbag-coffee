import React from "react";
import { FaWhatsapp, FaMailBulk, FaInstagram, FaFacebook } from "react-icons/fa";



const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="border-2 border-gray-800 rounded-md m-4 p-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <h2 className="text-xl font-semibold mb-2 font-baked">Beanbag Coffee</h2>
        <a href="https://wa.me/6285888786358"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg text-green-800 font-semibold mb-6 hover:underline"
        >
          <FaWhatsapp className="inline mr-2" /> +62 85888786358
        </a>

        {/*EMAIL*/}
        <div className="font-baked">
        <h3 className="text-md font-semibold mb-2">EMAIL ADDRESSES</h3>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=beanbagcoffee.id@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
          className="block text-lg text-sky-800 mb-6 hover:underline"
        >
          <FaMailBulk className="inline mr-2" />
          beanbagcoffee.id@gmail.com
        </a>
        </div>

        {/*SOSIAL MEDIA */}
        <h2 className="text-md font-bold mb-3 font-baked">SOCIAL MEDIA</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/beanbagcoffee.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61579227211201"
             target="_blank"
             rel="noopener noreferrer"
             className="flex flex-col items-center text-blue-600 hover:scale-110 transition"
          >
            <FaFacebook className="text-2xl"/>

          </a>
        </div>

          {/*MARKETPLACE*/}
        <h2 className="text-md font-bold mb-3 font-baked">S H O P</h2>
        <div className="flex justify-center space-x-10 font-bold mb-10">
          <a href="https://shopee.co.id/beanbagcoffee.id?categoryId=100629&entryPoint=ShopByPDP&itemId=25490324128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-orange-500 hover:scale-110 transition"
          >
            <svg role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 text-orange-500"
              fill="currentcolor"
            >
              <title>Shopee</title>
              <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" /></svg>
            <span className="text-sm text-gray-800 mt-1 font-baked">Shopee</span>
          </a>
        </div>







      </div>
    </div>
  );
};

export default Contact;
