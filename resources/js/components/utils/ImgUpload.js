import React from "react";
const handleImageUpload = (e) => {
    const input = e.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#imageResult").attr("src", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function ImgUpload() {
    return (
        <div>
            <div>
                <input
                    id="upload"
                    type="file"
                    onChange={handleImageUpload}
                    className="form-control border-0"
                />
            </div>
            <div className="image-area mt-4">
                <img
                    id="imageResult"
                    src="#"
                    alt=""
                    className="img-fluid rounded shadow-sm mx-auto d-block"
                />
            </div>
        </div>
    );
}

export default ImgUpload;
