import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Alert;