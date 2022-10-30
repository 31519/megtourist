import React, { useState, useEffect } from "react";
import style from "./SearchBox.module.css";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBox() {
  const router = useRouter();
  const [cat, setCat] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const { category, page } = router.query;
  // const [openSearch, setOpenSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  // const category = "rick"

  let queryParams;
  if (typeof window != "undefined") {
    queryParams = new URLSearchParams(document.location.search.substring(1));
  }

  // d

  const searchHandler = async (e) => {
    e.preventDefault();
    var path;
    if (keyword) {
      if (router.pathname === "/") {
        let searchQuery = `/destination/?keyword=${keyword}&page=1`;
        router.push(searchQuery);
      } else {
        let searchQuery = `${
          router.pathname
        }/?keyword=${keyword}&page=1`;
        router.push(searchQuery);
      }
    }
  };

  const formHandler = () => {
    setOpenSearch(!openSearch);
  };
  const formDivHandler = () => {
    setOpenSearch(false);
  };
  return (
    <>
      <div className={style.container}>
        {openSearch === false ? (
          <div className={style.divIcon}>
            <SearchIcon className={style.closeIcon} onClick={formHandler} />
          </div>
        ) : (
          <div className={style.divCloseIcon}>
            <CloseIcon className={style.icon} onClick={formHandler} />
          </div>
        )}
        <div className={openSearch === true ? style.formDiv : style.noFormDiv}>
          <div className={style.formContainer}>
            <div className={style.form}>
              <form className={style.formForm} onSubmit={searchHandler}>
                <div className={style.searchBox}>
                  <input
                    type="text"
                    placeholder="Search Here ... "
                    className={style.searchInput}
                    onChange={(e) => setKeyword(e.target.value)}
                    id="input"
                  />
                  {/* <button className={style.searchBtn} type="submit">
                    <SearchIcon />
                  </button> */}
                </div>
                <div>
                  <button className={style.searchBtn} type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className={style.closeForm} onClick={formDivHandler}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
