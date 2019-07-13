import * as svc from "../../services/legWorkoutService";

export const TYPES = {
  LEG_ALL: "LEG_ALL",
  LEG_POST: "LEG_POST",
  LEG_DELETE: "LEG_DELETE",
  LEG_EDIT: "LEG_EDIT"
};

function getWorkouts(data) {
  return { type: TYPES.LEG_ALL, payload: data };
}

function addWorkout(data, id) {
  return { type: TYPES.LEG_POST, payload: data, id };
}

function deleteWorkout(id) {
  return { type: TYPES.LEG_DELETE, id };
}

function editWorkout(data, id) {
  return { type: TYPES.LEG_EDIT, payload: data, id };
}

export function addLegWorkout(data) {
  return dispatch => {
    return svc
      .addLegWorkout(data)
      .then(id => dispatch(addWorkout(data, id)))
      .then(() => console.log("im here at actions"));
  };
}

export function getLegWorkouts() {
  return dispatch => {
    return svc.getLegWorkOuts().then(data => {
      dispatch(getWorkouts(data));
    });
  };
}

export function deleteLegWorkout(id) {
  return dispatch => {
    return svc.deleteLegWorkout(id).then(id => dispatch(deleteWorkout(id)));
  };
}

export function editLegWorkout(data, id) {
  return dispatch => {
    return svc
      .updateLegWorkout(data, id)
      .then(id => dispatch(editWorkout(data, id)));
  };
}
