import React, { Component } from "react";
import "./Common.css";
import { getYoutubeVideos } from "../services/youtubeService";
import Video from "./common/Video";
import PixabayCard from "./common/PixabayCard";
import Youtube from "./common/Youtube";
import {
  addLegWorkout,
  getLegWorkouts,
  deleteLegWorkout,
  editLegWorkout
} from "../state/legWorkout/actions";
import { getPixaby } from "../services/legWorkoutService";
import WorkoutForm from "./common/WorkoutForm";
import WorkoutCard from "./common/WorkoutCard";
import Header from "./common/Header";
import WorkoutList from "./common/WorkoutList";
import { connect } from "react-redux";
import {
  randomQuote,
  fetchInstagramUser,
  fetchInstagramPosts
} from "../services/randomService";
import InstaCard from "./common/InstaCard";

class Home extends Component {
  state = {
    search: "",
    pixabay: "",
    result: [],
    pixabayResult: [],
    instagram: [],
    instaPosts: [],
    initialValues: {
      image: "",
      id: "",
      name: "",
      description: "",
      gear: "",
      website: ""
    },
    randomQuote: ""
  };

  static displayName = Home.name;

  // LIFECYCLES

  componentDidMount = () => {
    this.props.getLegWorkouts();
    randomQuote().then(resp => this.setState({ randomQuote: resp }));
    fetchInstagramUser().then(resp =>
      this.setState({
        instagram: resp.data,
        profilePicture: resp.data.profile_picture
      })
    );
    fetchInstagramPosts().then(resp =>
      this.setState({ instaPosts: resp.data }, () =>
        console.log(this.state.instaPosts)
      )
    );
  };

  searchOnclick = () => {
    getYoutubeVideos(this.state.search).then(this.onGetYoutubeVidsSuccess);
  };

  searchPixaBay = () => {
    console.log(this.state.pixabay);
    getPixaby(this.state.pixabay).then(this.onGetPixabaySuccess);
  };

  searchYoutube = name => {
    const searchTerm = `${name} workout`;
    getYoutubeVideos(searchTerm).then(this.onGetYoutubeVidsSuccess);
  };

  // FUNCTIONS

  mapLegWorkouts = (workout, index) => {
    return (
      <WorkoutCard
        key={workout.id}
        index={index}
        workout={workout}
        name={workout.name}
        description={workout.description}
        gear={workout.gear}
        delete={this.handleDelete}
        edit={this.handleEdit}
        searchYoutube={this.searchYoutube}
        randomQuote={this.state.randomQuote}
      />
    );
  };

  mapVideos = video => {
    const vid = `https://www.youtube.com/embed/${video.id.videoId}`;
    return <Video key={video.id.videoId} video={vid} />;
  };

  mapPixabay = pic => {
    return (
      <PixabayCard
        key={pic.id}
        image={pic.largeImageURL}
        handleImgSrc={this.handleImgSrc}
      />
    );
  };

  updateOrAddLegWorkout = (values, action) => {
    const initialValues = {
      image: "",
      id: "",
      name: "",
      description: "",
      gear: "",
      website: ""
    };
    if (values.id) {
      this.props.editLegWorkout(values, values.id);
      this.setState({ initialValues });
      console.log("EDIT clicked", this.state.initialValues);
    } else {
      this.props.addLegWorkout(values);
      this.setState({ initialValues });

      console.log("POST clicked", this.state.initialValues);
    }
  };

  handleImgSrc = imgSrc => {
    console.log("initial values", this.state.initialValues);
    const newInitialValues = {
      ...this.state.initialValues,
      image: imgSrc
    };
    this.setState({ initialValues: newInitialValues });
  };

  // EVENT HANDLERS

  handleOnChange = value => {
    this.setState({ search: value });
  };

  handleOnPixabay = value => {
    this.setState({ pixabay: value });
  };

  handleDelete = id => {
    this.props.deleteLegWorkout(id);
  };

  handleEdit = id => {
    this.setState(() => {
      const copyWorkouts = [...this.props.legWorkout];
      const index = copyWorkouts.findIndex(workout => {
        return workout.id === parseInt(id, Number);
      });
      const workoutToEdit = copyWorkouts[index];
      return { initialValues: workoutToEdit };
    });
  };

  // AXIOS CALLS

  onGetYoutubeVidsSuccess = resp => {
    this.setState({ result: resp.items.map(this.mapVideos) });
  };

  onGetPixabaySuccess = resp => {
    this.setState({ pixabayResult: resp.hits.map(this.mapPixabay) });
  };

  onDeleteWokroutSuccess = resp => {
    // write success delete swal
    alert(`${resp} has been deleted!`);
  };

  onError = resp => {
    console.log("Error", resp);
    //insert swal here
  };

  render() {
    const {
      profile_picture,
      username,
      counts,
      full_name,
      bio
    } = this.state.instagram;

    return (
      <React.Fragment>
        <Header />
        <h1>{process.env.REACT_APP_NAME}</h1>
        <Youtube
          inputValue={this.state.search}
          inputOnChange={this.handleOnChange}
          searchOnclick={this.searchOnclick}
          searchResult={this.state.result}
        />
        <WorkoutList
          workouts={this.props.legWorkout.map(this.mapLegWorkouts)}
        />
        <WorkoutForm
          updateOrAddLegWorkout={this.updateOrAddLegWorkout}
          handleImgSrc={this.handleImgSrc}
          initialValues={this.state.initialValues}
          inputValue={this.state.pixabay}
          inputOnChange={this.handleOnPixabay}
          searchPixaBay={this.searchPixaBay}
          pixabayResult={this.state.pixabayResult}
        />

        <div className="jumbotron jumbotron-fluid jumboColor rounded">
          <div className="container mb-3">
            <h4>Created By:</h4>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={profile_picture}
                      className="rounded-circle img-thumbnail "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9 ">
                    <h1 className="instaName">{username}</h1>
                    <div className="row">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col">
                            <p>{counts && counts.media} posts</p>
                          </div>
                          <div className="col">
                            <p>{counts && counts.followed_by} followers</p>
                          </div>
                          <div className="col">
                            <p>{counts && counts.follows} following</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <p>
                          <strong>{full_name}</strong>
                        </p>
                      </div>
                      <div className="row">
                        <p>{bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  {this.state.instaPosts &&
                    this.state.instaPosts.map((pic, index) => {
                      if (index < 3) {
                        return (
                          <InstaCard
                            key={pic.id}
                            pic={pic.images.standard_resolution.url}
                          />
                        );
                      }
                      return "";
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    legWorkout: state.legWorkout
  };
};

const mapDispatchToProps = {
  addLegWorkout,
  getLegWorkouts,
  deleteLegWorkout,
  editLegWorkout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
