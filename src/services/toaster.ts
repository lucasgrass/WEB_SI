import { toast, ToastPosition } from 'react-toastify';

const GENERIC_ERROR: string = 'APP ERROR - [PIERSERV]';
interface IOptions {
  theme: 'colored' | 'light' | 'dark';
  autoClose: number;
  closeButton: boolean;
  pauseOnHover: boolean;
  toastId: string;
  position: ToastPosition;
}
const options: IOptions = {
  toastId: 'prevent-multiple',
  autoClose: 3000,
  closeButton: false,
  pauseOnHover: false,
  theme: 'light',
  position: toast.POSITION.TOP_CENTER,
};
const Toast = {
  success: (value?: string, autoClose?: number) =>
    toast.success(
      value,
      autoClose ? { ...options, [autoClose]: autoClose } : options
    ),
  error: (value?: string, autoClose?: number) =>
    toast.error(
      value,
      autoClose ? { ...options, [autoClose]: autoClose } : options
    ),
  promise: (
    promise: Promise<void>,
    pending?: string,
    success?: string,
    error?: string
  ) =>
    toast.promise(
      promise,
      {
        pending,
        success,
        error,
      },
      options
    ),
};
export default Toast;
