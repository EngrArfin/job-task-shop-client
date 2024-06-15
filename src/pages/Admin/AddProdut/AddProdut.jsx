import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const img_hosting = import.meta.env.VITE_Image_Upload;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url; // Fixed the typo here
          const { name, price, category, description } = data; // Changed `item` to `category`
          const newItem = { name, price, category, description, image: imgURL };
          console.log(newItem);
        }
      });
  };

  console.log(errors);
  console.log(img_hosting);

  return (
    <div className="w-full px-20 pl-20">
      <Helmet>
        <title>SA Shop | Add Product</title>
      </Helmet>
      <h2 className="text-3xl font-semibold mb-8">Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>

        <div className="flex space-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
            <select
              defaultValue="Select Product"
              {...register("category", { required: true })} // Fixed the reference here
              className="select select-bordered w-full"
            >
              <option disabled>Select Product</option>
              <option value="T-Shirt">T Shirt</option>
              <option value="Pant-Jean">Pant Jean</option>
              <option value="Blazer">Blazer</option>
              <option value="Child-Frog">Child Frog</option>
              <option value="Sari">Sari</option>
            </select>
          </div>

          <div className="form-control w-full ml-20">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Product Description"
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product File Upload</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <input className="btn btn-sm" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
