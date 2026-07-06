import { NavLink } from "react-router-dom";
import "./MenuProfile.css";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import useProfile from "../../../hooks/useProfile";
import Skeleton from "react-loading-skeleton";

export default function MenuProfile() {
  const { user } = useContext(AuthContext);
  const { profile, loading } = useProfile(user);

  return (
    <div className="menu-profile">
      <div className="profile-viewer">
        <div className="img-profile">
          {!loading ? (
            <img src={profile?.avatar} height={60} alt="profile pic" />
          ) : (
            <Skeleton
              width={60}
              height={60}
              borderRadius={100}
              direction="right"
            />
          )}
        </div>
        <div className="profile-name">
          <span>Hello 👋</span>
          <span>{profile?.first_name + profile?.last_name || ""}</span>
        </div>
      </div>
      <ul className="list-profile-tabs">
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              version="1.1"
              viewBox="0 0 24 24"
              height="24"
            >
              <path
                stroke="currentColor"
                fill="currentColor"
                d="M11.999,11.2c3.088,0,5.6-2.513,5.6-5.6S15.087,0,11.999,0s-5.6,2.512-5.6,5.6,2.512,5.6,5.6,5.6ZM11.999,1.6c2.206,0,4,1.795,4,4s-1.794,4-4,4-4-1.795-4-4,1.795-4,4-4ZM22.095,19.536c-.112-.4-.272-.784-.448-1.152-.512-1.024-1.248-1.888-2.144-2.544-1.216-.912-2.72-1.44-4.304-1.44h-6.4c-2.784,0-5.232,1.552-6.448,3.984-.176.368-.32.752-.448,1.152-.096.336.032.688.304.88,2.64,2.24,6.064,3.584,9.792,3.584s7.152-1.344,9.792-3.584c.08-.048.128-.096.176-.16.144-.208.208-.464.128-.72ZM11.999,22.4c-3.168,0-6.08-1.088-8.4-2.912.4-.976,1.04-1.792,1.84-2.384.944-.704,2.112-1.104,3.36-1.104h6.4c2.288,0,4.352,1.424,5.184,3.504-2.304,1.824-5.232,2.896-8.384,2.896Z"
              />
            </svg>
            Personal Information
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              version="1.1"
              viewBox="0 0 24 24"
              height="24"
            >
              <path
                stroke="currentColor"
                fill="currentColor"
                d="M20.958,7.027c-.313-.536-.767-.979-1.31-1.281l-5.956-3.306c-1.032-.577-2.353-.575-3.384,0l-5.958,3.306c-.542.302-.995.745-1.309,1.281-.313.536-.479,1.147-.477,1.767v6.413c-.002.62.163,1.231.477,1.768s.767.979,1.309,1.281l5.956,3.305c.517.288,1.102.44,1.693.44s1.176-.152,1.691-.439l5.958-3.307c.542-.302.995-.744,1.309-1.28.313-.535.479-1.146.477-1.767v-6.412c.002-.622-.163-1.234-.477-1.769ZM10.793,3.313h0c.367-.205.784-.313,1.206-.313s.838.108,1.207.313l5.956,3.306c.134.075.249.176.366.274l-2.065,1.24-7.375-4.43.704-.391ZM9.08,4.264l7.413,4.453-4.493,2.699-7.53-4.523c.117-.098.232-.199.366-.274l4.244-2.355ZM4.837,17.381c-.386-.215-.708-.531-.932-.913s-.341-.817-.34-1.261v-6.415c-.001-.388.104-.764.277-1.11l7.659,4.6v8.65c-.246-.049-.486-.124-.707-.247l-5.957-3.305ZM13.206,20.687c-.22.123-.46.197-.706.246v-8.65l4.593-2.759v9.005l-3.887,2.157ZM20.435,15.209c.002.442-.115.878-.34,1.259-.224.382-.546.698-.931.912l-1.071.595v-9.051l2.065-1.24c.173.345.278.721.277,1.11v6.416Z"
              />
            </svg>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wishlists"
            fill="currentColor"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addresses"
            fill="currentColor"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path d="M12,21.933c-.545.003-1.059-.254-1.384-.691l-5.061-6.742c-2.522-3.556-1.683-8.484,1.873-11.006,3.556-2.522,8.484-1.683,11.006,1.873,1.937,2.732,1.94,6.389.006,9.123l-5.055,6.749c-.325.438-.839.695-1.385.693ZM11.992,3.066c-1.69-.005-3.322.618-4.578,1.749-2.607,2.328-3.059,6.239-1.05,9.1l5.051,6.727c.137.184.354.293.584.292h0c.23,0,.448-.108.586-.292l5.044-6.734c2.191-3.1,1.454-7.39-1.647-9.581-.939-.664-2.03-1.081-3.172-1.214-.272-.031-.545-.047-.818-.047ZM12,12.5c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5ZM12,8.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z" />
            </svg>
            Manage Addresses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cards"
            fill="currentColor"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.1389 3.77777H6.86112C4.59061 3.77777 2.75 5.61839 2.75 7.88889V16.1111C2.75 18.3816 4.59061 20.2222 6.86112 20.2222H17.1389C19.4094 20.2222 21.25 18.3816 21.25 16.1111V7.88889C21.25 5.61839 19.4094 3.77777 17.1389 3.77777Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.25 8.91667H2.75"
                strokeLinecap="round"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="M6.21777 16.1111H11.3567"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Saved Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            fill="currentColor"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path d="M22.416,17.766c-1.216-.688-2.043-1.928-2.206-3.239v-3.819c-.159-3.382-2.093-6.396-5.079-7.953-.199-1.551-1.527-2.754-3.132-2.754s-2.933,1.203-3.132,2.754c-2.985,1.557-4.919,4.572-5.079,7.983l.004,3.713c-.168,1.388-.994,2.627-2.211,3.317-.249.141-.373.433-.299.709.073.278.324.471.611.471h5.684v.632c0,2.438,1.984,4.421,4.421,4.421s4.421-1.984,4.421-4.421v-.632h5.684c.287,0,.538-.194.611-.471.073-.276-.049-.569-.3-.711ZM15.158,19.579c0,1.742-1.416,3.158-3.158,3.158s-3.158-1.416-3.158-3.158v-.632h6.316v.632ZM3.658,17.684c.756-.861,1.252-1.954,1.395-3.158v-3.76c.142-3.04,1.94-5.737,4.691-7.037.221-.105.361-.327.361-.571,0-1.045.85-1.895,1.895-1.895s1.895.85,1.895,1.895c0,.244.141.466.361.571,2.752,1.301,4.549,3.997,4.691,7.008l.005,3.865c.139,1.155.633,2.228,1.387,3.083H3.658Z" />
            </svg>
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            fill="currentColor"
            className={({ isActive }) =>
              isActive ? "page-header" : "pageNormal"
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path d="M21.454,5.06c-.037-.039-.078-.073-.126-.1L13.599.402c-.977-.538-2.145-.538-3.137.008L2.763,4.951c-.999.549-1.62,1.593-1.62,2.725v8.327c.002,1.136.623,2.182,1.59,2.709l7.744,4.897c.473.26.992.391,1.514.391.532,0,1.066-.135,1.563-.408l7.684-4.862c.999-.55,1.619-1.596,1.619-2.728V7.681c.007-1.058-.527-2.045-1.403-2.621ZM21.714,16.002c0,.715-.394,1.377-1.058,1.743l-7.684,4.862c-.608.338-1.335.337-1.915.018l-7.745-4.897c-.632-.346-1.025-1.007-1.026-1.725V7.676c0-.715.393-1.376,1.042-1.733L11.028,1.404c.318-.176.667-.263,1.014-.263.343,0,.684.085.991.254l7.559,4.457c.037.037.078.07.125.096.619.352,1.001,1.013.997,1.729v8.325ZM12,8c-2.205,0-4,1.795-4,4s1.795,4,4,4,4-1.795,4-4-1.795-4-4-4ZM12,14.857c-1.575,0-2.857-1.281-2.857-2.857s1.282-2.857,2.857-2.857,2.857,1.282,2.857,2.857-1.281,2.857-2.857,2.857Z" />
            </svg>
            Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
