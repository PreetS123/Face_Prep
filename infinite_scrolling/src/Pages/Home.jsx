import React, { useState, useEffect,useRef } from "react";
import styles from "../Styles/Home.module.css";
import { nanoid } from "nanoid";
import { Loader } from "../Components/Loder";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=15`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(prev=>{
          return [...new Set([...prev,...data.results.map(user=>user)])]
        });
        setMore(data.results.length > 0);
        setLoading(false);
        setError(false);
      })
      .catch((er) => {
        console.log("error in fetching", er);
        setLoading(false);
        setError(true);
      });
  }, [page]);
  console.log(page)

   const observer=useRef();
   const bottomTipRef=React.useCallback(node=>{
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current= new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting && more){
          setPage(prev=>prev+1)
        }
      })
      if(node) observer.current.observe(node);
   },[loading,more])

  console.log(users);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navdiv}>
          <h1>Face Prep</h1>
          <button>Logout</button>
        </div>
        <div className={styles.userbody}>
          {users?.map((user) => {
            return (
              <div className={styles.onecard} key={nanoid()} ref={bottomTipRef}>
                <div className={styles.userPicture}>
                  <img src={user.picture.thumbnail} alt={user.id.name} />
                </div>
                <div className={styles.userName}>
                  <p>
                  <span>Name:</span> {user.name.first} {user.name.last}
                  </p>
                </div>
                <div className={styles.userEmail}>
                  <p><span>Email:</span> {user.email}</p>
                </div>
                <div className={styles.userPhone}>
                  <p><span>Mobile:</span> {user.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.loader}>{loading && <Loader/>}</div>
      <div className={styles.error}>{error && <h1>Error</h1>}</div>
    </>
  );
};
