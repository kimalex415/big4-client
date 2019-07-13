import React from "react";

const WorkoutCard = props => {
  const quote = props.randomQuote
    ? props.randomQuote[Math.floor(Math.random() * props.randomQuote.length)]
    : { content: "EVERY DAY IS LEG DAY", title: "Alex" };

  const truncate = (text, limit) => {
    if (!text || !limit) return;
    const arr = text
      .split(" ")
      .slice(0, limit)
      .join(" ");
    return arr;
  };

  const handleDelete = e => {
    const id = e.target.id;
    props.delete(id);
  };

  const handleEdit = e => {
    const id = e.target.id;
    props.edit(id);
  };

  const handleYoutubeSearch = e => {
    const workoutName = e.target.name;
    props.searchYoutube(workoutName);
  };

  return (
    <React.Fragment>
      {props.index === 0 || props.index % 3 ? (
        <div className="col-md-4 my-3 d-flex align-items-stretch ">
          <div className="card card-cascade wider reverse cardImage border ">
            <div className="view view-cascade overlay ">
              <img
                name={props.name}
                onClick={handleYoutubeSearch}
                className="card-img-top top_border "
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                src={
                  props.workout.image ||
                  "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"
                }
                alt="Workout Type"
              />
            </div>

            <div className="card-body card-body-cascade text-center Roboto-Shadow">
              <h4 className="card-title">
                <strong>{props.name}</strong>
              </h4>
            </div>
            <p className="card-text px-3 pb-3 roboto ">
              {truncate(props.description, 30)}
              <span>
                <b>
                  {" "}
                  <a
                    href={
                      `${props.workout.website}` ||
                      "https://www.bodybuilding.com/content/5-leg-workouts-for-mass-a-beginners-guide.html"
                    }
                    target={"_blank"}
                  >
                    Learn More...
                  </a>
                </b>
              </span>
            </p>
            <div>
              <h6 className="font-weight-bold indigo-text pl-3">
                <span className="text-danger"> Gears:</span> {props.gear}
              </h6>
            </div>
            {props.workout.id > 3 ? (
              <div className="row justify-content-around py-3">
                <div className="col-4">
                  <i
                    id={props.workout.id}
                    className="far fa-edit float-left"
                    style={{
                      fontSize: "20px",
                      color: "green",
                      cursor: "pointer"
                    }}
                    onClick={handleEdit}
                  />
                </div>
                <div className="col-4">
                  <i
                    id={props.workout.id}
                    className="	far fa-trash-alt float-right"
                    style={{
                      fontSize: "20px",
                      color: "red",
                      cursor: "pointer"
                    }}
                    onClick={handleDelete}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="col-md-12">
            <div
              className="jumbotron jumbotron-fluid small_border"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2016/11/21/15/13/blue-1845901_1280.jpg)",
                backgroundPosition: "10% 20%"
              }}
            >
              <div className="container text-white ">
                <span />
                <span />
                <span />
                <span />
                <div className="row ">
                  <div className="col-md-7" />
                  <div className="col-md-5 text-right grow montserrat">
                    {`${quote.content
                      .replace(/<p[^>]*>/g, "")
                      .replace(/<\/p>/g, "")
                      .replace(/<strong[^>]*>/g, "")
                      .replace(/<\/strong>/g, "")
                      .replace(/&#8211;/gi, "-")
                      .replace(/&#8230;/gi, "...")
                      .replace(/&#8220;/gi, '"')
                      .replace(/&#8217;/gi, "'")} - ${quote.title}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 d-flex align-items-stretch">
            <div className="card card-cascade wider reverse cardImage border">
              <div className="view view-cascade overlay">
                <img
                  name={props.name}
                  onClick={handleYoutubeSearch}
                  className="card-img-top top_border"
                  style={{
                    maxWidth: "100%",
                    height: "300px",
                    overflow: "hidden",
                    cursor: "pointer"
                  }}
                  src={
                    props.workout.image ||
                    "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"
                  }
                  alt="Workout Type"
                />
              </div>

              <div className="card-body card-body-cascade text-center Roboto-Shadow">
                <h4 className="card-title">
                  <strong>{props.name}</strong>
                </h4>
              </div>
              <p className="card-text px-3 pb-3">
                {truncate(props.description, 30)}
                <span>
                  <b>
                    {" "}
                    <a
                      href={
                        `${props.workout.website}` ||
                        "https://www.bodybuilding.com/content/5-leg-workouts-for-mass-a-beginners-guide.html"
                      }
                      target={"_blank"}
                    >
                      Learn More...
                    </a>
                  </b>
                </span>
              </p>
              <div>
                <h6 className="font-weight-bold indigo-text pl-3">
                  <span className="text-danger"> Gears:</span> {props.gear}
                </h6>
              </div>
              {props.workout.id > 3 ? (
                <div className="row justify-content-around py-3">
                  <div className="col-4">
                    <i
                      id={props.workout.id}
                      className="far fa-edit float-left"
                      style={{
                        fontSize: "20px",
                        color: "green",
                        cursor: "pointer"
                      }}
                      onClick={handleEdit}
                    />
                  </div>
                  <div className="col-4">
                    <i
                      id={props.workout.id}
                      className="	far fa-trash-alt float-right"
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer"
                      }}
                      onClick={handleDelete}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default WorkoutCard;

/*
 <div className="col-md-4 my-3 d-flex align-items-stretch">
        <div className="card card-cascade wider reverse">
          <div className="view view-cascade overlay">
            <img
              name={props.name}
              onClick={handleYoutubeSearch}
              className="card-img-top"
              style={{
                maxWidth: "100%",
                height: "300px",
                overflow: "hidden",
                cursor: "pointer"
              }}
              src={
                props.workout.image ||
                "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"
              }
              alt="Workout Type"
            />
          </div>

          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>{props.name}</strong>
            </h4>
          </div>
          <p className="card-text px-3 pb-3">
            {truncate(props.description, 30)}
            <span>
              <b>
                {" "}
                <a
                  href={
                    `${props.workout.website}` ||
                    "https://www.bodybuilding.com/content/5-leg-workouts-for-mass-a-beginners-guide.html"
                  }
                  target={"_blank"}
                >
                  Learn More...
                </a>
              </b>
            </span>
          </p>
          <div>
            <h6 className="font-weight-bold indigo-text pl-3">
              <span className="text-danger"> Gears:</span> {props.gear}
            </h6>
          </div>
          {props.workout.id > 3 ? (
            <div className="row justify-content-around py-3">
              <div className="col-4">
                <i
                  id={props.workout.id}
                  className="far fa-edit float-left"
                  style={{
                    fontSize: "20px",
                    color: "green",
                    cursor: "pointer"
                  }}
                  onClick={handleEdit}
                />
              </div>
              <div className="col-4">
                <i
                  id={props.workout.id}
                  className="	far fa-trash-alt float-right"
                  style={{
                    fontSize: "20px",
                    color: "red",
                    cursor: "pointer"
                  }}
                  onClick={handleDelete}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>



*/
