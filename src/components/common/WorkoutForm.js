import React from "react";
import { Formik, Field, Form } from "formik";

const WorkoutForm = props => {
  const submitForm = (values, action) => {
    props.updateOrAddLegWorkout(values, action);
  };

  const handleChooseImg = e => {
    const imgSrc = e.target.src;
    props.handleImgSrc(imgSrc);
  };

  const handleOnChange = e => {
    props.inputOnChange(e.target.value);
  };

  const style = {
    height: "115px",
    overflow: "hidden",
    cursor: "pointer",
    padding: "0px"
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <div style={{ padding: "50px" }}>
            <Formik
              enableReinitialize
              initialValues={props.initialValues}
              onSubmit={submitForm}
            >
              {props => {
                const { handleSubmit } = props;
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>
                        <strong>Image</strong>
                      </label>
                      <Field
                        className="form-control"
                        name="image"
                        placeholder="Url link of the image..."
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Workout</strong>
                      </label>
                      <Field
                        className="form-control"
                        name="name"
                        placeholder="Bench Press"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Description</strong>
                      </label>
                      <Field
                        component="textarea"
                        rows="3"
                        className="form-control"
                        name="description"
                        placeholder="Description of the workout..."
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Gears</strong>
                      </label>
                      <Field
                        className="form-control"
                        name="gear"
                        placeholder="Wrist Bands, Belt, Weighted Vest, etc..."
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <strong>Website Link</strong>
                      </label>
                      <Field
                        className="form-control"
                        name="website"
                        placeholder="Website to learn more about it..."
                      />
                    </div>

                    <button type="submit">Submit</button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>

        <div className="col-md-6" style={{ padding: "25px" }}>
          <h6 className="text-center">Choose an Image</h6>
          <div className="row ml-3">
            <div className="col-md-4">
              <img
                onClick={handleChooseImg}
                className="img-thumbnail d-block"
                src="https://static1.squarespace.com/static/54ced80ee4b0aa862f974cbf/t/58c019d12e69cfc93120d46a/1488984541103/"
                alt="sample to choose"
                style={style}
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={handleChooseImg}
                className="img-thumbnail d-block"
                src="https://static1.squarespace.com/static/54ced80ee4b0aa862f974cbf/t/5ab4efea352f534a09f4c38b/1521807362914/Exercise+makes+it+easier+to+control+diabetes"
                alt="sample to choose"
                style={style}
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={handleChooseImg}
                className="img-thumbnail d-block"
                src="https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe018a772-e126-11e8-9838-efa7e96cbe2b.jpg?crop=8349%2C4696%2C1413%2C82&resize=685"
                alt="sample to choose"
                style={style}
              />
            </div>
          </div>
          <div className="row py-4 pr-3">
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Search Pixabay"
                type="text"
                value={props.inputValue}
                onChange={handleOnChange}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text text-success"
                  style={{ cursor: "pointer" }}
                  onClick={props.searchPixaBay}
                >
                  Search
                </span>
              </div>
            </div>
          </div>

          <div className="row">{props.pixabayResult}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkoutForm;
