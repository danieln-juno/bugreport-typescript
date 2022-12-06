import React, { useCallback, useRef, useState } from 'react'
import { Crop, PixelCrop } from 'react-image-crop';
import ReactCrop from 'react-image-crop';
type Props = {
    imgSrc: string,
    setImgSrc: Function
}

const CropImage = ({ imgSrc, setImgSrc }: Props) => {

    const [crop, setCrop] = useState<PixelCrop>();
    const [image, setImage] = useState(null);
    const [output, setOutput] = useState(null);
    const imgRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState();

    // const makeClientCrop = async (crop: Crop) => {
    //     if (imgRef.current && crop.width && crop.height) {
    //         createCropPreview(imgRef.current, crop, 'newFile.jpeg');
    //     }
    // };

    // const onLoad = useCallback((img) => {
    //     console.log(
    //         'onLoad',
    //         img.naturalWidth,
    //         img.width,
    //         img.naturalHeight,
    //         img.height
    //     );
    //     imgRef.current = img;
    // }, []);

    // const createCropPreview = async (image: string, crop: Crop, fileName: string) => {
    //     const canvas = document.createElement('canvas');
    //     const scaleX = image.naturalWidth / image.width;
    //     const scaleY = image.naturalHeight / image.height;
    //     canvas.width = crop.width;
    //     canvas.height = crop.height;
    //     const ctx = canvas.getContext('2d');

    //     ctx.drawImage(
    //         image,
    //         crop.x * scaleX,
    //         crop.y * scaleY,
    //         crop.width * scaleX,
    //         crop.height * scaleY,
    //         0,
    //         0,
    //         crop.width,
    //         crop.height
    //     );

    //     return new Promise((resolve, reject) => {
    //         canvas.toBlob(blob => {
    //             if (!blob) {
    //                 reject(new Error('Canvas is empty'));
    //                 return;
    //             }
    //             blob.name = fileName;
    //             window.URL.revokeObjectURL(previewUrl);
    //             setPreviewUrl(window.URL.createObjectURL(blob));

    //             const img = new Image()
    //             img.onload = function () {
    //                 const _img: HTMLImageElement = this
    //                 console.log('onload', _img.width, _img.height)
    //             }
    //             img.src = window.URL.createObjectURL(blob)
    //         }, 'image/jpeg');
    //     });
    // };


    return (
        <div>
            CropImageasasdasdasdasda
            <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
            >
                <img src={imgSrc} />

            </ReactCrop>
        </div>
    )
}

export default CropImage;