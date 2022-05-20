function MainCard({ newObj, setNewObj }) {
  return (
    <>
      <div className="MainCard-container">
        {newObj.map((el) => {
          return (
            <div className="each__object" id={el.id}>
              <div className="object__img">
                <img alt="rasmla" src={el.userImg} />
              </div>
              <h4 className="object__name">{el.userName}</h4>
              <p className="object__years">
                {el.birth}-{el.dead}
              </p>
              <div className="object__diflex">
                <p className="object__counts">
                  <i class="bx bxs-book-alt"></i>34
                </p>
                <p className="object__counts">
                  <i className="bx bx-headphone"></i>12
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MainCard;
