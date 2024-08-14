import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiServices';
import _ from 'lodash'

const ModalUpdateUser = (props) => {
   const { show, setShow, dataUpdate } = props;
   // const [show, setShow] = useState(false);

   const handleClose = () => {
      setShow(false);
      setEmail("");
      setPassword("");
      setRole("USER");
      setUsername("");
      setImage("");
      setPreviewImage("");
   };


   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');
   const [role, setRole] = useState('USER');
   const [image, setImage] = useState('');
   const [previewImage, setPreviewImage] = useState('');

   useEffect(() => {
      if (!_.isEmpty(dataUpdate)) {
         setEmail(dataUpdate.email);
         setRole(dataUpdate.role);
         setUsername(dataUpdate.username);
         // setImage("");
         if (dataUpdate.image) {
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
         }
      }
   }, [props.dataUpdate]);

   const handleUpLoadImage = (event) => {
      if (event.target && event.target.files && event.target.files[0]) {
         setPreviewImage(URL.createObjectURL(event.target.files[0]))
         setImage(event.target.files[0])
      } else {
         // setPreviewImage("")
      }
      console.log('Upload', event.target.files[0]);
   }

   const validateEmail = (email) => {
      return email.match(
         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
   };

   const handSubmitCreateUSer = async () => {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
         toast.error('Invalid Email');
         // toast.success();
         // toast.info();
         return;
      }

      if (!password) {
         toast.error('Invalid Password');
         return;
      }



      let data = await postCreateNewUser(email, password, username, role, image);
      console.log("component res:", data);
      if (data && data.EC === 0) {
         toast.success(data.EM);
         handleClose();
         await props.fetchListUsers();
      }
      if (data && data.EC !== 0) {
         toast.error(data.EM);
      }
   }



   return (
      <>
         {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
         </Button> */}

         <Modal show={show} onHide={handleClose} size="lg" backdrop='static' className='modal-add-user'>
            <Modal.Header closeButton>
               <Modal.Title>Update a user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="row g-3">
                  <div className="col-md-6">
                     <label className="form-label">Email</label>
                     <input type="email" className="form-control" value={email}
                        disabled
                        onChange={(event) => setEmail(event.target.value)} />
                  </div>
                  <div className="col-md-6">
                     <label for="inputPassword4" className="form-label">Password</label>
                     <input type="password" className="form-control" value={password} disabled
                        onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <div className="col-md-6">
                     <label className="form-label">Username</label>
                     <input type="text" className="form-control" value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                  </div>
                  <div className="col-md-4">
                     <label className="form-label">Role</label>
                     <select
                        value={role}
                        className="form-select"
                        onChange={(event) => setRole(event.target.value)}
                     >
                        <option value='USER'>Users</option>
                        <option value='ADMIN'>Admin</option>
                     </select>
                  </div>
                  <div className='col-md-12'>
                     <label className="form-label label-upload" htmlFor='labelUpload'>
                        <FcPlus />
                        Upload File Image
                     </label>
                     <input
                        type='file'
                        id='labelUpload'
                        hidden
                        onChange={(event) => { handleUpLoadImage(event) }}
                     />
                  </div>
                  <div className='col-md 12 img-preview'>
                     {previewImage ?
                        <img src={previewImage} />
                        :
                        <span>Preview Image</span>
                     }
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => { handSubmitCreateUSer() }}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
export default ModalUpdateUser;