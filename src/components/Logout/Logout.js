import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(authOperations.logout())}>
      <svg
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#a)">
          <path
            d="M11.279 13.07h1.405v2.812a2.11 2.11 0 0 1-2.108 2.108H2.108A2.11 2.11 0 0 1 0 15.882V2.108A2.11 2.11 0 0 1 2.108 0h8.468a2.11 2.11 0 0 1 2.108 2.108V4.92H11.28V2.11a.703.703 0 0 0-.703-.704H2.108a.704.704 0 0 0-.703.703v13.774c0 .387.316.702.703.702h8.468a.703.703 0 0 0 .703-.702V13.07Zm3.408-7.388-.994.994 1.617 1.616H6.22v1.406h9.09l-1.617 1.616.994.994L18 8.995l-3.313-3.313Z"
            fill="#BDBDBD"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h18v18H0z" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
export default Logout;
