import React from "react";

function ImgUpload() {
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


    return (
        <div className="d-flex justify-content-center">
            <input
                id="upload"
                name="photo"
                type="file"
                onChange={handleImageUpload}
                className="form-control border-0"
            />
            <input
                type="submit"
                className="btn btn-info text-white"
                value="Modifier"
            />
        </div>
    );
}

export default ImgUpload;
