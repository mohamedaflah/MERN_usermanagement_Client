/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactCrop from "react-image-crop";
// import demmyImage from "../assets/download.png";
import "react-image-crop/dist/ReactCrop.css";
// eslint-disable-next-line react/prop-types
const ImageCrop = ({ image, setImage, offCrop }) => {
  const [crop, setCrop] = useState(null);
  const [completecrop, setCompleteCrop] = useState(null);

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    // eslint-disable-next-line react/prop-types
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Canvas is empty");
            return;
          }
          blob.name = fileName || "cropped_image.png";
          resolve(blob);
        },
        "image/png",
        1
      );
    });
  };

  const handleSaveClick = async () => {
    if (completecrop) {
      console.log(completecrop, "complted crop");
      const croppedImage = await getCroppedImg(
        document.querySelector("img"),
        completecrop,
        "cropped_image.png"
      );
      console.log("Cropped image data:", croppedImage);
      setImage(croppedImage);
      offCrop(false);
    }
  };
  const onImageLoad = (e) => {
    if (completecrop == null) {
      setCompleteCrop({
        x: 0,
        y: 0,
        height: e?.currentTarget?.height,
        width: e?.currentTarget?.width,
        unit: "px",
      });
    }
  };

  return (
    <div>
      <ReactCrop
        onChange={(c) => {
          setCrop(c);
        }}
        crop={crop}
        onComplete={(e) => {
          setCompleteCrop(e);
        }}
      >
        <img
          src={URL.createObjectURL(image)}
          alt=""
          className="h-full border"
          onLoad={onImageLoad}
        />
      </ReactCrop>
      <div className="flex mt-1 gap-1 justify-end px-2">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center "
          onClick={() => offCrop(false)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default ImageCrop;
