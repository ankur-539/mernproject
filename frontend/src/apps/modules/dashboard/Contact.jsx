import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify";
function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const contactSubmit = () => {
    toast.success("Thanks for contact us");
  }

  return (
    <div className='row bg-light '>
      <ToastContainer />
      <div className="col-md-6 fm p-5 bg-info-subtle">
        <p className="fs-5 fw-bold">CONTACT INFO</p>
        <p><i className="fa fa-map-marker text-danger" aria-hidden="true"></i>  <b>Address</b><br />Noida sector-63</p>
        <p><i className="fa fa-phone text-danger" aria-hidden="true"></i>  <b>Phone</b><br />9988776655</p>
        <p><i className="fa fa-headphones text-danger" aria-hidden="true"></i>  <b>Support</b><br />Support@gmail.com</p>

        <form onSubmit={handleSubmit(contactSubmit)}>
          <p className="fs-5 fw-bold mt-5">SEND MESSAGE</p>
          <p>Your Name<br /><input type="text" className="w-100 p-2 rounded-2 border-1" {...register("name", { required: true, minLength: 3, maxLength: 18 })} />{errors.name?.type === "required" && <p className="text-danger">name is required</p>}{errors.name?.type === "minLength" && <p className="text-warning">minimum 3 character</p>}{errors.name?.type === "maxLength" && <p className="text-warning">maximum 18 character</p>}</p>
          <p>Email Address<br /><input type="email" className="w-100 p-2 rounded-2 border-1" {...register("emailid", { required: true })} />{errors.emailid && <p className="text-danger">email is required</p>}</p>
          <p>Subject<br /><input type="text" className="w-100 p-2 rounded-2 border-1" {...register("subject", { required: true })} />{errors.subject && <p className="text-danger">this field is required</p>}</p>
          <p>Message<br /><textarea className="w-100 rounded-2 border-1" rows="7" {...register("anymsg", { required: true })}></textarea>{errors.anymsg && <p className="text-danger">write something here</p>}</p>
          <input type="submit" className="btn btn-success fw-bold" />
        </form>
      </div>
      <div className="col-md-6 p-5 d-flex bg-info-subtle">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.501691044436!2d77.37577607554246!3d28.629093975666674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef60526c0929%3A0xe3abc75d65b999ff!2sCodeSquadz%20-%20IT%20Training%20by%20Manish%20Bhatia%20Sir!5e1!3m2!1sen!2sin!4v1768420936639!5m2!1sen!2sin" loading="lazy" title="map" className=" w-100"></iframe>
      </div>
    </div>
  )
}

export default Contact;