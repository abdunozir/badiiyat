import { Link } from "react-router-dom";

function MainCard({ newObj, setNewObj }) {
  return (
    <>
      <div className="MainCard-container">
        {newObj.map((el) => {
          return (
            <Link to={`/Adiblar/adib/${el.id}`} key={el.id}>
              <div className="each__object" id={el.id}>
                <div className="object__img">
                  <img alt="rasmla" src={el.img} />
                </div>
                <h4 className="object__name">
                  {el.name} {el.lastName}
                </h4>
                <p className="object__years">
                  {el.born}-{el.died}
                </p>
                <div className="object__diflex">
                  <p className="object__counts">
                    <i className="bx bxs-book-alt"></i>
                    {el.books}
                  </p>
                  <p className="object__counts">
                    <i className="bx bx-headphone"></i> {el.audio}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default MainCard;
